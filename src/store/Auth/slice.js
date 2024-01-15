import { createSlice } from "@reduxjs/toolkit";

export const AUTH_STORAGE_KEY = "auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: null,
    token: localStorage.getItem(AUTH_STORAGE_KEY) || null,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    signUp: (state) => {
      state.loading = false;
    },
    login: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      localStorage.setItem(AUTH_STORAGE_KEY, action.payload);
    },
  },
});

export const { startLoading, signUp, login } = authSlice.actions;
export default authSlice.reducer;
