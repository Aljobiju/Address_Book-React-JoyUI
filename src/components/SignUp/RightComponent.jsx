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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        "http://localhost/address_book/php/api_signup/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      if (response.data.success) {
        console.log("Signup successful:", response.data.message);

        navigate("/");
      } else {
        console.error("Signup failed:", response.data.message);
        setError("Signup failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Signup failed:", error.response.data);
      setError("Signup failed. Please try again later.");
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
            sx={{ py: 0, alignContent: "center", alignItems: "center" }}
          >
            <b>Welcome!</b>
          </Typography>
          {/* <Typography level="body-sm">Sign Up here.</Typography> */}
        </div>
      </center>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="name"
            value={name} // Uncommented value prop
            placeholder="john doe"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
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
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            name="confirmpassword"
            type="confirmpassword"
            value={confirmpassword} // Uncommented value prop
            placeholder=" Re-enter Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormControl>
        <center>
          <Button type="submit" sx={{ mt: 1 }} {...(error && { error: true })}>
            Sign Up
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
        endDecorator={<Link href="/"> Sign In</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
      >
        Already Signed up?
      </Typography>
    </Sheet>
  );
};

export default RightComponent;
