import React, { useState } from "react";
import { signInWithGoogle } from "../firebase";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="ui segment">
      <h1>Sign In</h1>
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="on" />
        </div>
        <button className="ui button blue fluid">SignIn</button>
      </form>
      <button className="ui button red fluid" onClick={signInWithGoogle}>
        <i className="google icon" />
        SignIn With Google
      </button>
    </div>
  );
};

export default SignIn;
