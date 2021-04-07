import { v4 as uuid } from "uuid";
import type { CommandModule } from "yargs";

import { performance, PerformanceObserver } from "perf_hooks";
import { Worker } from "worker_threads";
import { cpus } from "os";

import { Init, ResponseMsg, StreamMsg, WToPMsg } from "./types";

interface Options {
  connectionString: string;
  rootCertificatePath?: string;
  certChainPath?: string;
  privateKeyPath?: string;
  client_count: number;
  request_count: number;
  stream_count: number;
  size: number;
  batch_size: number;
  deterministic_stream_names: boolean;
  deterministic_stream_selection: boolean;
  worker_count: number;
}

const flood2: CommandModule<{}, Options> = {
  command: "flood2",
  describe: "Multi Write Processor",
  builder: {
    client_count: {
      type: "number",
      demandOption: true,
    },
    request_count: {
      type: "number",
      demandOption: true,
    },
    stream_count: {
      type: "number",
      default: 1000,
    },
    size: { type: "number", default: 256 },
    batch_size: { type: "number", default: 1 },
    deterministic_stream_names: {
      type: "boolean",
      default: false,
    },
    deterministic_stream_selection: {
      type: "boolean",
      default: false,
    },
    worker_count: {
      type: "number",
      default: cpus().length - 1,
    },
  },
  handler,
};

async function handler({
  client_count: clientCount,
  stream_count: streamCount,
  request_count: requestCount,
  deterministic_stream_names: deterministicStreamNames,
  deterministic_stream_selection: deterministicStreamSelection,
  batch_size: batchSize,
  worker_count,
  size,

  connectionString,
  rootCertificatePath,
  certChainPath,
  privateKeyPath,
}: Options) {
  const streams = Array.from({ length: streamCount }, (_, i) =>
    deterministicStreamNames
      ? `${i}.00000000-0000-0000-0000-000000000000`
      : uuid()
  );

  const data = "*".repeat(size);
  const metadata = "$".repeat(size);

  let k = 0;
  const nextStreamName = () => {
    let streamIndex = deterministicStreamSelection
      ? k++
      : Math.floor(Math.random() * streamCount);

    if (k >= streamCount) {
      k = 0;
    }

    return streams[streamIndex];
  };

  const workerCount = Math.min(clientCount, worker_count);

  const splitInteger = (num: number, parts: number) => {
    const mod = num % parts;
    const val = (num - mod) / parts;
    const result = Array(parts).fill(val);
    for (let i = 0; i < mod; i++) {
      result[i] += 1;
    }
    return result;
  };

  const workerCounts = splitInteger(clientCount, workerCount).map(
    (clientsForWorker) => ({
      count: Math.ceil(requestCount / clientCount),
      clientCount: clientsForWorker,
    })
  );

  let success = 0;
  let failure = 0;
  const failures = new Map<string, number>();

  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ duration }) => {
      const eventsSent = (success + failure) * batchSize;

      console.log(
        `DONE TOTAL ${eventsSent} WRITES IN ${duration}ms (${
          (1000.0 * eventsSent) / duration
        }/s)`
      );
      console.log(`SUCCESS: ${success} FAILURE: ${failure}`);

      if (failures.size) {
        console.log(
          `failures: \n${Array.from(failures)
            .map(([error, count]) => `${`${count}x`.padEnd(12, " ")}| ${error}`)
            .join("\n")}`
        );
      }
    });
  });

  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  performance.mark("writes-start");

  const promises = await Promise.allSettled(
    workerCounts.map(({ clientCount, count }, i) =>
      spawnWorker(
        {
          id: `${i}`,
          batchSize,
          clientCount,
          connectionString,
          count,
          data,
          metadata,
          certChainPath,
          privateKeyPath,
          rootCertificatePath,
          deterministicStreamSelection,
          streams,
        },
        nextStreamName
      )
    )
  );

  performance.mark("writes-end");

  for (const result of promises) {
    if (result.status === "fulfilled") {
      success += result.value.success;
      failure += result.value.failure;

      for (const [error, count] of result.value.failures) {
        const fail = error.toString();
        failures.set(fail, (failures.get(fail) ?? 0) + count);
      }
    } else {
      console.log("FAILURE: ", result.reason);
    }
  }

  // lazy way to get this last
  setTimeout(
    () => performance.measure("writes", "writes-start", "writes-end"),
    500
  );
}

function spawnWorker(
  options: Init,
  nextStreamName: () => string
): Promise<ResponseMsg> {
  return new Promise((resolve, reject) => {
    console.log(
      `spawning worker ${options.id} with ${options.clientCount} clients`
    );
    const worker = new Worker(require.resolve("./flood2.worker"), {
      workerData: options,
      stdout: true,
    });
    worker.on("message", (msg: WToPMsg) => {
      switch (msg.type) {
        case "requestStream": {
          const reply: StreamMsg = {
            type: "requestStream",
            streamName: nextStreamName(),
          };
          worker.postMessage(reply);
          break;
        }
        case "finished": {
          resolve(msg);
          break;
        }
        case "perf": {
          console.log(msg.message);
          break;
        }
      }
    });
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
    worker.stdout.pipe(process.stdout);
  });
}

export default flood2;
