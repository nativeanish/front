import Arweave from "arweave";
import { Warp } from "warp-contracts";

export {};
declare global {
  interface Window {
    warp: Warp;
    id: string;
    arweave: Arweave;
  }
}
