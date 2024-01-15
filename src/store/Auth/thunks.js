import { login, signUp, startLoading } from "./slice";

import { API_URL } from "../../lib/api";
import axios from "axios";

export const signupThunk = (email, password, navigate) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(`${API_URL}/owners`, {
        email,
        password,
      });

      console.log(`${API_URL}/signup`);
      const data = response.data.email;
      if (data) {
        dispatch(signUp());
        navigate("/login");
      }
    } catch (e) {
      alert("Please try a different email address or password");
    }
  };
};

export const loginThunk = (email, password, navigate) => {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());

      const response = await axios.post(`${API_URL}/owners/login`, {
        email,
        password,
      });

      const token = response.data.access_token;
      if (token) {
        dispatch(login(token));
        navigate("/feed");
      }
    } catch (e) {
      alert("Please try a different email address or password");
    }
  };
};
