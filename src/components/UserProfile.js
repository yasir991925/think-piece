import React, { useState, useRef } from "react";
import { auth, firestore, storage } from "../firebase";

const UserProfile = (props) => {
  const initialState = { displayName: "" };
  const [state, setState] = useState(initialState);
  const imageInput = useRef(null);

  const uid = auth.currentUser.uid;

  const userRef = firestore.doc(`users/${uid}`);

  const getFile = () => imageInput && imageInput.current.files[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { displayName } = state;
    if (displayName) {
      userRef.update({ displayName });
    }
    const file = getFile();
    if (file) {
      storage
        .ref()
        .child("user-profiles")
        .child(uid)
        .child(file.name)
        .put(file)
        .then((res) => res.ref.getDownloadURL())
        .then((photoURL) => userRef.update({ photoURL }));
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Display Name</label>
          <input value={state.displayName} onChange={(e) => setState({ ...state, displayName: e.target.value })} />
        </div>
        <div className="field">
          <input type="file" ref={imageInput} onChange={handleChange} />
        </div>
        <button className="ui update button fluid orange" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
