import React, { useState, useContext } from "react";
import { firestore } from "../firebase";
import { AuthContext } from "../Providers/AuthProvider";

const CreatePost = (props) => {
  const user = useContext(AuthContext);
  const initial_state = {
    title: "",
    content: "",
  };

  const [state, setState] = useState(initial_state);
  const addPost = async () => {
    if (state.title === "" || state.content === "") return;
    const { displayName, uid, email, photoURL } = user;
    const new_post = { ...state, stars: 0, createdAt: new Date(), user: { displayName, uid, email, photoURL } };
    await firestore.collection("posts").add(new_post);
    setState(initial_state);
  };

  return (
    <div className="ui stacked segment">
      <div className="ui form">
        <h1>Create Post</h1>
        <div className="field">
          <label>Title</label>
          <input value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} />
        </div>
        <div className="field">
          <label>Description</label>
          <input value={state.content} onChange={(e) => setState({ ...state, content: e.target.value })} />
        </div>
        <button className="ui button orange fluid" onClick={addPost}>
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
