import "./SignUp.css";

import React, { useState } from "react";

import { signupThunk } from "../store/Auth/thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(isSignedUp);

    dispatch(signupThunk(email, password, navigate));
  }

  return (
    <div className="SignUpPage">
      <div className="backgroundImageSignup"></div>
      <div className="contentRectangle"></div>
      <div className="signupText">Woofr</div>
      <div className="subtext">Unleash Your Inner Dog</div>
      <h1 className="text">Sign Up</h1>
      <h3 className="text2">create your Woofr account</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            className="signupEmail"
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
            className="signupPassword"
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordInput}
            required
          />
        </label>
        <br />
        <button className="signupButton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
