"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8FBC8B",
    },
    secondary: {
      main: "#68a68a",
    },
    background: {
      default: "#2f4858",
    },
  },
  typography: {
    fontFamily: "Darker Grotesque",
  },
});

export default theme;
