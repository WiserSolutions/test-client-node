import {
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientWritableStream,
  makeGenericClientConstructor,
  Metadata,
  ServiceDefinition,
} from "@grpc/grpc-js";
import { CallOptions, UnaryCallback } from "@grpc/grpc-js/build/src/client";
import { MethodDefinition } from "@grpc/grpc-js/build/src/make-client";
import { event_store } from "./protos";

function serialize_event_store_client_streams_AppendReq(
  arg: event_store.client.streams.IAppendReq
) {
  return Buffer.from(event_store.client.streams.AppendReq.encode(arg).finish());
}

function deserialize_event_store_client_streams_AppendReq(buffer: Buffer) {
  return event_store.client.streams.AppendReq.decode(buffer);
}

function serialize_event_store_client_streams_AppendResp(
  arg: event_store.client.streams.AppendResp
) {
  return Buffer.from(
    event_store.client.streams.AppendResp.encode(arg).finish()
  );
}

function deserialize_event_store_client_streams_AppendResp(buffer: Buffer) {
  return event_store.client.streams.AppendResp.decode(buffer);
}

const StreamsService: ServiceDefinition<{
  append: MethodDefinition<
    event_store.client.streams.AppendReq,
    event_store.client.streams.AppendResp
  >;
}> = {
  append: {
    path: "/event_store.client.streams.Streams/Append",
    requestStream: true,
    responseStream: false,
    requestSerialize: serialize_event_store_client_streams_AppendReq,
    requestDeserialize: deserialize_event_store_client_streams_AppendReq,
    responseSerialize: serialize_event_store_client_streams_AppendResp,
    responseDeserialize: deserialize_event_store_client_streams_AppendResp,
  },
};

interface StreamsClient extends Client {
  append(
    metadata: Metadata,
    options: CallOptions,
    callback: UnaryCallback<event_store.client.streams.AppendResp>
  ): ClientWritableStream<event_store.client.streams.IAppendReq>;
}

export interface StreamsClientConstructor {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): StreamsClient;
  service: ServiceDefinition;
}

export const StreamsClient = (makeGenericClientConstructor(
  StreamsService,
  "streams"
) as unknown) as StreamsClientConstructor;
