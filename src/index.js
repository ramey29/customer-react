import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

console.log("SUPERMAN", process.env.REACT_APP_NAME);

ReactDom.render(
  // for history object
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
