import * as React from "react";
import DocHeader from "./atom/DocHeader";
import { Box } from "@mui/material";

interface IDocumentProps {}

const Document: React.FunctionComponent<IDocumentProps> = () => {
  return (
    <Box height="100vh">
      <DocHeader />
    </Box>
  );
};

export default Document;
