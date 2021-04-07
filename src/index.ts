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
  })
  .option("root-certificate-path", {
    type: "string",
    description: "path to root certificate file",
  })
  .option("cert-chain-path", {
    type: "string",
    description: "path to cert chain file",
  })
  .option("private-key-path", {
    type: "string",
    description: "path to private key file",
  }).argv;
