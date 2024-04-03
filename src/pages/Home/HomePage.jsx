import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import WelcomeMessage from "../../components/Home/WelcomeMessage";
import Box from "@mui/joy/Box";
import { Stack } from "@mui/system";
import ContactCard from "../../components/Home/ContactCard";
import { Phone, Place } from "@mui/icons-material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import axios from "axios";

import {
  Button,
  CardActions,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Textarea,
  iconButtonClasses,
} from "@mui/joy";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  List,
  Typography,
  Avatar,
  IconButton,
  Modal,
} from "@mui/joy";
import CountrySelector from "../../components/Profile/CountrySelector";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/address_book/php/api_contact/contacts"
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const HandleAddNew = () => {
    navigate(`/AddNew`);
  };
  return (
    <div>
      <Header />
      <Box sx={{ marginLeft: "20px", marginTop: "20px", marginRight: "20px" }}>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {console.log(contacts)}
          <WelcomeMessage />
          <Button onClick={HandleAddNew} sx={{ width: "100px" }}>
            Add new
          </Button>
        </Stack>

        <Stack alignItems="center">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </Stack>
        <Box
          alignItems="center"
          className="Pagination-laptopUp"
          sx={{
            pt: 2,
            gap: 1,
            [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            startDecorator={<KeyboardArrowLeft />}
          >
            Previous
          </Button>

          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            endDecorator={<KeyboardArrowRight />}
          >
            Next
          </Button>
        </Box>
      </Box>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
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
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
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
                    <Input disabled size="sm" placeholder="Aljo" />
                    <Input
                      disabled
                      size="sm"
                      placeholder="Biju"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      disabled
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="aljo@gmail.com"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                {/* <div>
                  <CountrySelector />
                </div> */}
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Country</FormLabel>
                    <Input
                      disabled
                      size="sm"
                      type="country"
                      startDecorator={<Place />}
                      placeholder="India"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      disabled
                      size="sm"
                      type="phone"
                      startDecorator={<Phone />}
                      placeholder="9876543210"
                      // defaultValue="9876543210"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Address</FormLabel>
                    <Textarea disabled placeholder="Kakkanad" />
                  </FormControl>
                </div>
              </Stack>
            </Stack>
            <Stack
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
                    <Input disabled size="sm" placeholder="Aljo" />
                    <Input disabled size="sm" placeholder="Biju" />
                  </FormControl>
                </Stack>
              </Stack>

              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  startDecorator={<EmailRoundedIcon />}
                  placeholder="aljo@gmail.com"
                  defaultValue="siriwatk@test.com"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <div>
                <CountrySelector disabled />
              </div>
            </Stack>
            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Stack>
      </Modal>
    </div>
  );
};

export default HomePage;
