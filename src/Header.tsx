import React from "react";
const Header = ({
  state,
}: {
  state: Array<{
    id: string;
    header: string;
    uploader: string;
  }>;
}) => {
  return (
    <>
      <h1>asdf</h1>
      {state.filter((e, i) => {
        return <h1>(e.header)</h1>;
      })}
    </>
  );
};
export default Header;
