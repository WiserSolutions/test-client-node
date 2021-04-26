import * as $protobuf from "protobufjs";
/** Namespace event_store. */
export namespace event_store {

    /** Namespace client. */
    namespace client {

        /** Namespace gossip. */
        namespace gossip {

            /** Represents a Gossip */
            class Gossip extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Gossip service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Gossip service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gossip;

                /**
                 * Calls Read.
                 * @param request Empty message or plain object
                 * @param callback Node-style callback called with the error, if any, and ClusterInfo
                 */
                public read(request: event_store.client.shared.IEmpty, callback: event_store.client.gossip.Gossip.ReadCallback): void;

                /**
                 * Calls Read.
                 * @param request Empty message or plain object
                 * @returns Promise
                 */
                public read(request: event_store.client.shared.IEmpty): Promise<event_store.client.gossip.ClusterInfo>;
            }

            namespace Gossip {

                /**
                 * Callback as used by {@link event_store.client.gossip.Gossip#read}.
                 * @param error Error, if any
                 * @param [response] ClusterInfo
                 */
                type ReadCallback = (error: (Error|null), response?: event_store.client.gossip.ClusterInfo) => void;
            }

            /** Properties of a ClusterInfo. */
            interface IClusterInfo {

                /** ClusterInfo members */
                members?: (event_store.client.gossip.IMemberInfo[]|null);
            }

            /** Represents a ClusterInfo. */
            class ClusterInfo implements IClusterInfo {

                /**
                 * Constructs a new ClusterInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.gossip.IClusterInfo);

                /** ClusterInfo members. */
                public members: event_store.client.gossip.IMemberInfo[];

                /**
                 * Creates a new ClusterInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClusterInfo instance
                 */
                public static create(properties?: event_store.client.gossip.IClusterInfo): event_store.client.gossip.ClusterInfo;

                /**
                 * Encodes the specified ClusterInfo message. Does not implicitly {@link event_store.client.gossip.ClusterInfo.verify|verify} messages.
                 * @param message ClusterInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.gossip.IClusterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClusterInfo message, length delimited. Does not implicitly {@link event_store.client.gossip.ClusterInfo.verify|verify} messages.
                 * @param message ClusterInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.gossip.IClusterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClusterInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClusterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.gossip.ClusterInfo;

                /**
                 * Decodes a ClusterInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClusterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.gossip.ClusterInfo;

                /**
                 * Verifies a ClusterInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClusterInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClusterInfo
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.gossip.ClusterInfo;

                /**
                 * Creates a plain object from a ClusterInfo message. Also converts values to other types if specified.
                 * @param message ClusterInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.gossip.ClusterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClusterInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EndPoint. */
            interface IEndPoint {

                /** EndPoint address */
                address?: (string|null);

                /** EndPoint port */
                port?: (number|null);
            }

            /** Represents an EndPoint. */
            class EndPoint implements IEndPoint {

                /**
                 * Constructs a new EndPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.gossip.IEndPoint);

                /** EndPoint address. */
                public address: string;

                /** EndPoint port. */
                public port: number;

                /**
                 * Creates a new EndPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EndPoint instance
                 */
                public static create(properties?: event_store.client.gossip.IEndPoint): event_store.client.gossip.EndPoint;

                /**
                 * Encodes the specified EndPoint message. Does not implicitly {@link event_store.client.gossip.EndPoint.verify|verify} messages.
                 * @param message EndPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.gossip.IEndPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EndPoint message, length delimited. Does not implicitly {@link event_store.client.gossip.EndPoint.verify|verify} messages.
                 * @param message EndPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.gossip.IEndPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EndPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EndPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.gossip.EndPoint;

                /**
                 * Decodes an EndPoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EndPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.gossip.EndPoint;

                /**
                 * Verifies an EndPoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EndPoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EndPoint
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.gossip.EndPoint;

                /**
                 * Creates a plain object from an EndPoint message. Also converts values to other types if specified.
                 * @param message EndPoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.gossip.EndPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EndPoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MemberInfo. */
            interface IMemberInfo {

                /** MemberInfo instanceId */
                instanceId?: (event_store.client.shared.IUUID|null);

                /** MemberInfo timeStamp */
                timeStamp?: (number|Long|null);

                /** MemberInfo state */
                state?: (event_store.client.gossip.MemberInfo.VNodeState|null);

                /** MemberInfo isAlive */
                isAlive?: (boolean|null);

                /** MemberInfo httpEndPoint */
                httpEndPoint?: (event_store.client.gossip.IEndPoint|null);
            }

            /** Represents a MemberInfo. */
            class MemberInfo implements IMemberInfo {

                /**
                 * Constructs a new MemberInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.gossip.IMemberInfo);

                /** MemberInfo instanceId. */
                public instanceId?: (event_store.client.shared.IUUID|null);

                /** MemberInfo timeStamp. */
                public timeStamp: (number|Long);

                /** MemberInfo state. */
                public state: event_store.client.gossip.MemberInfo.VNodeState;

                /** MemberInfo isAlive. */
                public isAlive: boolean;

                /** MemberInfo httpEndPoint. */
                public httpEndPoint?: (event_store.client.gossip.IEndPoint|null);

                /**
                 * Creates a new MemberInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MemberInfo instance
                 */
                public static create(properties?: event_store.client.gossip.IMemberInfo): event_store.client.gossip.MemberInfo;

                /**
                 * Encodes the specified MemberInfo message. Does not implicitly {@link event_store.client.gossip.MemberInfo.verify|verify} messages.
                 * @param message MemberInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.gossip.IMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link event_store.client.gossip.MemberInfo.verify|verify} messages.
                 * @param message MemberInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.gossip.IMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MemberInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MemberInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.gossip.MemberInfo;

                /**
                 * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MemberInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.gossip.MemberInfo;

                /**
                 * Verifies a MemberInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MemberInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MemberInfo
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.gossip.MemberInfo;

                /**
                 * Creates a plain object from a MemberInfo message. Also converts values to other types if specified.
                 * @param message MemberInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.gossip.MemberInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MemberInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MemberInfo {

                /** VNodeState enum. */
                enum VNodeState {
                    Initializing = 0,
                    DiscoverLeader = 1,
                    Unknown = 2,
                    PreReplica = 3,
                    CatchingUp = 4,
                    Clone = 5,
                    Follower = 6,
                    PreLeader = 7,
                    Leader = 8,
                    Manager = 9,
                    ShuttingDown = 10,
                    Shutdown = 11,
                    ReadOnlyLeaderless = 12,
                    PreReadOnlyReplica = 13,
                    ReadOnlyReplica = 14,
                    ResigningLeader = 15
                }
            }
        }

        /** Namespace shared. */
        namespace shared {

            /** Properties of a UUID. */
            interface IUUID {

                /** UUID structured */
                structured?: (event_store.client.shared.UUID.IStructured|null);

                /** UUID string */
                string?: (string|null);
            }

            /** Represents a UUID. */
            class UUID implements IUUID {

                /**
                 * Constructs a new UUID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.shared.IUUID);

                /** UUID structured. */
                public structured?: (event_store.client.shared.UUID.IStructured|null);

                /** UUID string. */
                public string: string;

                /** UUID value. */
                public value?: ("structured"|"string");

                /**
                 * Creates a new UUID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UUID instance
                 */
                public static create(properties?: event_store.client.shared.IUUID): event_store.client.shared.UUID;

                /**
                 * Encodes the specified UUID message. Does not implicitly {@link event_store.client.shared.UUID.verify|verify} messages.
                 * @param message UUID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.shared.IUUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UUID message, length delimited. Does not implicitly {@link event_store.client.shared.UUID.verify|verify} messages.
                 * @param message UUID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.shared.IUUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UUID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.shared.UUID;

                /**
                 * Decodes a UUID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.shared.UUID;

                /**
                 * Verifies a UUID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UUID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UUID
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.shared.UUID;

                /**
                 * Creates a plain object from a UUID message. Also converts values to other types if specified.
                 * @param message UUID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.shared.UUID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UUID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UUID {

                /** Properties of a Structured. */
                interface IStructured {

