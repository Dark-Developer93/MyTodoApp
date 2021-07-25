import React from "react";
import ReactDOM from "react-dom";

//Componet file
import TodoContainer from "./functionBased/components/TodoContainer";

//styling
import "./functionBased/App.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
