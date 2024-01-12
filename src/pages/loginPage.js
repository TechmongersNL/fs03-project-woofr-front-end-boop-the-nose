import React, { useState } from "react";
import "./loginPage.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="loginPage">
      <div className="backgroundImage"></div>
      <div className="contentRectangle"></div>
      <div className="loginText">Woofr</div>
      <div className="subtext">Unleash Your Inner Dog</div>
      <h1>Log in</h1>
      <h3>Woof!</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
          className="loginEmail"
            type="email"
            value={email}
            onChange={handleEmailInput}
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            className="loginPassword"
            type="password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </label>
        <br />
        <button className="loginButton" type="submit">Log In</button>
      </form>
    </div>
  );
}
