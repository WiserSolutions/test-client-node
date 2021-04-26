import { Client as GRPCClient } from "@grpc/grpc-js";

import { Client } from "../Client";
import { ANY } from "../constants";
import { shared, streams, event_store } from "../generated";
import {
  BaseOptions,
  AppendResult,
  AppendExpectedRevision,
  EventData,
} from "../types";

import {
  convertToCommandError,
  debug,
  UnknownError,
  WrongExpectedVersionError,
} from "../utils";

export interface AppendToStreamOptions extends BaseOptions {
  /**
   * Asks the server to check the stream is at specific revision before writing events.
   * @default ANY
   */
  expectedRevision?: AppendExpectedRevision;
}

declare module "../Client" {
  interface Client {
    /**
     * Appends events to a given stream.
     * @param streamName A stream name.
     * @param events Events or event to write.
     * @param options Writing options.
     */
    appendToStream(
      streamName: string,
      events: EventData | EventData[],
      options?: AppendToStreamOptions
    ): Promise<AppendResult>;
  }
}

Client.prototype.appendToStream = async function (
  this: Client,
  streamName: string,
  event: EventData | EventData[],
  { expectedRevision = ANY, ...baseOptions }: AppendToStreamOptions = {}
): Promise<AppendResult> {
  const events = Array.isArray(event) ? event : [event];

  const header: event_store.client.streams.IAppendReq = {
    options: {
      any: {},
      streamIdentifier: {
        streamName: Buffer.from(streamName),
      },
    },
  };

  debug.command("appendToStream: %O", {
    streamName,
    events,
    options: { expectedRevision, ...baseOptions },
  });
  debug.command_grpc("appendToStream: %g", header);

  const client = await this.getGRPCClient(GRPCClient, "appendToStream");

  return new Promise<AppendResult>((resolve, reject) => {
    const sink = client.makeClientStreamRequest(
      "/event_store.client.streams.Streams/Append",
      (message: event_store.client.streams.IAppendReq) =>
        streams.AppendReq.encode(message).finish() as any,
      (buffer: Buffer) => streams.AppendResp.decode(buffer),
      ...this.callArguments(baseOptions),
      (error, resp) => {
        if (error != null) {
          return reject(convertToCommandError(error));
        }

        if (resp == null) {
          return reject(new UnknownError());
        }

        if (resp.wrongExpectedVersion) {
          const grpcError = resp.wrongExpectedVersion!;

          let expected: AppendExpectedRevision = "any";

          switch (true) {
            case grpcError.expectedRevision != null: {
              expected = BigInt(grpcError.expectedRevision!);
              break;
            }
            case grpcError.expectedStreamExists != null: {
              expected = "stream_exists";
              break;
            }
            case grpcError.expectedNoStream != null: {
              expected = "no_stream";
              break;
            }
          }

          if (this.throwOnAppendFailure) {
            return reject(
              new WrongExpectedVersionError(null as never, {
                streamName: streamName,
                current:
                  grpcError.currentRevision != null
                    ? BigInt(grpcError.currentRevision)
                    : "no_stream",
                expected,
              })
            );
          }

          const nextExpectedRevision =
            grpcError.currentRevision != null
              ? BigInt(grpcError.currentRevision)
              : BigInt(-1);

          return resolve({
            success: false,
            nextExpectedRevision,
            position: undefined,
          });
        }

        if (resp.success != null) {
          const success = resp.success;
          const nextExpectedRevision = BigInt(success.currentRevision);
          const grpcPosition = success.position;

          const position = grpcPosition
            ? {
                commit: BigInt(grpcPosition.commitPosition),
                prepare: BigInt(grpcPosition.preparePosition),
              }
            : undefined;

          return resolve({
            success: true,
            nextExpectedRevision,
            position,
          });
        }
      }
    );

    sink.write(header);

    for (const event of events) {
      const entry: event_store.client.streams.IAppendReq = {
        proposedMessage: {
          id: shared.UUID.create({ string: event.id }),
          metadata: {
            type: event.type,
            "content-type": event.contentType,
          },
          data: convertData(event),
          customMetadata: convertMetadata(event),
        },
      };

      sink.write(entry);
    }

    sink.end();
  });
};

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
