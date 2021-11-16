import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ChatRoom from "../components/ChatRoom";
import { auth } from "../services/firebase.js";

function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(auth().currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {};
  }, []);

  const handleSignOut = () => {
    auth().signOut();
  };

  console.log(user);

  return (
    <div style={{ marginTop: "1rem", display: "flex" }}>
      {!user ? (
        <div>
          <Signup />
          <Login />
        </div>
      ) : (
        <div>
          {" "}
          <div className="main" style={{ display: "flex" }}>
            <ChatRoom user={user} />
            {user ? (
              <h3>currently signed in as {user.email} </h3>
            ) : (
              <h3>Not currently signed in</h3>
            )}
            <button onClick={handleSignOut} style={{ alignSelf: "flex-start" }}>
              Signout
            </button>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Home;
