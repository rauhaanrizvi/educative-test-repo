import React, { useState } from "react";
import { signIn } from "../helpers/auth";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = user.email.toLowerCase().trim();
    signIn(email, user.password)
      .then(() => {
        setUser({ email: "", password: "" });
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>Fill in the form below to sign in to your account.</p>
          <div style={{ marginBottom: "10px" }}>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={user.email}
              required
              autoComplete="true"
            />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              name="password"
              onChange={handleChange}
              value={user.password}
              type="password"
              required
              autoComplete="true"
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <div>
            {error ? <p>{error}</p> : null}
            <button title="Login" aria-label="Login to DheraGram" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
