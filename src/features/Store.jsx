import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./reducers/walletSlice.js";

const store = configureStore({
  reducer: {
    walletData: walletSlice,
  },
});

export default store;
