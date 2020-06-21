import React, { useEffect, useState, createContext } from "react";
import { collectIdsAndDocs } from "../utils";
import { firestore } from "../firebase";

export const PostContext = createContext();

const PostProvider = (props) => {
  const initial_state = { posts: [] };
  const [state, setState] = useState(initial_state);
  useEffect(() => {
    const unsubscribeFromFirestore = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      setState({ posts });
    });
    return () => {
      unsubscribeFromFirestore();
    };
  }, []);
  const { posts } = state;
  return <PostContext.Provider value={posts}>{props.children}</PostContext.Provider>;
};

export default PostProvider;
