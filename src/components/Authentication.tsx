import * as React from "react";
import SignUp from "./atom/Signup";
import Login from "./atom/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

interface IAuthenticationProps {}

const Authentication: React.FunctionComponent<IAuthenticationProps> = () => {
  const [change, setChange] = React.useState<boolean>(true);
  function handleChange() {
    setChange(!change);
  }
  const navigate = useNavigate();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/document");
      }
    });
  }, []);
  return change ? (
    <SignUp handleChange={handleChange} />
  ) : (
    <Login handleChange={handleChange} />
  );
};

export default Authentication;
