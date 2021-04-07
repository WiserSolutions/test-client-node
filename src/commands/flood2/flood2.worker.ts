import { parentPort, workerData } from "worker_threads";
import { performance, PerformanceObserver } from "perf_hooks";
import {
  EventData,
  EventStoreDBClient,
  jsonEvent,
} from "@eventstore/db-client";
import { createClientCreator } from "../../utils/createClientCreator";
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
  rootCertificatePath,
  certChainPath,
  privateKeyPath,
  batchSize,
  data,
  metadata,
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
        message: `${name.toUpperCase()} ${eventsSent} WRITES IN ${duration}ms (${
          (1000.0 * eventsSent) / duration
        }/s)`,
      });
    });

    process.exit();
  });
  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  const createClient = await createClientCreator({
    connectionString,
    rootCertificatePath,
    certChainPath,
    privateKeyPath,
  });
  const createEvents = createEventBatch(
    "TakeSomeSpaceEvent",
    batchSize,
    data,
    metadata
  );

  performance.mark("writes-start");

  const results = await Promise.allSettled(
    Array.from({ length: clientCount }, (_, i) =>
      runClient(
        `${i}`,
        createClient,
        createEvents,
        count,
        deterministicStreamSelection,
        streams
      )
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

async function runClient(
  id: string,
  createClient: () => EventStoreDBClient,
  createEvents: () => EventData[],
  count: number,
  deterministicStreamSelection: boolean,
  streams: string[]
): Promise<ClientResult> {
  const client = createClient();
  let success = 0;
  let failure = 0;
  const failures = new Map<string, number>();

  performance.mark(`${id}-writes-start`);
  for (let n = 0; n < count; n++) {
    const events = createEvents();
    const streamName = deterministicStreamSelection
      ? await requestStreamName()
      : streams[Math.floor(Math.random() * streams.length)];

    try {
      await client.appendToStream(streamName, events);
      success++;
    } catch (error) {
      failure++;
      const fail = error.toString();
      failures.set(fail, (failures.get(fail) ?? 0) + 1);
    }
  }
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
