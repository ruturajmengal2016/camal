import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
interface ISignUpProps {
  handleChange: () => void;
}

const SignUp: React.FunctionComponent<ISignUpProps> = ({ handleChange }) => {
  const signUpfields: string[] = ["Name", "Email", "Password"];
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: {
          boxSizing: "border-box",
          borderRadius: "1.5rem",
          padding: { xs: "1rem", sm: " 1rem 1rem" },
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
        fontWeight="bold"
        textAlign="center"
      >
        Join to Camal
      </DialogTitle>
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          width: "80%",
        }}
      >
        <Button
          fullWidth
          onClick={() => {}}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "1rem",
          }}
          startIcon={<GoogleIcon />}
        >
          Sign up with google
        </Button>
        <Button
          fullWidth
          onClick={() => {}}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "1rem",
          }}
          startIcon={<AppleIcon />}
        >
          Sign up with apple
        </Button>
      </DialogActions>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          width: "80%",
        }}
      >
        {signUpfields.map((field, index) => {
          return (
            <TextField
              fullWidth
              required
              autoComplete="off"
              key={index}
              label={field}
              type={
                field === "Name"
                  ? "text"
                  : field === "Email"
                  ? "email"
                  : "password"
              }
            />
          );
        })}
      </DialogContent>
      <DialogActions sx={{ width: "80%" }}>
        <Button variant="contained" fullWidth sx={{ borderRadius: "1rem" }}>
          Submit
        </Button>
      </DialogActions>
      <DialogContentText variant="caption" fontSize={15}>
        Already have an account? <Link onClick={handleChange}>Sign In</Link>
      </DialogContentText>
    </Dialog>
  );
};

export default SignUp;
