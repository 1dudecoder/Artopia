import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ITIclickdata: [],
};

export const clickedImagetopImageSlice = createSlice({
  name: "clickedImage",
  initialState,
  reducers: {
    getImagetoImage: (state, { payload }) => {
      state.ITIclickdata = payload;
    },
  },
});

export const { getImagetoImage } = clickedImagetopImageSlice.actions;

export default clickedImagetopImageSlice.reducer;
