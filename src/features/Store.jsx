import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./reducers/walletSlice.js";
import dashboardSlice from "./reducers/dashboardSlice.js";

const store = configureStore({
  reducer: {
    walletData: walletSlice,
    dashboarddata: dashboardSlice,
  },
});

export default store;
