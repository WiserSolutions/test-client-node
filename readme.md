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

```
yarn start <command>
```

## Global Options:

|                         | description                   | type    | required | default |
| ----------------------- | ----------------------------- | ------- | -------- | ------- |
| --help                  | Show help                     | boolean |          |         |
| --version               | Show Version Number           | boolean |          |         |
| --connection-string     | Connection string for server  | string  | yes      |         |
| --root-certificate-path | path to root certificate file | string  |          |         |
| --cert-chain-path       | path to cert chain file       | string  |          |         |
| --private-key-path      | path to private key file      | string  |          |         |

## Commands

### wrfl

Multi Write Processor

#### Example:

```
yarn start wrfl --connection-string "esdb://c0e0d3arh41g7drr2ilg.mesdb.eventstore.cloud:2113" --client_count=1 --request_count=200
```

#### Options:

|                                  | description                             | type    | required | default |
| -------------------------------- | --------------------------------------- | ------- | -------- | ------- |
| --client_count                   | Number of clients to use                | number  | yes      |         |
| --request_count                  | Number of requests to make in total     | number  | yes      |         |
| --stream_count                   | Number of streams to write to           | number  |          | 1000    |
| --size                           | The size of the event data and metadata | number  |          | 256     |
| --batch_size                     | Number of events per request            | number  |          | 1       |
| --deterministic_stream_names     | Use deterministic stream names          | boolean |          | false   |
| --deterministic_stream_selection | Write to streams sequentually           | boolean |          | false   |

### flood2

Multi Write Processor across workers

#### Example:

```
yarn start flood2 --connection-string "esdb://c0e0d3arh41g7drr2ilg.mesdb.eventstore.cloud:2113" --client_count=1 --request_count=200
```

#### Options:

|                                  | description                             | type    | required | default       |
| -------------------------------- | --------------------------------------- | ------- | -------- | ------------- |
| --client_count                   | Number of clients to use                | number  | yes      |               |
| --request_count                  | Number of requests to make in total     | number  | yes      |               |
| --stream_count                   | Number of streams to write to           | number  |          | 1000          |
| --size                           | The size of the event data and metadata | number  |          | 256           |
| --batch_size                     | Number of events per request            | number  |          | 1             |
| --stream_prefix                  | prefix stream names                     | string  |          |               |
| --deterministic_stream_selection | Write to streams sequentually           | boolean |          | false         |
| --worker_count                   | number of workers to use                | number  |          | cpu count - 1 |
