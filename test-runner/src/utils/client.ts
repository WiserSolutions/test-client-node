import * as pbjs from "@eventstore/db-client-pbjs";
import * as gpb from "@eventstore/db-client";

export type Clients = "pbjs" | "gpb";

export const getClient = (client: Clients) => {
  switch (client) {
    case "pbjs":
      return pbjs;
    case "gpb":
      return gpb;
  }
};
