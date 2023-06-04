import * as React from "react";
import SignUp from "./atom/Signup";
import Login from "./atom/Login";

interface IAuthenticationProps {}

const Authentication: React.FunctionComponent<IAuthenticationProps> = () => {
  const [change, setChange] = React.useState<boolean>(true);
  function handleChange() {
    setChange(!change);
  }
  console.log(change);
  return change ? (
    <SignUp handleChange={handleChange} />
  ) : (
    <Login handleChange={handleChange} />
  );
};

export default Authentication;
