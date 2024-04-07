import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Typography,
} from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import axios from "axios"; // Correct import
import { useNavigate } from "react-router-dom";

const RightComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check for existing user data in localStorage on component mount
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost/address_book/php/api_login/login",
        {
          email: email,
          password: password,
        },
        
      );

      if (response.data.success) {
        console.log("Login successful:", response.data.message);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        localStorage.setItem("authToken", response.data.token);
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
        mx: "auto", // margin left & right
        marginLeft: 0,
        marginRight: "auto",
        my: 12, // margin top & bottom
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
            value={email} // Uncommented value prop
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
            value={password} // Uncommented value prop
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <center>
          <Button type="submit" sx={{ mt: 1 }} {...(error && { error: true })}>
            Sign In
          </Button>
        </center>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </form>
      <Divider />
      <Typography
        endDecorator={<Link href="/SignUp"> Sign Up</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
      >
        Don&apos;t have an account?
      </Typography>
    </Sheet>
  );
};

export default RightComponent;
