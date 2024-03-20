import React from "react";
import "./App.css";
import { Box } from "@mui/joy";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Login from "./pages/Login/Login";
import Header from "./components/Common/Header";
import MyProfile from "./pages/Profile/Profile";

const materialTheme = materialExtendTheme();
function App() {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <Box>
          <MyProfile />
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}

export default App;
