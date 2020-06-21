import React, { useContext } from "react";
import SignInAndSignUp from "./SignInAndSignUp";
import CurrentUser from "./CurrentUser";
import { AuthContext } from "../Providers/AuthProvider";

const Authenticate = (props) => {
  const user = useContext(AuthContext);
  return <div>{user ? <CurrentUser user={user} /> : <SignInAndSignUp />}</div>;
};

export default Authenticate;
