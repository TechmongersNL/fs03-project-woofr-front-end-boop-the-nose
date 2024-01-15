import { setWoofs, startLoading } from "./slice";

import { API_URL } from "../../lib/api";
import axios from "axios";

export const getWoofsThunk = (page = 1) => {
  return async function thunk(dispatch, getState) {
    try {
      const { auth } = getState();

      if (!auth.token) {
        alert("You must be logged in to view woofs");
        return;
      }

      dispatch(startLoading());

      const limit = 10;
      const skip = (page - 1) * limit;

      const response = await axios.get(
        `${API_URL}/woofs?limit=${limit}&skip=${skip}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      const { data } = response;
      if (data) {
        dispatch(setWoofs(data));
      }
    } catch (e) {
      alert("Error loading woofs");
    }
  };
};
