import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  color: "whitesmoke",
  backgroundColor: "#111",
}

const lightTheme = {
  color: "#111",
  backgroundColor: "whitesmoke",
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
