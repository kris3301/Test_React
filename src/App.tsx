import React from "react";
import "./App.css";
import Test from "page";
import { ThemeProvider } from "@mui/material";
import { theme } from "mui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
