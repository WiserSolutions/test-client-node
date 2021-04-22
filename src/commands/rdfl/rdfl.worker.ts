import { parentPort, workerData } from "worker_threads";
import { performance, PerformanceObserver } from "perf_hooks";
import { EventStoreDBClient, StreamNotFoundError } from "@eventstore/db-client";
import { Init, PToWMsg, RequestStreamMsg, ResponseMsg } from "./types";

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
  batchSize,
  clientCount,
  count,
  id,
  deterministicStreamSelection,
  streams,
}: Init) {
  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ name, duration }) => {
      const eventsSent = name.startsWith("worker")
        ? clientCount * count * batchSize
        : count * batchSize;
      parentPort!.postMessage({
        type: "perf",
        message: `${name.toUpperCase()} ${eventsSent} reads IN ${duration}ms (${
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
      runClient(
        `${i}`,
        connectionString,
        count,
        batchSize,
        deterministicStreamSelection,
        streams
      )
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

async function runClient(
  id: string,
  connectionString: string,
  count: number,
  batchSize: number,
  deterministicStreamSelection: boolean,
  streams: string[]
): Promise<ClientResult> {
  const client = EventStoreDBClient.connectionString(connectionString);

  let done!: () => void;

  const waitForAll = new Promise<void>((r) => {
    done = r;
  });

  let success = 0;
  let failure = 0;
  let total = 0;
  const failures = new Map<string, number>();

  performance.mark(`${id}-reads-start`);
  for (let n = 0; n < count; n++) {
    const streamName = deterministicStreamSelection
      ? await requestStreamName()
      : streams[Math.floor(Math.random() * streams.length)];

    client
      .readStream(streamName, { maxCount: batchSize })
      .then(() => {
        success++;
        total++;
      })
      .catch((error) => {
        if (error instanceof StreamNotFoundError) {
          success++;
          total++;
          const fail = "stream not found";
          failures.set(fail, (failures.get(fail) ?? 0) + 1);
        } else {
          failure++;
          total++;
          const fail = error.toString();
          failures.set(fail, (failures.get(fail) ?? 0) + 1);
        }
      })
      .finally(() => {
        if (total >= count) {
          done();
        }
      });
  }

  await waitForAll;

  performance.mark(`${id}-reads-end`);

  return { id, success, failure, failures };
}

function requestStreamName() {
  return new Promise<string>((r) => {
    onStreamName.push(r);
    const message: RequestStreamMsg = { type: "requestStream" };
    parentPort!.postMessage(message);
  });
}

initialize(workerData);
