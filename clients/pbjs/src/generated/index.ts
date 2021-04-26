import { event_store } from "./protos";

export const streams = event_store.client.streams;
export const shared = event_store.client.shared;
export const gossip = event_store.client.gossip;

export type { event_store } from "./protos";
