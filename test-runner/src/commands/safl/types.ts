import type { Filter, ReadPosition } from "@eventstore/db-client";

export interface Init {
  id: string;
  clientCount: number;
  connectionString: string;
  eventsPerClient: number;
  reportPerNumberOfEvents: number;
  fromPosition: ReadPosition;
  resolveLinkTos: boolean;
  streamFilter?: Filter;
}

export interface ResponseMsg {
  type: "finished";
  success: number;
  failure: number;
  failures: Array<[string, number]>;
}

export interface PerformanceMsg {
  type: "perf";
  message: string;
  startTime: number;
  endTime: number;
}

export type WToPMsg = ResponseMsg | PerformanceMsg;
