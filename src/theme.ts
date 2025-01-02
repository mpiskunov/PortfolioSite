"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8FBC8B",
    },
    secondary: {
      main: "#4db6ac",
    },
    background: {
      default: "#2f4858",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
