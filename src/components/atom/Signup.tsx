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
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../config/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
interface ISignUpProps {
  handleChange: () => void;
}

const SignUp: React.FunctionComponent<ISignUpProps> = ({ handleChange }) => {
  const signUpfields: string[] = ["Email", "Password"];
  const navigate = useNavigate();
  const [details, setDetails] = React.useState<{
    Email: string;
    Password: string;
  }>({
    Email: "",
    Password: "",
  });
  async function handleRegister(): Promise<void> {
    try {
      if (details.Email && details.Password) {
        await createUserWithEmailAndPassword(
          auth,
          details.Email,
          details.Password
        ).then(() => handleChange());
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const googleSignup = async () => {
    await signInWithPopup(auth, googleProvider).then(() =>
      navigate("/document")
    );
  };
  const appleSignup = async () => {
    await signInWithPopup(auth, facebookProvider).then(() =>
      navigate("/document")
    );
  };
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
          onClick={googleSignup}
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
          onClick={appleSignup}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: "1rem",
          }}
          startIcon={<FacebookIcon />}
        >
          Sign up with Facebook
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
              name={field}
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
              onChange={(e) => {
                setDetails({
                  ...details,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          );
        })}
      </DialogContent>
      <DialogActions sx={{ width: "80%" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: "1rem" }}
          onClick={handleRegister}
        >
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
