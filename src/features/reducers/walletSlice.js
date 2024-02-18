import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    address: "",
    name: "nitin negi",
  },
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    getwallet: (state, payload) => {
      state.data = payload;
    },
  },
});

export const { getwallet } = walletSlice.actions;

export default walletSlice.reducer;
