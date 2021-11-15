import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { auth } from "./services/firebase.js";
// import { app } from "./services/firebase";

/**Higher order component for Private pages */
function PrivateRoute({ children, auth }) {
  return auth ? children : <Navigate to="/login" />;
}

/**Higher order component for public pages */
function PublicRoute({ children, auth }) {
  return !auth ? children : <Navigate to="/home" />;
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  // const auth = getAuth(app);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute auth={authenticated}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute auth={authenticated}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute auth={authenticated}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, {useState} from "react";
// import Signup from './Signup'
// import Login from './Login'
// import Home from './Home'
// import {
//   BrowserRouter as Router,
//   Navigate,
//   Routes,
//   Route,
// } from "react-router-dom";

// /**Higher order component for Private pages */
// function PrivateRoute({ children, auth }) {
//   return auth ? children : <Navigate to="/login" />;
// }

// /**Higher order component for public pages */
// function PublicRoute({ children, auth }) {
//   return !auth ? children : <Navigate to="/home" />;
// }

// function App() {
//   const [authenticated, setAuthenticated] = useState(false);

//   //once i begin to add conditional routing, the webapp begins to malfunction.
//   //thats the beginning of my problems, I guess.

//   return (
//     <div className="App">

//        <Router>
//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>

//    </div>
//   );
// }

// export default App;
