import { performance, PerformanceObserver } from "perf_hooks";

import { EventData } from "./events";

import { event_store } from "./pbjs/protos";

import { AppendReq } from "./gpb/streams_pb";
import { UUID } from "./gpb/shared_pb";

const convertData = (event: EventData): Uint8Array => {
  switch (event.contentType) {
    case "application/json": {
      return Buffer.from(JSON.stringify(event.data), "utf8").toString(
        "base64"
      ) as any;
    }
    case "application/octet-stream": {
      return event.data;
    }
  }
};

const convertMetadata = (event: EventData): Uint8Array | undefined => {
  if (!event.metadata) return;

  if (event.metadata.constructor === Uint8Array) {
    return event.metadata;
  }

  return Buffer.from(JSON.stringify(event.metadata), "utf8").toString(
    "base64"
  ) as any;
};

const makePBJSBuf = (event: EventData) => {
  const entry: event_store.client.streams.IAppendReq = {
    proposedMessage: {
      id: event_store.client.shared.UUID.create({ string: event.id }),
      metadata: {
        type: event.type,
        "content-type": event.contentType,
      },
      data: convertData(event),
      customMetadata: convertMetadata(event),
    },
  };

  // const validity = event_store.client.streams.AppendReq.verify(entry);

  // console.log(validity);

  const data = Uint8Array.from(
    event_store.client.streams.AppendReq.encode(entry).finish()
  );

  return data;
};

const makeGPBBuf = (event: EventData) => {
  const entry = new AppendReq();
  const message = new AppendReq.ProposedMessage();
  const id = new UUID();
  id.setString(event.id);
  message.setId(id);
  message.getMetadataMap().set("type", event.type);
  message.getMetadataMap().set("content-type", event.contentType);

  switch (event.contentType) {
    case "application/json": {
      const data = JSON.stringify(event.data);
      message.setData(Buffer.from(data, "utf8").toString("base64"));
      break;
    }
    case "application/octet-stream": {
      message.setData(event.data);
      break;
    }
  }

  if (event.metadata) {
    if (event.metadata.constructor === Uint8Array) {
      message.setCustomMetadata(event.metadata);
    } else {
      const metadata = JSON.stringify(event.metadata);
      message.setCustomMetadata(
        Buffer.from(metadata, "utf8").toString("base64")
      );
    }
  }

  entry.setProposedMessage(message);

  const data = entry.serializeBinary();

  return data;
};

const makePBBuf = (entry: EventData, count: number) => {
  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ duration, name }) => {
      console.log(
        `${name} ${count}  in ${duration}ms (${(1000.0 * count) / duration}/s`
      );
    });
  });

  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  performance.mark("pbjs-start");

  for (let i = 0; i < count; i++) {
    makePBJSBuf(entry);
  }

  performance.mark("pbjs-end");

  performance.mark("gpb-start");

  for (let i = 0; i < count; i++) {
    makeGPBBuf(entry);
  }

  performance.mark("gpb-end");

  performance.measure(`pbjs:`, "pbjs-start", "pbjs-end");
  performance.measure(`gpb: `, "gpb-start", "gpb-end");
};

makePBBuf(
  {
    contentType: "application/json",
    data: "some string",
    id: "aa82142f-5f1c-406d-b7f9-fbfaad9d21a1",
    metadata: "some metadta",
    type: "some_type",
  },
  1000000
);
