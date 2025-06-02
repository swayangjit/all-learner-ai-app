console.log("Main.jsx loaded");

import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/styles/index.scss";
import store from "./store/configureStore";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { getCSP } from "./csp";

const injectCSP = () => {
  try {
    const cspContent = getCSP(import.meta.env); // Pass environment variables
    const metaTag = document.createElement("meta");
    metaTag.httpEquiv = "Content-Security-Policy";
    metaTag.content = cspContent.trim();
    document.head.appendChild(metaTag);
  } catch (error) {
    console.error("Failed to inject CSP:", error);
  }
};

injectCSP();

console.log("Index loaded");

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
