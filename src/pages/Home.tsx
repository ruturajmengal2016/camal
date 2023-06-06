import { Box } from "@mui/material";
import Welcome from "../utils/Welcome.png";
import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={Welcome}
        sx={{
          objectFit: "fill",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Home;
