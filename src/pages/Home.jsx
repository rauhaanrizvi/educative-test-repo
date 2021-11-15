// import { getAuth } from "@firebase/auth";
import React from "react";
import { auth } from "../services/firebase.js";
// import { app } from "../services/firebase";

function Home() {
  // const auth = getAuth(app);
  const email = auth().currentUser.email;

  const handleSignOut = () => {
    auth().signOut();
  };

  return <div style={{ marginTop: "1rem" }}>I DEY MY HOUSE</div>;
}

export default Home;
