import { Box, Typography, Button } from "@mui/material";
import * as React from "react";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        minHeight: "fit-content",
        background: `linear-gradient(225deg, rgba(63,94,251,1) 0%, rgba(159,82,178,1) 51%, rgba(214,32,32,1) 100%)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          minHeight: "80%",
          minWidth: "80%",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h1"
          fontFamily="inherit"
          sx={{
            color: "lightpink",
            fontSize: {
              xs: "3.5rem",
              md: "5rem",
            },
          }}
        >
          About Us.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
            width: { xs: "90%", sm: "60%" },
            textAlign: "justify",
            color: "#dee2e6",
            fontFamily: "unset",
          }}
        >
          A camal website is one that allows people to sell physical goods,
          services, and digital products over the internet rather than at a
          brick-and-mortar location. Through this website, a business can
          process orders, accept payments, manage shipping and logistics, and
          provide customer service.
        </Typography>
        <Button variant="contained">Learn More.</Button>
      </Box>
    </Box>
  );
};

export default About;
