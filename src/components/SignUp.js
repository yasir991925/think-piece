import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [displayName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      const additional_info = { displayName };
      await createUserProfileDocument(user, additional_info);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ui segment">
      <h1>Sign Up</h1>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input value={displayName} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="on" />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} autoComplete="on" />
        </div>
        <button className="ui button blue fluid" onClick={onSubmit}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
