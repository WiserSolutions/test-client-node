import { readFile } from "fs/promises";

import { EventStoreDBClient } from "@eventstore/db-client";
import { parseConnectionString } from "@eventstore/db-client/dist/Client/parseConnectionString";

interface Options {
  connectionString: string;
  rootCertificatePath?: string;
  certChainPath?: string;
  privateKeyPath?: string;
}

// Work around for certificate path not being supported in node client yet
export async function createClientCreator({
  connectionString,
  rootCertificatePath,
  certChainPath,
  privateKeyPath,
}: Options) {
  const options = parseConnectionString(connectionString);
  const channelCredentials: ConstructorParameters<
    typeof EventStoreDBClient
  >[1] = {
    insecure: !options.tls,
  };

  if (options.tls) {
    if (rootCertificatePath) {
      channelCredentials.rootCertificate = await readFile(rootCertificatePath);
    }

    if (certChainPath) {
      channelCredentials.certChain = await readFile(certChainPath);
    }

    if (privateKeyPath) {
      channelCredentials.privateKey = await readFile(privateKeyPath);
    }
  }

  return () => {
    if (options.dnsDiscover) {
      const [discover] = options.hosts;

      return new EventStoreDBClient(
        {
          discover,
          nodePreference: options.nodePreference,
          discoveryInterval: options.discoveryInterval,
          gossipTimeout: options.gossipTimeout,
          maxDiscoverAttempts: options.maxDiscoverAttempts,
          throwOnAppendFailure: options.throwOnAppendFailure,
          keepAliveInterval: options.keepAliveInterval,
          keepAliveTimeout: options.keepAliveTimeout,
        },
        channelCredentials,
        options.defaultCredentials
      );
    }

    if (options.hosts.length > 1) {
      return new EventStoreDBClient(
        {
          endpoints: options.hosts,
          nodePreference: options.nodePreference,
          discoveryInterval: options.discoveryInterval,
          gossipTimeout: options.gossipTimeout,
          maxDiscoverAttempts: options.maxDiscoverAttempts,
          throwOnAppendFailure: options.throwOnAppendFailure,
          keepAliveInterval: options.keepAliveInterval,
          keepAliveTimeout: options.keepAliveTimeout,
        },
        channelCredentials,
        options.defaultCredentials
      );
    }

    return new EventStoreDBClient(
      {
        endpoint: options.hosts[0],
        throwOnAppendFailure: options.throwOnAppendFailure,
        keepAliveInterval: options.keepAliveInterval,
        keepAliveTimeout: options.keepAliveTimeout,
      },
      channelCredentials,
      options.defaultCredentials
    );
  };
}
