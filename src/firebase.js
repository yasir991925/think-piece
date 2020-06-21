import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUdyk2_M7jak3JxP0u_CeDm2toMoInLFs",
  authDomain: "think-piece-5022d.firebaseapp.com",
  databaseURL: "https://think-piece-5022d.firebaseio.com",
  projectId: "think-piece-5022d",
  storageBucket: "think-piece-5022d.appspot.com",
  messagingSenderId: "757243875370",
  appId: "1:757243875370:web:7646c933ccbaa2d095f353",
  measurementId: "G-0WKEFGDD8B",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const storage = firebase.storage();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, photoURL, createdAt, ...additionalData });
    } catch (err) {
      console.log("Error creating a user");
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return await firestore.collection("users").doc(uid);
  } catch (err) {
    console.log(err);
  }
};
