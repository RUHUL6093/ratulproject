import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseconfig from "./firebase.config";
firebase.initializeApp(firebaseconfig);

const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var token = credential.accessToken;

        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In </button>
    </div>
  );
};
export default Login;
