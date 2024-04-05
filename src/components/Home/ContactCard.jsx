import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import CardActions from "@mui/joy/CardActions";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CountrySelector from "../../components/Profile/CountrySelector";
import {
  ContactEmergencyTwoTone,
  Delete,
  Phone,
  Place,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { EditRounded } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  List,
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
  ListItemButton,
  Modal,
} from "@mui/joy";
import React from "react";
import MyProfile from "../../pages/Profile/Profile";
import AvatarUpload from "../Common/AvatarUpload";
import axios from "axios";

const ContactCard = ({ contact }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleIconButtonClick = () => {
    navigate(`/profile`);
  };

  const handleRemoveContact = async () => {
    try {
      const response = await axios.delete(
        "http://localhost/address_book/php/api_contact/contacts",
        {
          data: { id: contact.id },
        }
      );
      console.log(response.data);
      if (response.data.success) {
      } else {
        console.error("Failed to remove contact");
      }
    } catch (error) {
      console.error("Error removing contact:", error);
    }
  };

  return (
    <Box>
      <List sx={{ mb: -1 }}>
        <ListItemButton
          sx={{ boxShadow: "none" }}
          onClick={() => setOpen(true)}
        >
          <Card
            orientation="horizontal"
            variant="outlined"
            sx={{ width: 700, height: 70 }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar size="sm">
                  <AvatarUpload image={contact.image} />
                </Avatar>
                <div>
                  <Typography level="body-xs">{contact.firstName}</Typography>
                  <Typography level="body-xs">{contact.email}</Typography>
                </div>
              </Box>
            </CardContent>
            <CardContent>
              <Typography fontWeight="md" textColor="success.plainColor">
                {contact.phoneNumber}
              </Typography>
              <Typography level="body-sm">{contact.address}</Typography>
            </CardContent>
            <CardContent>
              <IconButton
                onClick={() => {
                  navigate(`/profile`);
                }}
              >
                <EditRounded />
              </IconButton>
            </CardContent>
            <CardOverflow
              variant="soft"
              color="primary"
              sx={{
                px: 0.2,
                writingMode: "vertical-rl",
                justifyContent: "center",
                fontSize: "xs",
                fontWeight: "xl",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderLeft: "1px solid",
                borderColor: "divider",
              }}
            >
              {/* <Button sx={{ boxShadow: "none" }} onClick={handleRemoveContact}>
                Remove
              </Button> */}
              <IconButton onClick={() => handleRemoveContact()}>
                <Delete />
              </IconButton>
            </CardOverflow>
          </Card>
        </ListItemButton>
      </List>
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
                  {/* <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  /> */}
                  <AvatarUpload image={contact.image} />
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
                    <Input readOnly size="sm" value={contact.firstName} />
                    <Input
                      readOnly
                      size="sm"
                      value={contact.lastName}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>email</FormLabel>
                    <Input
                      readOnly
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      value={contact.email}
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
                      readOnly
                      size="sm"
                      startDecorator={<Place />}
                      value={contact.country_name}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      readOnly
                      size="sm"
                      type="phone"
                      startDecorator={<Phone />}
                      value={contact.phoneNumber}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <div>
                  <FormControl sx={{ display: { sm: "contents" } }}>
                    <FormLabel>Address</FormLabel>
                    <Textarea readOnly value={contact.address} />
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
                  <FormLabel>{contact.firstName}</FormLabel>
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
    </Box>
  );
};

export default ContactCard;
