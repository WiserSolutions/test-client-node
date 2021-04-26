/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.event_store = (function() {

    /**
     * Namespace event_store.
     * @exports event_store
     * @namespace
     */
    var event_store = {};

    event_store.client = (function() {

        /**
         * Namespace client.
         * @memberof event_store
         * @namespace
         */
        var client = {};

        client.gossip = (function() {

            /**
             * Namespace gossip.
             * @memberof event_store.client
             * @namespace
             */
            var gossip = {};

            gossip.Gossip = (function() {

                /**
                 * Constructs a new Gossip service.
                 * @memberof event_store.client.gossip
                 * @classdesc Represents a Gossip
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Gossip(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Gossip.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gossip;

                /**
                 * Creates new Gossip service using the specified rpc implementation.
                 * @function create
                 * @memberof event_store.client.gossip.Gossip
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Gossip} RPC service. Useful where requests and/or responses are streamed.
                 */
                Gossip.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link event_store.client.gossip.Gossip#read}.
                 * @memberof event_store.client.gossip.Gossip
                 * @typedef ReadCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {event_store.client.gossip.ClusterInfo} [response] ClusterInfo
                 */

                /**
                 * Calls Read.
                 * @function read
                 * @memberof event_store.client.gossip.Gossip
                 * @instance
                 * @param {event_store.client.shared.IEmpty} request Empty message or plain object
                 * @param {event_store.client.gossip.Gossip.ReadCallback} callback Node-style callback called with the error, if any, and ClusterInfo
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Gossip.prototype.read = function read(request, callback) {
                    return this.rpcCall(read, $root.event_store.client.shared.Empty, $root.event_store.client.gossip.ClusterInfo, request, callback);
                }, "name", { value: "Read" });

                /**
                 * Calls Read.
                 * @function read
                 * @memberof event_store.client.gossip.Gossip
                 * @instance
                 * @param {event_store.client.shared.IEmpty} request Empty message or plain object
                 * @returns {Promise<event_store.client.gossip.ClusterInfo>} Promise
                 * @variation 2
                 */

                return Gossip;
            })();

            gossip.ClusterInfo = (function() {

                /**
                 * Properties of a ClusterInfo.
                 * @memberof event_store.client.gossip
                 * @interface IClusterInfo
                 * @property {Array.<event_store.client.gossip.IMemberInfo>|null} [members] ClusterInfo members
                 */

                /**
                 * Constructs a new ClusterInfo.
                 * @memberof event_store.client.gossip
                 * @classdesc Represents a ClusterInfo.
                 * @implements IClusterInfo
                 * @constructor
                 * @param {event_store.client.gossip.IClusterInfo=} [properties] Properties to set
                 */
                function ClusterInfo(properties) {
                    this.members = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClusterInfo members.
                 * @member {Array.<event_store.client.gossip.IMemberInfo>} members
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @instance
                 */
                ClusterInfo.prototype.members = $util.emptyArray;

                /**
                 * Creates a new ClusterInfo instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {event_store.client.gossip.IClusterInfo=} [properties] Properties to set
                 * @returns {event_store.client.gossip.ClusterInfo} ClusterInfo instance
                 */
                ClusterInfo.create = function create(properties) {
                    return new ClusterInfo(properties);
                };

                /**
                 * Encodes the specified ClusterInfo message. Does not implicitly {@link event_store.client.gossip.ClusterInfo.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {event_store.client.gossip.IClusterInfo} message ClusterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClusterInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.members != null && message.members.length)
                        for (var i = 0; i < message.members.length; ++i)
                            $root.event_store.client.gossip.MemberInfo.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ClusterInfo message, length delimited. Does not implicitly {@link event_store.client.gossip.ClusterInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {event_store.client.gossip.IClusterInfo} message ClusterInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClusterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClusterInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.gossip.ClusterInfo} ClusterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClusterInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.gossip.ClusterInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.members && message.members.length))
                                message.members = [];
                            message.members.push($root.event_store.client.gossip.MemberInfo.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClusterInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.gossip.ClusterInfo} ClusterInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClusterInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClusterInfo message.
                 * @function verify
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClusterInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.members != null && message.hasOwnProperty("members")) {
                        if (!Array.isArray(message.members))
                            return "members: array expected";
                        for (var i = 0; i < message.members.length; ++i) {
                            var error = $root.event_store.client.gossip.MemberInfo.verify(message.members[i]);
                            if (error)
                                return "members." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ClusterInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.gossip.ClusterInfo} ClusterInfo
                 */
                ClusterInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.gossip.ClusterInfo)
                        return object;
                    var message = new $root.event_store.client.gossip.ClusterInfo();
                    if (object.members) {
                        if (!Array.isArray(object.members))
                            throw TypeError(".event_store.client.gossip.ClusterInfo.members: array expected");
                        message.members = [];
                        for (var i = 0; i < object.members.length; ++i) {
                            if (typeof object.members[i] !== "object")
                                throw TypeError(".event_store.client.gossip.ClusterInfo.members: object expected");
                            message.members[i] = $root.event_store.client.gossip.MemberInfo.fromObject(object.members[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ClusterInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @static
                 * @param {event_store.client.gossip.ClusterInfo} message ClusterInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClusterInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.members = [];
                    if (message.members && message.members.length) {
                        object.members = [];
                        for (var j = 0; j < message.members.length; ++j)
                            object.members[j] = $root.event_store.client.gossip.MemberInfo.toObject(message.members[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ClusterInfo to JSON.
                 * @function toJSON
                 * @memberof event_store.client.gossip.ClusterInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClusterInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ClusterInfo;
            })();

            gossip.EndPoint = (function() {

                /**
                 * Properties of an EndPoint.
                 * @memberof event_store.client.gossip
                 * @interface IEndPoint
                 * @property {string|null} [address] EndPoint address
                 * @property {number|null} [port] EndPoint port
                 */

                /**
                 * Constructs a new EndPoint.
                 * @memberof event_store.client.gossip
                 * @classdesc Represents an EndPoint.
                 * @implements IEndPoint
                 * @constructor
                 * @param {event_store.client.gossip.IEndPoint=} [properties] Properties to set
                 */
                function EndPoint(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EndPoint address.
                 * @member {string} address
                 * @memberof event_store.client.gossip.EndPoint
                 * @instance
                 */
                EndPoint.prototype.address = "";

                /**
                 * EndPoint port.
                 * @member {number} port
                 * @memberof event_store.client.gossip.EndPoint
                 * @instance
                 */
                EndPoint.prototype.port = 0;

                /**
                 * Creates a new EndPoint instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {event_store.client.gossip.IEndPoint=} [properties] Properties to set
                 * @returns {event_store.client.gossip.EndPoint} EndPoint instance
                 */
                EndPoint.create = function create(properties) {
                    return new EndPoint(properties);
                };

                /**
                 * Encodes the specified EndPoint message. Does not implicitly {@link event_store.client.gossip.EndPoint.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {event_store.client.gossip.IEndPoint} message EndPoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EndPoint.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                    if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
                    return writer;
                };

                /**
                 * Encodes the specified EndPoint message, length delimited. Does not implicitly {@link event_store.client.gossip.EndPoint.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {event_store.client.gossip.IEndPoint} message EndPoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EndPoint.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EndPoint message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.gossip.EndPoint} EndPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EndPoint.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.gossip.EndPoint();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.address = reader.string();
                            break;
                        case 2:
                            message.port = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EndPoint message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.gossip.EndPoint} EndPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EndPoint.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EndPoint message.
                 * @function verify
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EndPoint.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.address != null && message.hasOwnProperty("address"))
                        if (!$util.isString(message.address))
                            return "address: string expected";
                    if (message.port != null && message.hasOwnProperty("port"))
                        if (!$util.isInteger(message.port))
                            return "port: integer expected";
                    return null;
                };

                /**
                 * Creates an EndPoint message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.gossip.EndPoint} EndPoint
                 */
                EndPoint.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.gossip.EndPoint)
                        return object;
                    var message = new $root.event_store.client.gossip.EndPoint();
                    if (object.address != null)
                        message.address = String(object.address);
                    if (object.port != null)
                        message.port = object.port >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EndPoint message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.gossip.EndPoint
                 * @static
                 * @param {event_store.client.gossip.EndPoint} message EndPoint
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EndPoint.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.address = "";
                        object.port = 0;
                    }
                    if (message.address != null && message.hasOwnProperty("address"))
                        object.address = message.address;
                    if (message.port != null && message.hasOwnProperty("port"))
                        object.port = message.port;
                    return object;
                };

                /**
                 * Converts this EndPoint to JSON.
                 * @function toJSON
                 * @memberof event_store.client.gossip.EndPoint
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EndPoint.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EndPoint;
            })();

            gossip.MemberInfo = (function() {

                /**
                 * Properties of a MemberInfo.
                 * @memberof event_store.client.gossip
                 * @interface IMemberInfo
                 * @property {event_store.client.shared.IUUID|null} [instanceId] MemberInfo instanceId
                 * @property {number|Long|null} [timeStamp] MemberInfo timeStamp
                 * @property {event_store.client.gossip.MemberInfo.VNodeState|null} [state] MemberInfo state
                 * @property {boolean|null} [isAlive] MemberInfo isAlive
                 * @property {event_store.client.gossip.IEndPoint|null} [httpEndPoint] MemberInfo httpEndPoint
                 */

                /**
                 * Constructs a new MemberInfo.
                 * @memberof event_store.client.gossip
                 * @classdesc Represents a MemberInfo.
                 * @implements IMemberInfo
                 * @constructor
                 * @param {event_store.client.gossip.IMemberInfo=} [properties] Properties to set
                 */
                function MemberInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MemberInfo instanceId.
                 * @member {event_store.client.shared.IUUID|null|undefined} instanceId
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 */
                MemberInfo.prototype.instanceId = null;

                /**
                 * MemberInfo timeStamp.
                 * @member {number|Long} timeStamp
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 */
                MemberInfo.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * MemberInfo state.
                 * @member {event_store.client.gossip.MemberInfo.VNodeState} state
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 */
                MemberInfo.prototype.state = 0;

                /**
                 * MemberInfo isAlive.
                 * @member {boolean} isAlive
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 */
                MemberInfo.prototype.isAlive = false;

                /**
                 * MemberInfo httpEndPoint.
                 * @member {event_store.client.gossip.IEndPoint|null|undefined} httpEndPoint
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 */
                MemberInfo.prototype.httpEndPoint = null;

                /**
                 * Creates a new MemberInfo instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {event_store.client.gossip.IMemberInfo=} [properties] Properties to set
                 * @returns {event_store.client.gossip.MemberInfo} MemberInfo instance
                 */
                MemberInfo.create = function create(properties) {
                    return new MemberInfo(properties);
                };

                /**
                 * Encodes the specified MemberInfo message. Does not implicitly {@link event_store.client.gossip.MemberInfo.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {event_store.client.gossip.IMemberInfo} message MemberInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MemberInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                        $root.event_store.client.shared.UUID.encode(message.instanceId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timeStamp);
                    if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
                    if (message.isAlive != null && Object.hasOwnProperty.call(message, "isAlive"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAlive);
                    if (message.httpEndPoint != null && Object.hasOwnProperty.call(message, "httpEndPoint"))
                        $root.event_store.client.gossip.EndPoint.encode(message.httpEndPoint, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link event_store.client.gossip.MemberInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {event_store.client.gossip.IMemberInfo} message MemberInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MemberInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.gossip.MemberInfo} MemberInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MemberInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.gossip.MemberInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.instanceId = $root.event_store.client.shared.UUID.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.timeStamp = reader.int64();
                            break;
                        case 3:
                            message.state = reader.int32();
                            break;
                        case 4:
                            message.isAlive = reader.bool();
                            break;
                        case 5:
                            message.httpEndPoint = $root.event_store.client.gossip.EndPoint.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.gossip.MemberInfo} MemberInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MemberInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MemberInfo message.
                 * @function verify
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MemberInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.instanceId != null && message.hasOwnProperty("instanceId")) {
                        var error = $root.event_store.client.shared.UUID.verify(message.instanceId);
                        if (error)
                            return "instanceId." + error;
                    }
                    if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                        if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                            return "timeStamp: integer|Long expected";
                    if (message.state != null && message.hasOwnProperty("state"))
                        switch (message.state) {
                        default:
                            return "state: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                            break;
                        }
                    if (message.isAlive != null && message.hasOwnProperty("isAlive"))
                        if (typeof message.isAlive !== "boolean")
                            return "isAlive: boolean expected";
                    if (message.httpEndPoint != null && message.hasOwnProperty("httpEndPoint")) {
                        var error = $root.event_store.client.gossip.EndPoint.verify(message.httpEndPoint);
                        if (error)
                            return "httpEndPoint." + error;
                    }
                    return null;
                };

                /**
                 * Creates a MemberInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.gossip.MemberInfo} MemberInfo
                 */
                MemberInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.gossip.MemberInfo)
                        return object;
                    var message = new $root.event_store.client.gossip.MemberInfo();
                    if (object.instanceId != null) {
                        if (typeof object.instanceId !== "object")
                            throw TypeError(".event_store.client.gossip.MemberInfo.instanceId: object expected");
                        message.instanceId = $root.event_store.client.shared.UUID.fromObject(object.instanceId);
                    }
                    if (object.timeStamp != null)
                        if ($util.Long)
                            (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
                        else if (typeof object.timeStamp === "string")
                            message.timeStamp = parseInt(object.timeStamp, 10);
                        else if (typeof object.timeStamp === "number")
                            message.timeStamp = object.timeStamp;
                        else if (typeof object.timeStamp === "object")
                            message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
                    switch (object.state) {
                    case "Initializing":
                    case 0:
                        message.state = 0;
                        break;
                    case "DiscoverLeader":
                    case 1:
                        message.state = 1;
                        break;
                    case "Unknown":
                    case 2:
                        message.state = 2;
                        break;
                    case "PreReplica":
                    case 3:
                        message.state = 3;
                        break;
                    case "CatchingUp":
                    case 4:
                        message.state = 4;
                        break;
                    case "Clone":
                    case 5:
                        message.state = 5;
                        break;
                    case "Follower":
                    case 6:
                        message.state = 6;
                        break;
                    case "PreLeader":
                    case 7:
                        message.state = 7;
                        break;
                    case "Leader":
                    case 8:
                        message.state = 8;
                        break;
                    case "Manager":
                    case 9:
                        message.state = 9;
                        break;
                    case "ShuttingDown":
                    case 10:
                        message.state = 10;
                        break;
                    case "Shutdown":
                    case 11:
                        message.state = 11;
                        break;
                    case "ReadOnlyLeaderless":
                    case 12:
                        message.state = 12;
                        break;
                    case "PreReadOnlyReplica":
                    case 13:
                        message.state = 13;
                        break;
                    case "ReadOnlyReplica":
                    case 14:
                        message.state = 14;
                        break;
                    case "ResigningLeader":
                    case 15:
                        message.state = 15;
                        break;
                    }
                    if (object.isAlive != null)
                        message.isAlive = Boolean(object.isAlive);
                    if (object.httpEndPoint != null) {
                        if (typeof object.httpEndPoint !== "object")
                            throw TypeError(".event_store.client.gossip.MemberInfo.httpEndPoint: object expected");
                        message.httpEndPoint = $root.event_store.client.gossip.EndPoint.fromObject(object.httpEndPoint);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MemberInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.gossip.MemberInfo
                 * @static
                 * @param {event_store.client.gossip.MemberInfo} message MemberInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MemberInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.instanceId = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.timeStamp = options.longs === String ? "0" : 0;
                        object.state = options.enums === String ? "Initializing" : 0;
                        object.isAlive = false;
                        object.httpEndPoint = null;
                    }
                    if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                        object.instanceId = $root.event_store.client.shared.UUID.toObject(message.instanceId, options);
                    if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                        if (typeof message.timeStamp === "number")
                            object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
                        else
                            object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
                    if (message.state != null && message.hasOwnProperty("state"))
                        object.state = options.enums === String ? $root.event_store.client.gossip.MemberInfo.VNodeState[message.state] : message.state;
                    if (message.isAlive != null && message.hasOwnProperty("isAlive"))
                        object.isAlive = message.isAlive;
                    if (message.httpEndPoint != null && message.hasOwnProperty("httpEndPoint"))
                        object.httpEndPoint = $root.event_store.client.gossip.EndPoint.toObject(message.httpEndPoint, options);
                    return object;
                };

                /**
                 * Converts this MemberInfo to JSON.
                 * @function toJSON
                 * @memberof event_store.client.gossip.MemberInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MemberInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * VNodeState enum.
                 * @name event_store.client.gossip.MemberInfo.VNodeState
                 * @enum {number}
                 * @property {number} Initializing=0 Initializing value
                 * @property {number} DiscoverLeader=1 DiscoverLeader value
                 * @property {number} Unknown=2 Unknown value
                 * @property {number} PreReplica=3 PreReplica value
                 * @property {number} CatchingUp=4 CatchingUp value
                 * @property {number} Clone=5 Clone value
                 * @property {number} Follower=6 Follower value
                 * @property {number} PreLeader=7 PreLeader value
                 * @property {number} Leader=8 Leader value
                 * @property {number} Manager=9 Manager value
                 * @property {number} ShuttingDown=10 ShuttingDown value
                 * @property {number} Shutdown=11 Shutdown value
                 * @property {number} ReadOnlyLeaderless=12 ReadOnlyLeaderless value
                 * @property {number} PreReadOnlyReplica=13 PreReadOnlyReplica value
                 * @property {number} ReadOnlyReplica=14 ReadOnlyReplica value
                 * @property {number} ResigningLeader=15 ResigningLeader value
                 */
                MemberInfo.VNodeState = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "Initializing"] = 0;
                    values[valuesById[1] = "DiscoverLeader"] = 1;
                    values[valuesById[2] = "Unknown"] = 2;
                    values[valuesById[3] = "PreReplica"] = 3;
                    values[valuesById[4] = "CatchingUp"] = 4;
                    values[valuesById[5] = "Clone"] = 5;
                    values[valuesById[6] = "Follower"] = 6;
                    values[valuesById[7] = "PreLeader"] = 7;
                    values[valuesById[8] = "Leader"] = 8;
                    values[valuesById[9] = "Manager"] = 9;
                    values[valuesById[10] = "ShuttingDown"] = 10;
                    values[valuesById[11] = "Shutdown"] = 11;
                    values[valuesById[12] = "ReadOnlyLeaderless"] = 12;
                    values[valuesById[13] = "PreReadOnlyReplica"] = 13;
                    values[valuesById[14] = "ReadOnlyReplica"] = 14;
                    values[valuesById[15] = "ResigningLeader"] = 15;
                    return values;
                })();

                return MemberInfo;
            })();

            return gossip;
        })();

        client.shared = (function() {

            /**
             * Namespace shared.
             * @memberof event_store.client
             * @namespace
             */
            var shared = {};

            shared.UUID = (function() {

                /**
                 * Properties of a UUID.
                 * @memberof event_store.client.shared
                 * @interface IUUID
                 * @property {event_store.client.shared.UUID.IStructured|null} [structured] UUID structured
                 * @property {string|null} [string] UUID string
                 */

                /**
                 * Constructs a new UUID.
                 * @memberof event_store.client.shared
                 * @classdesc Represents a UUID.
                 * @implements IUUID
                 * @constructor
                 * @param {event_store.client.shared.IUUID=} [properties] Properties to set
                 */
                function UUID(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UUID structured.
                 * @member {event_store.client.shared.UUID.IStructured|null|undefined} structured
                 * @memberof event_store.client.shared.UUID
                 * @instance
                 */
                UUID.prototype.structured = null;

                /**
                 * UUID string.
                 * @member {string} string
                 * @memberof event_store.client.shared.UUID
                 * @instance
                 */
                UUID.prototype.string = "";

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * UUID value.
                 * @member {"structured"|"string"|undefined} value
                 * @memberof event_store.client.shared.UUID
                 * @instance
                 */
                Object.defineProperty(UUID.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["structured", "string"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new UUID instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {event_store.client.shared.IUUID=} [properties] Properties to set
                 * @returns {event_store.client.shared.UUID} UUID instance
                 */
                UUID.create = function create(properties) {
                    return new UUID(properties);
                };

                /**
                 * Encodes the specified UUID message. Does not implicitly {@link event_store.client.shared.UUID.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {event_store.client.shared.IUUID} message UUID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UUID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.structured != null && Object.hasOwnProperty.call(message, "structured"))
                        $root.event_store.client.shared.UUID.Structured.encode(message.structured, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.string);
                    return writer;
                };

                /**
                 * Encodes the specified UUID message, length delimited. Does not implicitly {@link event_store.client.shared.UUID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {event_store.client.shared.IUUID} message UUID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UUID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UUID message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.shared.UUID} UUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UUID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.shared.UUID();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.structured = $root.event_store.client.shared.UUID.Structured.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.string = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UUID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.shared.UUID} UUID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UUID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UUID message.
                 * @function verify
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UUID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.structured != null && message.hasOwnProperty("structured")) {
                        properties.value = 1;
                        {
                            var error = $root.event_store.client.shared.UUID.Structured.verify(message.structured);
                            if (error)
                                return "structured." + error;
                        }
                    }
                    if (message.string != null && message.hasOwnProperty("string")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        if (!$util.isString(message.string))
                            return "string: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a UUID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.shared.UUID} UUID
                 */
                UUID.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.shared.UUID)
                        return object;
                    var message = new $root.event_store.client.shared.UUID();
                    if (object.structured != null) {
                        if (typeof object.structured !== "object")
                            throw TypeError(".event_store.client.shared.UUID.structured: object expected");
                        message.structured = $root.event_store.client.shared.UUID.Structured.fromObject(object.structured);
                    }
                    if (object.string != null)
                        message.string = String(object.string);
                    return message;
                };

                /**
                 * Creates a plain object from a UUID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.shared.UUID
                 * @static
                 * @param {event_store.client.shared.UUID} message UUID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UUID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.structured != null && message.hasOwnProperty("structured")) {
                        object.structured = $root.event_store.client.shared.UUID.Structured.toObject(message.structured, options);
                        if (options.oneofs)
                            object.value = "structured";
                    }
                    if (message.string != null && message.hasOwnProperty("string")) {
                        object.string = message.string;
                        if (options.oneofs)
                            object.value = "string";
                    }
                    return object;
                };

                /**
                 * Converts this UUID to JSON.
                 * @function toJSON
                 * @memberof event_store.client.shared.UUID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UUID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                UUID.Structured = (function() {

                    /**
                     * Properties of a Structured.
                     * @memberof event_store.client.shared.UUID
                     * @interface IStructured
                     * @property {number|Long|null} [mostSignificantBits] Structured mostSignificantBits
                     * @property {number|Long|null} [leastSignificantBits] Structured leastSignificantBits
                     */

                    /**
                     * Constructs a new Structured.
                     * @memberof event_store.client.shared.UUID
                     * @classdesc Represents a Structured.
                     * @implements IStructured
                     * @constructor
                     * @param {event_store.client.shared.UUID.IStructured=} [properties] Properties to set
                     */
                    function Structured(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Structured mostSignificantBits.
                     * @member {number|Long} mostSignificantBits
                     * @memberof event_store.client.shared.UUID.Structured
                     * @instance
                     */
                    Structured.prototype.mostSignificantBits = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Structured leastSignificantBits.
                     * @member {number|Long} leastSignificantBits
                     * @memberof event_store.client.shared.UUID.Structured
                     * @instance
                     */
                    Structured.prototype.leastSignificantBits = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new Structured instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {event_store.client.shared.UUID.IStructured=} [properties] Properties to set
                     * @returns {event_store.client.shared.UUID.Structured} Structured instance
                     */
                    Structured.create = function create(properties) {
                        return new Structured(properties);
                    };

                    /**
                     * Encodes the specified Structured message. Does not implicitly {@link event_store.client.shared.UUID.Structured.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {event_store.client.shared.UUID.IStructured} message Structured message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Structured.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.mostSignificantBits != null && Object.hasOwnProperty.call(message, "mostSignificantBits"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.mostSignificantBits);
                        if (message.leastSignificantBits != null && Object.hasOwnProperty.call(message, "leastSignificantBits"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.leastSignificantBits);
                        return writer;
                    };

                    /**
                     * Encodes the specified Structured message, length delimited. Does not implicitly {@link event_store.client.shared.UUID.Structured.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {event_store.client.shared.UUID.IStructured} message Structured message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Structured.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Structured message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.shared.UUID.Structured} Structured
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Structured.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.shared.UUID.Structured();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.mostSignificantBits = reader.int64();
                                break;
                            case 2:
                                message.leastSignificantBits = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Structured message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.shared.UUID.Structured} Structured
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Structured.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Structured message.
                     * @function verify
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Structured.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.mostSignificantBits != null && message.hasOwnProperty("mostSignificantBits"))
                            if (!$util.isInteger(message.mostSignificantBits) && !(message.mostSignificantBits && $util.isInteger(message.mostSignificantBits.low) && $util.isInteger(message.mostSignificantBits.high)))
                                return "mostSignificantBits: integer|Long expected";
                        if (message.leastSignificantBits != null && message.hasOwnProperty("leastSignificantBits"))
                            if (!$util.isInteger(message.leastSignificantBits) && !(message.leastSignificantBits && $util.isInteger(message.leastSignificantBits.low) && $util.isInteger(message.leastSignificantBits.high)))
                                return "leastSignificantBits: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Structured message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.shared.UUID.Structured} Structured
                     */
                    Structured.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.shared.UUID.Structured)
                            return object;
                        var message = new $root.event_store.client.shared.UUID.Structured();
                        if (object.mostSignificantBits != null)
                            if ($util.Long)
                                (message.mostSignificantBits = $util.Long.fromValue(object.mostSignificantBits)).unsigned = false;
                            else if (typeof object.mostSignificantBits === "string")
                                message.mostSignificantBits = parseInt(object.mostSignificantBits, 10);
                            else if (typeof object.mostSignificantBits === "number")
                                message.mostSignificantBits = object.mostSignificantBits;
                            else if (typeof object.mostSignificantBits === "object")
                                message.mostSignificantBits = new $util.LongBits(object.mostSignificantBits.low >>> 0, object.mostSignificantBits.high >>> 0).toNumber();
                        if (object.leastSignificantBits != null)
                            if ($util.Long)
                                (message.leastSignificantBits = $util.Long.fromValue(object.leastSignificantBits)).unsigned = false;
                            else if (typeof object.leastSignificantBits === "string")
                                message.leastSignificantBits = parseInt(object.leastSignificantBits, 10);
                            else if (typeof object.leastSignificantBits === "number")
                                message.leastSignificantBits = object.leastSignificantBits;
                            else if (typeof object.leastSignificantBits === "object")
                                message.leastSignificantBits = new $util.LongBits(object.leastSignificantBits.low >>> 0, object.leastSignificantBits.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a Structured message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.shared.UUID.Structured
                     * @static
                     * @param {event_store.client.shared.UUID.Structured} message Structured
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Structured.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.mostSignificantBits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.mostSignificantBits = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.leastSignificantBits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.leastSignificantBits = options.longs === String ? "0" : 0;
                        }
                        if (message.mostSignificantBits != null && message.hasOwnProperty("mostSignificantBits"))
                            if (typeof message.mostSignificantBits === "number")
                                object.mostSignificantBits = options.longs === String ? String(message.mostSignificantBits) : message.mostSignificantBits;
                            else
                                object.mostSignificantBits = options.longs === String ? $util.Long.prototype.toString.call(message.mostSignificantBits) : options.longs === Number ? new $util.LongBits(message.mostSignificantBits.low >>> 0, message.mostSignificantBits.high >>> 0).toNumber() : message.mostSignificantBits;
                        if (message.leastSignificantBits != null && message.hasOwnProperty("leastSignificantBits"))
                            if (typeof message.leastSignificantBits === "number")
                                object.leastSignificantBits = options.longs === String ? String(message.leastSignificantBits) : message.leastSignificantBits;
                            else
                                object.leastSignificantBits = options.longs === String ? $util.Long.prototype.toString.call(message.leastSignificantBits) : options.longs === Number ? new $util.LongBits(message.leastSignificantBits.low >>> 0, message.leastSignificantBits.high >>> 0).toNumber() : message.leastSignificantBits;
                        return object;
                    };

                    /**
                     * Converts this Structured to JSON.
                     * @function toJSON
                     * @memberof event_store.client.shared.UUID.Structured
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Structured.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Structured;
                })();

                return UUID;
            })();

            shared.Empty = (function() {

                /**
                 * Properties of an Empty.
                 * @memberof event_store.client.shared
                 * @interface IEmpty
                 */

                /**
                 * Constructs a new Empty.
                 * @memberof event_store.client.shared
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {event_store.client.shared.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {event_store.client.shared.IEmpty=} [properties] Properties to set
                 * @returns {event_store.client.shared.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link event_store.client.shared.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {event_store.client.shared.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link event_store.client.shared.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {event_store.client.shared.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.shared.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.shared.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.shared.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.shared.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.shared.Empty)
                        return object;
                    return new $root.event_store.client.shared.Empty();
                };

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.shared.Empty
                 * @static
                 * @param {event_store.client.shared.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof event_store.client.shared.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Empty;
            })();

            shared.StreamIdentifier = (function() {

                /**
                 * Properties of a StreamIdentifier.
                 * @memberof event_store.client.shared
                 * @interface IStreamIdentifier
                 * @property {Uint8Array|null} [streamName] StreamIdentifier streamName
                 */

                /**
                 * Constructs a new StreamIdentifier.
                 * @memberof event_store.client.shared
                 * @classdesc Represents a StreamIdentifier.
                 * @implements IStreamIdentifier
                 * @constructor
                 * @param {event_store.client.shared.IStreamIdentifier=} [properties] Properties to set
                 */
                function StreamIdentifier(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StreamIdentifier streamName.
                 * @member {Uint8Array} streamName
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @instance
                 */
                StreamIdentifier.prototype.streamName = $util.newBuffer([]);

                /**
                 * Creates a new StreamIdentifier instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {event_store.client.shared.IStreamIdentifier=} [properties] Properties to set
                 * @returns {event_store.client.shared.StreamIdentifier} StreamIdentifier instance
                 */
                StreamIdentifier.create = function create(properties) {
                    return new StreamIdentifier(properties);
                };

                /**
                 * Encodes the specified StreamIdentifier message. Does not implicitly {@link event_store.client.shared.StreamIdentifier.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {event_store.client.shared.IStreamIdentifier} message StreamIdentifier message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StreamIdentifier.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.streamName != null && Object.hasOwnProperty.call(message, "streamName"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.streamName);
                    return writer;
                };

                /**
                 * Encodes the specified StreamIdentifier message, length delimited. Does not implicitly {@link event_store.client.shared.StreamIdentifier.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {event_store.client.shared.IStreamIdentifier} message StreamIdentifier message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StreamIdentifier.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StreamIdentifier message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.shared.StreamIdentifier} StreamIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StreamIdentifier.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.shared.StreamIdentifier();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            message.streamName = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StreamIdentifier message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.shared.StreamIdentifier} StreamIdentifier
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StreamIdentifier.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StreamIdentifier message.
                 * @function verify
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StreamIdentifier.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.streamName != null && message.hasOwnProperty("streamName"))
                        if (!(message.streamName && typeof message.streamName.length === "number" || $util.isString(message.streamName)))
                            return "streamName: buffer expected";
                    return null;
                };

                /**
                 * Creates a StreamIdentifier message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.shared.StreamIdentifier} StreamIdentifier
                 */
                StreamIdentifier.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.shared.StreamIdentifier)
                        return object;
                    var message = new $root.event_store.client.shared.StreamIdentifier();
                    if (object.streamName != null)
                        if (typeof object.streamName === "string")
                            $util.base64.decode(object.streamName, message.streamName = $util.newBuffer($util.base64.length(object.streamName)), 0);
                        else if (object.streamName.length)
                            message.streamName = object.streamName;
                    return message;
                };

                /**
                 * Creates a plain object from a StreamIdentifier message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @static
                 * @param {event_store.client.shared.StreamIdentifier} message StreamIdentifier
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StreamIdentifier.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.streamName = "";
                        else {
                            object.streamName = [];
                            if (options.bytes !== Array)
                                object.streamName = $util.newBuffer(object.streamName);
                        }
                    if (message.streamName != null && message.hasOwnProperty("streamName"))
                        object.streamName = options.bytes === String ? $util.base64.encode(message.streamName, 0, message.streamName.length) : options.bytes === Array ? Array.prototype.slice.call(message.streamName) : message.streamName;
                    return object;
                };

                /**
                 * Converts this StreamIdentifier to JSON.
                 * @function toJSON
                 * @memberof event_store.client.shared.StreamIdentifier
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StreamIdentifier.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StreamIdentifier;
            })();

            return shared;
        })();

        client.streams = (function() {

            /**
             * Namespace streams.
             * @memberof event_store.client
             * @namespace
             */
            var streams = {};

            streams.Streams = (function() {

                /**
                 * Constructs a new Streams service.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a Streams
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Streams(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Streams.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Streams;

                /**
                 * Creates new Streams service using the specified rpc implementation.
                 * @function create
                 * @memberof event_store.client.streams.Streams
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Streams} RPC service. Useful where requests and/or responses are streamed.
                 */
                Streams.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#read}.
                 * @memberof event_store.client.streams.Streams
                 * @typedef ReadCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {event_store.client.streams.ReadResp} [response] ReadResp
                 */

                /**
                 * Calls Read.
                 * @function read
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IReadReq} request ReadReq message or plain object
                 * @param {event_store.client.streams.Streams.ReadCallback} callback Node-style callback called with the error, if any, and ReadResp
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Streams.prototype.read = function read(request, callback) {
                    return this.rpcCall(read, $root.event_store.client.streams.ReadReq, $root.event_store.client.streams.ReadResp, request, callback);
                }, "name", { value: "Read" });

                /**
                 * Calls Read.
                 * @function read
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IReadReq} request ReadReq message or plain object
                 * @returns {Promise<event_store.client.streams.ReadResp>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#append}.
                 * @memberof event_store.client.streams.Streams
                 * @typedef AppendCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {event_store.client.streams.AppendResp} [response] AppendResp
                 */

                /**
                 * Calls Append.
                 * @function append
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IAppendReq} request AppendReq message or plain object
                 * @param {event_store.client.streams.Streams.AppendCallback} callback Node-style callback called with the error, if any, and AppendResp
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Streams.prototype.append = function append(request, callback) {
                    return this.rpcCall(append, $root.event_store.client.streams.AppendReq, $root.event_store.client.streams.AppendResp, request, callback);
                }, "name", { value: "Append" });

                /**
                 * Calls Append.
                 * @function append
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IAppendReq} request AppendReq message or plain object
                 * @returns {Promise<event_store.client.streams.AppendResp>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#delete_}.
                 * @memberof event_store.client.streams.Streams
                 * @typedef DeleteCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {event_store.client.streams.DeleteResp} [response] DeleteResp
                 */

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IDeleteReq} request DeleteReq message or plain object
                 * @param {event_store.client.streams.Streams.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResp
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Streams.prototype["delete"] = function delete_(request, callback) {
                    return this.rpcCall(delete_, $root.event_store.client.streams.DeleteReq, $root.event_store.client.streams.DeleteResp, request, callback);
                }, "name", { value: "Delete" });

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.IDeleteReq} request DeleteReq message or plain object
                 * @returns {Promise<event_store.client.streams.DeleteResp>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link event_store.client.streams.Streams#tombstone}.
                 * @memberof event_store.client.streams.Streams
                 * @typedef TombstoneCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {event_store.client.streams.TombstoneResp} [response] TombstoneResp
                 */

                /**
                 * Calls Tombstone.
                 * @function tombstone
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.ITombstoneReq} request TombstoneReq message or plain object
                 * @param {event_store.client.streams.Streams.TombstoneCallback} callback Node-style callback called with the error, if any, and TombstoneResp
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Streams.prototype.tombstone = function tombstone(request, callback) {
                    return this.rpcCall(tombstone, $root.event_store.client.streams.TombstoneReq, $root.event_store.client.streams.TombstoneResp, request, callback);
                }, "name", { value: "Tombstone" });

                /**
                 * Calls Tombstone.
                 * @function tombstone
                 * @memberof event_store.client.streams.Streams
                 * @instance
                 * @param {event_store.client.streams.ITombstoneReq} request TombstoneReq message or plain object
                 * @returns {Promise<event_store.client.streams.TombstoneResp>} Promise
                 * @variation 2
                 */

                return Streams;
            })();

            streams.ReadReq = (function() {

                /**
                 * Properties of a ReadReq.
                 * @memberof event_store.client.streams
                 * @interface IReadReq
                 * @property {event_store.client.streams.ReadReq.IOptions|null} [options] ReadReq options
                 */

                /**
                 * Constructs a new ReadReq.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a ReadReq.
                 * @implements IReadReq
                 * @constructor
                 * @param {event_store.client.streams.IReadReq=} [properties] Properties to set
                 */
                function ReadReq(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReadReq options.
                 * @member {event_store.client.streams.ReadReq.IOptions|null|undefined} options
                 * @memberof event_store.client.streams.ReadReq
                 * @instance
                 */
                ReadReq.prototype.options = null;

                /**
                 * Creates a new ReadReq instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {event_store.client.streams.IReadReq=} [properties] Properties to set
                 * @returns {event_store.client.streams.ReadReq} ReadReq instance
                 */
                ReadReq.create = function create(properties) {
                    return new ReadReq(properties);
                };

                /**
                 * Encodes the specified ReadReq message. Does not implicitly {@link event_store.client.streams.ReadReq.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {event_store.client.streams.IReadReq} message ReadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReadReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.event_store.client.streams.ReadReq.Options.encode(message.options, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ReadReq message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {event_store.client.streams.IReadReq} message ReadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReadReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReadReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.ReadReq} ReadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReadReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.options = $root.event_store.client.streams.ReadReq.Options.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReadReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.ReadReq} ReadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReadReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReadReq message.
                 * @function verify
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReadReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.event_store.client.streams.ReadReq.Options.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ReadReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.ReadReq} ReadReq
                 */
                ReadReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.ReadReq)
                        return object;
                    var message = new $root.event_store.client.streams.ReadReq();
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".event_store.client.streams.ReadReq.options: object expected");
                        message.options = $root.event_store.client.streams.ReadReq.Options.fromObject(object.options);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ReadReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.ReadReq
                 * @static
                 * @param {event_store.client.streams.ReadReq} message ReadReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReadReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.options = null;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.event_store.client.streams.ReadReq.Options.toObject(message.options, options);
                    return object;
                };

                /**
                 * Converts this ReadReq to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.ReadReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReadReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ReadReq.Options = (function() {

                    /**
                     * Properties of an Options.
                     * @memberof event_store.client.streams.ReadReq
                     * @interface IOptions
                     * @property {event_store.client.streams.ReadReq.Options.IStreamOptions|null} [stream] Options stream
                     * @property {event_store.client.streams.ReadReq.Options.IAllOptions|null} [all] Options all
                     * @property {event_store.client.streams.ReadReq.Options.ReadDirection|null} [readDirection] Options readDirection
                     * @property {boolean|null} [resolveLinks] Options resolveLinks
                     * @property {number|Long|null} [count] Options count
                     * @property {event_store.client.streams.ReadReq.Options.ISubscriptionOptions|null} [subscription] Options subscription
                     * @property {event_store.client.streams.ReadReq.Options.IFilterOptions|null} [filter] Options filter
                     * @property {event_store.client.shared.IEmpty|null} [noFilter] Options noFilter
                     * @property {event_store.client.streams.ReadReq.Options.IUUIDOption|null} [uuidOption] Options uuidOption
                     */

                    /**
                     * Constructs a new Options.
                     * @memberof event_store.client.streams.ReadReq
                     * @classdesc Represents an Options.
                     * @implements IOptions
                     * @constructor
                     * @param {event_store.client.streams.ReadReq.IOptions=} [properties] Properties to set
                     */
                    function Options(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Options stream.
                     * @member {event_store.client.streams.ReadReq.Options.IStreamOptions|null|undefined} stream
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.stream = null;

                    /**
                     * Options all.
                     * @member {event_store.client.streams.ReadReq.Options.IAllOptions|null|undefined} all
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.all = null;

                    /**
                     * Options readDirection.
                     * @member {event_store.client.streams.ReadReq.Options.ReadDirection} readDirection
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.readDirection = 0;

                    /**
                     * Options resolveLinks.
                     * @member {boolean} resolveLinks
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.resolveLinks = false;

                    /**
                     * Options count.
                     * @member {number|Long} count
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Options subscription.
                     * @member {event_store.client.streams.ReadReq.Options.ISubscriptionOptions|null|undefined} subscription
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.subscription = null;

                    /**
                     * Options filter.
                     * @member {event_store.client.streams.ReadReq.Options.IFilterOptions|null|undefined} filter
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.filter = null;

                    /**
                     * Options noFilter.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noFilter
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.noFilter = null;

                    /**
                     * Options uuidOption.
                     * @member {event_store.client.streams.ReadReq.Options.IUUIDOption|null|undefined} uuidOption
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Options.prototype.uuidOption = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Options streamOption.
                     * @member {"stream"|"all"|undefined} streamOption
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "streamOption", {
                        get: $util.oneOfGetter($oneOfFields = ["stream", "all"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Options countOption.
                     * @member {"count"|"subscription"|undefined} countOption
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "countOption", {
                        get: $util.oneOfGetter($oneOfFields = ["count", "subscription"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Options filterOption.
                     * @member {"filter"|"noFilter"|undefined} filterOption
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "filterOption", {
                        get: $util.oneOfGetter($oneOfFields = ["filter", "noFilter"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {event_store.client.streams.ReadReq.IOptions=} [properties] Properties to set
                     * @returns {event_store.client.streams.ReadReq.Options} Options instance
                     */
                    Options.create = function create(properties) {
                        return new Options(properties);
                    };

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {event_store.client.streams.ReadReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.stream != null && Object.hasOwnProperty.call(message, "stream"))
                            $root.event_store.client.streams.ReadReq.Options.StreamOptions.encode(message.stream, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.all != null && Object.hasOwnProperty.call(message, "all"))
                            $root.event_store.client.streams.ReadReq.Options.AllOptions.encode(message.all, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.readDirection != null && Object.hasOwnProperty.call(message, "readDirection"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.readDirection);
                        if (message.resolveLinks != null && Object.hasOwnProperty.call(message, "resolveLinks"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.resolveLinks);
                        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.count);
                        if (message.subscription != null && Object.hasOwnProperty.call(message, "subscription"))
                            $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions.encode(message.subscription, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                            $root.event_store.client.streams.ReadReq.Options.FilterOptions.encode(message.filter, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.noFilter != null && Object.hasOwnProperty.call(message, "noFilter"))
                            $root.event_store.client.shared.Empty.encode(message.noFilter, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.uuidOption != null && Object.hasOwnProperty.call(message, "uuidOption"))
                            $root.event_store.client.streams.ReadReq.Options.UUIDOption.encode(message.uuidOption, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {event_store.client.streams.ReadReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.ReadReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.stream = $root.event_store.client.streams.ReadReq.Options.StreamOptions.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.all = $root.event_store.client.streams.ReadReq.Options.AllOptions.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.readDirection = reader.int32();
                                break;
                            case 4:
                                message.resolveLinks = reader.bool();
                                break;
                            case 5:
                                message.count = reader.uint64();
                                break;
                            case 6:
                                message.subscription = $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.filter = $root.event_store.client.streams.ReadReq.Options.FilterOptions.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.noFilter = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.uuidOption = $root.event_store.client.streams.ReadReq.Options.UUIDOption.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.ReadReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Options message.
                     * @function verify
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Options.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.stream != null && message.hasOwnProperty("stream")) {
                            properties.streamOption = 1;
                            {
                                var error = $root.event_store.client.streams.ReadReq.Options.StreamOptions.verify(message.stream);
                                if (error)
                                    return "stream." + error;
                            }
                        }
                        if (message.all != null && message.hasOwnProperty("all")) {
                            if (properties.streamOption === 1)
                                return "streamOption: multiple values";
                            properties.streamOption = 1;
                            {
                                var error = $root.event_store.client.streams.ReadReq.Options.AllOptions.verify(message.all);
                                if (error)
                                    return "all." + error;
                            }
                        }
                        if (message.readDirection != null && message.hasOwnProperty("readDirection"))
                            switch (message.readDirection) {
                            default:
                                return "readDirection: enum value expected";
                            case 0:
                            case 1:
                                break;
                            }
                        if (message.resolveLinks != null && message.hasOwnProperty("resolveLinks"))
                            if (typeof message.resolveLinks !== "boolean")
                                return "resolveLinks: boolean expected";
                        if (message.count != null && message.hasOwnProperty("count")) {
                            properties.countOption = 1;
                            if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                                return "count: integer|Long expected";
                        }
                        if (message.subscription != null && message.hasOwnProperty("subscription")) {
                            if (properties.countOption === 1)
                                return "countOption: multiple values";
                            properties.countOption = 1;
                            {
                                var error = $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions.verify(message.subscription);
                                if (error)
                                    return "subscription." + error;
                            }
                        }
                        if (message.filter != null && message.hasOwnProperty("filter")) {
                            properties.filterOption = 1;
                            {
                                var error = $root.event_store.client.streams.ReadReq.Options.FilterOptions.verify(message.filter);
                                if (error)
                                    return "filter." + error;
                            }
                        }
                        if (message.noFilter != null && message.hasOwnProperty("noFilter")) {
                            if (properties.filterOption === 1)
                                return "filterOption: multiple values";
                            properties.filterOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noFilter);
                                if (error)
                                    return "noFilter." + error;
                            }
                        }
                        if (message.uuidOption != null && message.hasOwnProperty("uuidOption")) {
                            var error = $root.event_store.client.streams.ReadReq.Options.UUIDOption.verify(message.uuidOption);
                            if (error)
                                return "uuidOption." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.ReadReq.Options} Options
                     */
                    Options.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.ReadReq.Options)
                            return object;
                        var message = new $root.event_store.client.streams.ReadReq.Options();
                        if (object.stream != null) {
                            if (typeof object.stream !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.stream: object expected");
                            message.stream = $root.event_store.client.streams.ReadReq.Options.StreamOptions.fromObject(object.stream);
                        }
                        if (object.all != null) {
                            if (typeof object.all !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.all: object expected");
                            message.all = $root.event_store.client.streams.ReadReq.Options.AllOptions.fromObject(object.all);
                        }
                        switch (object.readDirection) {
                        case "Forwards":
                        case 0:
                            message.readDirection = 0;
                            break;
                        case "Backwards":
                        case 1:
                            message.readDirection = 1;
                            break;
                        }
                        if (object.resolveLinks != null)
                            message.resolveLinks = Boolean(object.resolveLinks);
                        if (object.count != null)
                            if ($util.Long)
                                (message.count = $util.Long.fromValue(object.count)).unsigned = true;
                            else if (typeof object.count === "string")
                                message.count = parseInt(object.count, 10);
                            else if (typeof object.count === "number")
                                message.count = object.count;
                            else if (typeof object.count === "object")
                                message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber(true);
                        if (object.subscription != null) {
                            if (typeof object.subscription !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.subscription: object expected");
                            message.subscription = $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions.fromObject(object.subscription);
                        }
                        if (object.filter != null) {
                            if (typeof object.filter !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.filter: object expected");
                            message.filter = $root.event_store.client.streams.ReadReq.Options.FilterOptions.fromObject(object.filter);
                        }
                        if (object.noFilter != null) {
                            if (typeof object.noFilter !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.noFilter: object expected");
                            message.noFilter = $root.event_store.client.shared.Empty.fromObject(object.noFilter);
                        }
                        if (object.uuidOption != null) {
                            if (typeof object.uuidOption !== "object")
                                throw TypeError(".event_store.client.streams.ReadReq.Options.uuidOption: object expected");
                            message.uuidOption = $root.event_store.client.streams.ReadReq.Options.UUIDOption.fromObject(object.uuidOption);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @static
                     * @param {event_store.client.streams.ReadReq.Options} message Options
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Options.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.readDirection = options.enums === String ? "Forwards" : 0;
                            object.resolveLinks = false;
                            object.uuidOption = null;
                        }
                        if (message.stream != null && message.hasOwnProperty("stream")) {
                            object.stream = $root.event_store.client.streams.ReadReq.Options.StreamOptions.toObject(message.stream, options);
                            if (options.oneofs)
                                object.streamOption = "stream";
                        }
                        if (message.all != null && message.hasOwnProperty("all")) {
                            object.all = $root.event_store.client.streams.ReadReq.Options.AllOptions.toObject(message.all, options);
                            if (options.oneofs)
                                object.streamOption = "all";
                        }
                        if (message.readDirection != null && message.hasOwnProperty("readDirection"))
                            object.readDirection = options.enums === String ? $root.event_store.client.streams.ReadReq.Options.ReadDirection[message.readDirection] : message.readDirection;
                        if (message.resolveLinks != null && message.hasOwnProperty("resolveLinks"))
                            object.resolveLinks = message.resolveLinks;
                        if (message.count != null && message.hasOwnProperty("count")) {
                            if (typeof message.count === "number")
                                object.count = options.longs === String ? String(message.count) : message.count;
                            else
                                object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber(true) : message.count;
                            if (options.oneofs)
                                object.countOption = "count";
                        }
                        if (message.subscription != null && message.hasOwnProperty("subscription")) {
                            object.subscription = $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions.toObject(message.subscription, options);
                            if (options.oneofs)
                                object.countOption = "subscription";
                        }
                        if (message.filter != null && message.hasOwnProperty("filter")) {
                            object.filter = $root.event_store.client.streams.ReadReq.Options.FilterOptions.toObject(message.filter, options);
                            if (options.oneofs)
                                object.filterOption = "filter";
                        }
                        if (message.noFilter != null && message.hasOwnProperty("noFilter")) {
                            object.noFilter = $root.event_store.client.shared.Empty.toObject(message.noFilter, options);
                            if (options.oneofs)
                                object.filterOption = "noFilter";
                        }
                        if (message.uuidOption != null && message.hasOwnProperty("uuidOption"))
                            object.uuidOption = $root.event_store.client.streams.ReadReq.Options.UUIDOption.toObject(message.uuidOption, options);
                        return object;
                    };

                    /**
                     * Converts this Options to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.ReadReq.Options
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Options.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ReadDirection enum.
                     * @name event_store.client.streams.ReadReq.Options.ReadDirection
                     * @enum {number}
                     * @property {number} Forwards=0 Forwards value
                     * @property {number} Backwards=1 Backwards value
                     */
                    Options.ReadDirection = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Forwards"] = 0;
                        values[valuesById[1] = "Backwards"] = 1;
                        return values;
                    })();

                    Options.StreamOptions = (function() {

                        /**
                         * Properties of a StreamOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface IStreamOptions
                         * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] StreamOptions streamIdentifier
                         * @property {number|Long|null} [revision] StreamOptions revision
                         * @property {event_store.client.shared.IEmpty|null} [start] StreamOptions start
                         * @property {event_store.client.shared.IEmpty|null} [end] StreamOptions end
                         */

                        /**
                         * Constructs a new StreamOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents a StreamOptions.
                         * @implements IStreamOptions
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.IStreamOptions=} [properties] Properties to set
                         */
                        function StreamOptions(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * StreamOptions streamIdentifier.
                         * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         */
                        StreamOptions.prototype.streamIdentifier = null;

                        /**
                         * StreamOptions revision.
                         * @member {number|Long} revision
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         */
                        StreamOptions.prototype.revision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * StreamOptions start.
                         * @member {event_store.client.shared.IEmpty|null|undefined} start
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         */
                        StreamOptions.prototype.start = null;

                        /**
                         * StreamOptions end.
                         * @member {event_store.client.shared.IEmpty|null|undefined} end
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         */
                        StreamOptions.prototype.end = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * StreamOptions revisionOption.
                         * @member {"revision"|"start"|"end"|undefined} revisionOption
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         */
                        Object.defineProperty(StreamOptions.prototype, "revisionOption", {
                            get: $util.oneOfGetter($oneOfFields = ["revision", "start", "end"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new StreamOptions instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IStreamOptions=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.StreamOptions} StreamOptions instance
                         */
                        StreamOptions.create = function create(properties) {
                            return new StreamOptions(properties);
                        };

                        /**
                         * Encodes the specified StreamOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.StreamOptions.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IStreamOptions} message StreamOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StreamOptions.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                                $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.revision != null && Object.hasOwnProperty.call(message, "revision"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.revision);
                            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                                $root.event_store.client.shared.Empty.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                                $root.event_store.client.shared.Empty.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified StreamOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.StreamOptions.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IStreamOptions} message StreamOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StreamOptions.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a StreamOptions message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.StreamOptions} StreamOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StreamOptions.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.StreamOptions();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.revision = reader.uint64();
                                    break;
                                case 3:
                                    message.start = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    message.end = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a StreamOptions message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.StreamOptions} StreamOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StreamOptions.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a StreamOptions message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StreamOptions.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                                var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                                if (error)
                                    return "streamIdentifier." + error;
                            }
                            if (message.revision != null && message.hasOwnProperty("revision")) {
                                properties.revisionOption = 1;
                                if (!$util.isInteger(message.revision) && !(message.revision && $util.isInteger(message.revision.low) && $util.isInteger(message.revision.high)))
                                    return "revision: integer|Long expected";
                            }
                            if (message.start != null && message.hasOwnProperty("start")) {
                                if (properties.revisionOption === 1)
                                    return "revisionOption: multiple values";
                                properties.revisionOption = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.start);
                                    if (error)
                                        return "start." + error;
                                }
                            }
                            if (message.end != null && message.hasOwnProperty("end")) {
                                if (properties.revisionOption === 1)
                                    return "revisionOption: multiple values";
                                properties.revisionOption = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.end);
                                    if (error)
                                        return "end." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a StreamOptions message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.StreamOptions} StreamOptions
                         */
                        StreamOptions.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.StreamOptions)
                                return object;
                            var message = new $root.event_store.client.streams.ReadReq.Options.StreamOptions();
                            if (object.streamIdentifier != null) {
                                if (typeof object.streamIdentifier !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.StreamOptions.streamIdentifier: object expected");
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                            }
                            if (object.revision != null)
                                if ($util.Long)
                                    (message.revision = $util.Long.fromValue(object.revision)).unsigned = true;
                                else if (typeof object.revision === "string")
                                    message.revision = parseInt(object.revision, 10);
                                else if (typeof object.revision === "number")
                                    message.revision = object.revision;
                                else if (typeof object.revision === "object")
                                    message.revision = new $util.LongBits(object.revision.low >>> 0, object.revision.high >>> 0).toNumber(true);
                            if (object.start != null) {
                                if (typeof object.start !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.StreamOptions.start: object expected");
                                message.start = $root.event_store.client.shared.Empty.fromObject(object.start);
                            }
                            if (object.end != null) {
                                if (typeof object.end !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.StreamOptions.end: object expected");
                                message.end = $root.event_store.client.shared.Empty.fromObject(object.end);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a StreamOptions message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.StreamOptions} message StreamOptions
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        StreamOptions.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.streamIdentifier = null;
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                                object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                            if (message.revision != null && message.hasOwnProperty("revision")) {
                                if (typeof message.revision === "number")
                                    object.revision = options.longs === String ? String(message.revision) : message.revision;
                                else
                                    object.revision = options.longs === String ? $util.Long.prototype.toString.call(message.revision) : options.longs === Number ? new $util.LongBits(message.revision.low >>> 0, message.revision.high >>> 0).toNumber(true) : message.revision;
                                if (options.oneofs)
                                    object.revisionOption = "revision";
                            }
                            if (message.start != null && message.hasOwnProperty("start")) {
                                object.start = $root.event_store.client.shared.Empty.toObject(message.start, options);
                                if (options.oneofs)
                                    object.revisionOption = "start";
                            }
                            if (message.end != null && message.hasOwnProperty("end")) {
                                object.end = $root.event_store.client.shared.Empty.toObject(message.end, options);
                                if (options.oneofs)
                                    object.revisionOption = "end";
                            }
                            return object;
                        };

                        /**
                         * Converts this StreamOptions to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.StreamOptions
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        StreamOptions.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return StreamOptions;
                    })();

                    Options.AllOptions = (function() {

                        /**
                         * Properties of an AllOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface IAllOptions
                         * @property {event_store.client.streams.ReadReq.Options.IPosition|null} [position] AllOptions position
                         * @property {event_store.client.shared.IEmpty|null} [start] AllOptions start
                         * @property {event_store.client.shared.IEmpty|null} [end] AllOptions end
                         */

                        /**
                         * Constructs a new AllOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents an AllOptions.
                         * @implements IAllOptions
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.IAllOptions=} [properties] Properties to set
                         */
                        function AllOptions(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * AllOptions position.
                         * @member {event_store.client.streams.ReadReq.Options.IPosition|null|undefined} position
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @instance
                         */
                        AllOptions.prototype.position = null;

                        /**
                         * AllOptions start.
                         * @member {event_store.client.shared.IEmpty|null|undefined} start
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @instance
                         */
                        AllOptions.prototype.start = null;

                        /**
                         * AllOptions end.
                         * @member {event_store.client.shared.IEmpty|null|undefined} end
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @instance
                         */
                        AllOptions.prototype.end = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * AllOptions allOption.
                         * @member {"position"|"start"|"end"|undefined} allOption
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @instance
                         */
                        Object.defineProperty(AllOptions.prototype, "allOption", {
                            get: $util.oneOfGetter($oneOfFields = ["position", "start", "end"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new AllOptions instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IAllOptions=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.AllOptions} AllOptions instance
                         */
                        AllOptions.create = function create(properties) {
                            return new AllOptions(properties);
                        };

                        /**
                         * Encodes the specified AllOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.AllOptions.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IAllOptions} message AllOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AllOptions.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                                $root.event_store.client.streams.ReadReq.Options.Position.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                                $root.event_store.client.shared.Empty.encode(message.start, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                                $root.event_store.client.shared.Empty.encode(message.end, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified AllOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.AllOptions.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IAllOptions} message AllOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AllOptions.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an AllOptions message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.AllOptions} AllOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AllOptions.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.AllOptions();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.position = $root.event_store.client.streams.ReadReq.Options.Position.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.start = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.end = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an AllOptions message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.AllOptions} AllOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AllOptions.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an AllOptions message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AllOptions.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.position != null && message.hasOwnProperty("position")) {
                                properties.allOption = 1;
                                {
                                    var error = $root.event_store.client.streams.ReadReq.Options.Position.verify(message.position);
                                    if (error)
                                        return "position." + error;
                                }
                            }
                            if (message.start != null && message.hasOwnProperty("start")) {
                                if (properties.allOption === 1)
                                    return "allOption: multiple values";
                                properties.allOption = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.start);
                                    if (error)
                                        return "start." + error;
                                }
                            }
                            if (message.end != null && message.hasOwnProperty("end")) {
                                if (properties.allOption === 1)
                                    return "allOption: multiple values";
                                properties.allOption = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.end);
                                    if (error)
                                        return "end." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates an AllOptions message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.AllOptions} AllOptions
                         */
                        AllOptions.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.AllOptions)
                                return object;
                            var message = new $root.event_store.client.streams.ReadReq.Options.AllOptions();
                            if (object.position != null) {
                                if (typeof object.position !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.AllOptions.position: object expected");
                                message.position = $root.event_store.client.streams.ReadReq.Options.Position.fromObject(object.position);
                            }
                            if (object.start != null) {
                                if (typeof object.start !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.AllOptions.start: object expected");
                                message.start = $root.event_store.client.shared.Empty.fromObject(object.start);
                            }
                            if (object.end != null) {
                                if (typeof object.end !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.AllOptions.end: object expected");
                                message.end = $root.event_store.client.shared.Empty.fromObject(object.end);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an AllOptions message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.AllOptions} message AllOptions
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AllOptions.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.position != null && message.hasOwnProperty("position")) {
                                object.position = $root.event_store.client.streams.ReadReq.Options.Position.toObject(message.position, options);
                                if (options.oneofs)
                                    object.allOption = "position";
                            }
                            if (message.start != null && message.hasOwnProperty("start")) {
                                object.start = $root.event_store.client.shared.Empty.toObject(message.start, options);
                                if (options.oneofs)
                                    object.allOption = "start";
                            }
                            if (message.end != null && message.hasOwnProperty("end")) {
                                object.end = $root.event_store.client.shared.Empty.toObject(message.end, options);
                                if (options.oneofs)
                                    object.allOption = "end";
                            }
                            return object;
                        };

                        /**
                         * Converts this AllOptions to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.AllOptions
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AllOptions.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return AllOptions;
                    })();

                    Options.SubscriptionOptions = (function() {

                        /**
                         * Properties of a SubscriptionOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface ISubscriptionOptions
                         */

                        /**
                         * Constructs a new SubscriptionOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents a SubscriptionOptions.
                         * @implements ISubscriptionOptions
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.ISubscriptionOptions=} [properties] Properties to set
                         */
                        function SubscriptionOptions(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new SubscriptionOptions instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.ISubscriptionOptions=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.SubscriptionOptions} SubscriptionOptions instance
                         */
                        SubscriptionOptions.create = function create(properties) {
                            return new SubscriptionOptions(properties);
                        };

                        /**
                         * Encodes the specified SubscriptionOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.SubscriptionOptions.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.ISubscriptionOptions} message SubscriptionOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubscriptionOptions.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified SubscriptionOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.SubscriptionOptions.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.ISubscriptionOptions} message SubscriptionOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SubscriptionOptions.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a SubscriptionOptions message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.SubscriptionOptions} SubscriptionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubscriptionOptions.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a SubscriptionOptions message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.SubscriptionOptions} SubscriptionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SubscriptionOptions.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a SubscriptionOptions message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SubscriptionOptions.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        /**
                         * Creates a SubscriptionOptions message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.SubscriptionOptions} SubscriptionOptions
                         */
                        SubscriptionOptions.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions)
                                return object;
                            return new $root.event_store.client.streams.ReadReq.Options.SubscriptionOptions();
                        };

                        /**
                         * Creates a plain object from a SubscriptionOptions message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.SubscriptionOptions} message SubscriptionOptions
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SubscriptionOptions.toObject = function toObject() {
                            return {};
                        };

                        /**
                         * Converts this SubscriptionOptions to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.SubscriptionOptions
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SubscriptionOptions.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return SubscriptionOptions;
                    })();

                    Options.Position = (function() {

                        /**
                         * Properties of a Position.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface IPosition
                         * @property {number|Long|null} [commitPosition] Position commitPosition
                         * @property {number|Long|null} [preparePosition] Position preparePosition
                         */

                        /**
                         * Constructs a new Position.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents a Position.
                         * @implements IPosition
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.IPosition=} [properties] Properties to set
                         */
                        function Position(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Position commitPosition.
                         * @member {number|Long} commitPosition
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @instance
                         */
                        Position.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * Position preparePosition.
                         * @member {number|Long} preparePosition
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @instance
                         */
                        Position.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * Creates a new Position instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IPosition=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.Position} Position instance
                         */
                        Position.create = function create(properties) {
                            return new Position(properties);
                        };

                        /**
                         * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.Position.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IPosition} message Position message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Position.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.commitPosition);
                            if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.preparePosition);
                            return writer;
                        };

                        /**
                         * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.Position.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IPosition} message Position message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Position.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Position message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.Position} Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Position.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.Position();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.commitPosition = reader.uint64();
                                    break;
                                case 2:
                                    message.preparePosition = reader.uint64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Position message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.Position} Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Position.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Position message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Position.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                                if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                    return "commitPosition: integer|Long expected";
                            if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                                if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                    return "preparePosition: integer|Long expected";
                            return null;
                        };

                        /**
                         * Creates a Position message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.Position} Position
                         */
                        Position.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.Position)
                                return object;
                            var message = new $root.event_store.client.streams.ReadReq.Options.Position();
                            if (object.commitPosition != null)
                                if ($util.Long)
                                    (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                                else if (typeof object.commitPosition === "string")
                                    message.commitPosition = parseInt(object.commitPosition, 10);
                                else if (typeof object.commitPosition === "number")
                                    message.commitPosition = object.commitPosition;
                                else if (typeof object.commitPosition === "object")
                                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                            if (object.preparePosition != null)
                                if ($util.Long)
                                    (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                                else if (typeof object.preparePosition === "string")
                                    message.preparePosition = parseInt(object.preparePosition, 10);
                                else if (typeof object.preparePosition === "number")
                                    message.preparePosition = object.preparePosition;
                                else if (typeof object.preparePosition === "object")
                                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Position message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.Position} message Position
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Position.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.commitPosition = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.preparePosition = options.longs === String ? "0" : 0;
                            }
                            if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                                if (typeof message.commitPosition === "number")
                                    object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                                else
                                    object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                            if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                                if (typeof message.preparePosition === "number")
                                    object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                                else
                                    object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                            return object;
                        };

                        /**
                         * Converts this Position to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.Position
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Position.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Position;
                    })();

                    Options.FilterOptions = (function() {

                        /**
                         * Properties of a FilterOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface IFilterOptions
                         * @property {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null} [streamIdentifier] FilterOptions streamIdentifier
                         * @property {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null} [eventType] FilterOptions eventType
                         * @property {number|null} [max] FilterOptions max
                         * @property {event_store.client.shared.IEmpty|null} [count] FilterOptions count
                         * @property {number|null} [checkpointIntervalMultiplier] FilterOptions checkpointIntervalMultiplier
                         */

                        /**
                         * Constructs a new FilterOptions.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents a FilterOptions.
                         * @implements IFilterOptions
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.IFilterOptions=} [properties] Properties to set
                         */
                        function FilterOptions(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * FilterOptions streamIdentifier.
                         * @member {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null|undefined} streamIdentifier
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        FilterOptions.prototype.streamIdentifier = null;

                        /**
                         * FilterOptions eventType.
                         * @member {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression|null|undefined} eventType
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        FilterOptions.prototype.eventType = null;

                        /**
                         * FilterOptions max.
                         * @member {number} max
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        FilterOptions.prototype.max = 0;

                        /**
                         * FilterOptions count.
                         * @member {event_store.client.shared.IEmpty|null|undefined} count
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        FilterOptions.prototype.count = null;

                        /**
                         * FilterOptions checkpointIntervalMultiplier.
                         * @member {number} checkpointIntervalMultiplier
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        FilterOptions.prototype.checkpointIntervalMultiplier = 0;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * FilterOptions filter.
                         * @member {"streamIdentifier"|"eventType"|undefined} filter
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        Object.defineProperty(FilterOptions.prototype, "filter", {
                            get: $util.oneOfGetter($oneOfFields = ["streamIdentifier", "eventType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * FilterOptions window.
                         * @member {"max"|"count"|undefined} window
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         */
                        Object.defineProperty(FilterOptions.prototype, "window", {
                            get: $util.oneOfGetter($oneOfFields = ["max", "count"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new FilterOptions instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IFilterOptions=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.FilterOptions} FilterOptions instance
                         */
                        FilterOptions.create = function create(properties) {
                            return new FilterOptions(properties);
                        };

                        /**
                         * Encodes the specified FilterOptions message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IFilterOptions} message FilterOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FilterOptions.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                                $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                                $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.encode(message.eventType, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.max);
                            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                                $root.event_store.client.shared.Empty.encode(message.count, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.checkpointIntervalMultiplier != null && Object.hasOwnProperty.call(message, "checkpointIntervalMultiplier"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.checkpointIntervalMultiplier);
                            return writer;
                        };

                        /**
                         * Encodes the specified FilterOptions message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IFilterOptions} message FilterOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FilterOptions.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a FilterOptions message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.FilterOptions} FilterOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FilterOptions.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.FilterOptions();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.streamIdentifier = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.eventType = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.max = reader.uint32();
                                    break;
                                case 4:
                                    message.count = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    message.checkpointIntervalMultiplier = reader.uint32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a FilterOptions message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.FilterOptions} FilterOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FilterOptions.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a FilterOptions message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        FilterOptions.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                                properties.filter = 1;
                                {
                                    var error = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify(message.streamIdentifier);
                                    if (error)
                                        return "streamIdentifier." + error;
                                }
                            }
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                if (properties.filter === 1)
                                    return "filter: multiple values";
                                properties.filter = 1;
                                {
                                    var error = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify(message.eventType);
                                    if (error)
                                        return "eventType." + error;
                                }
                            }
                            if (message.max != null && message.hasOwnProperty("max")) {
                                properties.window = 1;
                                if (!$util.isInteger(message.max))
                                    return "max: integer expected";
                            }
                            if (message.count != null && message.hasOwnProperty("count")) {
                                if (properties.window === 1)
                                    return "window: multiple values";
                                properties.window = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.count);
                                    if (error)
                                        return "count." + error;
                                }
                            }
                            if (message.checkpointIntervalMultiplier != null && message.hasOwnProperty("checkpointIntervalMultiplier"))
                                if (!$util.isInteger(message.checkpointIntervalMultiplier))
                                    return "checkpointIntervalMultiplier: integer expected";
                            return null;
                        };

                        /**
                         * Creates a FilterOptions message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.FilterOptions} FilterOptions
                         */
                        FilterOptions.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.FilterOptions)
                                return object;
                            var message = new $root.event_store.client.streams.ReadReq.Options.FilterOptions();
                            if (object.streamIdentifier != null) {
                                if (typeof object.streamIdentifier !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.FilterOptions.streamIdentifier: object expected");
                                message.streamIdentifier = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.fromObject(object.streamIdentifier);
                            }
                            if (object.eventType != null) {
                                if (typeof object.eventType !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.FilterOptions.eventType: object expected");
                                message.eventType = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.fromObject(object.eventType);
                            }
                            if (object.max != null)
                                message.max = object.max >>> 0;
                            if (object.count != null) {
                                if (typeof object.count !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.FilterOptions.count: object expected");
                                message.count = $root.event_store.client.shared.Empty.fromObject(object.count);
                            }
                            if (object.checkpointIntervalMultiplier != null)
                                message.checkpointIntervalMultiplier = object.checkpointIntervalMultiplier >>> 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a FilterOptions message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.FilterOptions} message FilterOptions
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        FilterOptions.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.checkpointIntervalMultiplier = 0;
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                                object.streamIdentifier = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.toObject(message.streamIdentifier, options);
                                if (options.oneofs)
                                    object.filter = "streamIdentifier";
                            }
                            if (message.eventType != null && message.hasOwnProperty("eventType")) {
                                object.eventType = $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression.toObject(message.eventType, options);
                                if (options.oneofs)
                                    object.filter = "eventType";
                            }
                            if (message.max != null && message.hasOwnProperty("max")) {
                                object.max = message.max;
                                if (options.oneofs)
                                    object.window = "max";
                            }
                            if (message.count != null && message.hasOwnProperty("count")) {
                                object.count = $root.event_store.client.shared.Empty.toObject(message.count, options);
                                if (options.oneofs)
                                    object.window = "count";
                            }
                            if (message.checkpointIntervalMultiplier != null && message.hasOwnProperty("checkpointIntervalMultiplier"))
                                object.checkpointIntervalMultiplier = message.checkpointIntervalMultiplier;
                            return object;
                        };

                        /**
                         * Converts this FilterOptions to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        FilterOptions.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        FilterOptions.Expression = (function() {

                            /**
                             * Properties of an Expression.
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                             * @interface IExpression
                             * @property {string|null} [regex] Expression regex
                             * @property {Array.<string>|null} [prefix] Expression prefix
                             */

                            /**
                             * Constructs a new Expression.
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions
                             * @classdesc Represents an Expression.
                             * @implements IExpression
                             * @constructor
                             * @param {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression=} [properties] Properties to set
                             */
                            function Expression(properties) {
                                this.prefix = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Expression regex.
                             * @member {string} regex
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @instance
                             */
                            Expression.prototype.regex = "";

                            /**
                             * Expression prefix.
                             * @member {Array.<string>} prefix
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @instance
                             */
                            Expression.prototype.prefix = $util.emptyArray;

                            /**
                             * Creates a new Expression instance using the specified properties.
                             * @function create
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression=} [properties] Properties to set
                             * @returns {event_store.client.streams.ReadReq.Options.FilterOptions.Expression} Expression instance
                             */
                            Expression.create = function create(properties) {
                                return new Expression(properties);
                            };

                            /**
                             * Encodes the specified Expression message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify|verify} messages.
                             * @function encode
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression} message Expression message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Expression.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.regex != null && Object.hasOwnProperty.call(message, "regex"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.regex);
                                if (message.prefix != null && message.prefix.length)
                                    for (var i = 0; i < message.prefix.length; ++i)
                                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.prefix[i]);
                                return writer;
                            };

                            /**
                             * Encodes the specified Expression message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.FilterOptions.Expression.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {event_store.client.streams.ReadReq.Options.FilterOptions.IExpression} message Expression message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Expression.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes an Expression message from the specified reader or buffer.
                             * @function decode
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {event_store.client.streams.ReadReq.Options.FilterOptions.Expression} Expression
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Expression.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.regex = reader.string();
                                        break;
                                    case 2:
                                        if (!(message.prefix && message.prefix.length))
                                            message.prefix = [];
                                        message.prefix.push(reader.string());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes an Expression message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {event_store.client.streams.ReadReq.Options.FilterOptions.Expression} Expression
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Expression.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies an Expression message.
                             * @function verify
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Expression.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.regex != null && message.hasOwnProperty("regex"))
                                    if (!$util.isString(message.regex))
                                        return "regex: string expected";
                                if (message.prefix != null && message.hasOwnProperty("prefix")) {
                                    if (!Array.isArray(message.prefix))
                                        return "prefix: array expected";
                                    for (var i = 0; i < message.prefix.length; ++i)
                                        if (!$util.isString(message.prefix[i]))
                                            return "prefix: string[] expected";
                                }
                                return null;
                            };

                            /**
                             * Creates an Expression message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {event_store.client.streams.ReadReq.Options.FilterOptions.Expression} Expression
                             */
                            Expression.fromObject = function fromObject(object) {
                                if (object instanceof $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression)
                                    return object;
                                var message = new $root.event_store.client.streams.ReadReq.Options.FilterOptions.Expression();
                                if (object.regex != null)
                                    message.regex = String(object.regex);
                                if (object.prefix) {
                                    if (!Array.isArray(object.prefix))
                                        throw TypeError(".event_store.client.streams.ReadReq.Options.FilterOptions.Expression.prefix: array expected");
                                    message.prefix = [];
                                    for (var i = 0; i < object.prefix.length; ++i)
                                        message.prefix[i] = String(object.prefix[i]);
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from an Expression message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @static
                             * @param {event_store.client.streams.ReadReq.Options.FilterOptions.Expression} message Expression
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Expression.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.prefix = [];
                                if (options.defaults)
                                    object.regex = "";
                                if (message.regex != null && message.hasOwnProperty("regex"))
                                    object.regex = message.regex;
                                if (message.prefix && message.prefix.length) {
                                    object.prefix = [];
                                    for (var j = 0; j < message.prefix.length; ++j)
                                        object.prefix[j] = message.prefix[j];
                                }
                                return object;
                            };

                            /**
                             * Converts this Expression to JSON.
                             * @function toJSON
                             * @memberof event_store.client.streams.ReadReq.Options.FilterOptions.Expression
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Expression.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return Expression;
                        })();

                        return FilterOptions;
                    })();

                    Options.UUIDOption = (function() {

                        /**
                         * Properties of a UUIDOption.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @interface IUUIDOption
                         * @property {event_store.client.shared.IEmpty|null} [structured] UUIDOption structured
                         * @property {event_store.client.shared.IEmpty|null} [string] UUIDOption string
                         */

                        /**
                         * Constructs a new UUIDOption.
                         * @memberof event_store.client.streams.ReadReq.Options
                         * @classdesc Represents a UUIDOption.
                         * @implements IUUIDOption
                         * @constructor
                         * @param {event_store.client.streams.ReadReq.Options.IUUIDOption=} [properties] Properties to set
                         */
                        function UUIDOption(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * UUIDOption structured.
                         * @member {event_store.client.shared.IEmpty|null|undefined} structured
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @instance
                         */
                        UUIDOption.prototype.structured = null;

                        /**
                         * UUIDOption string.
                         * @member {event_store.client.shared.IEmpty|null|undefined} string
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @instance
                         */
                        UUIDOption.prototype.string = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * UUIDOption content.
                         * @member {"structured"|"string"|undefined} content
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @instance
                         */
                        Object.defineProperty(UUIDOption.prototype, "content", {
                            get: $util.oneOfGetter($oneOfFields = ["structured", "string"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new UUIDOption instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IUUIDOption=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadReq.Options.UUIDOption} UUIDOption instance
                         */
                        UUIDOption.create = function create(properties) {
                            return new UUIDOption(properties);
                        };

                        /**
                         * Encodes the specified UUIDOption message. Does not implicitly {@link event_store.client.streams.ReadReq.Options.UUIDOption.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IUUIDOption} message UUIDOption message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UUIDOption.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.structured != null && Object.hasOwnProperty.call(message, "structured"))
                                $root.event_store.client.shared.Empty.encode(message.structured, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                                $root.event_store.client.shared.Empty.encode(message.string, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified UUIDOption message, length delimited. Does not implicitly {@link event_store.client.streams.ReadReq.Options.UUIDOption.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.IUUIDOption} message UUIDOption message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UUIDOption.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a UUIDOption message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadReq.Options.UUIDOption} UUIDOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UUIDOption.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadReq.Options.UUIDOption();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.structured = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.string = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a UUIDOption message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadReq.Options.UUIDOption} UUIDOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UUIDOption.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a UUIDOption message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UUIDOption.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.structured != null && message.hasOwnProperty("structured")) {
                                properties.content = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.structured);
                                    if (error)
                                        return "structured." + error;
                                }
                            }
                            if (message.string != null && message.hasOwnProperty("string")) {
                                if (properties.content === 1)
                                    return "content: multiple values";
                                properties.content = 1;
                                {
                                    var error = $root.event_store.client.shared.Empty.verify(message.string);
                                    if (error)
                                        return "string." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a UUIDOption message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadReq.Options.UUIDOption} UUIDOption
                         */
                        UUIDOption.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadReq.Options.UUIDOption)
                                return object;
                            var message = new $root.event_store.client.streams.ReadReq.Options.UUIDOption();
                            if (object.structured != null) {
                                if (typeof object.structured !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.UUIDOption.structured: object expected");
                                message.structured = $root.event_store.client.shared.Empty.fromObject(object.structured);
                            }
                            if (object.string != null) {
                                if (typeof object.string !== "object")
                                    throw TypeError(".event_store.client.streams.ReadReq.Options.UUIDOption.string: object expected");
                                message.string = $root.event_store.client.shared.Empty.fromObject(object.string);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a UUIDOption message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @static
                         * @param {event_store.client.streams.ReadReq.Options.UUIDOption} message UUIDOption
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UUIDOption.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.structured != null && message.hasOwnProperty("structured")) {
                                object.structured = $root.event_store.client.shared.Empty.toObject(message.structured, options);
                                if (options.oneofs)
                                    object.content = "structured";
                            }
                            if (message.string != null && message.hasOwnProperty("string")) {
                                object.string = $root.event_store.client.shared.Empty.toObject(message.string, options);
                                if (options.oneofs)
                                    object.content = "string";
                            }
                            return object;
                        };

                        /**
                         * Converts this UUIDOption to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadReq.Options.UUIDOption
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UUIDOption.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return UUIDOption;
                    })();

                    return Options;
                })();

                return ReadReq;
            })();

            streams.ReadResp = (function() {

                /**
                 * Properties of a ReadResp.
                 * @memberof event_store.client.streams
                 * @interface IReadResp
                 * @property {event_store.client.streams.ReadResp.IReadEvent|null} [event] ReadResp event
                 * @property {event_store.client.streams.ReadResp.ISubscriptionConfirmation|null} [confirmation] ReadResp confirmation
                 * @property {event_store.client.streams.ReadResp.ICheckpoint|null} [checkpoint] ReadResp checkpoint
                 * @property {event_store.client.streams.ReadResp.IStreamNotFound|null} [streamNotFound] ReadResp streamNotFound
                 */

                /**
                 * Constructs a new ReadResp.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a ReadResp.
                 * @implements IReadResp
                 * @constructor
                 * @param {event_store.client.streams.IReadResp=} [properties] Properties to set
                 */
                function ReadResp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReadResp event.
                 * @member {event_store.client.streams.ReadResp.IReadEvent|null|undefined} event
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 */
                ReadResp.prototype.event = null;

                /**
                 * ReadResp confirmation.
                 * @member {event_store.client.streams.ReadResp.ISubscriptionConfirmation|null|undefined} confirmation
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 */
                ReadResp.prototype.confirmation = null;

                /**
                 * ReadResp checkpoint.
                 * @member {event_store.client.streams.ReadResp.ICheckpoint|null|undefined} checkpoint
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 */
                ReadResp.prototype.checkpoint = null;

                /**
                 * ReadResp streamNotFound.
                 * @member {event_store.client.streams.ReadResp.IStreamNotFound|null|undefined} streamNotFound
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 */
                ReadResp.prototype.streamNotFound = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ReadResp content.
                 * @member {"event"|"confirmation"|"checkpoint"|"streamNotFound"|undefined} content
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 */
                Object.defineProperty(ReadResp.prototype, "content", {
                    get: $util.oneOfGetter($oneOfFields = ["event", "confirmation", "checkpoint", "streamNotFound"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ReadResp instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {event_store.client.streams.IReadResp=} [properties] Properties to set
                 * @returns {event_store.client.streams.ReadResp} ReadResp instance
                 */
                ReadResp.create = function create(properties) {
                    return new ReadResp(properties);
                };

                /**
                 * Encodes the specified ReadResp message. Does not implicitly {@link event_store.client.streams.ReadResp.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {event_store.client.streams.IReadResp} message ReadResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReadResp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                        $root.event_store.client.streams.ReadResp.ReadEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.confirmation != null && Object.hasOwnProperty.call(message, "confirmation"))
                        $root.event_store.client.streams.ReadResp.SubscriptionConfirmation.encode(message.confirmation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.checkpoint != null && Object.hasOwnProperty.call(message, "checkpoint"))
                        $root.event_store.client.streams.ReadResp.Checkpoint.encode(message.checkpoint, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.streamNotFound != null && Object.hasOwnProperty.call(message, "streamNotFound"))
                        $root.event_store.client.streams.ReadResp.StreamNotFound.encode(message.streamNotFound, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ReadResp message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {event_store.client.streams.IReadResp} message ReadResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReadResp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReadResp message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.ReadResp} ReadResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReadResp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.event = $root.event_store.client.streams.ReadResp.ReadEvent.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.confirmation = $root.event_store.client.streams.ReadResp.SubscriptionConfirmation.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.checkpoint = $root.event_store.client.streams.ReadResp.Checkpoint.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.streamNotFound = $root.event_store.client.streams.ReadResp.StreamNotFound.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReadResp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.ReadResp} ReadResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReadResp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReadResp message.
                 * @function verify
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReadResp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.event != null && message.hasOwnProperty("event")) {
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.ReadResp.ReadEvent.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                    }
                    if (message.confirmation != null && message.hasOwnProperty("confirmation")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.ReadResp.SubscriptionConfirmation.verify(message.confirmation);
                            if (error)
                                return "confirmation." + error;
                        }
                    }
                    if (message.checkpoint != null && message.hasOwnProperty("checkpoint")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.ReadResp.Checkpoint.verify(message.checkpoint);
                            if (error)
                                return "checkpoint." + error;
                        }
                    }
                    if (message.streamNotFound != null && message.hasOwnProperty("streamNotFound")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.ReadResp.StreamNotFound.verify(message.streamNotFound);
                            if (error)
                                return "streamNotFound." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ReadResp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.ReadResp} ReadResp
                 */
                ReadResp.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.ReadResp)
                        return object;
                    var message = new $root.event_store.client.streams.ReadResp();
                    if (object.event != null) {
                        if (typeof object.event !== "object")
                            throw TypeError(".event_store.client.streams.ReadResp.event: object expected");
                        message.event = $root.event_store.client.streams.ReadResp.ReadEvent.fromObject(object.event);
                    }
                    if (object.confirmation != null) {
                        if (typeof object.confirmation !== "object")
                            throw TypeError(".event_store.client.streams.ReadResp.confirmation: object expected");
                        message.confirmation = $root.event_store.client.streams.ReadResp.SubscriptionConfirmation.fromObject(object.confirmation);
                    }
                    if (object.checkpoint != null) {
                        if (typeof object.checkpoint !== "object")
                            throw TypeError(".event_store.client.streams.ReadResp.checkpoint: object expected");
                        message.checkpoint = $root.event_store.client.streams.ReadResp.Checkpoint.fromObject(object.checkpoint);
                    }
                    if (object.streamNotFound != null) {
                        if (typeof object.streamNotFound !== "object")
                            throw TypeError(".event_store.client.streams.ReadResp.streamNotFound: object expected");
                        message.streamNotFound = $root.event_store.client.streams.ReadResp.StreamNotFound.fromObject(object.streamNotFound);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ReadResp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.ReadResp
                 * @static
                 * @param {event_store.client.streams.ReadResp} message ReadResp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReadResp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.event != null && message.hasOwnProperty("event")) {
                        object.event = $root.event_store.client.streams.ReadResp.ReadEvent.toObject(message.event, options);
                        if (options.oneofs)
                            object.content = "event";
                    }
                    if (message.confirmation != null && message.hasOwnProperty("confirmation")) {
                        object.confirmation = $root.event_store.client.streams.ReadResp.SubscriptionConfirmation.toObject(message.confirmation, options);
                        if (options.oneofs)
                            object.content = "confirmation";
                    }
                    if (message.checkpoint != null && message.hasOwnProperty("checkpoint")) {
                        object.checkpoint = $root.event_store.client.streams.ReadResp.Checkpoint.toObject(message.checkpoint, options);
                        if (options.oneofs)
                            object.content = "checkpoint";
                    }
                    if (message.streamNotFound != null && message.hasOwnProperty("streamNotFound")) {
                        object.streamNotFound = $root.event_store.client.streams.ReadResp.StreamNotFound.toObject(message.streamNotFound, options);
                        if (options.oneofs)
                            object.content = "streamNotFound";
                    }
                    return object;
                };

                /**
                 * Converts this ReadResp to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.ReadResp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReadResp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ReadResp.ReadEvent = (function() {

                    /**
                     * Properties of a ReadEvent.
                     * @memberof event_store.client.streams.ReadResp
                     * @interface IReadEvent
                     * @property {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null} [event] ReadEvent event
                     * @property {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null} [link] ReadEvent link
                     * @property {number|Long|null} [commitPosition] ReadEvent commitPosition
                     * @property {event_store.client.shared.IEmpty|null} [noPosition] ReadEvent noPosition
                     */

                    /**
                     * Constructs a new ReadEvent.
                     * @memberof event_store.client.streams.ReadResp
                     * @classdesc Represents a ReadEvent.
                     * @implements IReadEvent
                     * @constructor
                     * @param {event_store.client.streams.ReadResp.IReadEvent=} [properties] Properties to set
                     */
                    function ReadEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ReadEvent event.
                     * @member {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null|undefined} event
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.event = null;

                    /**
                     * ReadEvent link.
                     * @member {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent|null|undefined} link
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.link = null;

                    /**
                     * ReadEvent commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * ReadEvent noPosition.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noPosition
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.noPosition = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * ReadEvent position.
                     * @member {"commitPosition"|"noPosition"|undefined} position
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     */
                    Object.defineProperty(ReadEvent.prototype, "position", {
                        get: $util.oneOfGetter($oneOfFields = ["commitPosition", "noPosition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new ReadEvent instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {event_store.client.streams.ReadResp.IReadEvent=} [properties] Properties to set
                     * @returns {event_store.client.streams.ReadResp.ReadEvent} ReadEvent instance
                     */
                    ReadEvent.create = function create(properties) {
                        return new ReadEvent(properties);
                    };

                    /**
                     * Encodes the specified ReadEvent message. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {event_store.client.streams.ReadResp.IReadEvent} message ReadEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                            $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
                            $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.encode(message.link, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.commitPosition);
                        if (message.noPosition != null && Object.hasOwnProperty.call(message, "noPosition"))
                            $root.event_store.client.shared.Empty.encode(message.noPosition, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ReadEvent message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {event_store.client.streams.ReadResp.IReadEvent} message ReadEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.ReadResp.ReadEvent} ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp.ReadEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.event = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.link = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.commitPosition = reader.uint64();
                                break;
                            case 4:
                                message.noPosition = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.ReadResp.ReadEvent} ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ReadEvent message.
                     * @function verify
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.event != null && message.hasOwnProperty("event")) {
                            var error = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        if (message.link != null && message.hasOwnProperty("link")) {
                            var error = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify(message.link);
                            if (error)
                                return "link." + error;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition")) {
                            properties.position = 1;
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        }
                        if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                            if (properties.position === 1)
                                return "position: multiple values";
                            properties.position = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noPosition);
                                if (error)
                                    return "noPosition." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.ReadResp.ReadEvent} ReadEvent
                     */
                    ReadEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.ReadResp.ReadEvent)
                            return object;
                        var message = new $root.event_store.client.streams.ReadResp.ReadEvent();
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.event: object expected");
                            message.event = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.fromObject(object.event);
                        }
                        if (object.link != null) {
                            if (typeof object.link !== "object")
                                throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.link: object expected");
                            message.link = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.fromObject(object.link);
                        }
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                        if (object.noPosition != null) {
                            if (typeof object.noPosition !== "object")
                                throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.noPosition: object expected");
                            message.noPosition = $root.event_store.client.shared.Empty.fromObject(object.noPosition);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ReadEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @static
                     * @param {event_store.client.streams.ReadResp.ReadEvent} message ReadEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.event = null;
                            object.link = null;
                        }
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.toObject(message.event, options);
                        if (message.link != null && message.hasOwnProperty("link"))
                            object.link = $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.toObject(message.link, options);
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition")) {
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                            if (options.oneofs)
                                object.position = "commitPosition";
                        }
                        if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                            object.noPosition = $root.event_store.client.shared.Empty.toObject(message.noPosition, options);
                            if (options.oneofs)
                                object.position = "noPosition";
                        }
                        return object;
                    };

                    /**
                     * Converts this ReadEvent to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.ReadResp.ReadEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ReadEvent.RecordedEvent = (function() {

                        /**
                         * Properties of a RecordedEvent.
                         * @memberof event_store.client.streams.ReadResp.ReadEvent
                         * @interface IRecordedEvent
                         * @property {event_store.client.shared.IUUID|null} [id] RecordedEvent id
                         * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] RecordedEvent streamIdentifier
                         * @property {number|Long|null} [streamRevision] RecordedEvent streamRevision
                         * @property {number|Long|null} [preparePosition] RecordedEvent preparePosition
                         * @property {number|Long|null} [commitPosition] RecordedEvent commitPosition
                         * @property {Object.<string,string>|null} [metadata] RecordedEvent metadata
                         * @property {Uint8Array|null} [customMetadata] RecordedEvent customMetadata
                         * @property {Uint8Array|null} [data] RecordedEvent data
                         */

                        /**
                         * Constructs a new RecordedEvent.
                         * @memberof event_store.client.streams.ReadResp.ReadEvent
                         * @classdesc Represents a RecordedEvent.
                         * @implements IRecordedEvent
                         * @constructor
                         * @param {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent=} [properties] Properties to set
                         */
                        function RecordedEvent(properties) {
                            this.metadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * RecordedEvent id.
                         * @member {event_store.client.shared.IUUID|null|undefined} id
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.id = null;

                        /**
                         * RecordedEvent streamIdentifier.
                         * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.streamIdentifier = null;

                        /**
                         * RecordedEvent streamRevision.
                         * @member {number|Long} streamRevision
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.streamRevision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * RecordedEvent preparePosition.
                         * @member {number|Long} preparePosition
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * RecordedEvent commitPosition.
                         * @member {number|Long} commitPosition
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                        /**
                         * RecordedEvent metadata.
                         * @member {Object.<string,string>} metadata
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.metadata = $util.emptyObject;

                        /**
                         * RecordedEvent customMetadata.
                         * @member {Uint8Array} customMetadata
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.customMetadata = $util.newBuffer([]);

                        /**
                         * RecordedEvent data.
                         * @member {Uint8Array} data
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         */
                        RecordedEvent.prototype.data = $util.newBuffer([]);

                        /**
                         * Creates a new RecordedEvent instance using the specified properties.
                         * @function create
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent=} [properties] Properties to set
                         * @returns {event_store.client.streams.ReadResp.ReadEvent.RecordedEvent} RecordedEvent instance
                         */
                        RecordedEvent.create = function create(properties) {
                            return new RecordedEvent(properties);
                        };

                        /**
                         * Encodes the specified RecordedEvent message. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify|verify} messages.
                         * @function encode
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent} message RecordedEvent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecordedEvent.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                                $root.event_store.client.shared.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                                $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.streamRevision != null && Object.hasOwnProperty.call(message, "streamRevision"))
                                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.streamRevision);
                            if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.preparePosition);
                            if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.commitPosition);
                            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                                for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
                            if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.customMetadata);
                            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.data);
                            return writer;
                        };

                        /**
                         * Encodes the specified RecordedEvent message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {event_store.client.streams.ReadResp.ReadEvent.IRecordedEvent} message RecordedEvent message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RecordedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a RecordedEvent message from the specified reader or buffer.
                         * @function decode
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {event_store.client.streams.ReadResp.ReadEvent.RecordedEvent} RecordedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecordedEvent.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.id = $root.event_store.client.shared.UUID.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.streamRevision = reader.uint64();
                                    break;
                                case 4:
                                    message.preparePosition = reader.uint64();
                                    break;
                                case 5:
                                    message.commitPosition = reader.uint64();
                                    break;
                                case 6:
                                    if (message.metadata === $util.emptyObject)
                                        message.metadata = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        var tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7);
                                            break;
                                        }
                                    }
                                    message.metadata[key] = value;
                                    break;
                                case 7:
                                    message.customMetadata = reader.bytes();
                                    break;
                                case 8:
                                    message.data = reader.bytes();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a RecordedEvent message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {event_store.client.streams.ReadResp.ReadEvent.RecordedEvent} RecordedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RecordedEvent.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a RecordedEvent message.
                         * @function verify
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RecordedEvent.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.id != null && message.hasOwnProperty("id")) {
                                var error = $root.event_store.client.shared.UUID.verify(message.id);
                                if (error)
                                    return "id." + error;
                            }
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                                var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                                if (error)
                                    return "streamIdentifier." + error;
                            }
                            if (message.streamRevision != null && message.hasOwnProperty("streamRevision"))
                                if (!$util.isInteger(message.streamRevision) && !(message.streamRevision && $util.isInteger(message.streamRevision.low) && $util.isInteger(message.streamRevision.high)))
                                    return "streamRevision: integer|Long expected";
                            if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                                if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                    return "preparePosition: integer|Long expected";
                            if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                                if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                    return "commitPosition: integer|Long expected";
                            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                                if (!$util.isObject(message.metadata))
                                    return "metadata: object expected";
                                var key = Object.keys(message.metadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.metadata[key[i]]))
                                        return "metadata: string{k:string} expected";
                            }
                            if (message.customMetadata != null && message.hasOwnProperty("customMetadata"))
                                if (!(message.customMetadata && typeof message.customMetadata.length === "number" || $util.isString(message.customMetadata)))
                                    return "customMetadata: buffer expected";
                            if (message.data != null && message.hasOwnProperty("data"))
                                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                                    return "data: buffer expected";
                            return null;
                        };

                        /**
                         * Creates a RecordedEvent message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {event_store.client.streams.ReadResp.ReadEvent.RecordedEvent} RecordedEvent
                         */
                        RecordedEvent.fromObject = function fromObject(object) {
                            if (object instanceof $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent)
                                return object;
                            var message = new $root.event_store.client.streams.ReadResp.ReadEvent.RecordedEvent();
                            if (object.id != null) {
                                if (typeof object.id !== "object")
                                    throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.id: object expected");
                                message.id = $root.event_store.client.shared.UUID.fromObject(object.id);
                            }
                            if (object.streamIdentifier != null) {
                                if (typeof object.streamIdentifier !== "object")
                                    throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.streamIdentifier: object expected");
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                            }
                            if (object.streamRevision != null)
                                if ($util.Long)
                                    (message.streamRevision = $util.Long.fromValue(object.streamRevision)).unsigned = true;
                                else if (typeof object.streamRevision === "string")
                                    message.streamRevision = parseInt(object.streamRevision, 10);
                                else if (typeof object.streamRevision === "number")
                                    message.streamRevision = object.streamRevision;
                                else if (typeof object.streamRevision === "object")
                                    message.streamRevision = new $util.LongBits(object.streamRevision.low >>> 0, object.streamRevision.high >>> 0).toNumber(true);
                            if (object.preparePosition != null)
                                if ($util.Long)
                                    (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                                else if (typeof object.preparePosition === "string")
                                    message.preparePosition = parseInt(object.preparePosition, 10);
                                else if (typeof object.preparePosition === "number")
                                    message.preparePosition = object.preparePosition;
                                else if (typeof object.preparePosition === "object")
                                    message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                            if (object.commitPosition != null)
                                if ($util.Long)
                                    (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                                else if (typeof object.commitPosition === "string")
                                    message.commitPosition = parseInt(object.commitPosition, 10);
                                else if (typeof object.commitPosition === "number")
                                    message.commitPosition = object.commitPosition;
                                else if (typeof object.commitPosition === "object")
                                    message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                            if (object.metadata) {
                                if (typeof object.metadata !== "object")
                                    throw TypeError(".event_store.client.streams.ReadResp.ReadEvent.RecordedEvent.metadata: object expected");
                                message.metadata = {};
                                for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                                    message.metadata[keys[i]] = String(object.metadata[keys[i]]);
                            }
                            if (object.customMetadata != null)
                                if (typeof object.customMetadata === "string")
                                    $util.base64.decode(object.customMetadata, message.customMetadata = $util.newBuffer($util.base64.length(object.customMetadata)), 0);
                                else if (object.customMetadata.length)
                                    message.customMetadata = object.customMetadata;
                            if (object.data != null)
                                if (typeof object.data === "string")
                                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                                else if (object.data.length)
                                    message.data = object.data;
                            return message;
                        };

                        /**
                         * Creates a plain object from a RecordedEvent message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @static
                         * @param {event_store.client.streams.ReadResp.ReadEvent.RecordedEvent} message RecordedEvent
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RecordedEvent.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.metadata = {};
                            if (options.defaults) {
                                object.id = null;
                                object.streamIdentifier = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.streamRevision = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.streamRevision = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.preparePosition = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, true);
                                    object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.commitPosition = options.longs === String ? "0" : 0;
                                if (options.bytes === String)
                                    object.customMetadata = "";
                                else {
                                    object.customMetadata = [];
                                    if (options.bytes !== Array)
                                        object.customMetadata = $util.newBuffer(object.customMetadata);
                                }
                                if (options.bytes === String)
                                    object.data = "";
                                else {
                                    object.data = [];
                                    if (options.bytes !== Array)
                                        object.data = $util.newBuffer(object.data);
                                }
                            }
                            if (message.id != null && message.hasOwnProperty("id"))
                                object.id = $root.event_store.client.shared.UUID.toObject(message.id, options);
                            if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                                object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                            if (message.streamRevision != null && message.hasOwnProperty("streamRevision"))
                                if (typeof message.streamRevision === "number")
                                    object.streamRevision = options.longs === String ? String(message.streamRevision) : message.streamRevision;
                                else
                                    object.streamRevision = options.longs === String ? $util.Long.prototype.toString.call(message.streamRevision) : options.longs === Number ? new $util.LongBits(message.streamRevision.low >>> 0, message.streamRevision.high >>> 0).toNumber(true) : message.streamRevision;
                            if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                                if (typeof message.preparePosition === "number")
                                    object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                                else
                                    object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                            if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                                if (typeof message.commitPosition === "number")
                                    object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                                else
                                    object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                            var keys2;
                            if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                                object.metadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.metadata[keys2[j]] = message.metadata[keys2[j]];
                            }
                            if (message.customMetadata != null && message.hasOwnProperty("customMetadata"))
                                object.customMetadata = options.bytes === String ? $util.base64.encode(message.customMetadata, 0, message.customMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.customMetadata) : message.customMetadata;
                            if (message.data != null && message.hasOwnProperty("data"))
                                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                            return object;
                        };

                        /**
                         * Converts this RecordedEvent to JSON.
                         * @function toJSON
                         * @memberof event_store.client.streams.ReadResp.ReadEvent.RecordedEvent
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RecordedEvent.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return RecordedEvent;
                    })();

                    return ReadEvent;
                })();

                ReadResp.SubscriptionConfirmation = (function() {

                    /**
                     * Properties of a SubscriptionConfirmation.
                     * @memberof event_store.client.streams.ReadResp
                     * @interface ISubscriptionConfirmation
                     * @property {string|null} [subscriptionId] SubscriptionConfirmation subscriptionId
                     */

                    /**
                     * Constructs a new SubscriptionConfirmation.
                     * @memberof event_store.client.streams.ReadResp
                     * @classdesc Represents a SubscriptionConfirmation.
                     * @implements ISubscriptionConfirmation
                     * @constructor
                     * @param {event_store.client.streams.ReadResp.ISubscriptionConfirmation=} [properties] Properties to set
                     */
                    function SubscriptionConfirmation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SubscriptionConfirmation subscriptionId.
                     * @member {string} subscriptionId
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @instance
                     */
                    SubscriptionConfirmation.prototype.subscriptionId = "";

                    /**
                     * Creates a new SubscriptionConfirmation instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {event_store.client.streams.ReadResp.ISubscriptionConfirmation=} [properties] Properties to set
                     * @returns {event_store.client.streams.ReadResp.SubscriptionConfirmation} SubscriptionConfirmation instance
                     */
                    SubscriptionConfirmation.create = function create(properties) {
                        return new SubscriptionConfirmation(properties);
                    };

                    /**
                     * Encodes the specified SubscriptionConfirmation message. Does not implicitly {@link event_store.client.streams.ReadResp.SubscriptionConfirmation.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {event_store.client.streams.ReadResp.ISubscriptionConfirmation} message SubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionConfirmation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.subscriptionId != null && Object.hasOwnProperty.call(message, "subscriptionId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified SubscriptionConfirmation message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.SubscriptionConfirmation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {event_store.client.streams.ReadResp.ISubscriptionConfirmation} message SubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.ReadResp.SubscriptionConfirmation} SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionConfirmation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp.SubscriptionConfirmation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.ReadResp.SubscriptionConfirmation} SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionConfirmation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SubscriptionConfirmation message.
                     * @function verify
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscriptionConfirmation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            if (!$util.isString(message.subscriptionId))
                                return "subscriptionId: string expected";
                        return null;
                    };

                    /**
                     * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.ReadResp.SubscriptionConfirmation} SubscriptionConfirmation
                     */
                    SubscriptionConfirmation.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.ReadResp.SubscriptionConfirmation)
                            return object;
                        var message = new $root.event_store.client.streams.ReadResp.SubscriptionConfirmation();
                        if (object.subscriptionId != null)
                            message.subscriptionId = String(object.subscriptionId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SubscriptionConfirmation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @static
                     * @param {event_store.client.streams.ReadResp.SubscriptionConfirmation} message SubscriptionConfirmation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscriptionConfirmation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.subscriptionId = "";
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            object.subscriptionId = message.subscriptionId;
                        return object;
                    };

                    /**
                     * Converts this SubscriptionConfirmation to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.ReadResp.SubscriptionConfirmation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscriptionConfirmation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscriptionConfirmation;
                })();

                ReadResp.Checkpoint = (function() {

                    /**
                     * Properties of a Checkpoint.
                     * @memberof event_store.client.streams.ReadResp
                     * @interface ICheckpoint
                     * @property {number|Long|null} [commitPosition] Checkpoint commitPosition
                     * @property {number|Long|null} [preparePosition] Checkpoint preparePosition
                     */

                    /**
                     * Constructs a new Checkpoint.
                     * @memberof event_store.client.streams.ReadResp
                     * @classdesc Represents a Checkpoint.
                     * @implements ICheckpoint
                     * @constructor
                     * @param {event_store.client.streams.ReadResp.ICheckpoint=} [properties] Properties to set
                     */
                    function Checkpoint(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Checkpoint commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @instance
                     */
                    Checkpoint.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Checkpoint preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @instance
                     */
                    Checkpoint.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new Checkpoint instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {event_store.client.streams.ReadResp.ICheckpoint=} [properties] Properties to set
                     * @returns {event_store.client.streams.ReadResp.Checkpoint} Checkpoint instance
                     */
                    Checkpoint.create = function create(properties) {
                        return new Checkpoint(properties);
                    };

                    /**
                     * Encodes the specified Checkpoint message. Does not implicitly {@link event_store.client.streams.ReadResp.Checkpoint.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {event_store.client.streams.ReadResp.ICheckpoint} message Checkpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Checkpoint.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.commitPosition);
                        if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.preparePosition);
                        return writer;
                    };

                    /**
                     * Encodes the specified Checkpoint message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.Checkpoint.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {event_store.client.streams.ReadResp.ICheckpoint} message Checkpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Checkpoint.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Checkpoint message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.ReadResp.Checkpoint} Checkpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Checkpoint.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp.Checkpoint();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.uint64();
                                break;
                            case 2:
                                message.preparePosition = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Checkpoint message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.ReadResp.Checkpoint} Checkpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Checkpoint.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Checkpoint message.
                     * @function verify
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Checkpoint.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Checkpoint message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.ReadResp.Checkpoint} Checkpoint
                     */
                    Checkpoint.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.ReadResp.Checkpoint)
                            return object;
                        var message = new $root.event_store.client.streams.ReadResp.Checkpoint();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Checkpoint message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @static
                     * @param {event_store.client.streams.ReadResp.Checkpoint} message Checkpoint
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Checkpoint.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                        return object;
                    };

                    /**
                     * Converts this Checkpoint to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.ReadResp.Checkpoint
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Checkpoint.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Checkpoint;
                })();

                ReadResp.StreamNotFound = (function() {

                    /**
                     * Properties of a StreamNotFound.
                     * @memberof event_store.client.streams.ReadResp
                     * @interface IStreamNotFound
                     * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] StreamNotFound streamIdentifier
                     */

                    /**
                     * Constructs a new StreamNotFound.
                     * @memberof event_store.client.streams.ReadResp
                     * @classdesc Represents a StreamNotFound.
                     * @implements IStreamNotFound
                     * @constructor
                     * @param {event_store.client.streams.ReadResp.IStreamNotFound=} [properties] Properties to set
                     */
                    function StreamNotFound(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StreamNotFound streamIdentifier.
                     * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @instance
                     */
                    StreamNotFound.prototype.streamIdentifier = null;

                    /**
                     * Creates a new StreamNotFound instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {event_store.client.streams.ReadResp.IStreamNotFound=} [properties] Properties to set
                     * @returns {event_store.client.streams.ReadResp.StreamNotFound} StreamNotFound instance
                     */
                    StreamNotFound.create = function create(properties) {
                        return new StreamNotFound(properties);
                    };

                    /**
                     * Encodes the specified StreamNotFound message. Does not implicitly {@link event_store.client.streams.ReadResp.StreamNotFound.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {event_store.client.streams.ReadResp.IStreamNotFound} message StreamNotFound message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StreamNotFound.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                            $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified StreamNotFound message, length delimited. Does not implicitly {@link event_store.client.streams.ReadResp.StreamNotFound.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {event_store.client.streams.ReadResp.IStreamNotFound} message StreamNotFound message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StreamNotFound.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StreamNotFound message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.ReadResp.StreamNotFound} StreamNotFound
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StreamNotFound.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.ReadResp.StreamNotFound();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StreamNotFound message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.ReadResp.StreamNotFound} StreamNotFound
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StreamNotFound.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StreamNotFound message.
                     * @function verify
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StreamNotFound.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                            var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                            if (error)
                                return "streamIdentifier." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a StreamNotFound message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.ReadResp.StreamNotFound} StreamNotFound
                     */
                    StreamNotFound.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.ReadResp.StreamNotFound)
                            return object;
                        var message = new $root.event_store.client.streams.ReadResp.StreamNotFound();
                        if (object.streamIdentifier != null) {
                            if (typeof object.streamIdentifier !== "object")
                                throw TypeError(".event_store.client.streams.ReadResp.StreamNotFound.streamIdentifier: object expected");
                            message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StreamNotFound message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @static
                     * @param {event_store.client.streams.ReadResp.StreamNotFound} message StreamNotFound
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StreamNotFound.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.streamIdentifier = null;
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                            object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                        return object;
                    };

                    /**
                     * Converts this StreamNotFound to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.ReadResp.StreamNotFound
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StreamNotFound.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return StreamNotFound;
                })();

                return ReadResp;
            })();

            streams.AppendReq = (function() {

                /**
                 * Properties of an AppendReq.
                 * @memberof event_store.client.streams
                 * @interface IAppendReq
                 * @property {event_store.client.streams.AppendReq.IOptions|null} [options] AppendReq options
                 * @property {event_store.client.streams.AppendReq.IProposedMessage|null} [proposedMessage] AppendReq proposedMessage
                 */

                /**
                 * Constructs a new AppendReq.
                 * @memberof event_store.client.streams
                 * @classdesc Represents an AppendReq.
                 * @implements IAppendReq
                 * @constructor
                 * @param {event_store.client.streams.IAppendReq=} [properties] Properties to set
                 */
                function AppendReq(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppendReq options.
                 * @member {event_store.client.streams.AppendReq.IOptions|null|undefined} options
                 * @memberof event_store.client.streams.AppendReq
                 * @instance
                 */
                AppendReq.prototype.options = null;

                /**
                 * AppendReq proposedMessage.
                 * @member {event_store.client.streams.AppendReq.IProposedMessage|null|undefined} proposedMessage
                 * @memberof event_store.client.streams.AppendReq
                 * @instance
                 */
                AppendReq.prototype.proposedMessage = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * AppendReq content.
                 * @member {"options"|"proposedMessage"|undefined} content
                 * @memberof event_store.client.streams.AppendReq
                 * @instance
                 */
                Object.defineProperty(AppendReq.prototype, "content", {
                    get: $util.oneOfGetter($oneOfFields = ["options", "proposedMessage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new AppendReq instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {event_store.client.streams.IAppendReq=} [properties] Properties to set
                 * @returns {event_store.client.streams.AppendReq} AppendReq instance
                 */
                AppendReq.create = function create(properties) {
                    return new AppendReq(properties);
                };

                /**
                 * Encodes the specified AppendReq message. Does not implicitly {@link event_store.client.streams.AppendReq.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {event_store.client.streams.IAppendReq} message AppendReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppendReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.event_store.client.streams.AppendReq.Options.encode(message.options, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.proposedMessage != null && Object.hasOwnProperty.call(message, "proposedMessage"))
                        $root.event_store.client.streams.AppendReq.ProposedMessage.encode(message.proposedMessage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppendReq message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {event_store.client.streams.IAppendReq} message AppendReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppendReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppendReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.AppendReq} AppendReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppendReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendReq();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.options = $root.event_store.client.streams.AppendReq.Options.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.proposedMessage = $root.event_store.client.streams.AppendReq.ProposedMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AppendReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.AppendReq} AppendReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppendReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppendReq message.
                 * @function verify
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppendReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.options != null && message.hasOwnProperty("options")) {
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.AppendReq.Options.verify(message.options);
                            if (error)
                                return "options." + error;
                        }
                    }
                    if (message.proposedMessage != null && message.hasOwnProperty("proposedMessage")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.event_store.client.streams.AppendReq.ProposedMessage.verify(message.proposedMessage);
                            if (error)
                                return "proposedMessage." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an AppendReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.AppendReq} AppendReq
                 */
                AppendReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.AppendReq)
                        return object;
                    var message = new $root.event_store.client.streams.AppendReq();
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".event_store.client.streams.AppendReq.options: object expected");
                        message.options = $root.event_store.client.streams.AppendReq.Options.fromObject(object.options);
                    }
                    if (object.proposedMessage != null) {
                        if (typeof object.proposedMessage !== "object")
                            throw TypeError(".event_store.client.streams.AppendReq.proposedMessage: object expected");
                        message.proposedMessage = $root.event_store.client.streams.AppendReq.ProposedMessage.fromObject(object.proposedMessage);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppendReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.AppendReq
                 * @static
                 * @param {event_store.client.streams.AppendReq} message AppendReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppendReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.options != null && message.hasOwnProperty("options")) {
                        object.options = $root.event_store.client.streams.AppendReq.Options.toObject(message.options, options);
                        if (options.oneofs)
                            object.content = "options";
                    }
                    if (message.proposedMessage != null && message.hasOwnProperty("proposedMessage")) {
                        object.proposedMessage = $root.event_store.client.streams.AppendReq.ProposedMessage.toObject(message.proposedMessage, options);
                        if (options.oneofs)
                            object.content = "proposedMessage";
                    }
                    return object;
                };

                /**
                 * Converts this AppendReq to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.AppendReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppendReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                AppendReq.Options = (function() {

                    /**
                     * Properties of an Options.
                     * @memberof event_store.client.streams.AppendReq
                     * @interface IOptions
                     * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] Options streamIdentifier
                     * @property {number|Long|null} [revision] Options revision
                     * @property {event_store.client.shared.IEmpty|null} [noStream] Options noStream
                     * @property {event_store.client.shared.IEmpty|null} [any] Options any
                     * @property {event_store.client.shared.IEmpty|null} [streamExists] Options streamExists
                     */

                    /**
                     * Constructs a new Options.
                     * @memberof event_store.client.streams.AppendReq
                     * @classdesc Represents an Options.
                     * @implements IOptions
                     * @constructor
                     * @param {event_store.client.streams.AppendReq.IOptions=} [properties] Properties to set
                     */
                    function Options(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Options streamIdentifier.
                     * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Options.prototype.streamIdentifier = null;

                    /**
                     * Options revision.
                     * @member {number|Long} revision
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Options.prototype.revision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Options noStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noStream
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Options.prototype.noStream = null;

                    /**
                     * Options any.
                     * @member {event_store.client.shared.IEmpty|null|undefined} any
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Options.prototype.any = null;

                    /**
                     * Options streamExists.
                     * @member {event_store.client.shared.IEmpty|null|undefined} streamExists
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Options.prototype.streamExists = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Options expectedStreamRevision.
                     * @member {"revision"|"noStream"|"any"|"streamExists"|undefined} expectedStreamRevision
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "expectedStreamRevision", {
                        get: $util.oneOfGetter($oneOfFields = ["revision", "noStream", "any", "streamExists"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {event_store.client.streams.AppendReq.IOptions=} [properties] Properties to set
                     * @returns {event_store.client.streams.AppendReq.Options} Options instance
                     */
                    Options.create = function create(properties) {
                        return new Options(properties);
                    };

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.AppendReq.Options.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {event_store.client.streams.AppendReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                            $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.revision != null && Object.hasOwnProperty.call(message, "revision"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.revision);
                        if (message.noStream != null && Object.hasOwnProperty.call(message, "noStream"))
                            $root.event_store.client.shared.Empty.encode(message.noStream, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.any != null && Object.hasOwnProperty.call(message, "any"))
                            $root.event_store.client.shared.Empty.encode(message.any, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.streamExists != null && Object.hasOwnProperty.call(message, "streamExists"))
                            $root.event_store.client.shared.Empty.encode(message.streamExists, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.Options.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {event_store.client.streams.AppendReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.AppendReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendReq.Options();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.revision = reader.uint64();
                                break;
                            case 3:
                                message.noStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.any = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.streamExists = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.AppendReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Options message.
                     * @function verify
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Options.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                            var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                            if (error)
                                return "streamIdentifier." + error;
                        }
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            properties.expectedStreamRevision = 1;
                            if (!$util.isInteger(message.revision) && !(message.revision && $util.isInteger(message.revision.low) && $util.isInteger(message.revision.high)))
                                return "revision: integer|Long expected";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noStream);
                                if (error)
                                    return "noStream." + error;
                            }
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.any);
                                if (error)
                                    return "any." + error;
                            }
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.streamExists);
                                if (error)
                                    return "streamExists." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.AppendReq.Options} Options
                     */
                    Options.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.AppendReq.Options)
                            return object;
                        var message = new $root.event_store.client.streams.AppendReq.Options();
                        if (object.streamIdentifier != null) {
                            if (typeof object.streamIdentifier !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.Options.streamIdentifier: object expected");
                            message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                        }
                        if (object.revision != null)
                            if ($util.Long)
                                (message.revision = $util.Long.fromValue(object.revision)).unsigned = true;
                            else if (typeof object.revision === "string")
                                message.revision = parseInt(object.revision, 10);
                            else if (typeof object.revision === "number")
                                message.revision = object.revision;
                            else if (typeof object.revision === "object")
                                message.revision = new $util.LongBits(object.revision.low >>> 0, object.revision.high >>> 0).toNumber(true);
                        if (object.noStream != null) {
                            if (typeof object.noStream !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.Options.noStream: object expected");
                            message.noStream = $root.event_store.client.shared.Empty.fromObject(object.noStream);
                        }
                        if (object.any != null) {
                            if (typeof object.any !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.Options.any: object expected");
                            message.any = $root.event_store.client.shared.Empty.fromObject(object.any);
                        }
                        if (object.streamExists != null) {
                            if (typeof object.streamExists !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.Options.streamExists: object expected");
                            message.streamExists = $root.event_store.client.shared.Empty.fromObject(object.streamExists);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @static
                     * @param {event_store.client.streams.AppendReq.Options} message Options
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Options.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.streamIdentifier = null;
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                            object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            if (typeof message.revision === "number")
                                object.revision = options.longs === String ? String(message.revision) : message.revision;
                            else
                                object.revision = options.longs === String ? $util.Long.prototype.toString.call(message.revision) : options.longs === Number ? new $util.LongBits(message.revision.low >>> 0, message.revision.high >>> 0).toNumber(true) : message.revision;
                            if (options.oneofs)
                                object.expectedStreamRevision = "revision";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            object.noStream = $root.event_store.client.shared.Empty.toObject(message.noStream, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "noStream";
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            object.any = $root.event_store.client.shared.Empty.toObject(message.any, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "any";
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            object.streamExists = $root.event_store.client.shared.Empty.toObject(message.streamExists, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "streamExists";
                        }
                        return object;
                    };

                    /**
                     * Converts this Options to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.AppendReq.Options
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Options.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Options;
                })();

                AppendReq.ProposedMessage = (function() {

                    /**
                     * Properties of a ProposedMessage.
                     * @memberof event_store.client.streams.AppendReq
                     * @interface IProposedMessage
                     * @property {event_store.client.shared.IUUID|null} [id] ProposedMessage id
                     * @property {Object.<string,string>|null} [metadata] ProposedMessage metadata
                     * @property {Uint8Array|null} [customMetadata] ProposedMessage customMetadata
                     * @property {Uint8Array|null} [data] ProposedMessage data
                     */

                    /**
                     * Constructs a new ProposedMessage.
                     * @memberof event_store.client.streams.AppendReq
                     * @classdesc Represents a ProposedMessage.
                     * @implements IProposedMessage
                     * @constructor
                     * @param {event_store.client.streams.AppendReq.IProposedMessage=} [properties] Properties to set
                     */
                    function ProposedMessage(properties) {
                        this.metadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ProposedMessage id.
                     * @member {event_store.client.shared.IUUID|null|undefined} id
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @instance
                     */
                    ProposedMessage.prototype.id = null;

                    /**
                     * ProposedMessage metadata.
                     * @member {Object.<string,string>} metadata
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @instance
                     */
                    ProposedMessage.prototype.metadata = $util.emptyObject;

                    /**
                     * ProposedMessage customMetadata.
                     * @member {Uint8Array} customMetadata
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @instance
                     */
                    ProposedMessage.prototype.customMetadata = $util.newBuffer([]);

                    /**
                     * ProposedMessage data.
                     * @member {Uint8Array} data
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @instance
                     */
                    ProposedMessage.prototype.data = $util.newBuffer([]);

                    /**
                     * Creates a new ProposedMessage instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {event_store.client.streams.AppendReq.IProposedMessage=} [properties] Properties to set
                     * @returns {event_store.client.streams.AppendReq.ProposedMessage} ProposedMessage instance
                     */
                    ProposedMessage.create = function create(properties) {
                        return new ProposedMessage(properties);
                    };

                    /**
                     * Encodes the specified ProposedMessage message. Does not implicitly {@link event_store.client.streams.AppendReq.ProposedMessage.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {event_store.client.streams.AppendReq.IProposedMessage} message ProposedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProposedMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            $root.event_store.client.shared.UUID.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            for (var keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
                        if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.customMetadata);
                        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
                        return writer;
                    };

                    /**
                     * Encodes the specified ProposedMessage message, length delimited. Does not implicitly {@link event_store.client.streams.AppendReq.ProposedMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {event_store.client.streams.AppendReq.IProposedMessage} message ProposedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ProposedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ProposedMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.AppendReq.ProposedMessage} ProposedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProposedMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendReq.ProposedMessage(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.event_store.client.shared.UUID.decode(reader, reader.uint32());
                                break;
                            case 2:
                                if (message.metadata === $util.emptyObject)
                                    message.metadata = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.metadata[key] = value;
                                break;
                            case 3:
                                message.customMetadata = reader.bytes();
                                break;
                            case 4:
                                message.data = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ProposedMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.AppendReq.ProposedMessage} ProposedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ProposedMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ProposedMessage message.
                     * @function verify
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ProposedMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.event_store.client.shared.UUID.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.metadata != null && message.hasOwnProperty("metadata")) {
                            if (!$util.isObject(message.metadata))
                                return "metadata: object expected";
                            var key = Object.keys(message.metadata);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.metadata[key[i]]))
                                    return "metadata: string{k:string} expected";
                        }
                        if (message.customMetadata != null && message.hasOwnProperty("customMetadata"))
                            if (!(message.customMetadata && typeof message.customMetadata.length === "number" || $util.isString(message.customMetadata)))
                                return "customMetadata: buffer expected";
                        if (message.data != null && message.hasOwnProperty("data"))
                            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                                return "data: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a ProposedMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.AppendReq.ProposedMessage} ProposedMessage
                     */
                    ProposedMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.AppendReq.ProposedMessage)
                            return object;
                        var message = new $root.event_store.client.streams.AppendReq.ProposedMessage();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.ProposedMessage.id: object expected");
                            message.id = $root.event_store.client.shared.UUID.fromObject(object.id);
                        }
                        if (object.metadata) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".event_store.client.streams.AppendReq.ProposedMessage.metadata: object expected");
                            message.metadata = {};
                            for (var keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                                message.metadata[keys[i]] = String(object.metadata[keys[i]]);
                        }
                        if (object.customMetadata != null)
                            if (typeof object.customMetadata === "string")
                                $util.base64.decode(object.customMetadata, message.customMetadata = $util.newBuffer($util.base64.length(object.customMetadata)), 0);
                            else if (object.customMetadata.length)
                                message.customMetadata = object.customMetadata;
                        if (object.data != null)
                            if (typeof object.data === "string")
                                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                            else if (object.data.length)
                                message.data = object.data;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ProposedMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @static
                     * @param {event_store.client.streams.AppendReq.ProposedMessage} message ProposedMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ProposedMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.metadata = {};
                        if (options.defaults) {
                            object.id = null;
                            if (options.bytes === String)
                                object.customMetadata = "";
                            else {
                                object.customMetadata = [];
                                if (options.bytes !== Array)
                                    object.customMetadata = $util.newBuffer(object.customMetadata);
                            }
                            if (options.bytes === String)
                                object.data = "";
                            else {
                                object.data = [];
                                if (options.bytes !== Array)
                                    object.data = $util.newBuffer(object.data);
                            }
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.event_store.client.shared.UUID.toObject(message.id, options);
                        var keys2;
                        if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                            object.metadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.metadata[keys2[j]] = message.metadata[keys2[j]];
                        }
                        if (message.customMetadata != null && message.hasOwnProperty("customMetadata"))
                            object.customMetadata = options.bytes === String ? $util.base64.encode(message.customMetadata, 0, message.customMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.customMetadata) : message.customMetadata;
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                        return object;
                    };

                    /**
                     * Converts this ProposedMessage to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.AppendReq.ProposedMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ProposedMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProposedMessage;
                })();

                return AppendReq;
            })();

            streams.AppendResp = (function() {

                /**
                 * Properties of an AppendResp.
                 * @memberof event_store.client.streams
                 * @interface IAppendResp
                 * @property {event_store.client.streams.AppendResp.ISuccess|null} [success] AppendResp success
                 * @property {event_store.client.streams.AppendResp.IWrongExpectedVersion|null} [wrongExpectedVersion] AppendResp wrongExpectedVersion
                 */

                /**
                 * Constructs a new AppendResp.
                 * @memberof event_store.client.streams
                 * @classdesc Represents an AppendResp.
                 * @implements IAppendResp
                 * @constructor
                 * @param {event_store.client.streams.IAppendResp=} [properties] Properties to set
                 */
                function AppendResp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppendResp success.
                 * @member {event_store.client.streams.AppendResp.ISuccess|null|undefined} success
                 * @memberof event_store.client.streams.AppendResp
                 * @instance
                 */
                AppendResp.prototype.success = null;

                /**
                 * AppendResp wrongExpectedVersion.
                 * @member {event_store.client.streams.AppendResp.IWrongExpectedVersion|null|undefined} wrongExpectedVersion
                 * @memberof event_store.client.streams.AppendResp
                 * @instance
                 */
                AppendResp.prototype.wrongExpectedVersion = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * AppendResp result.
                 * @member {"success"|"wrongExpectedVersion"|undefined} result
                 * @memberof event_store.client.streams.AppendResp
                 * @instance
                 */
                Object.defineProperty(AppendResp.prototype, "result", {
                    get: $util.oneOfGetter($oneOfFields = ["success", "wrongExpectedVersion"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new AppendResp instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {event_store.client.streams.IAppendResp=} [properties] Properties to set
                 * @returns {event_store.client.streams.AppendResp} AppendResp instance
                 */
                AppendResp.create = function create(properties) {
                    return new AppendResp(properties);
                };

                /**
                 * Encodes the specified AppendResp message. Does not implicitly {@link event_store.client.streams.AppendResp.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {event_store.client.streams.IAppendResp} message AppendResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppendResp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                        $root.event_store.client.streams.AppendResp.Success.encode(message.success, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.wrongExpectedVersion != null && Object.hasOwnProperty.call(message, "wrongExpectedVersion"))
                        $root.event_store.client.streams.AppendResp.WrongExpectedVersion.encode(message.wrongExpectedVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppendResp message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {event_store.client.streams.IAppendResp} message AppendResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppendResp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppendResp message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.AppendResp} AppendResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppendResp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendResp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.success = $root.event_store.client.streams.AppendResp.Success.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.wrongExpectedVersion = $root.event_store.client.streams.AppendResp.WrongExpectedVersion.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AppendResp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.AppendResp} AppendResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppendResp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppendResp message.
                 * @function verify
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppendResp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.success != null && message.hasOwnProperty("success")) {
                        properties.result = 1;
                        {
                            var error = $root.event_store.client.streams.AppendResp.Success.verify(message.success);
                            if (error)
                                return "success." + error;
                        }
                    }
                    if (message.wrongExpectedVersion != null && message.hasOwnProperty("wrongExpectedVersion")) {
                        if (properties.result === 1)
                            return "result: multiple values";
                        properties.result = 1;
                        {
                            var error = $root.event_store.client.streams.AppendResp.WrongExpectedVersion.verify(message.wrongExpectedVersion);
                            if (error)
                                return "wrongExpectedVersion." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an AppendResp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.AppendResp} AppendResp
                 */
                AppendResp.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.AppendResp)
                        return object;
                    var message = new $root.event_store.client.streams.AppendResp();
                    if (object.success != null) {
                        if (typeof object.success !== "object")
                            throw TypeError(".event_store.client.streams.AppendResp.success: object expected");
                        message.success = $root.event_store.client.streams.AppendResp.Success.fromObject(object.success);
                    }
                    if (object.wrongExpectedVersion != null) {
                        if (typeof object.wrongExpectedVersion !== "object")
                            throw TypeError(".event_store.client.streams.AppendResp.wrongExpectedVersion: object expected");
                        message.wrongExpectedVersion = $root.event_store.client.streams.AppendResp.WrongExpectedVersion.fromObject(object.wrongExpectedVersion);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppendResp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.AppendResp
                 * @static
                 * @param {event_store.client.streams.AppendResp} message AppendResp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppendResp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.success != null && message.hasOwnProperty("success")) {
                        object.success = $root.event_store.client.streams.AppendResp.Success.toObject(message.success, options);
                        if (options.oneofs)
                            object.result = "success";
                    }
                    if (message.wrongExpectedVersion != null && message.hasOwnProperty("wrongExpectedVersion")) {
                        object.wrongExpectedVersion = $root.event_store.client.streams.AppendResp.WrongExpectedVersion.toObject(message.wrongExpectedVersion, options);
                        if (options.oneofs)
                            object.result = "wrongExpectedVersion";
                    }
                    return object;
                };

                /**
                 * Converts this AppendResp to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.AppendResp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppendResp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                AppendResp.Position = (function() {

                    /**
                     * Properties of a Position.
                     * @memberof event_store.client.streams.AppendResp
                     * @interface IPosition
                     * @property {number|Long|null} [commitPosition] Position commitPosition
                     * @property {number|Long|null} [preparePosition] Position preparePosition
                     */

                    /**
                     * Constructs a new Position.
                     * @memberof event_store.client.streams.AppendResp
                     * @classdesc Represents a Position.
                     * @implements IPosition
                     * @constructor
                     * @param {event_store.client.streams.AppendResp.IPosition=} [properties] Properties to set
                     */
                    function Position(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Position commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @instance
                     */
                    Position.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Position preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @instance
                     */
                    Position.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {event_store.client.streams.AppendResp.IPosition=} [properties] Properties to set
                     * @returns {event_store.client.streams.AppendResp.Position} Position instance
                     */
                    Position.create = function create(properties) {
                        return new Position(properties);
                    };

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.AppendResp.Position.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {event_store.client.streams.AppendResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.commitPosition);
                        if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.preparePosition);
                        return writer;
                    };

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.Position.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {event_store.client.streams.AppendResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.AppendResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendResp.Position();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.uint64();
                                break;
                            case 2:
                                message.preparePosition = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.AppendResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Position message.
                     * @function verify
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Position.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.AppendResp.Position} Position
                     */
                    Position.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.AppendResp.Position)
                            return object;
                        var message = new $root.event_store.client.streams.AppendResp.Position();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @static
                     * @param {event_store.client.streams.AppendResp.Position} message Position
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Position.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                        return object;
                    };

                    /**
                     * Converts this Position to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.AppendResp.Position
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Position.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Position;
                })();

                AppendResp.Success = (function() {

                    /**
                     * Properties of a Success.
                     * @memberof event_store.client.streams.AppendResp
                     * @interface ISuccess
                     * @property {number|Long|null} [currentRevision] Success currentRevision
                     * @property {event_store.client.shared.IEmpty|null} [noStream] Success noStream
                     * @property {event_store.client.streams.AppendResp.IPosition|null} [position] Success position
                     * @property {event_store.client.shared.IEmpty|null} [noPosition] Success noPosition
                     */

                    /**
                     * Constructs a new Success.
                     * @memberof event_store.client.streams.AppendResp
                     * @classdesc Represents a Success.
                     * @implements ISuccess
                     * @constructor
                     * @param {event_store.client.streams.AppendResp.ISuccess=} [properties] Properties to set
                     */
                    function Success(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Success currentRevision.
                     * @member {number|Long} currentRevision
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Success.prototype.currentRevision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Success noStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noStream
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Success.prototype.noStream = null;

                    /**
                     * Success position.
                     * @member {event_store.client.streams.AppendResp.IPosition|null|undefined} position
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Success.prototype.position = null;

                    /**
                     * Success noPosition.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noPosition
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Success.prototype.noPosition = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Success currentRevisionOption.
                     * @member {"currentRevision"|"noStream"|undefined} currentRevisionOption
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Object.defineProperty(Success.prototype, "currentRevisionOption", {
                        get: $util.oneOfGetter($oneOfFields = ["currentRevision", "noStream"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Success positionOption.
                     * @member {"position"|"noPosition"|undefined} positionOption
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     */
                    Object.defineProperty(Success.prototype, "positionOption", {
                        get: $util.oneOfGetter($oneOfFields = ["position", "noPosition"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Success instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {event_store.client.streams.AppendResp.ISuccess=} [properties] Properties to set
                     * @returns {event_store.client.streams.AppendResp.Success} Success instance
                     */
                    Success.create = function create(properties) {
                        return new Success(properties);
                    };

                    /**
                     * Encodes the specified Success message. Does not implicitly {@link event_store.client.streams.AppendResp.Success.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {event_store.client.streams.AppendResp.ISuccess} message Success message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Success.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.currentRevision != null && Object.hasOwnProperty.call(message, "currentRevision"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.currentRevision);
                        if (message.noStream != null && Object.hasOwnProperty.call(message, "noStream"))
                            $root.event_store.client.shared.Empty.encode(message.noStream, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                            $root.event_store.client.streams.AppendResp.Position.encode(message.position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.noPosition != null && Object.hasOwnProperty.call(message, "noPosition"))
                            $root.event_store.client.shared.Empty.encode(message.noPosition, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Success message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.Success.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {event_store.client.streams.AppendResp.ISuccess} message Success message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Success.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Success message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.AppendResp.Success} Success
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Success.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendResp.Success();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.currentRevision = reader.uint64();
                                break;
                            case 2:
                                message.noStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.position = $root.event_store.client.streams.AppendResp.Position.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.noPosition = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Success message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.AppendResp.Success} Success
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Success.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Success message.
                     * @function verify
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Success.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.currentRevision != null && message.hasOwnProperty("currentRevision")) {
                            properties.currentRevisionOption = 1;
                            if (!$util.isInteger(message.currentRevision) && !(message.currentRevision && $util.isInteger(message.currentRevision.low) && $util.isInteger(message.currentRevision.high)))
                                return "currentRevision: integer|Long expected";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            if (properties.currentRevisionOption === 1)
                                return "currentRevisionOption: multiple values";
                            properties.currentRevisionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noStream);
                                if (error)
                                    return "noStream." + error;
                            }
                        }
                        if (message.position != null && message.hasOwnProperty("position")) {
                            properties.positionOption = 1;
                            {
                                var error = $root.event_store.client.streams.AppendResp.Position.verify(message.position);
                                if (error)
                                    return "position." + error;
                            }
                        }
                        if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                            if (properties.positionOption === 1)
                                return "positionOption: multiple values";
                            properties.positionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noPosition);
                                if (error)
                                    return "noPosition." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Success message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.AppendResp.Success} Success
                     */
                    Success.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.AppendResp.Success)
                            return object;
                        var message = new $root.event_store.client.streams.AppendResp.Success();
                        if (object.currentRevision != null)
                            if ($util.Long)
                                (message.currentRevision = $util.Long.fromValue(object.currentRevision)).unsigned = true;
                            else if (typeof object.currentRevision === "string")
                                message.currentRevision = parseInt(object.currentRevision, 10);
                            else if (typeof object.currentRevision === "number")
                                message.currentRevision = object.currentRevision;
                            else if (typeof object.currentRevision === "object")
                                message.currentRevision = new $util.LongBits(object.currentRevision.low >>> 0, object.currentRevision.high >>> 0).toNumber(true);
                        if (object.noStream != null) {
                            if (typeof object.noStream !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.Success.noStream: object expected");
                            message.noStream = $root.event_store.client.shared.Empty.fromObject(object.noStream);
                        }
                        if (object.position != null) {
                            if (typeof object.position !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.Success.position: object expected");
                            message.position = $root.event_store.client.streams.AppendResp.Position.fromObject(object.position);
                        }
                        if (object.noPosition != null) {
                            if (typeof object.noPosition !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.Success.noPosition: object expected");
                            message.noPosition = $root.event_store.client.shared.Empty.fromObject(object.noPosition);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Success message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @static
                     * @param {event_store.client.streams.AppendResp.Success} message Success
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Success.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.currentRevision != null && message.hasOwnProperty("currentRevision")) {
                            if (typeof message.currentRevision === "number")
                                object.currentRevision = options.longs === String ? String(message.currentRevision) : message.currentRevision;
                            else
                                object.currentRevision = options.longs === String ? $util.Long.prototype.toString.call(message.currentRevision) : options.longs === Number ? new $util.LongBits(message.currentRevision.low >>> 0, message.currentRevision.high >>> 0).toNumber(true) : message.currentRevision;
                            if (options.oneofs)
                                object.currentRevisionOption = "currentRevision";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            object.noStream = $root.event_store.client.shared.Empty.toObject(message.noStream, options);
                            if (options.oneofs)
                                object.currentRevisionOption = "noStream";
                        }
                        if (message.position != null && message.hasOwnProperty("position")) {
                            object.position = $root.event_store.client.streams.AppendResp.Position.toObject(message.position, options);
                            if (options.oneofs)
                                object.positionOption = "position";
                        }
                        if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                            object.noPosition = $root.event_store.client.shared.Empty.toObject(message.noPosition, options);
                            if (options.oneofs)
                                object.positionOption = "noPosition";
                        }
                        return object;
                    };

                    /**
                     * Converts this Success to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.AppendResp.Success
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Success.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Success;
                })();

                AppendResp.WrongExpectedVersion = (function() {

                    /**
                     * Properties of a WrongExpectedVersion.
                     * @memberof event_store.client.streams.AppendResp
                     * @interface IWrongExpectedVersion
                     * @property {number|Long|null} [currentRevision_20_6_0] WrongExpectedVersion currentRevision_20_6_0
                     * @property {event_store.client.shared.IEmpty|null} [noStream_20_6_0] WrongExpectedVersion noStream_20_6_0
                     * @property {number|Long|null} [expectedRevision_20_6_0] WrongExpectedVersion expectedRevision_20_6_0
                     * @property {event_store.client.shared.IEmpty|null} [any_20_6_0] WrongExpectedVersion any_20_6_0
                     * @property {event_store.client.shared.IEmpty|null} [streamExists_20_6_0] WrongExpectedVersion streamExists_20_6_0
                     * @property {number|Long|null} [currentRevision] WrongExpectedVersion currentRevision
                     * @property {event_store.client.shared.IEmpty|null} [currentNoStream] WrongExpectedVersion currentNoStream
                     * @property {number|Long|null} [expectedRevision] WrongExpectedVersion expectedRevision
                     * @property {event_store.client.shared.IEmpty|null} [expectedAny] WrongExpectedVersion expectedAny
                     * @property {event_store.client.shared.IEmpty|null} [expectedStreamExists] WrongExpectedVersion expectedStreamExists
                     * @property {event_store.client.shared.IEmpty|null} [expectedNoStream] WrongExpectedVersion expectedNoStream
                     */

                    /**
                     * Constructs a new WrongExpectedVersion.
                     * @memberof event_store.client.streams.AppendResp
                     * @classdesc Represents a WrongExpectedVersion.
                     * @implements IWrongExpectedVersion
                     * @constructor
                     * @param {event_store.client.streams.AppendResp.IWrongExpectedVersion=} [properties] Properties to set
                     */
                    function WrongExpectedVersion(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * WrongExpectedVersion currentRevision_20_6_0.
                     * @member {number|Long} currentRevision_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.currentRevision_20_6_0 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * WrongExpectedVersion noStream_20_6_0.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noStream_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.noStream_20_6_0 = null;

                    /**
                     * WrongExpectedVersion expectedRevision_20_6_0.
                     * @member {number|Long} expectedRevision_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.expectedRevision_20_6_0 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * WrongExpectedVersion any_20_6_0.
                     * @member {event_store.client.shared.IEmpty|null|undefined} any_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.any_20_6_0 = null;

                    /**
                     * WrongExpectedVersion streamExists_20_6_0.
                     * @member {event_store.client.shared.IEmpty|null|undefined} streamExists_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.streamExists_20_6_0 = null;

                    /**
                     * WrongExpectedVersion currentRevision.
                     * @member {number|Long} currentRevision
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.currentRevision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * WrongExpectedVersion currentNoStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} currentNoStream
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.currentNoStream = null;

                    /**
                     * WrongExpectedVersion expectedRevision.
                     * @member {number|Long} expectedRevision
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.expectedRevision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * WrongExpectedVersion expectedAny.
                     * @member {event_store.client.shared.IEmpty|null|undefined} expectedAny
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.expectedAny = null;

                    /**
                     * WrongExpectedVersion expectedStreamExists.
                     * @member {event_store.client.shared.IEmpty|null|undefined} expectedStreamExists
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.expectedStreamExists = null;

                    /**
                     * WrongExpectedVersion expectedNoStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} expectedNoStream
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    WrongExpectedVersion.prototype.expectedNoStream = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * WrongExpectedVersion currentRevisionOption_20_6_0.
                     * @member {"currentRevision_20_6_0"|"noStream_20_6_0"|undefined} currentRevisionOption_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    Object.defineProperty(WrongExpectedVersion.prototype, "currentRevisionOption_20_6_0", {
                        get: $util.oneOfGetter($oneOfFields = ["currentRevision_20_6_0", "noStream_20_6_0"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * WrongExpectedVersion expectedRevisionOption_20_6_0.
                     * @member {"expectedRevision_20_6_0"|"any_20_6_0"|"streamExists_20_6_0"|undefined} expectedRevisionOption_20_6_0
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    Object.defineProperty(WrongExpectedVersion.prototype, "expectedRevisionOption_20_6_0", {
                        get: $util.oneOfGetter($oneOfFields = ["expectedRevision_20_6_0", "any_20_6_0", "streamExists_20_6_0"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * WrongExpectedVersion currentRevisionOption.
                     * @member {"currentRevision"|"currentNoStream"|undefined} currentRevisionOption
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    Object.defineProperty(WrongExpectedVersion.prototype, "currentRevisionOption", {
                        get: $util.oneOfGetter($oneOfFields = ["currentRevision", "currentNoStream"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * WrongExpectedVersion expectedRevisionOption.
                     * @member {"expectedRevision"|"expectedAny"|"expectedStreamExists"|"expectedNoStream"|undefined} expectedRevisionOption
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     */
                    Object.defineProperty(WrongExpectedVersion.prototype, "expectedRevisionOption", {
                        get: $util.oneOfGetter($oneOfFields = ["expectedRevision", "expectedAny", "expectedStreamExists", "expectedNoStream"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new WrongExpectedVersion instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {event_store.client.streams.AppendResp.IWrongExpectedVersion=} [properties] Properties to set
                     * @returns {event_store.client.streams.AppendResp.WrongExpectedVersion} WrongExpectedVersion instance
                     */
                    WrongExpectedVersion.create = function create(properties) {
                        return new WrongExpectedVersion(properties);
                    };

                    /**
                     * Encodes the specified WrongExpectedVersion message. Does not implicitly {@link event_store.client.streams.AppendResp.WrongExpectedVersion.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {event_store.client.streams.AppendResp.IWrongExpectedVersion} message WrongExpectedVersion message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WrongExpectedVersion.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.currentRevision_20_6_0 != null && Object.hasOwnProperty.call(message, "currentRevision_20_6_0"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.currentRevision_20_6_0);
                        if (message.noStream_20_6_0 != null && Object.hasOwnProperty.call(message, "noStream_20_6_0"))
                            $root.event_store.client.shared.Empty.encode(message.noStream_20_6_0, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.expectedRevision_20_6_0 != null && Object.hasOwnProperty.call(message, "expectedRevision_20_6_0"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expectedRevision_20_6_0);
                        if (message.any_20_6_0 != null && Object.hasOwnProperty.call(message, "any_20_6_0"))
                            $root.event_store.client.shared.Empty.encode(message.any_20_6_0, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.streamExists_20_6_0 != null && Object.hasOwnProperty.call(message, "streamExists_20_6_0"))
                            $root.event_store.client.shared.Empty.encode(message.streamExists_20_6_0, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.currentRevision != null && Object.hasOwnProperty.call(message, "currentRevision"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.currentRevision);
                        if (message.currentNoStream != null && Object.hasOwnProperty.call(message, "currentNoStream"))
                            $root.event_store.client.shared.Empty.encode(message.currentNoStream, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.expectedRevision != null && Object.hasOwnProperty.call(message, "expectedRevision"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.expectedRevision);
                        if (message.expectedAny != null && Object.hasOwnProperty.call(message, "expectedAny"))
                            $root.event_store.client.shared.Empty.encode(message.expectedAny, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.expectedStreamExists != null && Object.hasOwnProperty.call(message, "expectedStreamExists"))
                            $root.event_store.client.shared.Empty.encode(message.expectedStreamExists, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.expectedNoStream != null && Object.hasOwnProperty.call(message, "expectedNoStream"))
                            $root.event_store.client.shared.Empty.encode(message.expectedNoStream, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified WrongExpectedVersion message, length delimited. Does not implicitly {@link event_store.client.streams.AppendResp.WrongExpectedVersion.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {event_store.client.streams.AppendResp.IWrongExpectedVersion} message WrongExpectedVersion message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WrongExpectedVersion.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a WrongExpectedVersion message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.AppendResp.WrongExpectedVersion} WrongExpectedVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WrongExpectedVersion.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.AppendResp.WrongExpectedVersion();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.currentRevision_20_6_0 = reader.uint64();
                                break;
                            case 2:
                                message.noStream_20_6_0 = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.expectedRevision_20_6_0 = reader.uint64();
                                break;
                            case 4:
                                message.any_20_6_0 = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.streamExists_20_6_0 = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.currentRevision = reader.uint64();
                                break;
                            case 7:
                                message.currentNoStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.expectedRevision = reader.uint64();
                                break;
                            case 9:
                                message.expectedAny = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.expectedStreamExists = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.expectedNoStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a WrongExpectedVersion message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.AppendResp.WrongExpectedVersion} WrongExpectedVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WrongExpectedVersion.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a WrongExpectedVersion message.
                     * @function verify
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WrongExpectedVersion.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.currentRevision_20_6_0 != null && message.hasOwnProperty("currentRevision_20_6_0")) {
                            properties.currentRevisionOption_20_6_0 = 1;
                            if (!$util.isInteger(message.currentRevision_20_6_0) && !(message.currentRevision_20_6_0 && $util.isInteger(message.currentRevision_20_6_0.low) && $util.isInteger(message.currentRevision_20_6_0.high)))
                                return "currentRevision_20_6_0: integer|Long expected";
                        }
                        if (message.noStream_20_6_0 != null && message.hasOwnProperty("noStream_20_6_0")) {
                            if (properties.currentRevisionOption_20_6_0 === 1)
                                return "currentRevisionOption_20_6_0: multiple values";
                            properties.currentRevisionOption_20_6_0 = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noStream_20_6_0);
                                if (error)
                                    return "noStream_20_6_0." + error;
                            }
                        }
                        if (message.expectedRevision_20_6_0 != null && message.hasOwnProperty("expectedRevision_20_6_0")) {
                            properties.expectedRevisionOption_20_6_0 = 1;
                            if (!$util.isInteger(message.expectedRevision_20_6_0) && !(message.expectedRevision_20_6_0 && $util.isInteger(message.expectedRevision_20_6_0.low) && $util.isInteger(message.expectedRevision_20_6_0.high)))
                                return "expectedRevision_20_6_0: integer|Long expected";
                        }
                        if (message.any_20_6_0 != null && message.hasOwnProperty("any_20_6_0")) {
                            if (properties.expectedRevisionOption_20_6_0 === 1)
                                return "expectedRevisionOption_20_6_0: multiple values";
                            properties.expectedRevisionOption_20_6_0 = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.any_20_6_0);
                                if (error)
                                    return "any_20_6_0." + error;
                            }
                        }
                        if (message.streamExists_20_6_0 != null && message.hasOwnProperty("streamExists_20_6_0")) {
                            if (properties.expectedRevisionOption_20_6_0 === 1)
                                return "expectedRevisionOption_20_6_0: multiple values";
                            properties.expectedRevisionOption_20_6_0 = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.streamExists_20_6_0);
                                if (error)
                                    return "streamExists_20_6_0." + error;
                            }
                        }
                        if (message.currentRevision != null && message.hasOwnProperty("currentRevision")) {
                            properties.currentRevisionOption = 1;
                            if (!$util.isInteger(message.currentRevision) && !(message.currentRevision && $util.isInteger(message.currentRevision.low) && $util.isInteger(message.currentRevision.high)))
                                return "currentRevision: integer|Long expected";
                        }
                        if (message.currentNoStream != null && message.hasOwnProperty("currentNoStream")) {
                            if (properties.currentRevisionOption === 1)
                                return "currentRevisionOption: multiple values";
                            properties.currentRevisionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.currentNoStream);
                                if (error)
                                    return "currentNoStream." + error;
                            }
                        }
                        if (message.expectedRevision != null && message.hasOwnProperty("expectedRevision")) {
                            properties.expectedRevisionOption = 1;
                            if (!$util.isInteger(message.expectedRevision) && !(message.expectedRevision && $util.isInteger(message.expectedRevision.low) && $util.isInteger(message.expectedRevision.high)))
                                return "expectedRevision: integer|Long expected";
                        }
                        if (message.expectedAny != null && message.hasOwnProperty("expectedAny")) {
                            if (properties.expectedRevisionOption === 1)
                                return "expectedRevisionOption: multiple values";
                            properties.expectedRevisionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.expectedAny);
                                if (error)
                                    return "expectedAny." + error;
                            }
                        }
                        if (message.expectedStreamExists != null && message.hasOwnProperty("expectedStreamExists")) {
                            if (properties.expectedRevisionOption === 1)
                                return "expectedRevisionOption: multiple values";
                            properties.expectedRevisionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.expectedStreamExists);
                                if (error)
                                    return "expectedStreamExists." + error;
                            }
                        }
                        if (message.expectedNoStream != null && message.hasOwnProperty("expectedNoStream")) {
                            if (properties.expectedRevisionOption === 1)
                                return "expectedRevisionOption: multiple values";
                            properties.expectedRevisionOption = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.expectedNoStream);
                                if (error)
                                    return "expectedNoStream." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a WrongExpectedVersion message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.AppendResp.WrongExpectedVersion} WrongExpectedVersion
                     */
                    WrongExpectedVersion.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.AppendResp.WrongExpectedVersion)
                            return object;
                        var message = new $root.event_store.client.streams.AppendResp.WrongExpectedVersion();
                        if (object.currentRevision_20_6_0 != null)
                            if ($util.Long)
                                (message.currentRevision_20_6_0 = $util.Long.fromValue(object.currentRevision_20_6_0)).unsigned = true;
                            else if (typeof object.currentRevision_20_6_0 === "string")
                                message.currentRevision_20_6_0 = parseInt(object.currentRevision_20_6_0, 10);
                            else if (typeof object.currentRevision_20_6_0 === "number")
                                message.currentRevision_20_6_0 = object.currentRevision_20_6_0;
                            else if (typeof object.currentRevision_20_6_0 === "object")
                                message.currentRevision_20_6_0 = new $util.LongBits(object.currentRevision_20_6_0.low >>> 0, object.currentRevision_20_6_0.high >>> 0).toNumber(true);
                        if (object.noStream_20_6_0 != null) {
                            if (typeof object.noStream_20_6_0 !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.noStream_20_6_0: object expected");
                            message.noStream_20_6_0 = $root.event_store.client.shared.Empty.fromObject(object.noStream_20_6_0);
                        }
                        if (object.expectedRevision_20_6_0 != null)
                            if ($util.Long)
                                (message.expectedRevision_20_6_0 = $util.Long.fromValue(object.expectedRevision_20_6_0)).unsigned = true;
                            else if (typeof object.expectedRevision_20_6_0 === "string")
                                message.expectedRevision_20_6_0 = parseInt(object.expectedRevision_20_6_0, 10);
                            else if (typeof object.expectedRevision_20_6_0 === "number")
                                message.expectedRevision_20_6_0 = object.expectedRevision_20_6_0;
                            else if (typeof object.expectedRevision_20_6_0 === "object")
                                message.expectedRevision_20_6_0 = new $util.LongBits(object.expectedRevision_20_6_0.low >>> 0, object.expectedRevision_20_6_0.high >>> 0).toNumber(true);
                        if (object.any_20_6_0 != null) {
                            if (typeof object.any_20_6_0 !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.any_20_6_0: object expected");
                            message.any_20_6_0 = $root.event_store.client.shared.Empty.fromObject(object.any_20_6_0);
                        }
                        if (object.streamExists_20_6_0 != null) {
                            if (typeof object.streamExists_20_6_0 !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.streamExists_20_6_0: object expected");
                            message.streamExists_20_6_0 = $root.event_store.client.shared.Empty.fromObject(object.streamExists_20_6_0);
                        }
                        if (object.currentRevision != null)
                            if ($util.Long)
                                (message.currentRevision = $util.Long.fromValue(object.currentRevision)).unsigned = true;
                            else if (typeof object.currentRevision === "string")
                                message.currentRevision = parseInt(object.currentRevision, 10);
                            else if (typeof object.currentRevision === "number")
                                message.currentRevision = object.currentRevision;
                            else if (typeof object.currentRevision === "object")
                                message.currentRevision = new $util.LongBits(object.currentRevision.low >>> 0, object.currentRevision.high >>> 0).toNumber(true);
                        if (object.currentNoStream != null) {
                            if (typeof object.currentNoStream !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.currentNoStream: object expected");
                            message.currentNoStream = $root.event_store.client.shared.Empty.fromObject(object.currentNoStream);
                        }
                        if (object.expectedRevision != null)
                            if ($util.Long)
                                (message.expectedRevision = $util.Long.fromValue(object.expectedRevision)).unsigned = true;
                            else if (typeof object.expectedRevision === "string")
                                message.expectedRevision = parseInt(object.expectedRevision, 10);
                            else if (typeof object.expectedRevision === "number")
                                message.expectedRevision = object.expectedRevision;
                            else if (typeof object.expectedRevision === "object")
                                message.expectedRevision = new $util.LongBits(object.expectedRevision.low >>> 0, object.expectedRevision.high >>> 0).toNumber(true);
                        if (object.expectedAny != null) {
                            if (typeof object.expectedAny !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.expectedAny: object expected");
                            message.expectedAny = $root.event_store.client.shared.Empty.fromObject(object.expectedAny);
                        }
                        if (object.expectedStreamExists != null) {
                            if (typeof object.expectedStreamExists !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.expectedStreamExists: object expected");
                            message.expectedStreamExists = $root.event_store.client.shared.Empty.fromObject(object.expectedStreamExists);
                        }
                        if (object.expectedNoStream != null) {
                            if (typeof object.expectedNoStream !== "object")
                                throw TypeError(".event_store.client.streams.AppendResp.WrongExpectedVersion.expectedNoStream: object expected");
                            message.expectedNoStream = $root.event_store.client.shared.Empty.fromObject(object.expectedNoStream);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a WrongExpectedVersion message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @static
                     * @param {event_store.client.streams.AppendResp.WrongExpectedVersion} message WrongExpectedVersion
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WrongExpectedVersion.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.currentRevision_20_6_0 != null && message.hasOwnProperty("currentRevision_20_6_0")) {
                            if (typeof message.currentRevision_20_6_0 === "number")
                                object.currentRevision_20_6_0 = options.longs === String ? String(message.currentRevision_20_6_0) : message.currentRevision_20_6_0;
                            else
                                object.currentRevision_20_6_0 = options.longs === String ? $util.Long.prototype.toString.call(message.currentRevision_20_6_0) : options.longs === Number ? new $util.LongBits(message.currentRevision_20_6_0.low >>> 0, message.currentRevision_20_6_0.high >>> 0).toNumber(true) : message.currentRevision_20_6_0;
                            if (options.oneofs)
                                object.currentRevisionOption_20_6_0 = "currentRevision_20_6_0";
                        }
                        if (message.noStream_20_6_0 != null && message.hasOwnProperty("noStream_20_6_0")) {
                            object.noStream_20_6_0 = $root.event_store.client.shared.Empty.toObject(message.noStream_20_6_0, options);
                            if (options.oneofs)
                                object.currentRevisionOption_20_6_0 = "noStream_20_6_0";
                        }
                        if (message.expectedRevision_20_6_0 != null && message.hasOwnProperty("expectedRevision_20_6_0")) {
                            if (typeof message.expectedRevision_20_6_0 === "number")
                                object.expectedRevision_20_6_0 = options.longs === String ? String(message.expectedRevision_20_6_0) : message.expectedRevision_20_6_0;
                            else
                                object.expectedRevision_20_6_0 = options.longs === String ? $util.Long.prototype.toString.call(message.expectedRevision_20_6_0) : options.longs === Number ? new $util.LongBits(message.expectedRevision_20_6_0.low >>> 0, message.expectedRevision_20_6_0.high >>> 0).toNumber(true) : message.expectedRevision_20_6_0;
                            if (options.oneofs)
                                object.expectedRevisionOption_20_6_0 = "expectedRevision_20_6_0";
                        }
                        if (message.any_20_6_0 != null && message.hasOwnProperty("any_20_6_0")) {
                            object.any_20_6_0 = $root.event_store.client.shared.Empty.toObject(message.any_20_6_0, options);
                            if (options.oneofs)
                                object.expectedRevisionOption_20_6_0 = "any_20_6_0";
                        }
                        if (message.streamExists_20_6_0 != null && message.hasOwnProperty("streamExists_20_6_0")) {
                            object.streamExists_20_6_0 = $root.event_store.client.shared.Empty.toObject(message.streamExists_20_6_0, options);
                            if (options.oneofs)
                                object.expectedRevisionOption_20_6_0 = "streamExists_20_6_0";
                        }
                        if (message.currentRevision != null && message.hasOwnProperty("currentRevision")) {
                            if (typeof message.currentRevision === "number")
                                object.currentRevision = options.longs === String ? String(message.currentRevision) : message.currentRevision;
                            else
                                object.currentRevision = options.longs === String ? $util.Long.prototype.toString.call(message.currentRevision) : options.longs === Number ? new $util.LongBits(message.currentRevision.low >>> 0, message.currentRevision.high >>> 0).toNumber(true) : message.currentRevision;
                            if (options.oneofs)
                                object.currentRevisionOption = "currentRevision";
                        }
                        if (message.currentNoStream != null && message.hasOwnProperty("currentNoStream")) {
                            object.currentNoStream = $root.event_store.client.shared.Empty.toObject(message.currentNoStream, options);
                            if (options.oneofs)
                                object.currentRevisionOption = "currentNoStream";
                        }
                        if (message.expectedRevision != null && message.hasOwnProperty("expectedRevision")) {
                            if (typeof message.expectedRevision === "number")
                                object.expectedRevision = options.longs === String ? String(message.expectedRevision) : message.expectedRevision;
                            else
                                object.expectedRevision = options.longs === String ? $util.Long.prototype.toString.call(message.expectedRevision) : options.longs === Number ? new $util.LongBits(message.expectedRevision.low >>> 0, message.expectedRevision.high >>> 0).toNumber(true) : message.expectedRevision;
                            if (options.oneofs)
                                object.expectedRevisionOption = "expectedRevision";
                        }
                        if (message.expectedAny != null && message.hasOwnProperty("expectedAny")) {
                            object.expectedAny = $root.event_store.client.shared.Empty.toObject(message.expectedAny, options);
                            if (options.oneofs)
                                object.expectedRevisionOption = "expectedAny";
                        }
                        if (message.expectedStreamExists != null && message.hasOwnProperty("expectedStreamExists")) {
                            object.expectedStreamExists = $root.event_store.client.shared.Empty.toObject(message.expectedStreamExists, options);
                            if (options.oneofs)
                                object.expectedRevisionOption = "expectedStreamExists";
                        }
                        if (message.expectedNoStream != null && message.hasOwnProperty("expectedNoStream")) {
                            object.expectedNoStream = $root.event_store.client.shared.Empty.toObject(message.expectedNoStream, options);
                            if (options.oneofs)
                                object.expectedRevisionOption = "expectedNoStream";
                        }
                        return object;
                    };

                    /**
                     * Converts this WrongExpectedVersion to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.AppendResp.WrongExpectedVersion
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WrongExpectedVersion.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return WrongExpectedVersion;
                })();

                return AppendResp;
            })();

            streams.DeleteReq = (function() {

                /**
                 * Properties of a DeleteReq.
                 * @memberof event_store.client.streams
                 * @interface IDeleteReq
                 * @property {event_store.client.streams.DeleteReq.IOptions|null} [options] DeleteReq options
                 */

                /**
                 * Constructs a new DeleteReq.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a DeleteReq.
                 * @implements IDeleteReq
                 * @constructor
                 * @param {event_store.client.streams.IDeleteReq=} [properties] Properties to set
                 */
                function DeleteReq(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteReq options.
                 * @member {event_store.client.streams.DeleteReq.IOptions|null|undefined} options
                 * @memberof event_store.client.streams.DeleteReq
                 * @instance
                 */
                DeleteReq.prototype.options = null;

                /**
                 * Creates a new DeleteReq instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {event_store.client.streams.IDeleteReq=} [properties] Properties to set
                 * @returns {event_store.client.streams.DeleteReq} DeleteReq instance
                 */
                DeleteReq.create = function create(properties) {
                    return new DeleteReq(properties);
                };

                /**
                 * Encodes the specified DeleteReq message. Does not implicitly {@link event_store.client.streams.DeleteReq.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {event_store.client.streams.IDeleteReq} message DeleteReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.event_store.client.streams.DeleteReq.Options.encode(message.options, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteReq message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {event_store.client.streams.IDeleteReq} message DeleteReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.DeleteReq} DeleteReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.DeleteReq();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.options = $root.event_store.client.streams.DeleteReq.Options.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeleteReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.DeleteReq} DeleteReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteReq message.
                 * @function verify
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.event_store.client.streams.DeleteReq.Options.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates a DeleteReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.DeleteReq} DeleteReq
                 */
                DeleteReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.DeleteReq)
                        return object;
                    var message = new $root.event_store.client.streams.DeleteReq();
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".event_store.client.streams.DeleteReq.options: object expected");
                        message.options = $root.event_store.client.streams.DeleteReq.Options.fromObject(object.options);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.DeleteReq
                 * @static
                 * @param {event_store.client.streams.DeleteReq} message DeleteReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.options = null;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.event_store.client.streams.DeleteReq.Options.toObject(message.options, options);
                    return object;
                };

                /**
                 * Converts this DeleteReq to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.DeleteReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                DeleteReq.Options = (function() {

                    /**
                     * Properties of an Options.
                     * @memberof event_store.client.streams.DeleteReq
                     * @interface IOptions
                     * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] Options streamIdentifier
                     * @property {number|Long|null} [revision] Options revision
                     * @property {event_store.client.shared.IEmpty|null} [noStream] Options noStream
                     * @property {event_store.client.shared.IEmpty|null} [any] Options any
                     * @property {event_store.client.shared.IEmpty|null} [streamExists] Options streamExists
                     */

                    /**
                     * Constructs a new Options.
                     * @memberof event_store.client.streams.DeleteReq
                     * @classdesc Represents an Options.
                     * @implements IOptions
                     * @constructor
                     * @param {event_store.client.streams.DeleteReq.IOptions=} [properties] Properties to set
                     */
                    function Options(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Options streamIdentifier.
                     * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Options.prototype.streamIdentifier = null;

                    /**
                     * Options revision.
                     * @member {number|Long} revision
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Options.prototype.revision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Options noStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noStream
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Options.prototype.noStream = null;

                    /**
                     * Options any.
                     * @member {event_store.client.shared.IEmpty|null|undefined} any
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Options.prototype.any = null;

                    /**
                     * Options streamExists.
                     * @member {event_store.client.shared.IEmpty|null|undefined} streamExists
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Options.prototype.streamExists = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Options expectedStreamRevision.
                     * @member {"revision"|"noStream"|"any"|"streamExists"|undefined} expectedStreamRevision
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "expectedStreamRevision", {
                        get: $util.oneOfGetter($oneOfFields = ["revision", "noStream", "any", "streamExists"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {event_store.client.streams.DeleteReq.IOptions=} [properties] Properties to set
                     * @returns {event_store.client.streams.DeleteReq.Options} Options instance
                     */
                    Options.create = function create(properties) {
                        return new Options(properties);
                    };

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.DeleteReq.Options.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {event_store.client.streams.DeleteReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                            $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.revision != null && Object.hasOwnProperty.call(message, "revision"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.revision);
                        if (message.noStream != null && Object.hasOwnProperty.call(message, "noStream"))
                            $root.event_store.client.shared.Empty.encode(message.noStream, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.any != null && Object.hasOwnProperty.call(message, "any"))
                            $root.event_store.client.shared.Empty.encode(message.any, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.streamExists != null && Object.hasOwnProperty.call(message, "streamExists"))
                            $root.event_store.client.shared.Empty.encode(message.streamExists, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteReq.Options.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {event_store.client.streams.DeleteReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.DeleteReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.DeleteReq.Options();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.revision = reader.uint64();
                                break;
                            case 3:
                                message.noStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.any = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.streamExists = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.DeleteReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Options message.
                     * @function verify
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Options.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                            var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                            if (error)
                                return "streamIdentifier." + error;
                        }
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            properties.expectedStreamRevision = 1;
                            if (!$util.isInteger(message.revision) && !(message.revision && $util.isInteger(message.revision.low) && $util.isInteger(message.revision.high)))
                                return "revision: integer|Long expected";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noStream);
                                if (error)
                                    return "noStream." + error;
                            }
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.any);
                                if (error)
                                    return "any." + error;
                            }
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.streamExists);
                                if (error)
                                    return "streamExists." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.DeleteReq.Options} Options
                     */
                    Options.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.DeleteReq.Options)
                            return object;
                        var message = new $root.event_store.client.streams.DeleteReq.Options();
                        if (object.streamIdentifier != null) {
                            if (typeof object.streamIdentifier !== "object")
                                throw TypeError(".event_store.client.streams.DeleteReq.Options.streamIdentifier: object expected");
                            message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                        }
                        if (object.revision != null)
                            if ($util.Long)
                                (message.revision = $util.Long.fromValue(object.revision)).unsigned = true;
                            else if (typeof object.revision === "string")
                                message.revision = parseInt(object.revision, 10);
                            else if (typeof object.revision === "number")
                                message.revision = object.revision;
                            else if (typeof object.revision === "object")
                                message.revision = new $util.LongBits(object.revision.low >>> 0, object.revision.high >>> 0).toNumber(true);
                        if (object.noStream != null) {
                            if (typeof object.noStream !== "object")
                                throw TypeError(".event_store.client.streams.DeleteReq.Options.noStream: object expected");
                            message.noStream = $root.event_store.client.shared.Empty.fromObject(object.noStream);
                        }
                        if (object.any != null) {
                            if (typeof object.any !== "object")
                                throw TypeError(".event_store.client.streams.DeleteReq.Options.any: object expected");
                            message.any = $root.event_store.client.shared.Empty.fromObject(object.any);
                        }
                        if (object.streamExists != null) {
                            if (typeof object.streamExists !== "object")
                                throw TypeError(".event_store.client.streams.DeleteReq.Options.streamExists: object expected");
                            message.streamExists = $root.event_store.client.shared.Empty.fromObject(object.streamExists);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @static
                     * @param {event_store.client.streams.DeleteReq.Options} message Options
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Options.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.streamIdentifier = null;
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                            object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            if (typeof message.revision === "number")
                                object.revision = options.longs === String ? String(message.revision) : message.revision;
                            else
                                object.revision = options.longs === String ? $util.Long.prototype.toString.call(message.revision) : options.longs === Number ? new $util.LongBits(message.revision.low >>> 0, message.revision.high >>> 0).toNumber(true) : message.revision;
                            if (options.oneofs)
                                object.expectedStreamRevision = "revision";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            object.noStream = $root.event_store.client.shared.Empty.toObject(message.noStream, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "noStream";
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            object.any = $root.event_store.client.shared.Empty.toObject(message.any, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "any";
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            object.streamExists = $root.event_store.client.shared.Empty.toObject(message.streamExists, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "streamExists";
                        }
                        return object;
                    };

                    /**
                     * Converts this Options to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.DeleteReq.Options
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Options.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Options;
                })();

                return DeleteReq;
            })();

            streams.DeleteResp = (function() {

                /**
                 * Properties of a DeleteResp.
                 * @memberof event_store.client.streams
                 * @interface IDeleteResp
                 * @property {event_store.client.streams.DeleteResp.IPosition|null} [position] DeleteResp position
                 * @property {event_store.client.shared.IEmpty|null} [noPosition] DeleteResp noPosition
                 */

                /**
                 * Constructs a new DeleteResp.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a DeleteResp.
                 * @implements IDeleteResp
                 * @constructor
                 * @param {event_store.client.streams.IDeleteResp=} [properties] Properties to set
                 */
                function DeleteResp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteResp position.
                 * @member {event_store.client.streams.DeleteResp.IPosition|null|undefined} position
                 * @memberof event_store.client.streams.DeleteResp
                 * @instance
                 */
                DeleteResp.prototype.position = null;

                /**
                 * DeleteResp noPosition.
                 * @member {event_store.client.shared.IEmpty|null|undefined} noPosition
                 * @memberof event_store.client.streams.DeleteResp
                 * @instance
                 */
                DeleteResp.prototype.noPosition = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * DeleteResp positionOption.
                 * @member {"position"|"noPosition"|undefined} positionOption
                 * @memberof event_store.client.streams.DeleteResp
                 * @instance
                 */
                Object.defineProperty(DeleteResp.prototype, "positionOption", {
                    get: $util.oneOfGetter($oneOfFields = ["position", "noPosition"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new DeleteResp instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {event_store.client.streams.IDeleteResp=} [properties] Properties to set
                 * @returns {event_store.client.streams.DeleteResp} DeleteResp instance
                 */
                DeleteResp.create = function create(properties) {
                    return new DeleteResp(properties);
                };

                /**
                 * Encodes the specified DeleteResp message. Does not implicitly {@link event_store.client.streams.DeleteResp.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {event_store.client.streams.IDeleteResp} message DeleteResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                        $root.event_store.client.streams.DeleteResp.Position.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.noPosition != null && Object.hasOwnProperty.call(message, "noPosition"))
                        $root.event_store.client.shared.Empty.encode(message.noPosition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteResp message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteResp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {event_store.client.streams.IDeleteResp} message DeleteResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteResp message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.DeleteResp} DeleteResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.DeleteResp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.position = $root.event_store.client.streams.DeleteResp.Position.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.noPosition = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeleteResp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.DeleteResp} DeleteResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteResp message.
                 * @function verify
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteResp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.position != null && message.hasOwnProperty("position")) {
                        properties.positionOption = 1;
                        {
                            var error = $root.event_store.client.streams.DeleteResp.Position.verify(message.position);
                            if (error)
                                return "position." + error;
                        }
                    }
                    if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                        if (properties.positionOption === 1)
                            return "positionOption: multiple values";
                        properties.positionOption = 1;
                        {
                            var error = $root.event_store.client.shared.Empty.verify(message.noPosition);
                            if (error)
                                return "noPosition." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a DeleteResp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.DeleteResp} DeleteResp
                 */
                DeleteResp.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.DeleteResp)
                        return object;
                    var message = new $root.event_store.client.streams.DeleteResp();
                    if (object.position != null) {
                        if (typeof object.position !== "object")
                            throw TypeError(".event_store.client.streams.DeleteResp.position: object expected");
                        message.position = $root.event_store.client.streams.DeleteResp.Position.fromObject(object.position);
                    }
                    if (object.noPosition != null) {
                        if (typeof object.noPosition !== "object")
                            throw TypeError(".event_store.client.streams.DeleteResp.noPosition: object expected");
                        message.noPosition = $root.event_store.client.shared.Empty.fromObject(object.noPosition);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteResp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.DeleteResp
                 * @static
                 * @param {event_store.client.streams.DeleteResp} message DeleteResp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteResp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.position != null && message.hasOwnProperty("position")) {
                        object.position = $root.event_store.client.streams.DeleteResp.Position.toObject(message.position, options);
                        if (options.oneofs)
                            object.positionOption = "position";
                    }
                    if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                        object.noPosition = $root.event_store.client.shared.Empty.toObject(message.noPosition, options);
                        if (options.oneofs)
                            object.positionOption = "noPosition";
                    }
                    return object;
                };

                /**
                 * Converts this DeleteResp to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.DeleteResp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteResp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                DeleteResp.Position = (function() {

                    /**
                     * Properties of a Position.
                     * @memberof event_store.client.streams.DeleteResp
                     * @interface IPosition
                     * @property {number|Long|null} [commitPosition] Position commitPosition
                     * @property {number|Long|null} [preparePosition] Position preparePosition
                     */

                    /**
                     * Constructs a new Position.
                     * @memberof event_store.client.streams.DeleteResp
                     * @classdesc Represents a Position.
                     * @implements IPosition
                     * @constructor
                     * @param {event_store.client.streams.DeleteResp.IPosition=} [properties] Properties to set
                     */
                    function Position(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Position commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @instance
                     */
                    Position.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Position preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @instance
                     */
                    Position.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {event_store.client.streams.DeleteResp.IPosition=} [properties] Properties to set
                     * @returns {event_store.client.streams.DeleteResp.Position} Position instance
                     */
                    Position.create = function create(properties) {
                        return new Position(properties);
                    };

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.DeleteResp.Position.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {event_store.client.streams.DeleteResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.commitPosition);
                        if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.preparePosition);
                        return writer;
                    };

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.DeleteResp.Position.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {event_store.client.streams.DeleteResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.DeleteResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.DeleteResp.Position();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.uint64();
                                break;
                            case 2:
                                message.preparePosition = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.DeleteResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Position message.
                     * @function verify
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Position.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.DeleteResp.Position} Position
                     */
                    Position.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.DeleteResp.Position)
                            return object;
                        var message = new $root.event_store.client.streams.DeleteResp.Position();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @static
                     * @param {event_store.client.streams.DeleteResp.Position} message Position
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Position.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                        return object;
                    };

                    /**
                     * Converts this Position to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.DeleteResp.Position
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Position.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Position;
                })();

                return DeleteResp;
            })();

            streams.TombstoneReq = (function() {

                /**
                 * Properties of a TombstoneReq.
                 * @memberof event_store.client.streams
                 * @interface ITombstoneReq
                 * @property {event_store.client.streams.TombstoneReq.IOptions|null} [options] TombstoneReq options
                 */

                /**
                 * Constructs a new TombstoneReq.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a TombstoneReq.
                 * @implements ITombstoneReq
                 * @constructor
                 * @param {event_store.client.streams.ITombstoneReq=} [properties] Properties to set
                 */
                function TombstoneReq(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TombstoneReq options.
                 * @member {event_store.client.streams.TombstoneReq.IOptions|null|undefined} options
                 * @memberof event_store.client.streams.TombstoneReq
                 * @instance
                 */
                TombstoneReq.prototype.options = null;

                /**
                 * Creates a new TombstoneReq instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {event_store.client.streams.ITombstoneReq=} [properties] Properties to set
                 * @returns {event_store.client.streams.TombstoneReq} TombstoneReq instance
                 */
                TombstoneReq.create = function create(properties) {
                    return new TombstoneReq(properties);
                };

                /**
                 * Encodes the specified TombstoneReq message. Does not implicitly {@link event_store.client.streams.TombstoneReq.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {event_store.client.streams.ITombstoneReq} message TombstoneReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TombstoneReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.event_store.client.streams.TombstoneReq.Options.encode(message.options, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TombstoneReq message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {event_store.client.streams.ITombstoneReq} message TombstoneReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TombstoneReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TombstoneReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.TombstoneReq} TombstoneReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TombstoneReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.TombstoneReq();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.options = $root.event_store.client.streams.TombstoneReq.Options.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TombstoneReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.TombstoneReq} TombstoneReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TombstoneReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TombstoneReq message.
                 * @function verify
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TombstoneReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.event_store.client.streams.TombstoneReq.Options.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates a TombstoneReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.TombstoneReq} TombstoneReq
                 */
                TombstoneReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.TombstoneReq)
                        return object;
                    var message = new $root.event_store.client.streams.TombstoneReq();
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".event_store.client.streams.TombstoneReq.options: object expected");
                        message.options = $root.event_store.client.streams.TombstoneReq.Options.fromObject(object.options);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TombstoneReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.TombstoneReq
                 * @static
                 * @param {event_store.client.streams.TombstoneReq} message TombstoneReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TombstoneReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.options = null;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.event_store.client.streams.TombstoneReq.Options.toObject(message.options, options);
                    return object;
                };

                /**
                 * Converts this TombstoneReq to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.TombstoneReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TombstoneReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                TombstoneReq.Options = (function() {

                    /**
                     * Properties of an Options.
                     * @memberof event_store.client.streams.TombstoneReq
                     * @interface IOptions
                     * @property {event_store.client.shared.IStreamIdentifier|null} [streamIdentifier] Options streamIdentifier
                     * @property {number|Long|null} [revision] Options revision
                     * @property {event_store.client.shared.IEmpty|null} [noStream] Options noStream
                     * @property {event_store.client.shared.IEmpty|null} [any] Options any
                     * @property {event_store.client.shared.IEmpty|null} [streamExists] Options streamExists
                     */

                    /**
                     * Constructs a new Options.
                     * @memberof event_store.client.streams.TombstoneReq
                     * @classdesc Represents an Options.
                     * @implements IOptions
                     * @constructor
                     * @param {event_store.client.streams.TombstoneReq.IOptions=} [properties] Properties to set
                     */
                    function Options(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Options streamIdentifier.
                     * @member {event_store.client.shared.IStreamIdentifier|null|undefined} streamIdentifier
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Options.prototype.streamIdentifier = null;

                    /**
                     * Options revision.
                     * @member {number|Long} revision
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Options.prototype.revision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Options noStream.
                     * @member {event_store.client.shared.IEmpty|null|undefined} noStream
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Options.prototype.noStream = null;

                    /**
                     * Options any.
                     * @member {event_store.client.shared.IEmpty|null|undefined} any
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Options.prototype.any = null;

                    /**
                     * Options streamExists.
                     * @member {event_store.client.shared.IEmpty|null|undefined} streamExists
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Options.prototype.streamExists = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Options expectedStreamRevision.
                     * @member {"revision"|"noStream"|"any"|"streamExists"|undefined} expectedStreamRevision
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     */
                    Object.defineProperty(Options.prototype, "expectedStreamRevision", {
                        get: $util.oneOfGetter($oneOfFields = ["revision", "noStream", "any", "streamExists"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Options instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {event_store.client.streams.TombstoneReq.IOptions=} [properties] Properties to set
                     * @returns {event_store.client.streams.TombstoneReq.Options} Options instance
                     */
                    Options.create = function create(properties) {
                        return new Options(properties);
                    };

                    /**
                     * Encodes the specified Options message. Does not implicitly {@link event_store.client.streams.TombstoneReq.Options.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {event_store.client.streams.TombstoneReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.streamIdentifier != null && Object.hasOwnProperty.call(message, "streamIdentifier"))
                            $root.event_store.client.shared.StreamIdentifier.encode(message.streamIdentifier, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.revision != null && Object.hasOwnProperty.call(message, "revision"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.revision);
                        if (message.noStream != null && Object.hasOwnProperty.call(message, "noStream"))
                            $root.event_store.client.shared.Empty.encode(message.noStream, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.any != null && Object.hasOwnProperty.call(message, "any"))
                            $root.event_store.client.shared.Empty.encode(message.any, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.streamExists != null && Object.hasOwnProperty.call(message, "streamExists"))
                            $root.event_store.client.shared.Empty.encode(message.streamExists, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Options message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneReq.Options.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {event_store.client.streams.TombstoneReq.IOptions} message Options message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Options.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.TombstoneReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.TombstoneReq.Options();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.revision = reader.uint64();
                                break;
                            case 3:
                                message.noStream = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.any = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.streamExists = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Options message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.TombstoneReq.Options} Options
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Options.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Options message.
                     * @function verify
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Options.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier")) {
                            var error = $root.event_store.client.shared.StreamIdentifier.verify(message.streamIdentifier);
                            if (error)
                                return "streamIdentifier." + error;
                        }
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            properties.expectedStreamRevision = 1;
                            if (!$util.isInteger(message.revision) && !(message.revision && $util.isInteger(message.revision.low) && $util.isInteger(message.revision.high)))
                                return "revision: integer|Long expected";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.noStream);
                                if (error)
                                    return "noStream." + error;
                            }
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.any);
                                if (error)
                                    return "any." + error;
                            }
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            if (properties.expectedStreamRevision === 1)
                                return "expectedStreamRevision: multiple values";
                            properties.expectedStreamRevision = 1;
                            {
                                var error = $root.event_store.client.shared.Empty.verify(message.streamExists);
                                if (error)
                                    return "streamExists." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Options message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.TombstoneReq.Options} Options
                     */
                    Options.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.TombstoneReq.Options)
                            return object;
                        var message = new $root.event_store.client.streams.TombstoneReq.Options();
                        if (object.streamIdentifier != null) {
                            if (typeof object.streamIdentifier !== "object")
                                throw TypeError(".event_store.client.streams.TombstoneReq.Options.streamIdentifier: object expected");
                            message.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.fromObject(object.streamIdentifier);
                        }
                        if (object.revision != null)
                            if ($util.Long)
                                (message.revision = $util.Long.fromValue(object.revision)).unsigned = true;
                            else if (typeof object.revision === "string")
                                message.revision = parseInt(object.revision, 10);
                            else if (typeof object.revision === "number")
                                message.revision = object.revision;
                            else if (typeof object.revision === "object")
                                message.revision = new $util.LongBits(object.revision.low >>> 0, object.revision.high >>> 0).toNumber(true);
                        if (object.noStream != null) {
                            if (typeof object.noStream !== "object")
                                throw TypeError(".event_store.client.streams.TombstoneReq.Options.noStream: object expected");
                            message.noStream = $root.event_store.client.shared.Empty.fromObject(object.noStream);
                        }
                        if (object.any != null) {
                            if (typeof object.any !== "object")
                                throw TypeError(".event_store.client.streams.TombstoneReq.Options.any: object expected");
                            message.any = $root.event_store.client.shared.Empty.fromObject(object.any);
                        }
                        if (object.streamExists != null) {
                            if (typeof object.streamExists !== "object")
                                throw TypeError(".event_store.client.streams.TombstoneReq.Options.streamExists: object expected");
                            message.streamExists = $root.event_store.client.shared.Empty.fromObject(object.streamExists);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Options message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @static
                     * @param {event_store.client.streams.TombstoneReq.Options} message Options
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Options.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.streamIdentifier = null;
                        if (message.streamIdentifier != null && message.hasOwnProperty("streamIdentifier"))
                            object.streamIdentifier = $root.event_store.client.shared.StreamIdentifier.toObject(message.streamIdentifier, options);
                        if (message.revision != null && message.hasOwnProperty("revision")) {
                            if (typeof message.revision === "number")
                                object.revision = options.longs === String ? String(message.revision) : message.revision;
                            else
                                object.revision = options.longs === String ? $util.Long.prototype.toString.call(message.revision) : options.longs === Number ? new $util.LongBits(message.revision.low >>> 0, message.revision.high >>> 0).toNumber(true) : message.revision;
                            if (options.oneofs)
                                object.expectedStreamRevision = "revision";
                        }
                        if (message.noStream != null && message.hasOwnProperty("noStream")) {
                            object.noStream = $root.event_store.client.shared.Empty.toObject(message.noStream, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "noStream";
                        }
                        if (message.any != null && message.hasOwnProperty("any")) {
                            object.any = $root.event_store.client.shared.Empty.toObject(message.any, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "any";
                        }
                        if (message.streamExists != null && message.hasOwnProperty("streamExists")) {
                            object.streamExists = $root.event_store.client.shared.Empty.toObject(message.streamExists, options);
                            if (options.oneofs)
                                object.expectedStreamRevision = "streamExists";
                        }
                        return object;
                    };

                    /**
                     * Converts this Options to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.TombstoneReq.Options
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Options.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Options;
                })();

                return TombstoneReq;
            })();

            streams.TombstoneResp = (function() {

                /**
                 * Properties of a TombstoneResp.
                 * @memberof event_store.client.streams
                 * @interface ITombstoneResp
                 * @property {event_store.client.streams.TombstoneResp.IPosition|null} [position] TombstoneResp position
                 * @property {event_store.client.shared.IEmpty|null} [noPosition] TombstoneResp noPosition
                 */

                /**
                 * Constructs a new TombstoneResp.
                 * @memberof event_store.client.streams
                 * @classdesc Represents a TombstoneResp.
                 * @implements ITombstoneResp
                 * @constructor
                 * @param {event_store.client.streams.ITombstoneResp=} [properties] Properties to set
                 */
                function TombstoneResp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TombstoneResp position.
                 * @member {event_store.client.streams.TombstoneResp.IPosition|null|undefined} position
                 * @memberof event_store.client.streams.TombstoneResp
                 * @instance
                 */
                TombstoneResp.prototype.position = null;

                /**
                 * TombstoneResp noPosition.
                 * @member {event_store.client.shared.IEmpty|null|undefined} noPosition
                 * @memberof event_store.client.streams.TombstoneResp
                 * @instance
                 */
                TombstoneResp.prototype.noPosition = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * TombstoneResp positionOption.
                 * @member {"position"|"noPosition"|undefined} positionOption
                 * @memberof event_store.client.streams.TombstoneResp
                 * @instance
                 */
                Object.defineProperty(TombstoneResp.prototype, "positionOption", {
                    get: $util.oneOfGetter($oneOfFields = ["position", "noPosition"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new TombstoneResp instance using the specified properties.
                 * @function create
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {event_store.client.streams.ITombstoneResp=} [properties] Properties to set
                 * @returns {event_store.client.streams.TombstoneResp} TombstoneResp instance
                 */
                TombstoneResp.create = function create(properties) {
                    return new TombstoneResp(properties);
                };

                /**
                 * Encodes the specified TombstoneResp message. Does not implicitly {@link event_store.client.streams.TombstoneResp.verify|verify} messages.
                 * @function encode
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {event_store.client.streams.ITombstoneResp} message TombstoneResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TombstoneResp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                        $root.event_store.client.streams.TombstoneResp.Position.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.noPosition != null && Object.hasOwnProperty.call(message, "noPosition"))
                        $root.event_store.client.shared.Empty.encode(message.noPosition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TombstoneResp message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneResp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {event_store.client.streams.ITombstoneResp} message TombstoneResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TombstoneResp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TombstoneResp message from the specified reader or buffer.
                 * @function decode
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {event_store.client.streams.TombstoneResp} TombstoneResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TombstoneResp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.TombstoneResp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.position = $root.event_store.client.streams.TombstoneResp.Position.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.noPosition = $root.event_store.client.shared.Empty.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TombstoneResp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {event_store.client.streams.TombstoneResp} TombstoneResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TombstoneResp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TombstoneResp message.
                 * @function verify
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TombstoneResp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.position != null && message.hasOwnProperty("position")) {
                        properties.positionOption = 1;
                        {
                            var error = $root.event_store.client.streams.TombstoneResp.Position.verify(message.position);
                            if (error)
                                return "position." + error;
                        }
                    }
                    if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                        if (properties.positionOption === 1)
                            return "positionOption: multiple values";
                        properties.positionOption = 1;
                        {
                            var error = $root.event_store.client.shared.Empty.verify(message.noPosition);
                            if (error)
                                return "noPosition." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a TombstoneResp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {event_store.client.streams.TombstoneResp} TombstoneResp
                 */
                TombstoneResp.fromObject = function fromObject(object) {
                    if (object instanceof $root.event_store.client.streams.TombstoneResp)
                        return object;
                    var message = new $root.event_store.client.streams.TombstoneResp();
                    if (object.position != null) {
                        if (typeof object.position !== "object")
                            throw TypeError(".event_store.client.streams.TombstoneResp.position: object expected");
                        message.position = $root.event_store.client.streams.TombstoneResp.Position.fromObject(object.position);
                    }
                    if (object.noPosition != null) {
                        if (typeof object.noPosition !== "object")
                            throw TypeError(".event_store.client.streams.TombstoneResp.noPosition: object expected");
                        message.noPosition = $root.event_store.client.shared.Empty.fromObject(object.noPosition);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TombstoneResp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof event_store.client.streams.TombstoneResp
                 * @static
                 * @param {event_store.client.streams.TombstoneResp} message TombstoneResp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TombstoneResp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.position != null && message.hasOwnProperty("position")) {
                        object.position = $root.event_store.client.streams.TombstoneResp.Position.toObject(message.position, options);
                        if (options.oneofs)
                            object.positionOption = "position";
                    }
                    if (message.noPosition != null && message.hasOwnProperty("noPosition")) {
                        object.noPosition = $root.event_store.client.shared.Empty.toObject(message.noPosition, options);
                        if (options.oneofs)
                            object.positionOption = "noPosition";
                    }
                    return object;
                };

                /**
                 * Converts this TombstoneResp to JSON.
                 * @function toJSON
                 * @memberof event_store.client.streams.TombstoneResp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TombstoneResp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                TombstoneResp.Position = (function() {

                    /**
                     * Properties of a Position.
                     * @memberof event_store.client.streams.TombstoneResp
                     * @interface IPosition
                     * @property {number|Long|null} [commitPosition] Position commitPosition
                     * @property {number|Long|null} [preparePosition] Position preparePosition
                     */

                    /**
                     * Constructs a new Position.
                     * @memberof event_store.client.streams.TombstoneResp
                     * @classdesc Represents a Position.
                     * @implements IPosition
                     * @constructor
                     * @param {event_store.client.streams.TombstoneResp.IPosition=} [properties] Properties to set
                     */
                    function Position(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Position commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @instance
                     */
                    Position.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Position preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @instance
                     */
                    Position.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new Position instance using the specified properties.
                     * @function create
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {event_store.client.streams.TombstoneResp.IPosition=} [properties] Properties to set
                     * @returns {event_store.client.streams.TombstoneResp.Position} Position instance
                     */
                    Position.create = function create(properties) {
                        return new Position(properties);
                    };

                    /**
                     * Encodes the specified Position message. Does not implicitly {@link event_store.client.streams.TombstoneResp.Position.verify|verify} messages.
                     * @function encode
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {event_store.client.streams.TombstoneResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.commitPosition != null && Object.hasOwnProperty.call(message, "commitPosition"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.commitPosition);
                        if (message.preparePosition != null && Object.hasOwnProperty.call(message, "preparePosition"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.preparePosition);
                        return writer;
                    };

                    /**
                     * Encodes the specified Position message, length delimited. Does not implicitly {@link event_store.client.streams.TombstoneResp.Position.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {event_store.client.streams.TombstoneResp.IPosition} message Position message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Position.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer.
                     * @function decode
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {event_store.client.streams.TombstoneResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.event_store.client.streams.TombstoneResp.Position();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.uint64();
                                break;
                            case 2:
                                message.preparePosition = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Position message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {event_store.client.streams.TombstoneResp.Position} Position
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Position.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Position message.
                     * @function verify
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Position.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a Position message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {event_store.client.streams.TombstoneResp.Position} Position
                     */
                    Position.fromObject = function fromObject(object) {
                        if (object instanceof $root.event_store.client.streams.TombstoneResp.Position)
                            return object;
                        var message = new $root.event_store.client.streams.TombstoneResp.Position();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = true;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber(true);
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = true;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Position message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @static
                     * @param {event_store.client.streams.TombstoneResp.Position} message Position
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Position.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber(true) : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber(true) : message.preparePosition;
                        return object;
                    };

                    /**
                     * Converts this Position to JSON.
                     * @function toJSON
                     * @memberof event_store.client.streams.TombstoneResp.Position
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Position.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Position;
                })();

                return TombstoneResp;
            })();

            return streams;
        })();

        return client;
    })();

    return event_store;
})();

module.exports = $root;
