"use strict";
exports.__esModule = true;
var perf_hooks_1 = require("perf_hooks");
var crypto_1 = require("crypto");
var protos_1 = require("./pbjs/protos");
var streams_pb_1 = require("./gpb/streams_pb");
var shared_pb_1 = require("./gpb/shared_pb");
var convertData = function (event, b64) {
    if (b64 === void 0) { b64 = true; }
    if (b64) {
        switch (event.contentType) {
            case "application/json": {
                return Buffer.from(JSON.stringify(event.data), "utf8").toString("base64");
            }
            case "application/octet-stream": {
                return event.data;
            }
        }
    }
    else {
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
var convertMetadata = function (event, b64) {
    if (b64 === void 0) { b64 = true; }
    if (!event.metadata)
        return;
    if (event.metadata.constructor === Uint8Array) {
        return event.metadata;
    }
    if (b64) {
        return Buffer.from(JSON.stringify(event.metadata), "utf8").toString("base64");
    }
    return Uint8Array.from(Buffer.from(JSON.stringify(event.metadata), "utf8"));
};
var makePBJSBuf = function (event) {
    var entry = {
        proposedMessage: {
            id: protos_1.event_store.client.shared.UUID.create({ string: event.id }),
            metadata: {
                type: event.type,
                "content-type": event.contentType
            },
            data: convertData(event),
            customMetadata: convertMetadata(event)
        }
    };
    // const validity = event_store.client.streams.AppendReq.verify(entry);
    // console.log(validity);
    var data = Uint8Array.from(protos_1.event_store.client.streams.AppendReq.encode(entry).finish());
    // console.log(data.byteLength);
    return data;
};
var makePBJSBufNoBase64 = function (event) {
    var entry = {
        proposedMessage: {
            id: protos_1.event_store.client.shared.UUID.create({ string: event.id }),
            metadata: {
                type: event.type,
                "content-type": event.contentType
            },
            data: convertData(event, false),
            customMetadata: convertMetadata(event, false)
        }
    };
    var data = protos_1.event_store.client.streams.AppendReq.encode(entry).finish();
    return data;
};
var makeGPBBuf = function (event) {
    var entry = new streams_pb_1.AppendReq();
    var message = new streams_pb_1.AppendReq.ProposedMessage();
    var id = new shared_pb_1.UUID();
    id.setString(event.id);
    message.setId(id);
    message.getMetadataMap().set("type", event.type);
    message.getMetadataMap().set("content-type", event.contentType);
    switch (event.contentType) {
        case "application/json": {
            var data_1 = JSON.stringify(event.data);
            message.setCustomMetadata(Buffer.from(data_1, "utf8").toString("base64"));
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
        }
        else {
            var metadata = JSON.stringify(event.metadata);
            message.setCustomMetadata(Buffer.from(metadata, "utf8").toString("base64"));
        }
    }
    entry.setProposedMessage(message);
    var data = entry.serializeBinary();
    // console.log(data.byteLength);
    return data;
};
var makeGPBBufNoBase64 = function (event) {
    var entry = new streams_pb_1.AppendReq();
    var message = new streams_pb_1.AppendReq.ProposedMessage();
    var id = new shared_pb_1.UUID();
    id.setString(event.id);
    message.setId(id);
    message.getMetadataMap().set("type", event.type);
    message.getMetadataMap().set("content-type", event.contentType);
    switch (event.contentType) {
        case "application/json": {
            var data_2 = JSON.stringify(event.data);
            message.setData(Uint8Array.from(Buffer.from(data_2, "utf8")));
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
        }
        else {
            var metadata = JSON.stringify(event.metadata);
            message.setCustomMetadata(Uint8Array.from(Buffer.from(metadata, "utf8")));
        }
    }
    entry.setProposedMessage(message);
    var data = entry.serializeBinary();
    // console.log(data.byteLength);
    return data;
};
var makePBBuf = function (entry, count) {
    var perfObserver = new perf_hooks_1.PerformanceObserver(function (items) {
        items.getEntries().forEach(function (_a) {
            var duration = _a.duration, name = _a.name;
            console.log(name + " " + count + "  in " + Math.round(duration) + "ms (" + Math.round((1000.0 * count) / duration) + "/s)");
        });
    });
    perfObserver.observe({ entryTypes: ["measure"], buffered: true });
    perf_hooks_1.performance.mark("pbjs-start");
    for (var i = 0; i < count; i++) {
        makePBJSBuf(entry);
    }
    perf_hooks_1.performance.mark("pbjs-end");
    perf_hooks_1.performance.mark("pbjsnobase64-start");
    for (var i = 0; i < count; i++) {
        makePBJSBufNoBase64(entry);
    }
    perf_hooks_1.performance.mark("pbjsnobase64-end");
    perf_hooks_1.performance.mark("gpb-start");
    for (var i = 0; i < count; i++) {
        makeGPBBuf(entry);
    }
    perf_hooks_1.performance.mark("gpb-end");
    perf_hooks_1.performance.mark("gpbnobase64-start");
    for (var i = 0; i < count; i++) {
        makeGPBBufNoBase64(entry);
    }
    perf_hooks_1.performance.mark("gpbnobase64-end");
    perf_hooks_1.performance.measure("pbjs:        ", "pbjs-start", "pbjs-end");
    perf_hooks_1.performance.measure("pbjsnobase64:", "pbjsnobase64-start", "pbjsnobase64-end");
    perf_hooks_1.performance.measure("gpb:         ", "gpb-start", "gpb-end");
    perf_hooks_1.performance.measure("gpbnobase64: ", "gpbnobase64-start", "gpbnobase64-end");
};
makePBBuf({
    contentType: "application/json",
    data: crypto_1.randomBytes(700).toString("ascii"),
    id: "aa82142f-5f1c-406d-b7f9-fbfaad9d21a1",
    metadata: crypto_1.randomBytes(700).toString("ascii"),
    type: "some_type"
}, 100000);
