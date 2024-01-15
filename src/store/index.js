import { configureStore } from "@reduxjs/toolkit";
import woofsReducer from "./Woofs/slice";

const store = configureStore({
  reducer: {
    woofs: woofsReducer,
    // owners: will go here
  },
});

export default store;