                    /** Structured mostSignificantBits */
                    mostSignificantBits?: (number|Long|null);

                    /** Structured leastSignificantBits */
                    leastSignificantBits?: (number|Long|null);
                }

                /** Represents a Structured. */
                class Structured implements IStructured {

                    /**
                     * Constructs a new Structured.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.shared.UUID.IStructured);

                    /** Structured mostSignificantBits. */
                    public mostSignificantBits: (number|Long);

                    /** Structured leastSignificantBits. */
                    public leastSignificantBits: (number|Long);

                    /**
                     * Creates a new Structured instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Structured instance
                     */
                    public static create(properties?: event_store.client.shared.UUID.IStructured): event_store.client.shared.UUID.Structured;

                    /**
                     * Encodes the specified Structured message. Does not implicitly {@link event_store.client.shared.UUID.Structured.verify|verify} messages.
                     * @param message Structured message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.shared.UUID.IStructured, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Structured message, length delimited. Does not implicitly {@link event_store.client.shared.UUID.Structured.verify|verify} messages.
                     * @param message Structured message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.shared.UUID.IStructured, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Structured message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Structured
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.shared.UUID.Structured;

                    /**
                     * Decodes a Structured message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Structured
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.shared.UUID.Structured;

                    /**
                     * Verifies a Structured message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Structured message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Structured
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.shared.UUID.Structured;

                    /**
                     * Creates a plain object from a Structured message. Also converts values to other types if specified.
                     * @param message Structured
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.shared.UUID.Structured, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Structured to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an Empty. */
            interface IEmpty {
            }

            /** Represents an Empty. */
            class Empty implements IEmpty {

                /**
                 * Constructs a new Empty.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.shared.IEmpty);

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Empty instance
                 */
                public static create(properties?: event_store.client.shared.IEmpty): event_store.client.shared.Empty;

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link event_store.client.shared.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.shared.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link event_store.client.shared.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.shared.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.shared.Empty;

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.shared.Empty;

                /**
                 * Verifies an Empty message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Empty
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.shared.Empty;

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @param message Empty
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.shared.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Empty to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StreamIdentifier. */
            interface IStreamIdentifier {

                /** StreamIdentifier streamName */
                streamName?: (Uint8Array|null);
            }

            /** Represents a StreamIdentifier. */
            class StreamIdentifier implements IStreamIdentifier {

                /**
                 * Constructs a new StreamIdentifier.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.shared.IStreamIdentifier);

                /** StreamIdentifier streamName. */
                public streamName: Uint8Array;

                /**
                 * Creates a new StreamIdentifier instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamIdentifier instance
                 */
                public static create(properties?: event_store.client.shared.IStreamIdentifier): event_store.client.shared.StreamIdentifier;

                /**
                 * Encodes the specified StreamIdentifier message. Does not implicitly {@link event_store.client.shared.StreamIdentifier.verify|verify} messages.
                 * @param message StreamIdentifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.shared.IStreamIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamIdentifier message, length delimited. Does not implicitly {@link event_store.client.shared.StreamIdentifier.verify|verify} messages.
                 * @param message StreamIdentifier message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.shared.IStreamIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamIdentifier message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.shared.StreamIdentifier;

                /**
                 * Decodes a StreamIdentifier message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.shared.StreamIdentifier;

                /**
                 * Verifies a StreamIdentifier message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamIdentifier message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamIdentifier
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.shared.StreamIdentifier;

                /**
                 * Creates a plain object from a StreamIdentifier message. Also converts values to other types if specified.
                 * @param message StreamIdentifier
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.shared.StreamIdentifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamIdentifier to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace streams. */
        namespace streams {

            /** Represents a Streams */
            class Streams extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Streams service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Streams service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Streams;

                /**
                 * Calls Read.
                 * @param request ReadReq message or plain object
                 * @param callback Node-style callback called with the error, if any, and ReadResp
                 */
                public read(request: event_store.client.streams.IReadReq, callback: event_store.client.streams.Streams.ReadCallback): void;

                /**
                 * Calls Read.
                 * @param request ReadReq message or plain object
                 * @returns Promise
                 */
                public read(request: event_store.client.streams.IReadReq): Promise<event_store.client.streams.ReadResp>;

                /**
                 * Calls Append.
                 * @param request AppendReq message or plain object
                 * @param callback Node-style callback called with the error, if any, and AppendResp
                 */
                public append(request: event_store.client.streams.IAppendReq, callback: event_store.client.streams.Streams.AppendCallback): void;

                /**
                 * Calls Append.
                 * @param request AppendReq message or plain object
                 * @returns Promise
                 */
                public append(request: event_store.client.streams.IAppendReq): Promise<event_store.client.streams.AppendResp>;

                /**
                 * Calls Delete.
                 * @param request DeleteReq message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteResp
                 */
                public delete(request: event_store.client.streams.IDeleteReq, callback: event_store.client.streams.Streams.DeleteCallback): void;

                /**
                 * Calls Delete.
                 * @param request DeleteReq message or plain object
                 * @returns Promise
                 */
                public delete(request: event_store.client.streams.IDeleteReq): Promise<event_store.client.streams.DeleteResp>;

                /**
                 * Calls Tombstone.
                 * @param request TombstoneReq message or plain object
                 * @param callback Node-style callback called with the error, if any, and TombstoneResp
                 */
                public tombstone(request: event_store.client.streams.ITombstoneReq, callback: event_store.client.streams.Streams.TombstoneCallback): void;

                /**
                 * Calls Tombstone.
                 * @param request TombstoneReq message or plain object
                 * @returns Promise
                 */
                public tombstone(request: event_store.client.streams.ITombstoneReq): Promise<event_store.client.streams.TombstoneResp>;
            }

            namespace Streams {

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#read}.
                 * @param error Error, if any
                 * @param [response] ReadResp
                 */
                type ReadCallback = (error: (Error|null), response?: event_store.client.streams.ReadResp) => void;

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#append}.
                 * @param error Error, if any
                 * @param [response] AppendResp
                 */
                type AppendCallback = (error: (Error|null), response?: event_store.client.streams.AppendResp) => void;

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#delete_}.
                 * @param error Error, if any
                 * @param [response] DeleteResp
                 */
                type DeleteCallback = (error: (Error|null), response?: event_store.client.streams.DeleteResp) => void;

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#tombstone}.
                 * @param error Error, if any
                 * @param [response] TombstoneResp
                 */
                type TombstoneCallback = (error: (Error|null), response?: event_store.client.streams.TombstoneResp) => void;
            }

            /** Properties of a ReadReq. */
            interface IReadReq {

                /** ReadReq options */
                options?: (event_store.client.streams.ReadReq.IOptions|null);
            }

            /** Represents a ReadReq. */
            class ReadReq implements IReadReq {

                /**
                 * Constructs a new ReadReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IReadReq);

                /** ReadReq options. */
                public options?: (event_store.client.streams.ReadReq.IOptions|null);

                /**
                 * Creates a new ReadReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadReq instance
                 */
                public static create(properties?: event_store.client.streams.IReadReq): event_store.client.streams.ReadReq;

                /**
                 * Encodes the specified ReadReq message. Does not implicitly {@link event_store.client.streams.ReadReq.verify|verify} messages.
                 * @param message ReadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadReq message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.verify|verify} messages.
                 * @param message ReadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IReadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq;

                /**
                 * Decodes a ReadReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq;

                /**
                 * Verifies a ReadReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadReq
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq;

                /**
                 * Creates a plain object from a ReadReq message. Also converts values to other types if specified.
                 * @param message ReadReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.ReadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReadReq {

                /** Properties of an Options. */
                interface IOptions {

                    /** Options stream */
                    stream?: (event_store.client.streams.ReadReq.Options.IStreamOptions|null);

                    /** Options all */
                    all?: (event_store.client.streams.ReadReq.Options.IAllOptions|null);

