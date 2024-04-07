import * as React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import LeftComponent from "../../components/SignUp/LeftComponent";
import RightComponent from "../../components/SignUp/RightComponent";

export default function SignUp() {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      {/* <ModeToggle /> */}
      <CssBaseline />
      <LeftComponent />
      <RightComponent />
    </main>
  );
}
