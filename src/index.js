import axios from "axios";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { theme } from "./theme";
import { InfoProvider } from "./utility/InfoProvider";

axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
  <React.StrictMode>
    <InfoProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </InfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
