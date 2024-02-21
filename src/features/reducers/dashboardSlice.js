import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    anymodal: false,
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    anymodal: (state, { payload }) => {
      state.data = { ...state.data, anymodal: payload };
    },
  },
});

export const { anymodal } = dashboardSlice.actions;

export default dashboardSlice.reducer;
