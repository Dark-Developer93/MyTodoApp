import React from "react";
import ReactDOM from "react-dom";

//Componet file
import TodoContainer from "./components/TodoContainer";

//styling
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
