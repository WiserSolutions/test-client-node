import {
  Client as GRPCClient,
  ChannelCredentials,
  Metadata,
} from "@grpc/grpc-js";

import { event_store, gossip, shared } from "../generated";

import { EndPoint, NodePreference } from "../types";
import { RANDOM } from "../constants";
import { debug } from "../utils";
import { DNSClusterOptions, GossipClusterOptions } from ".";

const VNodeState = gossip.MemberInfo.VNodeState;

export type MemberInfo = {
  instanceId?: string;
  timeStamp: number;
  state: event_store.client.gossip.MemberInfo.VNodeState;
  isAlive: boolean;
  httpEndpoint?: EndPoint;
};

export async function discoverEndpoint(
  {
    discoveryInterval = 100,
    maxDiscoverAttempts = 10,
    gossipTimeout = 5,
    ...settings
  }: DNSClusterOptions | GossipClusterOptions,
  credentials: ChannelCredentials
): Promise<EndPoint> {
  let discoverAttempts = 0;

  while (discoverAttempts < maxDiscoverAttempts) {
    discoverAttempts++;
    try {
      const candidates: EndPoint[] =
        "endpoints" in settings ? settings.endpoints : [settings.discover];

      debug.connection(`Starting discovery for candidates: %O`, candidates);

      for (const candidate of candidates) {
        try {
          const members = await listClusterMembers(
            candidate,
            credentials,
            createDeadline(gossipTimeout)
          );
          const preference = settings.nodePreference ?? RANDOM;
          const endpoint = determineBestNode(preference, members);
          if (endpoint) return Promise.resolve(endpoint);
        } catch (error) {
          debug.connection(
            `Failed to get cluster list from ${candidate.address}:${candidate.port}`,
            error.toString()
          );
          continue;
        }
      }
    } catch (error) {
      debug.connection(`Failed to resolve dns: `, error.toString());
    }

    await delay(discoveryInterval);
  }

  throw new Error(`Failed to discover after ${discoverAttempts} attempts.`);
}

function inAllowedStates(member: MemberInfo): boolean {
  switch (member.state) {
    case VNodeState.Shutdown:
      return false;
    default:
      return true;
  }
}

function determineBestNode(
  preference: NodePreference,
  members: MemberInfo[]
): EndPoint | undefined {
  const sorted = members
    .filter(inAllowedStates)
    .sort((a, b) => a.state - b.state);

  debug.connection(
    `Determining best node with preference "%s" from members: %O`,
    preference,
    members
  );

  let finalMember;
  switch (preference) {
    case "leader":
      finalMember = sorted.find((member) => member.state === VNodeState.Leader);
      if (finalMember && finalMember.httpEndpoint) {
        debug.connection(`Chose member: %O`, finalMember);
        return {
          address: finalMember.httpEndpoint.address,
          port: finalMember.httpEndpoint.port,
        };
      }
      break;

    case "follower":
      finalMember = sorted
        .filter((member) => member.state === VNodeState.Follower)
        .sort(() => Math.random() - 0.5)
        .shift();

      debug.connection(`Chose member: %O`, finalMember);

      if (finalMember && finalMember.httpEndpoint) {
        return {
          address: finalMember.httpEndpoint.address,
          port: finalMember.httpEndpoint.port,
        };
      }
      break;

    default:
    case "random":
      finalMember = sorted.sort(() => Math.random() - 0.5).shift();

      debug.connection(`Chose member: %O`, finalMember);
      if (finalMember && finalMember.httpEndpoint) {
        return {
          address: finalMember.httpEndpoint.address,
          port: finalMember.httpEndpoint.port,
        };
      }
      break;
  }
}

function createDeadline(seconds: number) {
  const deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + seconds);
  return deadline;
}

function listClusterMembers(
  seed: EndPoint,
  credentials: ChannelCredentials,
  deadline: Date
): Promise<MemberInfo[]> {
  const uri = `${seed.address}:${seed.port}`;
  const client = new GRPCClient(uri, credentials, {});
  return new Promise((resolve, reject) => {
    client.makeUnaryRequest(
      "/event_store.client.gossip.Gossip/Read",
      (message: event_store.client.shared.Empty) =>
        Buffer.from(shared.Empty.encode(message).finish()),
      (buffer: Buffer) => gossip.ClusterInfo.decode(buffer),
      new shared.Empty(),
      new Metadata(),
      { deadline },
      (error, info) => {
        if (error) return reject(error);
        if (!info) return reject(error);

        const members: MemberInfo[] = [];

        for (const grpcMember of info.members) {
          let httpEndpoint;

          const grpcHttpEndpoint = grpcMember.httpEndPoint;

          if (grpcHttpEndpoint) {
            httpEndpoint = {
              address: grpcHttpEndpoint.address!,
              port: grpcHttpEndpoint.port!,
            };
          }

          const member: MemberInfo = {
            instanceId: grpcMember.instanceId?.string!,
            timeStamp: Number(grpcMember.timeStamp),
            state: grpcMember.state!,
            isAlive: grpcMember.isAlive!,
            httpEndpoint,
          };

          members.push(member);
        }

        return resolve(members);
      }
    );
  });
}

export const delay = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeout));
