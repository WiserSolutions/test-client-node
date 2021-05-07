import { Worker } from "worker_threads";
import { cpus } from "os";

import type { CommandModule } from "yargs";
import { ReadPosition, streamNameFilter } from "@eventstore/db-client";

import { Init, PerformanceMsg, ResponseMsg, WToPMsg } from "./types";

interface Options {
  connectionString: string;
  client_count: number;
  worker_count: number;
  total_events_to_read: number;
  report_per_number_of_events: number;
  from_position: ReadPosition;
  resolve_link_tos: boolean;
  stream_prefix: string;
}

const safl: CommandModule<{}, Options> = {
  command: "safl",
  describe: "Multi Subscribe To All Processor",
  builder: {
    client_count: {
      type: "number",
      demandOption: true,
    },
    worker_count: {
      type: "number",
      default: cpus().length - 1,
    },
    total_events_to_read: {
      type: "number",
      default: 1000,
    },
    stream_prefix: {
      type: "string",
    },
    report_per_number_of_events: {
      type: "number",
      default: 1000,
    },
    from_position: {
      default: "start",
    },
    resolve_link_tos: {
      type: "boolean",
      default: false,
    },
  },
  handler,
};

async function handler({
  client_count: clientCount,
  worker_count,
  total_events_to_read: totalEventsToRead,
  stream_prefix,
  report_per_number_of_events: reportPerNumberOfEvents,
  connectionString,
  from_position: fromPosition,
  resolve_link_tos: resolveLinkTos,
}: Options) {
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
      eventsPerClient: Math.ceil(totalEventsToRead / clientCount),
      clientCount: clientsForWorker,
    })
  );

  const promises = await Promise.allSettled(
    workerCounts.map(({ clientCount, eventsPerClient }, i) => {
      const spawnOptions: Init = {
        id: `${i}`,
        clientCount,
        connectionString,
        eventsPerClient,
        reportPerNumberOfEvents,
        fromPosition,
        resolveLinkTos,
      };
      if (stream_prefix) spawnOptions.streamFilter = streamNameFilter({ prefixes: [stream_prefix] })
      return spawnWorker(spawnOptions);
    }
    )
  );

  let success = 0;
  let failure = 0;
  const failures = new Map<string, number>();
  const allPerfs: PerformanceMsg[] = [];

  for (const result of promises) {
    if (result.status === "fulfilled") {
      success += result.value.success;
      failure += result.value.failure;

      allPerfs.push(...result.value.perfs);

      for (const [error, count] of result.value.failures) {
        const fail = error.toString();
        failures.set(fail, (failures.get(fail) ?? 0) + count);
      }
    } else {
      console.log("FAILURE: ", result.reason);
    }
  }

  let startTime;
  let endTime;

  for (const perf of allPerfs) {
    console.log("-".repeat(40));
    console.log(perf.message);

    startTime = Math.min(perf.startTime, startTime ?? Infinity);
    endTime = Math.max(perf.endTime, endTime ?? -Infinity);
  }

  console.log("-".repeat(40));

  const duration = startTime && endTime ? endTime - startTime : 0;
  const eventsSent = success + failure;

  console.log(
    `DONE TOTAL ${eventsSent} READS IN ${Math.round(duration)}ms (${Math.round(
      (1000.0 * eventsSent) / duration
    )}/s)`
  );
  console.log(`SUCCESS: ${success} FAILURE: ${failure}`);

  if (failures.size) {
    console.log(
      `failures: \n${Array.from(failures)
        .map(([error, count]) => `${`${count}x`.padEnd(12, " ")}| ${error}`)
        .join("\n")}`
    );
  }
}

function spawnWorker(
  options: Init
): Promise<ResponseMsg & { perfs: PerformanceMsg[] }> {
  return new Promise((resolve, reject) => {
    console.log(
      `spawning worker ${options.id} with ${options.clientCount} clients`,
      options
    );
    const worker = new Worker(require.resolve("./safl.worker"), {
      workerData: options,
      stdout: true,
    });

    const perfs: PerformanceMsg[] = [];
    let result: ResponseMsg;

    worker.on("message", (msg: WToPMsg) => {
      switch (msg.type) {
        case "finished": {
          result = msg;
          break;
        }
        case "perf": {
          perfs.push(msg);
          break;
        }
      }
    });
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      } else {
        resolve({ ...result, perfs });
      }
    });
    worker.stdout.pipe(process.stdout);
  });
}

export default safl;
