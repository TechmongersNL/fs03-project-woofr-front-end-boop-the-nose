import "./loginPage.css";

import React, { useState } from "react";

import { loginThunk } from "../store/Auth/thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(loginThunk(email, password, navigate));
  };

  return (
    <div className="loginPage">
      <div className="backgroundImage"></div>
      <div className="contentRectangle"></div>
      <div className="loginText">Woofr</div>
      <div className="subtext">Unleash Your Inner Dog</div>
      <h1 className="text">Log in</h1>
      <h3 className="text2">Woof!</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className="loginEmail"
            type="email"
            placeholder="owner's email"
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
            placeholder="password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </label>
        <br />
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
