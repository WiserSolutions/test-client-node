import './init-newrelic';
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import rdfl from "./commands/rdfl";
import safl from "./commands/safl";
import wrfl from "./commands/wrfl";

yargs(hideBin(process.argv))
  .command(wrfl)
  .command(rdfl)
  .command(safl)
  .demandCommand(1)
  .option("connection-string", {
    alias: "s",
    type: "string",
    description: "Connection string for server",
    demandOption: true,
  })
  .option("client", {
    type: "string",
    description: "which client to use",
    choices: ["gpb", "pbjs", "uint8"],
    default: "gpb",
  }).argv;
