import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app.js";
import "./Styles/index.css";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
