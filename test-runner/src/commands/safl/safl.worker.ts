import { parentPort, workerData } from "worker_threads";
import { performance, PerformanceObserver } from "perf_hooks";
import { EventStoreDBClient, ReadPosition, Filter} from "@eventstore/db-client";
import { Init, PerformanceMsg, ResponseMsg } from "./types";

async function initialize({
  connectionString,
  clientCount,
  id,
  eventsPerClient,
  reportPerNumberOfEvents,
  fromPosition,
  resolveLinkTos,
  streamFilter,
}: Init) {
  const perfObserver = new PerformanceObserver((items) => {
    const allEntries = items.getEntries();

    for (let client = 0; client < clientCount; client++) {
      const clientEntries = allEntries
        .filter(({ name }) => name.startsWith(`${client} events`))
        .sort()
        .map(
          ({ name, duration }) =>
            `${name.replace(`${client} events`, "")} : ${Math.round(
              duration
            )}ms (~${Math.round(
              (reportPerNumberOfEvents * 1000) / duration
            )}/s)`
        );

      const clientTotal = allEntries.find(({ name }) =>
        name.startsWith(`${client} all events`)
      )!;

      const message: PerformanceMsg = {
        type: "perf",
        message: [
          `Worker ${id} Client ${client + 1}:`,
          ...clientEntries,
          `Total: ${eventsPerClient} in ${Math.round(
            clientTotal.duration
          )}ms (~${Math.round(
            (eventsPerClient * 1000) / clientTotal.duration
          )}/s)}`,
        ].join("\n"),
        startTime: clientTotal.startTime,
        endTime: clientTotal.startTime + clientTotal.duration,
      };

      parentPort!.postMessage(message);
    }

    process.exit();
  });

  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  const results = await Promise.allSettled(
    Array.from({ length: clientCount }, (_, i) =>
      runClient({
        id: `${i}`,
        connectionString,
        eventsPerClient,
        reportPerNumberOfEvents,
        fromPosition,
        resolveLinkTos,
        streamFilter,
      })
    )
  );

  let success = 0;
  let failure = 0;

  const failures = new Map<string, number>();

  for (const result of results) {
    if (result.status === "fulfilled") {
      const { id: clientId, markers } = result.value;
      success += 1;

      const padLength = `${markers.length * reportPerNumberOfEvents}`.length;

      markers.forEach(([start, end], i) => {
        performance.measure(
          `${clientId} events ${`${i * reportPerNumberOfEvents}`.padStart(
            padLength,
            " "
          )} to ${`${(i + 1) * reportPerNumberOfEvents}`.padEnd(
            padLength,
            " "
          )}`,
          start,
          end
        );
      });

      performance.measure(
        `${clientId} all events`,
        `${clientId}-start`,
        `${clientId}-end`
      );
    } else {
      failure += 1;

      const fail = result.reason.toString();
      failures.set(fail, (failures.get(fail) ?? 0) + 1);
    }
  }

  const finalResult: ResponseMsg = {
    type: "finished",
    success: success * eventsPerClient,
    failure: failure * eventsPerClient,
    failures: Array.from(failures),
  };

  parentPort!.postMessage(finalResult);
}

interface ClientResult {
  id: string;
  markers: [string, string][];
  total: number;
}

interface RunClientOptions {
  id: string;
  connectionString: string;
  eventsPerClient: number;
  reportPerNumberOfEvents: number;
  fromPosition: ReadPosition;
  resolveLinkTos: boolean;
  streamFilter?: Filter;
}

async function runClient({
  id,
  connectionString,
  eventsPerClient,
  reportPerNumberOfEvents,
  fromPosition,
  resolveLinkTos,
  streamFilter,
}: RunClientOptions): Promise<ClientResult> {
  const client = EventStoreDBClient.connectionString(connectionString);

  let total = 0;
  let marker = 0;
  const markers: [string, string][] = [];

  for await (const _ of client.subscribeToAll({
    fromPosition,
    resolveLinkTos,
    filter: streamFilter,
  })) {
    if (total >= eventsPerClient) {
      break;
    }

    if (total === 0) {
      performance.mark(`${id}-start`);
    }

    if (++total % reportPerNumberOfEvents === 0) {
      performance.mark(`${id}-${marker}`);
      markers.push([
        `${id}-${marker === 0 ? "start" : marker - 1}`,
        `${id}-${marker}`,
      ]);
      marker++;
    }
  }

  performance.mark(`${id}-end`);

  return { id, markers, total };
}

initialize(workerData);
