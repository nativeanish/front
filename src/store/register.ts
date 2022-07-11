import create from "zustand";
import { mineBlock } from "../utils/mineBlock";

interface Register {
  state: boolean;
  register: (key: string, img: Buffer, header: string) => void;
}

const useRegister = create<Register>((set) => ({
  state: false,
  register: async (key: string, img: Buffer, header: string) => {
    if (key && img && header) {
      set({ state: true });
      let transaction = await window.arweave.createTransaction(
        {
          data: img,
        },
        JSON.parse(key)
      );
      transaction.addTag("Content-Type", "img/jpg");
      transaction.addTag("Header", header);
      await window.arweave.transactions.sign(transaction, JSON.parse(key));
      if (transaction.id) {
        const contract = window.warp
          .contract(window.id)
          .connect(JSON.parse(key));
        await contract.writeInteraction({
          function: "register",
          id: String(transaction.id),
          header: header,
        });
        await mineBlock(window.arweave);
        set({ state: false });
      }
    }
  },
}));
export default useRegister;
