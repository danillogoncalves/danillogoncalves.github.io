import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
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
