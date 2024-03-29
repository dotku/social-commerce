import React from "react";
import firebase from "firebase/app";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useSelector } from "react-redux";
import { Button, Container, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export default function Login({ uiConfigNew = {} }) {
  const uiConfig = Object.assign(
    {
      signInSuccessUrl: "#/login",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          // scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
        },
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
    },
    uiConfigNew
  );
  const user = useSelector((state) => state.auth);
  const redirect = new URLSearchParams(window.location.search.substring(1)).get(
    "redirect"
  );
  if (user) {
    return <Redirect to={{ pathname: redirect || "/" }} />;
  }
  return (
    <Container className="main">
      {!user ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <>
          <Typography>Welcome, {user.displayName}!</Typography>
          <Button href="#/logout">Logout</Button>
        </>
      )}
    </Container>
  );
}
