import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyimagedata: [],
};

export const clickedHistoryImageSlice = createSlice({
  name: "clickedTexttoImage",
  initialState,
  reducers: {
    getHistoryImage: (state, { payload }) => {
      state.historyimagedata = payload;
    },
  },
});

export const { getHistoryImage } = clickedHistoryImageSlice.actions;

export default clickedHistoryImageSlice.reducer;
