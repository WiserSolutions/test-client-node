# Test Client Node

## Getting started

Make sure you have node >= 12 installed

### Install dependancies:

```
yarn
```

### Build

```
yarn build
```

### Run

See [test-runner](test-runner/readme.md) for options

## Findings

### Direct serialization:

Run: `node ./message/comp.js` to run comparison yourself

```
google-protobuf:            100000  in 5413ms (18474/s)  (current client)  (slowest)
protobufjs:                 100000  in 1879ms (53230/s)                    (~3x faster)
google-protobuf no base64:  100000  in 1362ms (73397/s)                    (~4x faster)
protobufjs no base64:       100000  in 1099ms (90968/s)                    (~5x faster)
```

While `protobufjs` gives the fastest speed possible, the easy win of removing base64 encoding gives a 4x speed up.

### Profiling

Initial profiling showed that `goog.crypt.base64.decodeStringInternal_` was slowing things up:

```
 [JavaScript]:
   ticks  total  nonlib   name
    389    3.9%    8.2%  LazyCompile: *goog.crypt.base64.decodeStringInternal_ /home/george/dev/test-client/node_modules/google-protobuf/google-protobuf.js:329:49
     28    0.3%    0.6%  LazyCompile: *processTicksAndRejections internal/process/task_queues.js:65:35
     25    0.3%    0.5%  LazyCompile: *nextTick internal/process/task_queues.js:101:18
```

see [gpb.txt](./test-runner/profiling/gpb.txt)

With `protobufjs` not having this issue.

```
 [JavaScript]:
   ticks  total  nonlib   name
     27    0.3%    0.4%  LazyCompile: *nextTick internal/process/task_queues.js:101:18
     22    0.2%    0.3%  LazyCompile: *processTicksAndRejections internal/process/task_queues.js:65:35
     22    0.2%    0.3%  LazyCompile: *makeClientStreamRequest /home/george/dev/test-client/node_modules/@grpc/grpc-js/build/src/client.js:185:28
```

see [pbjs.txt](./test-runner/profiling/pbjs.txt)

Removing `base64` encoding and directly passing a `Uint8array` removes this issue, with all tests passing on the node client.

```
 [JavaScript]:
     34    0.4%    0.8%  LazyCompile: *processTicksAndRejections internal/process/task_queues.js:65:35
     25    0.3%    0.6%  LazyCompile: *_write /home/george/dev/test-client/node_modules/@grpc/grpc-js/build/src/call.js:80:11
     23    0.3%    0.5%  LazyCompile: *nextTick internal/process/task_queues.js:101:18
```

see [nobase64.txt](./test-runner/profiling/nobase64.txt)

### Running with Test Client

Each test run with a single client, three times, with the same data and metadata.

| client                      | best     | average (without best and worst) |
| --------------------------- | -------- | -------------------------------- |
| `google-protobuf` (current) | `2133/s` | `2088/s`                         |
| `protobufjs`                | `2289/s` | `2213/s`                         |
| `google-protobuf no base64` | `2162/s` | `2091/s`                         |

`google-protobuf` (current):
`yarn dev wrfl --client gpb --client_count 1 --request_count 20000 --stream_prefix hi --stream_count 5 --max_in_flight 2000`

```
WORKER 0 TOTALS:  20000 WRITES IN 9681.877806ms (2065.714978101222/s)
WORKER 0 TOTALS:  20000 WRITES IN 10054.226832ms (1989.2131273928671/s)
WORKER 0 TOTALS:  20000 WRITES IN 9406.595898ms (2126.167661167664/s)
WORKER 0 TOTALS:  20000 WRITES IN 9372.795177ms (2133.835171078763/s)
WORKER 0 TOTALS:  20000 WRITES IN 9635.482347ms (2075.6615268178025/s)
```

`protobufjs`:
`yarn dev wrfl --client pbjs --client_count 1 --request_count 20000 --stream_prefix hi --stream_count 5 --max_in_flight 2000`

```
WORKER 0 TOTALS:  20000 WRITES IN 9497.843574ms (2105.7411447319755/s)
WORKER 0 TOTALS:  20000 WRITES IN 8736.171002ms (2289.332477056749/s)
WORKER 0 TOTALS:  20000 WRITES IN 12748.501397ms (1568.8118451872654/s)
WORKER 0 TOTALS:  20000 WRITES IN 8805.738501ms (2271.246187668275/s)
WORKER 0 TOTALS:  20000 WRITES IN 8830.731814ms (2264.8179586082038/s)
```

`google-protobuf no base64`:
`yarn dev wrfl --client uint8 --client_count 1 --request_count 20000 --stream_prefix hi --stream_count 5 --max_in_flight 2000`

```
WORKER 0 TOTALS:  20000 WRITES IN 9409.281729ms (2125.5607575612003/s)
WORKER 0 TOTALS:  20000 WRITES IN 11281.206559ms (1772.8600123932895/s)
WORKER 0 TOTALS:  20000 WRITES IN 9250.513485ms (2162.0421431124482/s)
WORKER 0 TOTALS:  20000 WRITES IN 9906.978742ms (2018.778935621542/s)
WORKER 0 TOTALS:  20000 WRITES IN 9378.897228ms (2132.446865958984/s)
```

All averages are within noise, so encoding doesnt appear to be the bottleneck.
