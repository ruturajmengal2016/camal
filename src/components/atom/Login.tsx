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
import FacebookIcon from "@mui/icons-material/Facebook";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
interface ILoginProps {
  handleChange: () => void;
}

const Login: React.FunctionComponent<ILoginProps> = ({ handleChange }) => {
  const [text, setText] = React.useState<string>("Next");
  const navigate = useNavigate();
  const [details, setDetails] = React.useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
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
        Sign in to Camal
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
          onClick={async () => {
            await signInWithPopup(auth, googleProvider)
              .then(() => navigate("/document"))
              .catch((error) => console.log(error));
          }}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "1rem",
          }}
          startIcon={<GoogleIcon />}
        >
          Sign In with google
        </Button>
        <Button
          fullWidth
          onClick={async () => {
            await signInWithPopup(auth, facebookProvider).then(() =>
              navigate("/document")
            );
          }}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "1rem",
          }}
          startIcon={<FacebookIcon />}
        >
          Sign In with Facebook
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
        {text === "Next" ? (
          <TextField
            name="email"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            fullWidth
            required
            value={details.email}
            autoComplete="off"
            label="Phone,email or username"
            type="text"
          />
        ) : (
          <TextField
            name="password"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            fullWidth
            required
            value={details.password}
            placeholder="Enter your password"
            autoComplete="off"
            label="Password"
            type="password"
          />
        )}
      </DialogContent>
      <DialogActions sx={{ width: "80%" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: "1rem" }}
          onClick={async () => {
            if (text === "Next") {
              setText("Submit");
            } else if (details.email && details.password) {
              console.log(details);
              await signInWithEmailAndPassword(
                auth,
                details.email,
                details.password
              )
                .then(() => navigate("/document"))
                .catch((error) => console.log(error.message));
            }
          }}
        >
          {text === "Next" ? "Next" : "Submit"}
        </Button>
      </DialogActions>
      <DialogContentText variant="caption" fontSize={15}>
        Don't have an account? <Link onClick={handleChange}>Sign Up</Link>
      </DialogContentText>
    </Dialog>
  );
};

export default Login;
