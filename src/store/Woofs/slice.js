import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Woofs: "some initial value",
};

export const woofsSlice = createSlice({
  name: "Woofs",
  initialState,
  reducers: {},
});

export const {} = woofsSlice.actions;
export default woofsSlice.reducer;
