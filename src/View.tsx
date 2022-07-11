import React, { useEffect, useState } from "react";
import useView from "./store/view";
import Header from "./Header";
const View = () => {
  const state = useView((state) => state.state);
  const get = useView((state) => state.get);
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      {state ? <p>{JSON.stringify(state)}</p> : <h1>N</h1>}
    </>
  );
};
export default View;
