import { parentPort, workerData } from "worker_threads";
import { performance, PerformanceObserver } from "perf_hooks";
import { EventStoreDBClient } from "@eventstore/db-client";
import { Init, PToWMsg, ResponseMsg } from "./types";
import { ResolvedEvent } from "@eventstore/db-client";

const onStreamName: Array<(name: string) => void> = [];

parentPort!.on("message", (msg: PToWMsg) => {
  switch (msg.type) {
    case "requestStream": {
      const next = onStreamName.shift();
      next?.(msg.streamName);
      break;
    }
    default:
      break;
  }
});

async function initialize({
  connectionString,
  clientCount,
  id,
  totalEventsToRead,
  reportPerNumberOfEvents,
}: Init) {
  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ name, duration }) => {
      const eventsSent = name.startsWith("worker")
        ? clientCount * totalEventsToRead
        : totalEventsToRead;
      parentPort!.postMessage({
        type: "perf",
        message: `${name.toUpperCase()} ${eventsSent} READS FROM SUBSCRIPTION IN ${duration}ms (${
          (1000.0 * eventsSent) / duration
        }/s)`,
      });
    });

    process.exit();
  });
  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  performance.mark("reads-start");

  const results = await Promise.allSettled(
    Array.from({ length: clientCount }, (_, i) =>
      runClient({
        id: `${i}`,
        connectionString,
        totalEventsToRead,
        reportPerNumberOfEvents,
      })
    )
  );

  performance.mark("reads-end");

  let success = 0;
  let failure = 0;

  const failures = new Map<string, number>();

  for (const result of results) {
    if (result.status === "fulfilled") {
      const {
        id: clientId,
        success: s,
        failure: f,
        failures: fs,
      } = result.value;
      success += s;
      failure += f;

      for (const [fail, count] of fs) {
        failures.set(fail, (failures.get(fail) ?? 0) + count);
      }

      if (clientCount > 1) {
        performance.measure(
          `       client ${clientId}: `,
          `${clientId}-reads-start`,
          `${clientId}-reads-end`
        );
      }
    } else {
      console.log("critical failure");
    }
  }

  const finalResult: ResponseMsg = {
    type: "finished",
    success,
    failure,
    failures: Array.from(failures),
  };

  parentPort!.postMessage(finalResult);

  performance.measure(`worker ${id} totals: `, "reads-start", "reads-end");
}

interface ClientResult {
  id: string;
  success: number;
  failure: number;
  failures: Map<string, number>;
}

interface RunClientOptions {
  id: string;
  connectionString: string;
  totalEventsToRead: number;
  reportPerNumberOfEvents: number;
}

async function runClient({
  id,
  connectionString,
  totalEventsToRead,
  reportPerNumberOfEvents,
}: RunClientOptions): Promise<ClientResult> {
  const client = EventStoreDBClient.connectionString(connectionString);

  let done!: () => void;
  const waitForAll = new Promise<void>((r) => {
    done = r;
  });

  let landed!: () => void;
  const letNextEventThrough = () => {
    landed();
  };

  let success = 0;
  let failure = 0;
  let total = 0;
  const failures = new Map<string, number>();

  performance.mark(`${id}-subscribe-to-all-start`);

  const subscription = client
    .subscribeToAll()
    .on("data", function (_resolvedEvent: ResolvedEvent) {
      success++;
      total++;

      if (total === totalEventsToRead) {
        subscription.destroy();
        done();
      }
    })
    .on("error", (error) => {
      failure++;
      total++;
      const fail = error.toString();
      failures.set(fail, (failures.get(fail) ?? 0) + 1);

      letNextEventThrough();
      done();
    });

  await waitForAll;

  performance.mark(`${id}-subscribe-to-all-end`);

  return { id, success, failure, failures };
}

initialize(workerData);
