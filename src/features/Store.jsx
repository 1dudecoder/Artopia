import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./reducers/walletSlice.js";
import dashboardSlice from "./reducers/dashboardSlice.js";
import clickedImagetopImageSlice from "./reducers/clickedImagetoImageSlice.js";

const store = configureStore({
  reducer: {
    walletData: walletSlice,
    dashboarddata: dashboardSlice,
    ITIdata: clickedImagetopImageSlice,
  },
});

export default store;
