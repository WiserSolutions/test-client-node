import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import wrfl from "./commands/wrfl";

yargs(hideBin(process.argv))
  .command(wrfl)
  .demandCommand(1)
  .option("connection-string", {
    alias: "s",
    type: "string",
    description: "Connection string for server",
    demandOption: true,
  }).argv;
