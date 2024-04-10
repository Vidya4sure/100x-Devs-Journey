import React from "react";
import ReactDOM from "react-dom/client";
import FixReRender from "./FixReRender.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App></App>
    <FixReRender></FixReRender>
  </div>
);