                    /** Options readDirection */
                    readDirection?: (event_store.client.streams.ReadReq.Options.ReadDirection|null);

                    /** Options resolveLinks */
                    resolveLinks?: (boolean|null);

                    /** Options count */
                    count?: (number|Long|null);

                    /** Options subscription */
                    subscription?: (event_store.client.streams.ReadReq.Options.ISubscriptionOptions|null);

                    /** Options filter */
                    filter?: (event_store.client.streams.ReadReq.Options.IFilterOptions|null);

                    /** Options noFilter */
                    noFilter?: (event_store.client.shared.IEmpty|null);

                    /** Options uuidOption */
                    uuidOption?: (event_store.client.streams.ReadReq.Options.IUUIDOption|null);
                }

                /** Represents an Options. */
                class Options implements IOptions {

                    /**
                     * Constructs a new Options.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.ReadReq.IOptions);

                    /** Options stream. */
                    public stream?: (event_store.client.streams.ReadReq.Options.IStreamOptions|null);

                    /** Options all. */
                    public all?: (event_store.client.streams.ReadReq.Options.IAllOptions|null);

                    /** Options readDirection. */
                    public readDirection: event_store.client.streams.ReadReq.Options.ReadDirection;

                    /** Options resolveLinks. */
                    public resolveLinks: boolean;

                    /** Options count. */
                    public count: (number|Long);

                    /** Options subscription. */
                    public subscription?: (event_store.client.streams.ReadReq.Options.ISubscriptionOptions|null);

                    /** Options filter. */
                    public filter?: (event_store.client.streams.ReadReq.Options.IFilterOptions|null);

                    /** Options noFilter. */
                    public noFilter?: (event_store.client.shared.IEmpty|null);

                    /** Options uuidOption. */
                    public uuidOption?: (event_store.client.streams.ReadReq.Options.IUUIDOption|null);

                    /** Options streamOption. */
                    public streamOption?: ("stream"|"all");

                    /** Options countOption. */
                    public countOption?: ("count"|"subscription");

                    /** Options filterOption. */
                    public filterOption?: ("filter"|"noFilter");

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Options instance
                     */
                    public static create(properties?: event_store.client.streams.ReadReq.IOptions): event_store.client.streams.ReadReq.Options;

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.ReadReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.ReadReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options;

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options;

                    /**
                     * Verifies an Options message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Options
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options;

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @param message Options
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.ReadReq.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Options to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Options {

                    /** ReadDirection enum. */
                    enum ReadDirection {
                        Forwards = 0,
                        Backwards = 1
                    }

                    /** Properties of a StreamOptions. */
                    interface IStreamOptions {

                        /** StreamOptions streamIdentifier */
                        streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                        /** StreamOptions revision */
                        revision?: (number|Long|null);

                        /** StreamOptions start */
                        start?: (event_store.client.shared.IEmpty|null);

                        /** StreamOptions end */
                        end?: (event_store.client.shared.IEmpty|null);
                    }

                    /** Represents a StreamOptions. */
                    class StreamOptions implements IStreamOptions {

                        /**
                         * Constructs a new StreamOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.IStreamOptions);

                        /** StreamOptions streamIdentifier. */
                        public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                        /** StreamOptions revision. */
                        public revision: (number|Long);

                        /** StreamOptions start. */
                        public start?: (event_store.client.shared.IEmpty|null);

                        /** StreamOptions end. */
                        public end?: (event_store.client.shared.IEmpty|null);

                        /** StreamOptions revisionOption. */
                        public revisionOption?: ("revision"|"start"|"end");

                        /**
                         * Creates a new StreamOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StreamOptions instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.IStreamOptions): event_store.client.streams.ReadReq.Options.StreamOptions;

                        /**
                         * Encodes the specified StreamOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.StreamOptions.verify|verify} messages.
                         * @param message StreamOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.IStreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StreamOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.StreamOptions.verify|verify} messages.
                         * @param message StreamOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.IStreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StreamOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StreamOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.StreamOptions;

                        /**
                         * Decodes a StreamOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StreamOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.StreamOptions;

                        /**
                         * Verifies a StreamOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StreamOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StreamOptions
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.StreamOptions;

                        /**
                         * Creates a plain object from a StreamOptions message. Also converts values to other types if specified.
                         * @param message StreamOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.StreamOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StreamOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AllOptions. */
                    interface IAllOptions {

                        /** AllOptions position */
                        position?: (event_store.client.streams.ReadReq.Options.IPosition|null);

                        /** AllOptions start */
                        start?: (event_store.client.shared.IEmpty|null);

                        /** AllOptions end */
                        end?: (event_store.client.shared.IEmpty|null);
                    }

                    /** Represents an AllOptions. */
                    class AllOptions implements IAllOptions {

                        /**
                         * Constructs a new AllOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.IAllOptions);

                        /** AllOptions position. */
                        public position?: (event_store.client.streams.ReadReq.Options.IPosition|null);

                        /** AllOptions start. */
                        public start?: (event_store.client.shared.IEmpty|null);

                        /** AllOptions end. */
                        public end?: (event_store.client.shared.IEmpty|null);

                        /** AllOptions allOption. */
                        public allOption?: ("position"|"start"|"end");

                        /**
                         * Creates a new AllOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllOptions instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.IAllOptions): event_store.client.streams.ReadReq.Options.AllOptions;

                        /**
                         * Encodes the specified AllOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.AllOptions.verify|verify} messages.
                         * @param message AllOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.IAllOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.AllOptions.verify|verify} messages.
                         * @param message AllOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.IAllOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.AllOptions;

                        /**
                         * Decodes an AllOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.AllOptions;

                        /**
                         * Verifies an AllOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllOptions
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.AllOptions;

                        /**
                         * Creates a plain object from an AllOptions message. Also converts values to other types if specified.
                         * @param message AllOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.AllOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SubscriptionOptions. */
                    interface ISubscriptionOptions {
                    }

                    /** Represents a SubscriptionOptions. */
                    class SubscriptionOptions implements ISubscriptionOptions {

                        /**
                         * Constructs a new SubscriptionOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.ISubscriptionOptions);

                        /**
                         * Creates a new SubscriptionOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubscriptionOptions instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.ISubscriptionOptions): event_store.client.streams.ReadReq.Options.SubscriptionOptions;

                        /**
                         * Encodes the specified SubscriptionOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.SubscriptionOptions.verify|verify} messages.
                         * @param message SubscriptionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.ISubscriptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubscriptionOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.SubscriptionOptions.verify|verify} messages.
                         * @param message SubscriptionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.ISubscriptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubscriptionOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubscriptionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.SubscriptionOptions;

                        /**
                         * Decodes a SubscriptionOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubscriptionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.SubscriptionOptions;

                        /**
                         * Verifies a SubscriptionOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubscriptionOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubscriptionOptions
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.SubscriptionOptions;

                        /**
                         * Creates a plain object from a SubscriptionOptions message. Also converts values to other types if specified.
                         * @param message SubscriptionOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.SubscriptionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubscriptionOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Position. */
                    interface IPosition {

                        /** Position commitPosition */
                        commitPosition?: (number|Long|null);

                        /** Position preparePosition */
                        preparePosition?: (number|Long|null);
                    }

                    /** Represents a Position. */
                    class Position implements IPosition {

                        /**
                         * Constructs a new Position.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.IPosition);

                        /** Position commitPosition. */
                        public commitPosition: (number|Long);

                        /** Position preparePosition. */
                        public preparePosition: (number|Long);

                        /**
                         * Creates a new Position instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Position instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.IPosition): event_store.client.streams.ReadReq.Options.Position;

                        /**
                         * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.Position.verify|verify} messages.
                         * @param message Position message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.Position.verify|verify} messages.
                         * @param message Position message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Position message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.Position;

                        /**
                         * Decodes a Position message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.Position;

                        /**
                         * Verifies a Position message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Position message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Position
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.Position;

                        /**
                         * Creates a plain object from a Position message. Also converts values to other types if specified.
                         * @param message Position
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Position to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FilterOptions. */
                    interface IFilterOptions {

