import React from "react";
import ReactDOM from "react-dom/client";
import FixReRender from "./FixReRender.jsx";
import UsingMemo from "./UsingMemo.jsx";
import WrapperComponent from "./WrapperComponent.jsx";
import RealComponent from "./RealComponent.jsx";
import Todo from "./Todo.jsx";
import TodoHook from "./TodoHook.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <TodoHook></TodoHook>
  </div>
);
