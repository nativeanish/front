import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import config from "../src/utils/config";
const Index = () => (
  <React.Fragment>
    <App />
  </React.Fragment>
);
const root = ReactDOM.createRoot(
  document.getElementById("mountNode") as HTMLElement
);
config()
  .then(() =>
    root.render(
      <React.StrictMode>
        <Index />
      </React.StrictMode>
    )
  )
  .catch((err) => console.log(err));
