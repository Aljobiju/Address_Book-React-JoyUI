import React from "react";
import Header from "../../components/Common/Header";
import WelcomeMessage from "../../components/Home/WelcomeMessage";
import Box from "@mui/joy/Box";
import { Stack } from "@mui/system";
import ContactCard from "../../components/Home/ContactCard";
import { Button, Sheet, iconButtonClasses } from "@mui/joy";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
        <WelcomeMessage />
        <Stack alignItems="center">
          {Array.from({ length: 5 }).map((_, index) => (
            <ContactCard key={index} />
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
    </div>
  );
};

export default HomePage;
