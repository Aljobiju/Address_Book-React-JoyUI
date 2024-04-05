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
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
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
import { useLocation } from "react-router-dom";
import AvatarUpload from "../../components/Common/AvatarUpload";
import axios from "axios";

export default function MyProfile() {
  const { state } = useLocation();
  const { contact } = state;
  const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState(contact.firstName);
  const [lastName, setLastName] = React.useState(contact.lastName);
  const [email, setEmail] = React.useState(contact.email);
  const [phone, setPhone] = React.useState(contact.phoneNumber);
  const [address, setAddress] = React.useState(contact.address);
  const [selectedCountry, setSelectedCountry] = React.useState(
    contact.country_name
  );
  const [image, setImage] = React.useState(contact.image);

  const handleCountryChange = (country) => {
    setSelectedCountry(country ? country.label : selectedCountry);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send form data to the backend
      const response = await axios.put(
        "http://localhost/address_book/php/api_contact/updatecontact",
        {
          id: contact.id,
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
        console.log("Contact edited successfully:", response.data.message);
        navigate("/Home");
      } else {
        console.error("Failed to edit contact:", response.data.message);
        // Handle error here
      }
    } catch (error) {
      console.error("Error editing contact:", error.message);
      // Handle error here
    }
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      {/* <Header /> */}
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
            {console.log("selectedCountry", contact.country_name)}
            <Typography level="title-md">Edit Contact</Typography>
            {/* <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography> */}
          </Box>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                >
                  {/* <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                /> */}
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
                    <Input
                      size="sm"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                      size="sm"
                      placeholder="Last name"
                      value={lastName}
                      sx={{ flexGrow: 1 }}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // defaultValue="siriwatk@test.com"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <div>
                  <CountrySelector
                    onChange={handleCountryChange}
                    selectedCountry={contact.country_name}
                  />
                </div>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      size="sm"
                      type="phone"
                      startDecorator={<Phone />}
                      placeholder="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      // defaultValue="9876543210"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Address</FormLabel>
                    <Textarea
                      placeholder="City,Town"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>
                </div>
              </Stack>
            </Stack>

            {/* <Stack
              direction="column"
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
            >
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={1}>
                  <AspectRatio
                    ratio="1"
                    maxHeight={108}
                    sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                      srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
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
                      left: 85,
                      top: 180,
                      boxShadow: "sm",
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: "flex-column",
                        md: "flex-row",
                      },
                      gap: 2,
                    }}
                  >
                    <Input size="sm" placeholder="First name" />
                    <Input size="sm" placeholder="Last name" />
                  </FormControl>
                </Stack>
              </Stack>

              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  startDecorator={<EmailRoundedIcon />}
                  placeholder="email"
                  defaultValue="siriwatk@test.com"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <div>
                <CountrySelector
                  onChange={handleCountryChange}
                  selectedCountry={contact.country_name}
                />
              </div>
              <div>
                <FormControl sx={{ display: { sm: "contents" } }}>
                  <FormLabel>Timezone</FormLabel>
                  <Select
                    size="sm"
                    startDecorator={<AccessTimeFilledRoundedIcon />}
                    defaultValue="1"
                  >
                    <Option value="1">
                      Indochina Time (Bangkok){" "}
                      <Typography textColor="text.tertiary" ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                    <Option value="2">
                      Indochina Time (Ho Chi Minh City){" "}
                      <Typography textColor="text.tertiary" ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div>
            </Stack> */}
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
                  submit
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
