import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInAndSignUp = (props) => {
  return (
    <div className="ui grid">
      <div className="eight wide column">
        <SignIn />
      </div>
      <div className="eight wide column">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUp;
