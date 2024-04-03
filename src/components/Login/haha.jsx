import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Typography,
} from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RightComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost/address_book/php/api_login/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.success) {
        console.log("Login successful:", response.data.message);
        navigate("/Home");
      } else {
        console.error("Login failed:", response.data.message);
        setError("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <Sheet
      sx={{
        width: 350,
        mx: "auto",
        my: 12,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="soft"
    >
      <center>
        <div>
          <Typography
            level="h4"
            component="h1"
            sx={{ py: 2, alignContent: "center", alignItems: "center" }}
          >
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
      </center>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit" sx={{ mt: 1 }} {...(error && { error: true })}>
          Sign In
        </Button>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </form>
      <Divider />
      <Typography
        endDecorator={<Link href="/sign-up"> Sign Up</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
      >
        Don't have an
      </Typography>
    </Sheet>
  );
};

export default RightComponent;
