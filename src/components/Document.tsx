import * as React from "react";
import { Box } from "@mui/material";
import Navigation from "./atom/Navigation";

interface IDocumentProps {}

const Document: React.FunctionComponent<IDocumentProps> = () => {
  return (
    <Box height="fit-content">
      <Navigation />
    </Box>
  );
};

export default Document;
