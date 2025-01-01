"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00acc1",
    },
    secondary: {
      main: "#4db6ac",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
