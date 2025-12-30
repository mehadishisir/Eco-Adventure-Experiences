import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext } from "react";
import auth from "../firebase/Firebase.init";
export const authContext = createContext(null);
// console.log(auth);

const AuthProvider = ({ children }) => {
  const Provider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, Provider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const authInfo = { registerUser, loginUser, logoutUser, googleLogin };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
