/**
 * NewRelic EventStore instrumentation.
 * Adds datastore metrics to the appendToStream, deleteStream, readStream, readAll client calls.
 * More info @doc http://newrelic.github.io/node-newrelic/docs/tutorial-Datastore-Simple.html
 */
 function instrumentEventStoreWithNewRelic(shim: any, eventstore: any) {
    console.log('EventStore Shim Instrumented')
    shim.setDatastore('EventStore')
    const proto = eventstore.EventStoreDBClient.prototype
    shim.recordOperation(proto, ['appendToStream', 'deleteStream', 'readStream', 'readAll'], {
      callback: shim.LAST,
      promise: true,
    })
  }

  if (process.env.NEW_RELIC_ENABLED == 'true') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('newrelic').instrumentDatastore('@eventstore/db-client', instrumentEventStoreWithNewRelic)
  }
