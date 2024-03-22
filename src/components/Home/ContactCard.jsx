import { EditRounded } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  List,
  ListDivider,
  ListItem,
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
  ListItemButton,
} from "@mui/joy";
import React from "react";

const ContactCard = () => {
  return (
    <Box>
      <List sx={{ mb: -1 }}>
        <ListItem>
          <Card
            orientation="horizontal"
            variant="outlined"
            sx={{ width: 700, height: 70 }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar size="sm">fghj</Avatar>
                <div>
                  <Typography level="body-xs">aljo</Typography>
                  <Typography level="body-xs">aljo@gmail.com</Typography>
                </div>
              </Box>
            </CardContent>
            <CardContent>
              <Typography fontWeight="md" textColor="success.plainColor">
                (+91)9876543210
              </Typography>
              <Typography level="body-sm">California, USA</Typography>
            </CardContent>
            <CardContent>
              <IconButton>
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
              <ListItemButton>Remove</ListItemButton>
            </CardOverflow>
          </Card>
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactCard;
