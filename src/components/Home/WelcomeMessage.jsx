import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";

const customTheme = extendTheme({
  typography: {
    h1: {
      background:
        "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "monospace",
    },
  },
});

export default function WelcomeMessage() {
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const name = userData.name;

  return (
    <CssVarsProvider theme={customTheme}>
      <Box sx={(theme) => theme.typography.h1}>Welcome {name},</Box>
    </CssVarsProvider>
  );
}
