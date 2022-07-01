import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { InfoProvider } from "./utility/InfoProvider";

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