                        /** FilterOptions streamIdentifier */
                        streamIdentifier?: (event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null);

                        /** FilterOptions eventType */
                        eventType?: (event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null);

                        /** FilterOptions max */
                        max?: (number|null);

                        /** FilterOptions count */
                        count?: (event_store.client.shared.IEmpty|null);

                        /** FilterOptions checkpointIntervalMultiplier */
                        checkpointIntervalMultiplier?: (number|null);
                    }

                    /** Represents a FilterOptions. */
                    class FilterOptions implements IFilterOptions {

                        /**
                         * Constructs a new FilterOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.IFilterOptions);

                        /** FilterOptions streamIdentifier. */
                        public streamIdentifier?: (event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null);

                        /** FilterOptions eventType. */
                        public eventType?: (event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null);

                        /** FilterOptions max. */
                        public max: number;

                        /** FilterOptions count. */
                        public count?: (event_store.client.shared.IEmpty|null);

                        /** FilterOptions checkpointIntervalMultiplier. */
                        public checkpointIntervalMultiplier: number;

                        /** FilterOptions filter. */
                        public filter?: ("streamIdentifier"|"eventType");

                        /** FilterOptions window. */
                        public window?: ("max"|"count");

                        /**
                         * Creates a new FilterOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FilterOptions instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.IFilterOptions): event_store.client.streams.ReadReq.Options.FilterOptions;

                        /**
                         * Encodes the specified FilterOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.verify|verify} messages.
                         * @param message FilterOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.IFilterOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FilterOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.verify|verify} messages.
                         * @param message FilterOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.IFilterOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FilterOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FilterOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.FilterOptions;

                        /**
                         * Decodes a FilterOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FilterOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.FilterOptions;

                        /**
                         * Verifies a FilterOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FilterOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FilterOptions
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.FilterOptions;

                        /**
                         * Creates a plain object from a FilterOptions message. Also converts values to other types if specified.
                         * @param message FilterOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.FilterOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FilterOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace FilterOptions {

                        /** Properties of an Expression. */
                        interface IExpression {

                            /** Expression regex */
                            regex?: (string|null);

                            /** Expression prefix */
                            prefix?: (string[]|null);
                        }

                        /** Represents an Expression. */
                        class Expression implements IExpression {

                            /**
                             * Constructs a new Expression.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: event_store.client.streams.ReadReq.Options.FilterOptions.IExpression);

                            /** Expression regex. */
                            public regex: string;

                            /** Expression prefix. */
                            public prefix: string[];

                            /**
                             * Creates a new Expression instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Expression instance
                             */
                            public static create(properties?: event_store.client.streams.ReadReq.Options.FilterOptions.IExpression): event_store.client.streams.ReadReq.Options.FilterOptions.Expression;

                            /**
                             * Encodes the specified Expression message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify|verify} messages.
                             * @param message Expression message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: event_store.client.streams.ReadReq.Options.FilterOptions.IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Expression message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify|verify} messages.
                             * @param message Expression message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.FilterOptions.IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Expression message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Expression
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.FilterOptions.Expression;

                            /**
                             * Decodes an Expression message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Expression
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.FilterOptions.Expression;

                            /**
                             * Verifies an Expression message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Expression message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Expression
                             */
                            public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.FilterOptions.Expression;

                            /**
                             * Creates a plain object from an Expression message. Also converts values to other types if specified.
                             * @param message Expression
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: event_store.client.streams.ReadReq.Options.FilterOptions.Expression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Expression to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a UUIDOption. */
                    interface IUUIDOption {

                        /** UUIDOption structured */
                        structured?: (event_store.client.shared.IEmpty|null);

                        /** UUIDOption string */
                        string?: (event_store.client.shared.IEmpty|null);
                    }

                    /** Represents a UUIDOption. */
                    class UUIDOption implements IUUIDOption {

                        /**
                         * Constructs a new UUIDOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadReq.Options.IUUIDOption);

                        /** UUIDOption structured. */
                        public structured?: (event_store.client.shared.IEmpty|null);

                        /** UUIDOption string. */
                        public string?: (event_store.client.shared.IEmpty|null);

                        /** UUIDOption content. */
                        public content?: ("structured"|"string");

                        /**
                         * Creates a new UUIDOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UUIDOption instance
                         */
                        public static create(properties?: event_store.client.streams.ReadReq.Options.IUUIDOption): event_store.client.streams.ReadReq.Options.UUIDOption;

                        /**
                         * Encodes the specified UUIDOption message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.UUIDOption.verify|verify} messages.
                         * @param message UUIDOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadReq.Options.IUUIDOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UUIDOption message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.UUIDOption.verify|verify} messages.
                         * @param message UUIDOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadReq.Options.IUUIDOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UUIDOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UUIDOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadReq.Options.UUIDOption;

                        /**
                         * Decodes a UUIDOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UUIDOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadReq.Options.UUIDOption;

                        /**
                         * Verifies a UUIDOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UUIDOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UUIDOption
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadReq.Options.UUIDOption;

                        /**
                         * Creates a plain object from a UUIDOption message. Also converts values to other types if specified.
                         * @param message UUIDOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadReq.Options.UUIDOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UUIDOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Properties of a ReadResp. */
            interface IReadResp {

                /** ReadResp event */
                event?: (event_store.client.streams.ReadResp.IReadEvent|null);

                /** ReadResp confirmation */
                confirmation?: (event_store.client.streams.ReadResp.ISubscriptionConfirmation|null);

                /** ReadResp checkpoint */
                checkpoint?: (event_store.client.streams.ReadResp.ICheckpoint|null);

                /** ReadResp streamNotFound */
                streamNotFound?: (event_store.client.streams.ReadResp.IStreamNotFound|null);
            }

            /** Represents a ReadResp. */
            class ReadResp implements IReadResp {

                /**
                 * Constructs a new ReadResp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IReadResp);

                /** ReadResp event. */
                public event?: (event_store.client.streams.ReadResp.IReadEvent|null);

                /** ReadResp confirmation. */
                public confirmation?: (event_store.client.streams.ReadResp.ISubscriptionConfirmation|null);

                /** ReadResp checkpoint. */
                public checkpoint?: (event_store.client.streams.ReadResp.ICheckpoint|null);

                /** ReadResp streamNotFound. */
                public streamNotFound?: (event_store.client.streams.ReadResp.IStreamNotFound|null);

                /** ReadResp content. */
                public content?: ("event"|"confirmation"|"checkpoint"|"streamNotFound");

                /**
                 * Creates a new ReadResp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadResp instance
                 */
                public static create(properties?: event_store.client.streams.IReadResp): event_store.client.streams.ReadResp;

                /**
                 * Encodes the specified ReadResp message. Does not implicitly {@link event_store.client.streams.ReadResp.verify|verify} messages.
                 * @param message ReadResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IReadResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadResp message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.verify|verify} messages.
                 * @param message ReadResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IReadResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadResp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp;

                /**
                 * Decodes a ReadResp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp;

                /**
                 * Verifies a ReadResp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadResp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadResp
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp;

                /**
                 * Creates a plain object from a ReadResp message. Also converts values to other types if specified.
                 * @param message ReadResp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.ReadResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadResp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReadResp {

                /** Properties of a ReadEvent. */
                interface IReadEvent {

                    /** ReadEvent event */
                    event?: (event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null);

                    /** ReadEvent link */
                    link?: (event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null);

                    /** ReadEvent commitPosition */
                    commitPosition?: (number|Long|null);

                    /** ReadEvent noPosition */
                    noPosition?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents a ReadEvent. */
                class ReadEvent implements IReadEvent {

                    /**
                     * Constructs a new ReadEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.ReadResp.IReadEvent);

                    /** ReadEvent event. */
                    public event?: (event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null);

                    /** ReadEvent link. */
                    public link?: (event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null);

                    /** ReadEvent commitPosition. */
                    public commitPosition: (number|Long);

                    /** ReadEvent noPosition. */
                    public noPosition?: (event_store.client.shared.IEmpty|null);

