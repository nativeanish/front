import create from "zustand";
interface State {
  state: undefined | Array<{ id: string; header: string; uploader: string }>;
  get: () => void;
}
const useView = create<State>((set) => ({
  state: undefined,
  get: async () => {
    const contract = window.warp.contract(window.id);
    const state = await contract.readState();
    //@ts-ignore
    if (state.state["db"]) {
      //@ts-ignore
      set({ state: state.state["db"] });
    }
  },
}));
export default useView;
