import { createSlice } from "@reduxjs/toolkit";

export const woofsSlice = createSlice({
  name: "woofs",
  initialState: {
    woofs: [],
  },
  reducers: {},
});

export const {} = woofsSlice.actions;
export default woofsSlice.reducer;
