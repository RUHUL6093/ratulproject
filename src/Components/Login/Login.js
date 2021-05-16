import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseconfig from "./firebase.config";

const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
  console.log(result)
  });

  return (
    <div>
      <button onClick={handleSignIn}>Sign In </button>
    </div>
  );
};
export default Login;