                    /** ReadEvent position. */
                    public position?: ("commitPosition"|"noPosition");

                    /**
                     * Creates a new ReadEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadEvent instance
                     */
                    public static create(properties?: event_store.client.streams.ReadResp.IReadEvent): event_store.client.streams.ReadResp.ReadEvent;

                    /**
                     * Encodes the specified ReadEvent message. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.verify|verify} messages.
                     * @param message ReadEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.ReadResp.IReadEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadEvent message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.verify|verify} messages.
                     * @param message ReadEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.ReadResp.IReadEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp.ReadEvent;

                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp.ReadEvent;

                    /**
                     * Verifies a ReadEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadEvent
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp.ReadEvent;

                    /**
                     * Creates a plain object from a ReadEvent message. Also converts values to other types if specified.
                     * @param message ReadEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.ReadResp.ReadEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReadEvent {

                    /** Properties of a RecordedEvent. */
                    interface IRecordedEvent {

                        /** RecordedEvent id */
                        id?: (event_store.client.shared.IUUID|null);

                        /** RecordedEvent streamIdentifier */
                        streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                        /** RecordedEvent streamRevision */
                        streamRevision?: (number|Long|null);

                        /** RecordedEvent preparePosition */
                        preparePosition?: (number|Long|null);

                        /** RecordedEvent commitPosition */
                        commitPosition?: (number|Long|null);

                        /** RecordedEvent metadata */
                        metadata?: ({ [k: string]: string }|null);

                        /** RecordedEvent customMetadata */
                        customMetadata?: (Uint8Array|null);

                        /** RecordedEvent data */
                        data?: (Uint8Array|null);
                    }

                    /** Represents a RecordedEvent. */
                    class RecordedEvent implements IRecordedEvent {

                        /**
                         * Constructs a new RecordedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent);

                        /** RecordedEvent id. */
                        public id?: (event_store.client.shared.IUUID|null);

                        /** RecordedEvent streamIdentifier. */
                        public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                        /** RecordedEvent streamRevision. */
                        public streamRevision: (number|Long);

                        /** RecordedEvent preparePosition. */
                        public preparePosition: (number|Long);

                        /** RecordedEvent commitPosition. */
                        public commitPosition: (number|Long);

                        /** RecordedEvent metadata. */
                        public metadata: { [k: string]: string };

                        /** RecordedEvent customMetadata. */
                        public customMetadata: Uint8Array;

                        /** RecordedEvent data. */
                        public data: Uint8Array;

                        /**
                         * Creates a new RecordedEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RecordedEvent instance
                         */
                        public static create(properties?: event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent): event_store.client.streams.ReadResp.ReadEvent.RecordedEvent;

                        /**
                         * Encodes the specified RecordedEvent message. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify|verify} messages.
                         * @param message RecordedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RecordedEvent message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify|verify} messages.
                         * @param message RecordedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RecordedEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RecordedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp.ReadEvent.RecordedEvent;

                        /**
                         * Decodes a RecordedEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RecordedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp.ReadEvent.RecordedEvent;

                        /**
                         * Verifies a RecordedEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RecordedEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RecordedEvent
                         */
                        public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp.ReadEvent.RecordedEvent;

                        /**
                         * Creates a plain object from a RecordedEvent message. Also converts values to other types if specified.
                         * @param message RecordedEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: event_store.client.streams.ReadResp.ReadEvent.RecordedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RecordedEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SubscriptionConfirmation. */
                interface ISubscriptionConfirmation {

                    /** SubscriptionConfirmation subscriptionId */
                    subscriptionId?: (string|null);
                }

                /** Represents a SubscriptionConfirmation. */
                class SubscriptionConfirmation implements ISubscriptionConfirmation {

                    /**
                     * Constructs a new SubscriptionConfirmation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.ReadResp.ISubscriptionConfirmation);

                    /** SubscriptionConfirmation subscriptionId. */
                    public subscriptionId: string;

                    /**
                     * Creates a new SubscriptionConfirmation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubscriptionConfirmation instance
                     */
                    public static create(properties?: event_store.client.streams.ReadResp.ISubscriptionConfirmation): event_store.client.streams.ReadResp.SubscriptionConfirmation;

                    /**
                     * Encodes the specified SubscriptionConfirmation message. Does not implicitly {@link event_store.client.streams.ReadResp.SubscriptionConfirmation.verify|verify} messages.
                     * @param message SubscriptionConfirmation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.ReadResp.ISubscriptionConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubscriptionConfirmation message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.SubscriptionConfirmation.verify|verify} messages.
                     * @param message SubscriptionConfirmation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.ReadResp.ISubscriptionConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp.SubscriptionConfirmation;

                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp.SubscriptionConfirmation;

                    /**
                     * Verifies a SubscriptionConfirmation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubscriptionConfirmation
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp.SubscriptionConfirmation;

                    /**
                     * Creates a plain object from a SubscriptionConfirmation message. Also converts values to other types if specified.
                     * @param message SubscriptionConfirmation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.ReadResp.SubscriptionConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubscriptionConfirmation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Checkpoint. */
                interface ICheckpoint {

                    /** Checkpoint commitPosition */
                    commitPosition?: (number|Long|null);

                    /** Checkpoint preparePosition */
                    preparePosition?: (number|Long|null);
                }

                /** Represents a Checkpoint. */
                class Checkpoint implements ICheckpoint {

                    /**
                     * Constructs a new Checkpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.ReadResp.ICheckpoint);

                    /** Checkpoint commitPosition. */
                    public commitPosition: (number|Long);

                    /** Checkpoint preparePosition. */
                    public preparePosition: (number|Long);

                    /**
                     * Creates a new Checkpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Checkpoint instance
                     */
                    public static create(properties?: event_store.client.streams.ReadResp.ICheckpoint): event_store.client.streams.ReadResp.Checkpoint;

                    /**
                     * Encodes the specified Checkpoint message. Does not implicitly {@link event_store.client.streams.ReadResp.Checkpoint.verify|verify} messages.
                     * @param message Checkpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.ReadResp.ICheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Checkpoint message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.Checkpoint.verify|verify} messages.
                     * @param message Checkpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.ReadResp.ICheckpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Checkpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Checkpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp.Checkpoint;

                    /**
                     * Decodes a Checkpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Checkpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp.Checkpoint;

                    /**
                     * Verifies a Checkpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Checkpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Checkpoint
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp.Checkpoint;

                    /**
                     * Creates a plain object from a Checkpoint message. Also converts values to other types if specified.
                     * @param message Checkpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.ReadResp.Checkpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Checkpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StreamNotFound. */
                interface IStreamNotFound {

                    /** StreamNotFound streamIdentifier */
                    streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);
                }

                /** Represents a StreamNotFound. */
                class StreamNotFound implements IStreamNotFound {

                    /**
                     * Constructs a new StreamNotFound.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.ReadResp.IStreamNotFound);

                    /** StreamNotFound streamIdentifier. */
                    public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /**
                     * Creates a new StreamNotFound instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamNotFound instance
                     */
                    public static create(properties?: event_store.client.streams.ReadResp.IStreamNotFound): event_store.client.streams.ReadResp.StreamNotFound;

                    /**
                     * Encodes the specified StreamNotFound message. Does not implicitly {@link event_store.client.streams.ReadResp.StreamNotFound.verify|verify} messages.
                     * @param message StreamNotFound message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.ReadResp.IStreamNotFound, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamNotFound message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.StreamNotFound.verify|verify} messages.
                     * @param message StreamNotFound message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.ReadResp.IStreamNotFound, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamNotFound message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamNotFound
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.ReadResp.StreamNotFound;

                    /**
                     * Decodes a StreamNotFound message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamNotFound
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.ReadResp.StreamNotFound;

                    /**
                     * Verifies a StreamNotFound message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamNotFound message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamNotFound
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.ReadResp.StreamNotFound;

                    /**
                     * Creates a plain object from a StreamNotFound message. Also converts values to other types if specified.
                     * @param message StreamNotFound
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.ReadResp.StreamNotFound, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamNotFound to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an AppendReq. */
            interface IAppendReq {

