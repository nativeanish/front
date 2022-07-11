import Arweave from "arweave";
import { WarpWebFactory } from "warp-contracts";
const config = async () => {
  window.arweave = Arweave.init({
    host: "testnet.redstone.tools",
    port: 443,
    protocol: "https",
  });
  window.warp = WarpWebFactory.memCachedBased(window.arweave)
    .useArweaveGateway()
    .build();
  window.id = "pqGKYXYz-E4C-wjYz6uWOpYynBNh3LDkV4-UiBXaYqs";
  return "ok";
};
export default config;
