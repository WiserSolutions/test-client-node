import { parentPort, workerData } from "worker_threads";
import { performance, PerformanceObserver } from "perf_hooks";

import { Init, PToWMsg, RequestStreamMsg, ResponseMsg } from "./types";
import { getClient } from "../../utils/client";

const { EventStoreDBClient, jsonEvent } = getClient(workerData.client);

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
  data,
  metadata,
  clientCount,
  count,
  id,
  deterministicStreamSelection,
  streams,
  maxInFlight,
}: Init) {
  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ name, duration }) => {
      const eventsSent = name.startsWith("worker")
        ? clientCount * count * batchSize
        : count * batchSize;
      parentPort!.postMessage({
        type: "perf",
        message: `${name.toUpperCase()} ${eventsSent} WRITES IN ${duration}ms (${
          (1000.0 * eventsSent) / duration
        }/s)`,
      });
    });

    process.exit();
  });
  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  const createEvents = createEventBatch(
    "TakeSomeSpaceEvent",
    batchSize,
    data,
    metadata
  );

  performance.mark("writes-start");

  const results = await Promise.allSettled(
    Array.from({ length: clientCount }, (_, i) =>
      runClient({
        id: `${i}`,
        connectionString,
        createEvents,
        count,
        deterministicStreamSelection,
        streams,
        maxInFlight,
      })
    )
  );

  performance.mark("writes-end");

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
          `${clientId}-writes-start`,
          `${clientId}-writes-end`
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

  performance.measure(`worker ${id} totals: `, "writes-start", "writes-end");
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
  createEvents: () => any[];
  count: number;
  deterministicStreamSelection: boolean;
  streams: string[];
  maxInFlight: number;
}

async function runClient({
  id,
  connectionString,
  createEvents,
  count,
  deterministicStreamSelection,
  streams,
  maxInFlight,
}: RunClientOptions): Promise<ClientResult> {
  const client = EventStoreDBClient.connectionString(connectionString);

  let done!: () => void;

  const waitForAll = new Promise<void>((r) => {
    done = r;
  });

  let landed!: () => void;
  let waitForGate = new Promise<void>((r) => {
    landed = r;
  });
  const letNextEventThrough = () => {
    landed();
    waitForGate = new Promise<void>((r) => {
      landed = r;
    });
  };

  let success = 0;
  let failure = 0;
  let total = 0;
  let inFlight = 0;
  const failures = new Map<string, number>();

  performance.mark(`${id}-writes-start`);
  for (let n = 0; n < count; n++) {
    const events = createEvents();
    const streamName = deterministicStreamSelection
      ? await requestStreamName()
      : streams[Math.floor(Math.random() * streams.length)];

    if (inFlight >= maxInFlight) {
      await waitForGate;
    }

    inFlight++;

    client
      .appendToStream(streamName, events)
      .then(() => {
        success++;
        total++;
      })
      .catch((error) => {
        failure++;
        total++;
        const fail = error.toString();

        failures.set(fail, (failures.get(fail) ?? 0) + 1);
      })
      .finally(() => {
        inFlight--;
        letNextEventThrough();
        if (total >= count) {
          done();
        }
      });
  }

  await waitForAll;

  performance.mark(`${id}-writes-end`);

  return { id, success, failure, failures };
}

function createEventBatch(
  type: string,
  size: number,
  data: string,
  metadata: string
) {
  return () =>
    Array.from({ length: size }, () =>
      jsonEvent({
        type,
        data,
        metadata,
      })
    );
}

function requestStreamName() {
  return new Promise<string>((r) => {
    onStreamName.push(r);
    const message: RequestStreamMsg = { type: "requestStream" };
    parentPort!.postMessage(message);
  });
}

initialize(workerData);
