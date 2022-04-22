import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GithubAPIDataProvider from "./context/GithubAPIDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GithubAPIDataProvider>
      <App />
    </GithubAPIDataProvider>
  </BrowserRouter>
);