                /** AppendReq options */
                options?: (event_store.client.streams.AppendReq.IOptions|null);

                /** AppendReq proposedMessage */
                proposedMessage?: (event_store.client.streams.AppendReq.IProposedMessage|null);
            }

            /** Represents an AppendReq. */
            class AppendReq implements IAppendReq {

                /**
                 * Constructs a new AppendReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IAppendReq);

                /** AppendReq options. */
                public options?: (event_store.client.streams.AppendReq.IOptions|null);

                /** AppendReq proposedMessage. */
                public proposedMessage?: (event_store.client.streams.AppendReq.IProposedMessage|null);

                /** AppendReq content. */
                public content?: ("options"|"proposedMessage");

                /**
                 * Creates a new AppendReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppendReq instance
                 */
                public static create(properties?: event_store.client.streams.IAppendReq): event_store.client.streams.AppendReq;

                /**
                 * Encodes the specified AppendReq message. Does not implicitly {@link event_store.client.streams.AppendReq.verify|verify} messages.
                 * @param message AppendReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IAppendReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppendReq message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.verify|verify} messages.
                 * @param message AppendReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IAppendReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppendReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppendReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendReq;

                /**
                 * Decodes an AppendReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppendReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendReq;

                /**
                 * Verifies an AppendReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppendReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppendReq
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendReq;

                /**
                 * Creates a plain object from an AppendReq message. Also converts values to other types if specified.
                 * @param message AppendReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.AppendReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppendReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AppendReq {

                /** Properties of an Options. */
                interface IOptions {

                    /** Options streamIdentifier */
                    streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision */
                    revision?: (number|Long|null);

                    /** Options noStream */
                    noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any */
                    any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists */
                    streamExists?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents an Options. */
                class Options implements IOptions {

                    /**
                     * Constructs a new Options.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.AppendReq.IOptions);

                    /** Options streamIdentifier. */
                    public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision. */
                    public revision: (number|Long);

                    /** Options noStream. */
                    public noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any. */
                    public any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists. */
                    public streamExists?: (event_store.client.shared.IEmpty|null);

                    /** Options expectedStreamRevision. */
                    public expectedStreamRevision?: ("revision"|"noStream"|"any"|"streamExists");

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Options instance
                     */
                    public static create(properties?: event_store.client.streams.AppendReq.IOptions): event_store.client.streams.AppendReq.Options;

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.AppendReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.AppendReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.AppendReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendReq.Options;

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendReq.Options;

                    /**
                     * Verifies an Options message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Options
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendReq.Options;

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @param message Options
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.AppendReq.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Options to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProposedMessage. */
                interface IProposedMessage {

                    /** ProposedMessage id */
                    id?: (event_store.client.shared.IUUID|null);

                    /** ProposedMessage metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** ProposedMessage customMetadata */
                    customMetadata?: (Uint8Array|null);

                    /** ProposedMessage data */
                    data?: (Uint8Array|null);
                }

                /** Represents a ProposedMessage. */
                class ProposedMessage implements IProposedMessage {

                    /**
                     * Constructs a new ProposedMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.AppendReq.IProposedMessage);

                    /** ProposedMessage id. */
                    public id?: (event_store.client.shared.IUUID|null);

                    /** ProposedMessage metadata. */
                    public metadata: { [k: string]: string };

                    /** ProposedMessage customMetadata. */
                    public customMetadata: Uint8Array;

                    /** ProposedMessage data. */
                    public data: Uint8Array;

                    /**
                     * Creates a new ProposedMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProposedMessage instance
                     */
                    public static create(properties?: event_store.client.streams.AppendReq.IProposedMessage): event_store.client.streams.AppendReq.ProposedMessage;

                    /**
                     * Encodes the specified ProposedMessage message. Does not implicitly {@link event_store.client.streams.AppendReq.ProposedMessage.verify|verify} messages.
                     * @param message ProposedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.AppendReq.IProposedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProposedMessage message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.ProposedMessage.verify|verify} messages.
                     * @param message ProposedMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.AppendReq.IProposedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProposedMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProposedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendReq.ProposedMessage;

                    /**
                     * Decodes a ProposedMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProposedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendReq.ProposedMessage;

                    /**
                     * Verifies a ProposedMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProposedMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProposedMessage
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendReq.ProposedMessage;

                    /**
                     * Creates a plain object from a ProposedMessage message. Also converts values to other types if specified.
                     * @param message ProposedMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.AppendReq.ProposedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProposedMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an AppendResp. */
            interface IAppendResp {

                /** AppendResp success */
                success?: (event_store.client.streams.AppendResp.ISuccess|null);

                /** AppendResp wrongExpectedVersion */
                wrongExpectedVersion?: (event_store.client.streams.AppendResp.IWrongExpectedVersion|null);
            }

            /** Represents an AppendResp. */
            class AppendResp implements IAppendResp {

                /**
                 * Constructs a new AppendResp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IAppendResp);

                /** AppendResp success. */
                public success?: (event_store.client.streams.AppendResp.ISuccess|null);

                /** AppendResp wrongExpectedVersion. */
                public wrongExpectedVersion?: (event_store.client.streams.AppendResp.IWrongExpectedVersion|null);

                /** AppendResp result. */
                public result?: ("success"|"wrongExpectedVersion");

                /**
                 * Creates a new AppendResp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppendResp instance
                 */
                public static create(properties?: event_store.client.streams.IAppendResp): event_store.client.streams.AppendResp;

                /**
                 * Encodes the specified AppendResp message. Does not implicitly {@link event_store.client.streams.AppendResp.verify|verify} messages.
                 * @param message AppendResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IAppendResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppendResp message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.verify|verify} messages.
                 * @param message AppendResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IAppendResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppendResp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppendResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendResp;

                /**
                 * Decodes an AppendResp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppendResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendResp;

                /**
                 * Verifies an AppendResp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppendResp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppendResp
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendResp;

                /**
                 * Creates a plain object from an AppendResp message. Also converts values to other types if specified.
                 * @param message AppendResp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.AppendResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppendResp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AppendResp {

                /** Properties of a Position. */
                interface IPosition {

                    /** Position commitPosition */
                    commitPosition?: (number|Long|null);

                    /** Position preparePosition */
                    preparePosition?: (number|Long|null);
                }

                /** Represents a Position. */
                class Position implements IPosition {

                    /**
                     * Constructs a new Position.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.AppendResp.IPosition);

                    /** Position commitPosition. */
                    public commitPosition: (number|Long);

                    /** Position preparePosition. */
                    public preparePosition: (number|Long);

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Position instance
                     */
                    public static create(properties?: event_store.client.streams.AppendResp.IPosition): event_store.client.streams.AppendResp.Position;

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.AppendResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.AppendResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.AppendResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendResp.Position;

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendResp.Position;

                    /**
                     * Verifies a Position message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Position
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendResp.Position;

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @param message Position
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.AppendResp.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Position to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Success. */
                interface ISuccess {

                    /** Success currentRevision */
                    currentRevision?: (number|Long|null);

                    /** Success noStream */
                    noStream?: (event_store.client.shared.IEmpty|null);

                    /** Success position */
                    position?: (event_store.client.streams.AppendResp.IPosition|null);

                    /** Success noPosition */
                    noPosition?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents a Success. */
                class Success implements ISuccess {

                    /**
                     * Constructs a new Success.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.AppendResp.ISuccess);

                    /** Success currentRevision. */
                    public currentRevision: (number|Long);

                    /** Success noStream. */
                    public noStream?: (event_store.client.shared.IEmpty|null);

                    /** Success position. */
                    public position?: (event_store.client.streams.AppendResp.IPosition|null);

                    /** Success noPosition. */
                    public noPosition?: (event_store.client.shared.IEmpty|null);

