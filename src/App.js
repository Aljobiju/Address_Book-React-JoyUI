import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import HomePage from "./pages/Home/HomePage";
import SignUp from "./pages/SignUp/SignUp";

const materialTheme = materialExtendTheme();

function App() {
  return (
    <Router>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider>
          <CssBaseline enableColorScheme />
          <Box>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* Add more routes as needed */}
            </Routes>
          </Box>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
    </Router>
  );
}

export default App;
