import * as React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import LeftComponent from "../../components/Login/LeftComponent";
import RightComponent from "../../components/Login/RightComponent";

export default function SignUp() {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      {/* <ModeToggle /> */}
      <CssBaseline />
      <RightComponent />
      <LeftComponent />
    </main>
  );
}