                    /** Success currentRevisionOption. */
                    public currentRevisionOption?: ("currentRevision"|"noStream");

                    /** Success positionOption. */
                    public positionOption?: ("position"|"noPosition");

                    /**
                     * Creates a new Success instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Success instance
                     */
                    public static create(properties?: event_store.client.streams.AppendResp.ISuccess): event_store.client.streams.AppendResp.Success;

                    /**
                     * Encodes the specified Success message. Does not implicitly {@link event_store.client.streams.AppendResp.Success.verify|verify} messages.
                     * @param message Success message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.AppendResp.ISuccess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Success message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.Success.verify|verify} messages.
                     * @param message Success message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.AppendResp.ISuccess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Success message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Success
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendResp.Success;

                    /**
                     * Decodes a Success message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Success
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendResp.Success;

                    /**
                     * Verifies a Success message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Success message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Success
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendResp.Success;

                    /**
                     * Creates a plain object from a Success message. Also converts values to other types if specified.
                     * @param message Success
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.AppendResp.Success, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Success to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WrongExpectedVersion. */
                interface IWrongExpectedVersion {

                    /** WrongExpectedVersion currentRevision_20_6_0 */
                    currentRevision_20_6_0?: (number|Long|null);

                    /** WrongExpectedVersion noStream_20_6_0 */
                    noStream_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedRevision_20_6_0 */
                    expectedRevision_20_6_0?: (number|Long|null);

                    /** WrongExpectedVersion any_20_6_0 */
                    any_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion streamExists_20_6_0 */
                    streamExists_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion currentRevision */
                    currentRevision?: (number|Long|null);

                    /** WrongExpectedVersion currentNoStream */
                    currentNoStream?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedRevision */
                    expectedRevision?: (number|Long|null);

                    /** WrongExpectedVersion expectedAny */
                    expectedAny?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedStreamExists */
                    expectedStreamExists?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedNoStream */
                    expectedNoStream?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents a WrongExpectedVersion. */
                class WrongExpectedVersion implements IWrongExpectedVersion {

                    /**
                     * Constructs a new WrongExpectedVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.AppendResp.IWrongExpectedVersion);

                    /** WrongExpectedVersion currentRevision_20_6_0. */
                    public currentRevision_20_6_0: (number|Long);

                    /** WrongExpectedVersion noStream_20_6_0. */
                    public noStream_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedRevision_20_6_0. */
                    public expectedRevision_20_6_0: (number|Long);

                    /** WrongExpectedVersion any_20_6_0. */
                    public any_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion streamExists_20_6_0. */
                    public streamExists_20_6_0?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion currentRevision. */
                    public currentRevision: (number|Long);

                    /** WrongExpectedVersion currentNoStream. */
                    public currentNoStream?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedRevision. */
                    public expectedRevision: (number|Long);

                    /** WrongExpectedVersion expectedAny. */
                    public expectedAny?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedStreamExists. */
                    public expectedStreamExists?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion expectedNoStream. */
                    public expectedNoStream?: (event_store.client.shared.IEmpty|null);

                    /** WrongExpectedVersion currentRevisionOption_20_6_0. */
                    public currentRevisionOption_20_6_0?: ("currentRevision_20_6_0"|"noStream_20_6_0");

                    /** WrongExpectedVersion expectedRevisionOption_20_6_0. */
                    public expectedRevisionOption_20_6_0?: ("expectedRevision_20_6_0"|"any_20_6_0"|"streamExists_20_6_0");

                    /** WrongExpectedVersion currentRevisionOption. */
                    public currentRevisionOption?: ("currentRevision"|"currentNoStream");

                    /** WrongExpectedVersion expectedRevisionOption. */
                    public expectedRevisionOption?: ("expectedRevision"|"expectedAny"|"expectedStreamExists"|"expectedNoStream");

                    /**
                     * Creates a new WrongExpectedVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WrongExpectedVersion instance
                     */
                    public static create(properties?: event_store.client.streams.AppendResp.IWrongExpectedVersion): event_store.client.streams.AppendResp.WrongExpectedVersion;

                    /**
                     * Encodes the specified WrongExpectedVersion message. Does not implicitly {@link event_store.client.streams.AppendResp.WrongExpectedVersion.verify|verify} messages.
                     * @param message WrongExpectedVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.AppendResp.IWrongExpectedVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WrongExpectedVersion message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.WrongExpectedVersion.verify|verify} messages.
                     * @param message WrongExpectedVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.AppendResp.IWrongExpectedVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WrongExpectedVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WrongExpectedVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.AppendResp.WrongExpectedVersion;

                    /**
                     * Decodes a WrongExpectedVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WrongExpectedVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.AppendResp.WrongExpectedVersion;

                    /**
                     * Verifies a WrongExpectedVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WrongExpectedVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WrongExpectedVersion
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.AppendResp.WrongExpectedVersion;

                    /**
                     * Creates a plain object from a WrongExpectedVersion message. Also converts values to other types if specified.
                     * @param message WrongExpectedVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.AppendResp.WrongExpectedVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WrongExpectedVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a DeleteReq. */
            interface IDeleteReq {

                /** DeleteReq options */
                options?: (event_store.client.streams.DeleteReq.IOptions|null);
            }

            /** Represents a DeleteReq. */
            class DeleteReq implements IDeleteReq {

                /**
                 * Constructs a new DeleteReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IDeleteReq);

                /** DeleteReq options. */
                public options?: (event_store.client.streams.DeleteReq.IOptions|null);

                /**
                 * Creates a new DeleteReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteReq instance
                 */
                public static create(properties?: event_store.client.streams.IDeleteReq): event_store.client.streams.DeleteReq;

                /**
                 * Encodes the specified DeleteReq message. Does not implicitly {@link event_store.client.streams.DeleteReq.verify|verify} messages.
                 * @param message DeleteReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IDeleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteReq message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteReq.verify|verify} messages.
                 * @param message DeleteReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IDeleteReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.DeleteReq;

                /**
                 * Decodes a DeleteReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.DeleteReq;

                /**
                 * Verifies a DeleteReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteReq
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.DeleteReq;

                /**
                 * Creates a plain object from a DeleteReq message. Also converts values to other types if specified.
                 * @param message DeleteReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.DeleteReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DeleteReq {

                /** Properties of an Options. */
                interface IOptions {

                    /** Options streamIdentifier */
                    streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision */
                    revision?: (number|Long|null);

                    /** Options noStream */
                    noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any */
                    any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists */
                    streamExists?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents an Options. */
                class Options implements IOptions {

                    /**
                     * Constructs a new Options.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.DeleteReq.IOptions);

                    /** Options streamIdentifier. */
                    public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision. */
                    public revision: (number|Long);

                    /** Options noStream. */
                    public noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any. */
                    public any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists. */
                    public streamExists?: (event_store.client.shared.IEmpty|null);

                    /** Options expectedStreamRevision. */
                    public expectedStreamRevision?: ("revision"|"noStream"|"any"|"streamExists");

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Options instance
                     */
                    public static create(properties?: event_store.client.streams.DeleteReq.IOptions): event_store.client.streams.DeleteReq.Options;

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.DeleteReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.DeleteReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.DeleteReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.DeleteReq.Options;

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.DeleteReq.Options;

                    /**
                     * Verifies an Options message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Options
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.DeleteReq.Options;

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @param message Options
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.DeleteReq.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Options to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a DeleteResp. */
            interface IDeleteResp {

                /** DeleteResp position */
                position?: (event_store.client.streams.DeleteResp.IPosition|null);

                /** DeleteResp noPosition */
                noPosition?: (event_store.client.shared.IEmpty|null);
            }

            /** Represents a DeleteResp. */
            class DeleteResp implements IDeleteResp {

                /**
                 * Constructs a new DeleteResp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.IDeleteResp);

                /** DeleteResp position. */
                public position?: (event_store.client.streams.DeleteResp.IPosition|null);

                /** DeleteResp noPosition. */
                public noPosition?: (event_store.client.shared.IEmpty|null);

