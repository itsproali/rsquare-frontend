import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const selectedImageSlice = createSlice({
  name: "selected_image",
  initialState,
  reducers: {
    addSelectedImage: (state, action) => {
      state.value.push(action.payload);
    },
    removeSelectedImage: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    clearSelectedImage: (state) => {
      state.value.splice(0, state.length);
    },
  },
});

export const { addSelectedImage, removeSelectedImage, clearSelectedImage } =
  selectedImageSlice.actions;

export default selectedImageSlice.reducer;
