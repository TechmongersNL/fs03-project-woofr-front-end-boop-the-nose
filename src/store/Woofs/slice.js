import { createSlice } from "@reduxjs/toolkit";

export const woofsSlice = createSlice({
  name: "woofs",
  initialState: {
    woofs: [],
    loading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setWoofs: (state, action) => {
      state.loading = false;
      state.woofs = state.woofs.concat(action.payload);
    },
  },
});

export const { startLoading, setWoofs } = woofsSlice.actions;
export default woofsSlice.reducer;
