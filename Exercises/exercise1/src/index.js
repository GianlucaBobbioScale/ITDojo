import React from "react";
import ReactDOM from "react-dom";
// import App from './App.jsx';
import data from "./db.json";
import DynamicForm from "./components/DynamicForm.jsx";

ReactDOM.render(
  <React.StrictMode>
    <DynamicForm inputs={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
