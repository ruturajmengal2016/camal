import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import AccountMenu from "./ProfileIcon";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function Navigation() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const routes: string[] = ["Home", "About", "My store"];
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 2 }}>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{
            p: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={toggleDrawer("top", true)}
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              flex: {
                xs: 0.6,
                sm: 0.1,
              },
              fontFamily: "monospace",
              fontWeight: "bold",
              color: "#ff5722",
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
              wordSpacing: "1.5rem",
              gap: {
                xs: "0.5rem",
                sm: "0rem",
              },
            }}
          >
            <StoreMallDirectoryIcon
              sx={{ fontSize: "2rem", cursor: "pointer" }}
            />{" "}
            Camal
          </Typography>
          <TemporaryDrawer toggleDrawer={toggleDrawer} state={state} />
          <Box
            sx={{
              alignSelf: "center",
              flex: 3,
              display: { xs: "none", sm: "flex" },
              gap: "1.5rem",
            }}
          >
            {routes.map((route, ind) => {
              return (
                <Link
                  key={ind}
                  to={
                    route === "Home"
                      ? "/document"
                      : route === "About"
                      ? "/about"
                      : "/store"
                  }
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {route}
                </Link>
              );
            })}
          </Box>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

type Anchor = "top";

function TemporaryDrawer({ toggleDrawer, state }: any) {
  const navigate: NavigateFunction = useNavigate();
  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { title: "Home", icon: <HomeIcon /> },
          { title: "About", icon: <InfoIcon /> },
          { title: "My store", icon: <StorefrontIcon /> },
        ].map((text) => (
          <ListItem key={text.title} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(
                  text.title === "Home"
                    ? "/document"
                    : text.title === "About"
                    ? "/about"
                    : "/store"
                );
              }}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("top", true)}>top</Button>
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
