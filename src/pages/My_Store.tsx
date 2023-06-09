import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import SaveIcon from "@mui/icons-material/Save";
import { v4 as uuidv4 } from "uuid";
interface IMystoreProps {}

const Mystore: React.FunctionComponent<IMystoreProps> = () => {
  const [state, setChange] = React.useState<string>("product");
  const [deleteId, setDeleteId] = React.useState<string>("");
  const [product, setProduct] = React.useState<{
    id: string;
    name: string;
    price: string;
  }>({ id: uuidv4().slice(0, 8), name: "", price: "" });
  const [list, setList] = React.useState<any[]>([]);
  return (
    <Box
      sx={{
        height: "100vh",
        minHeight: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Storeheader />
      <Box
        sx={{
          height: "90%",
          width: "100%",
          marginBottom: "1.5rem",
        }}
      >
        <Box
          height="70%"
          width="100%"
          sx={{
            overflowY: "auto",
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            gap: "1rem",
            padding: "0.2rem",
            boxSizing: "border-box",
          }}
        >
          <Typography
            component="div"
            minHeight="100%"
            sx={{
              border: "1px solid red",
              display: "flex",
              width: {
                xs: "100%",
                md: "70%",
              },
              flexDirection: "column",
              padding: "0.2rem",
              height: "100%",
            }}
          >
            <Box height="15%">
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  backgroundColor: "lightgreen",
                  padding: "1rem 0.5rem",
                  position: "sticky",
                  top: 0,
                }}
              >
                <Typography variant="h6">Product id</Typography>
                <Typography variant="h6">Product name</Typography>
                <Typography variant="h6">price</Typography>
              </Typography>
            </Box>
            <Box
              height="75%"
              sx={{
                overflowY: "auto",
              }}
            >
              {list.map((ele, index) => {
                return (
                  <Typography
                    component="div"
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      backgroundColor: "whitesmoke",
                      padding: "0.5rem 0.5rem",
                      borderBottom: "1px solid black",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      width="33.33%"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      {ele?.id}
                    </Typography>
                    <Typography
                      width="33.33%"
                      variant="h6"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        overflow: "auto",
                        height: "fit-content",
                      }}
                    >
                      {ele?.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      width="33.33%"
                      display="flex"
                      justifyContent="end"
                      alignItems="center"
                    >
                      ${ele?.price}
                    </Typography>
                  </Typography>
                );
              })}
            </Box>
          </Typography>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: "lightcoral",
              padding: "0.3rem",
              height: "30%",
              width: {
                xs: "100%",
                md: "30%",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quod assumenda provident similique illo distinctio cum ipsam quaerat
            ipsa, dolores culpa recusandae atque magnam vitae iure itaque
            quisquam sapiente amet?
          </Typography>
        </Box>
        <Box
          height="30%"
          component="div"
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            minHeight: "fit-content",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: {
                xs: "100%",
                sm: "50%",
              },
            }}
          >
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: state === "product" ? "red" : "",
              }}
              name="product"
              onFocus={(e) => {
                setChange(e.target.name);
              }}
            >
              + Add product
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: state === "update" ? "red" : "",
              }}
              name="update"
              onFocus={(e) => {
                setChange(e.target.name);
              }}
            >
              Update product
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: state === "delete" ? "red" : "",
              }}
              name="delete"
              onFocus={(e) => {
                setChange(e.target.name);
              }}
            >
              Delete product
            </Button>
          </Box>
          {state === "product" ? (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField
                required
                type="text"
                autoComplete="off"
                variant="outlined"
                label="product name"
                name="name"
                value={product.name}
                onChange={(e) => {
                  setProduct({ ...product, [e.target.name]: e.target.value });
                }}
              />
              <TextField
                required
                type="number"
                autoComplete="off"
                variant="outlined"
                label="product price"
                name="price"
                value={product.price}
                onChange={(e) => {
                  setProduct({ ...product, [e.target.name]: e.target.value });
                }}
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                }}
                onClick={() => {
                  setList([...list, product]);
                  setProduct({
                    id: uuidv4().slice(0, 8),
                    name: "",
                    price: "",
                  });
                }}
              >
                Add product
              </Button>
            </Box>
          ) : state === "update" ? (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <TextField
                required
                autoComplete="off"
                variant="outlined"
                label="product id"
              />
              <TextField
                required
                autoComplete="off"
                variant="outlined"
                label="product price"
              />
              <TextField
                required
                autoComplete="off"
                variant="outlined"
                label="product price"
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                }}
              >
                update product
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <TextField
                required
                autoComplete="off"
                variant="outlined"
                label="product id"
                value={deleteId}
                onChange={(e) => {
                  setDeleteId(e.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                }}
                onClick={() => {
                  const newList = list.filter((ele) => {
                    return ele.id !== deleteId;
                  });
                  setList(newList);
                  setDeleteId("");
                }}
              >
                delete product
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const Storeheader: React.FunctionComponent = () => {
  const [focus, setFocus] = React.useState<string>(
    localStorage.getItem("storeName") || ""
  );
  return (
    <Box
      sx={{
        height: "10%",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        boxSizing: "border-box",
        paddingLeft: "1rem",
        gap: "0.5rem",
        position: "sticky",
        top: 0,
      }}
    >
      <StoreIcon sx={{ fontSize: "2.2rem", color: "palevioletred" }} />
      <TextField
        autoComplete="off"
        placeholder="Add your store name"
        sx={{
          "& fieldset": {
            border: "none",
            width: "50%",
          },
          input: {
            "&::placeholder": {
              fontSize: {
                xs: "1.2rem",
                md: "2rem",
              },
            },
          },
        }}
        type="text"
        size="small"
        value={focus}
        onChange={(e) => {
          setFocus(e.target.value);
        }}
        InputProps={{
          sx: {
            fontSize: "2rem",
            fontFamily: "monospace",
            color: "lightcoral",
          },
          endAdornment: (
            <InputAdornment position="end">
              {focus && (
                <IconButton
                  onClick={() => {
                    localStorage.setItem("storeName", focus);
                  }}
                >
                  <SaveIcon color="success" />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Mystore;
