import * as React from "react";
import { Box } from "@mui/material";
import Navigation from "./atom/Navigation";
import Home from "../pages/Home";
import About from "../pages/About";
import Guide from "../pages/Guide";

interface IDocumentProps {}

const Document: React.FunctionComponent<IDocumentProps> = () => {
  return (
    <Box height="fit-content">
      <Navigation />
      <Home />
      <Guide />
      <About />
    </Box>
  );
};

export default Document;
