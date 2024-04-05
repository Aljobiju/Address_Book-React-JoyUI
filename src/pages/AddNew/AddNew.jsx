import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CountrySelector from "../../components/Profile/CountrySelector";
import { Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarUpload from "../../components/Common/AvatarUpload";

export default function AddNew() {
  const navigate = useNavigate();

  // State variables for form inputs
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country ? country.label : selectedCountry);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send form data to the backend
      const response = await axios.post(
        "http://localhost/address_book/php/api_contact/contacts",
        {
          userId: 1253,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          address: address,
          selectedCountry: selectedCountry,
          image: image,
        }
      );

      if (response.data.success) {
        console.log("Contact added successfully:", response.data.message);
        navigate("/Home");
      } else {
        console.error("Failed to add contact:", response.data.message);
        // Handle error here
      }
    } catch (error) {
      console.error("Error adding contact:", error.message);
      // Handle error here
    }
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the
              networks.
            </Typography>
          </Box>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              {/* Input fields for personal info */}
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                >
                  <AvatarUpload image={image} setImage={setImage} allowUpload />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 100,
                    top: 170,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    {/* Input fields for first name and last name */}
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      size="sm"
                      placeholder="First name"
                    />
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      size="sm"
                      placeholder="Last name"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                {/* Input field for email */}
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="Email"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                {/* CountrySelector component */}
                <div>
                  <CountrySelector onChange={handleCountryChange} />
                  {/* <p>Selected Country: {selectedCountry ? selectedCountry.label : 'None'}</p> */}
                </div>
                {/* Input field for phone */}
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      size="sm"
                      type="phone"
                      startDecorator={<Phone />}
                      placeholder="Phone"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                {/* Input field for address */}
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Address</FormLabel>
                    <Textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="City, Town"
                    />
                  </FormControl>
                </div>
              </Stack>
            </Stack>
            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  onClick={() => {
                    navigate(`/Home`);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" variant="solid">
                  Add
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
