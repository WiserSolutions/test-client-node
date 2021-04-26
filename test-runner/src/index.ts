import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import rdfl from "./commands/rdfl";
import wrfl from "./commands/wrfl";

yargs(hideBin(process.argv))
  .command(wrfl)
  .command(rdfl)
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
    choices: ["gpb", "pbjs"],
    default: "gpb",
  }).argv;
