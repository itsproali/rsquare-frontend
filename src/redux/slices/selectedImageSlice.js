import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const selectedImageSlice = createSlice({
  name: "selected_image",
  initialState,
  reducers: {
    addSelectedImage: (state, action) => {
      state = state.push(action.payload);
    },
    removeSelectedImage: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearSelectedImage: (state) => {
      console.log("clearing images");
      state.splice(0, state.length)
    },
  },
});

export const { addSelectedImage, removeSelectedImage, clearSelectedImage } =
  selectedImageSlice.actions;

export default selectedImageSlice.reducer;