                /** DeleteResp positionOption. */
                public positionOption?: ("position"|"noPosition");

                /**
                 * Creates a new DeleteResp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteResp instance
                 */
                public static create(properties?: event_store.client.streams.IDeleteResp): event_store.client.streams.DeleteResp;

                /**
                 * Encodes the specified DeleteResp message. Does not implicitly {@link event_store.client.streams.DeleteResp.verify|verify} messages.
                 * @param message DeleteResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.IDeleteResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteResp message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteResp.verify|verify} messages.
                 * @param message DeleteResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.IDeleteResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteResp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.DeleteResp;

                /**
                 * Decodes a DeleteResp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.DeleteResp;

                /**
                 * Verifies a DeleteResp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteResp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteResp
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.DeleteResp;

                /**
                 * Creates a plain object from a DeleteResp message. Also converts values to other types if specified.
                 * @param message DeleteResp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.DeleteResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteResp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DeleteResp {

                /** Properties of a Position. */
                interface IPosition {

                    /** Position commitPosition */
                    commitPosition?: (number|Long|null);

                    /** Position preparePosition */
                    preparePosition?: (number|Long|null);
                }

                /** Represents a Position. */
                class Position implements IPosition {

                    /**
                     * Constructs a new Position.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.DeleteResp.IPosition);

                    /** Position commitPosition. */
                    public commitPosition: (number|Long);

                    /** Position preparePosition. */
                    public preparePosition: (number|Long);

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Position instance
                     */
                    public static create(properties?: event_store.client.streams.DeleteResp.IPosition): event_store.client.streams.DeleteResp.Position;

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.DeleteResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.DeleteResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.DeleteResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.DeleteResp.Position;

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.DeleteResp.Position;

                    /**
                     * Verifies a Position message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Position
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.DeleteResp.Position;

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @param message Position
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.DeleteResp.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Position to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a TombstoneReq. */
            interface ITombstoneReq {

                /** TombstoneReq options */
                options?: (event_store.client.streams.TombstoneReq.IOptions|null);
            }

            /** Represents a TombstoneReq. */
            class TombstoneReq implements ITombstoneReq {

                /**
                 * Constructs a new TombstoneReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.ITombstoneReq);

                /** TombstoneReq options. */
                public options?: (event_store.client.streams.TombstoneReq.IOptions|null);

                /**
                 * Creates a new TombstoneReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TombstoneReq instance
                 */
                public static create(properties?: event_store.client.streams.ITombstoneReq): event_store.client.streams.TombstoneReq;

                /**
                 * Encodes the specified TombstoneReq message. Does not implicitly {@link event_store.client.streams.TombstoneReq.verify|verify} messages.
                 * @param message TombstoneReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.ITombstoneReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TombstoneReq message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneReq.verify|verify} messages.
                 * @param message TombstoneReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.ITombstoneReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TombstoneReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TombstoneReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.TombstoneReq;

                /**
                 * Decodes a TombstoneReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TombstoneReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.TombstoneReq;

                /**
                 * Verifies a TombstoneReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TombstoneReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TombstoneReq
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.TombstoneReq;

                /**
                 * Creates a plain object from a TombstoneReq message. Also converts values to other types if specified.
                 * @param message TombstoneReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.TombstoneReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TombstoneReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace TombstoneReq {

                /** Properties of an Options. */
                interface IOptions {

                    /** Options streamIdentifier */
                    streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision */
                    revision?: (number|Long|null);

                    /** Options noStream */
                    noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any */
                    any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists */
                    streamExists?: (event_store.client.shared.IEmpty|null);
                }

                /** Represents an Options. */
                class Options implements IOptions {

                    /**
                     * Constructs a new Options.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.TombstoneReq.IOptions);

                    /** Options streamIdentifier. */
                    public streamIdentifier?: (event_store.client.shared.IStreamIdentifier|null);

                    /** Options revision. */
                    public revision: (number|Long);

                    /** Options noStream. */
                    public noStream?: (event_store.client.shared.IEmpty|null);

                    /** Options any. */
                    public any?: (event_store.client.shared.IEmpty|null);

                    /** Options streamExists. */
                    public streamExists?: (event_store.client.shared.IEmpty|null);

                    /** Options expectedStreamRevision. */
                    public expectedStreamRevision?: ("revision"|"noStream"|"any"|"streamExists");

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Options instance
                     */
                    public static create(properties?: event_store.client.streams.TombstoneReq.IOptions): event_store.client.streams.TombstoneReq.Options;

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.TombstoneReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.TombstoneReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneReq.Options.verify|verify} messages.
                     * @param message Options message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.TombstoneReq.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.TombstoneReq.Options;

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.TombstoneReq.Options;

                    /**
                     * Verifies an Options message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Options
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.TombstoneReq.Options;

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @param message Options
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.TombstoneReq.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Options to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a TombstoneResp. */
            interface ITombstoneResp {

                /** TombstoneResp position */
                position?: (event_store.client.streams.TombstoneResp.IPosition|null);

                /** TombstoneResp noPosition */
                noPosition?: (event_store.client.shared.IEmpty|null);
            }

            /** Represents a TombstoneResp. */
            class TombstoneResp implements ITombstoneResp {

                /**
                 * Constructs a new TombstoneResp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: event_store.client.streams.ITombstoneResp);

                /** TombstoneResp position. */
                public position?: (event_store.client.streams.TombstoneResp.IPosition|null);

                /** TombstoneResp noPosition. */
                public noPosition?: (event_store.client.shared.IEmpty|null);

                /** TombstoneResp positionOption. */
                public positionOption?: ("position"|"noPosition");

                /**
                 * Creates a new TombstoneResp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TombstoneResp instance
                 */
                public static create(properties?: event_store.client.streams.ITombstoneResp): event_store.client.streams.TombstoneResp;

                /**
                 * Encodes the specified TombstoneResp message. Does not implicitly {@link event_store.client.streams.TombstoneResp.verify|verify} messages.
                 * @param message TombstoneResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: event_store.client.streams.ITombstoneResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TombstoneResp message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneResp.verify|verify} messages.
                 * @param message TombstoneResp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: event_store.client.streams.ITombstoneResp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TombstoneResp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TombstoneResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.TombstoneResp;

                /**
                 * Decodes a TombstoneResp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TombstoneResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.TombstoneResp;

                /**
                 * Verifies a TombstoneResp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TombstoneResp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TombstoneResp
                 */
                public static fromObject(object: { [k: string]: any }): event_store.client.streams.TombstoneResp;

                /**
                 * Creates a plain object from a TombstoneResp message. Also converts values to other types if specified.
                 * @param message TombstoneResp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: event_store.client.streams.TombstoneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TombstoneResp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace TombstoneResp {

                /** Properties of a Position. */
                interface IPosition {

                    /** Position commitPosition */
                    commitPosition?: (number|Long|null);

                    /** Position preparePosition */
                    preparePosition?: (number|Long|null);
                }

                /** Represents a Position. */
                class Position implements IPosition {

                    /**
                     * Constructs a new Position.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: event_store.client.streams.TombstoneResp.IPosition);

                    /** Position commitPosition. */
                    public commitPosition: (number|Long);

                    /** Position preparePosition. */
                    public preparePosition: (number|Long);

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Position instance
                     */
                    public static create(properties?: event_store.client.streams.TombstoneResp.IPosition): event_store.client.streams.TombstoneResp.Position;

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.TombstoneResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: event_store.client.streams.TombstoneResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneResp.Position.verify|verify} messages.
                     * @param message Position message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: event_store.client.streams.TombstoneResp.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event_store.client.streams.TombstoneResp.Position;

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event_store.client.streams.TombstoneResp.Position;

                    /**
                     * Verifies a Position message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Position
                     */
                    public static fromObject(object: { [k: string]: any }): event_store.client.streams.TombstoneResp.Position;

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @param message Position
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: event_store.client.streams.TombstoneResp.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Position to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
