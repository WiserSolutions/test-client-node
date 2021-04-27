import type { CommandModule } from "yargs";

import { performance, PerformanceObserver } from "perf_hooks";
import { Worker } from "worker_threads";
import { cpus } from "os";

import { Init, ResponseMsg, WToPMsg } from "./types";

interface Options {
  connectionString: string;
  client_count: number;
  worker_count: number;
  total_events_to_read: number;
  report_per_number_of_events: number;
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
    report_per_number_of_events: {
      type: "number",
      default: 1000,
    },
  },
  handler,
};

async function handler({
  client_count: clientCount,
  worker_count,
  total_events_to_read: totalEventsToRead,
  report_per_number_of_events: reportPerNumberOfEvents,
  connectionString,
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
      clientCount: clientsForWorker,
    })
  );

  let success = 0;
  let failure = 0;
  const failures = new Map<string, number>();

  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ duration }) => {
      const eventsSent = success + failure;

      console.log(
        `DONE TOTAL ${eventsSent} READS IN ${duration}ms (${
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

  performance.mark("subscribe-to-all-start");

  const promises = await Promise.allSettled(
    workerCounts.map(({ clientCount }, i) =>
      spawnWorker({
        id: `${i}`,
        clientCount,
        connectionString,
        totalEventsToRead,
        reportPerNumberOfEvents,
      })
    )
  );

  performance.mark("subscribe-to-all-end");

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
    () =>
      performance.measure(
        "subscribe-to-all",
        "subscribe-to-all-start",
        "subscribe-to-all-end"
      ),
    500
  );
}

function spawnWorker(options: Init): Promise<ResponseMsg> {
  return new Promise((resolve, reject) => {
    console.log(
      `spawning worker ${options.id} with ${options.clientCount} clients`,
      options
    );
    const worker = new Worker(require.resolve("./safl.worker"), {
      workerData: options,
      stdout: true,
    });
    worker.on("message", (msg: WToPMsg) => {
      switch (msg.type) {
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

export default safl;
