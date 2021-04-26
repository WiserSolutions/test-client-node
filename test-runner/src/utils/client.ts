import * as pbjs from "@eventstore/db-client-pbjs";
import * as gpb from "@eventstore/db-client";
import * as uint8 from "@eventstore/db-client-uint8";

export type Clients = "pbjs" | "gpb" | "uint8";

export const getClient = (client: Clients) => {
  switch (client) {
    case "pbjs":
      return pbjs;
    case "gpb":
      return gpb;
    case "uint8":
      return uint8;
  }
};
