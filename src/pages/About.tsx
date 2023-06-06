import { Box, Typography } from "@mui/material";
import * as React from "react";
import VerticalLinearStepper from "../components/atom/Stepper";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <Box
      sx={{
        padding: "1rem 0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "fit-content",
        background: `linear-gradient(236deg, rgba(215,47,121,1) 46%, rgba(53,54,200,1) 46%, rgba(148,187,233,1) 100%)`,
      }}
    >
      <Typography
        variant="h3"
        fontFamily="inherit"
        color="lightgreen"
      >
        Let's start your business
      </Typography>
      <VerticalLinearStepper />
    </Box>
  );
};

export default About;
