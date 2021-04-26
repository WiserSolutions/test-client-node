import { performance, PerformanceObserver } from "perf_hooks";
import { randomBytes } from "crypto";

import { EventData } from "./events";

import { event_store } from "./pbjs/protos";

import { AppendReq } from "./gpb/streams_pb";
import { UUID } from "./gpb/shared_pb";

const convertData = (event: EventData, b64 = true): Uint8Array => {
  if (b64) {
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
  } else {
    switch (event.contentType) {
      case "application/json": {
        return Uint8Array.from(Buffer.from(JSON.stringify(event.data), "utf8"));
      }
      case "application/octet-stream": {
        return event.data;
      }
    }
  }
};

const convertMetadata = (
  event: EventData,
  b64 = true
): Uint8Array | undefined => {
  if (!event.metadata) return;

  if (event.metadata.constructor === Uint8Array) {
    return event.metadata;
  }

  if (b64) {
    return Buffer.from(JSON.stringify(event.metadata), "utf8").toString(
      "base64"
    ) as any;
  }

  return Uint8Array.from(Buffer.from(JSON.stringify(event.metadata), "utf8"));
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

  // console.log(data.byteLength);

  return data;
};

const makePBJSBufNoBase64 = (event: EventData) => {
  const entry: event_store.client.streams.IAppendReq = {
    proposedMessage: {
      id: event_store.client.shared.UUID.create({ string: event.id }),
      metadata: {
        type: event.type,
        "content-type": event.contentType,
      },
      data: convertData(event, false),
      customMetadata: convertMetadata(event, false),
    },
  };

  const data = event_store.client.streams.AppendReq.encode(entry).finish();

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
      message.setCustomMetadata(Buffer.from(data, "utf8").toString("base64"));
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

  // console.log(data.byteLength);

  return data;
};

const makeGPBBufNoBase64 = (event: EventData) => {
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
      message.setData(Uint8Array.from(Buffer.from(data, "utf8")));
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
      message.setCustomMetadata(Uint8Array.from(Buffer.from(metadata, "utf8")));
    }
  }

  entry.setProposedMessage(message);

  const data = entry.serializeBinary();

  // console.log(data.byteLength);

  return data;
};

const makePBBuf = (entry: EventData, count: number) => {
  const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(({ duration, name }) => {
      console.log(
        `${name} ${count}  in ${Math.round(duration)}ms (${Math.round(
          (1000.0 * count) / duration
        )}/s)`
      );
    });
  });

  perfObserver.observe({ entryTypes: ["measure"], buffered: true });

  performance.mark("pbjs-start");

  for (let i = 0; i < count; i++) {
    makePBJSBuf(entry);
  }

  performance.mark("pbjs-end");

  performance.mark("pbjsnobase64-start");

  for (let i = 0; i < count; i++) {
    makePBJSBufNoBase64(entry);
  }

  performance.mark("pbjsnobase64-end");

  performance.mark("gpb-start");

  for (let i = 0; i < count; i++) {
    makeGPBBuf(entry);
  }

  performance.mark("gpb-end");

  performance.mark("gpbnobase64-start");

  for (let i = 0; i < count; i++) {
    makeGPBBufNoBase64(entry);
  }

  performance.mark("gpbnobase64-end");

  performance.measure(`pbjs:        `, "pbjs-start", "pbjs-end");
  performance.measure(
    `pbjsnobase64:`,
    "pbjsnobase64-start",
    "pbjsnobase64-end"
  );
  performance.measure(`gpb:         `, "gpb-start", "gpb-end");
  performance.measure(`gpbnobase64: `, "gpbnobase64-start", "gpbnobase64-end");
};

makePBBuf(
  {
    contentType: "application/json",
    data: randomBytes(700).toString("ascii"),
    id: "aa82142f-5f1c-406d-b7f9-fbfaad9d21a1",
    metadata: randomBytes(700).toString("ascii"),
    type: "some_type",
  },
  100000
);
