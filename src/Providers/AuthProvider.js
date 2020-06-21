import React, { createContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({ uid: snapshot.id, ...snapshot.data() });
        });
      }
      setUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
