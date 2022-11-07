import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state = state.push(action.payload);
    },
    removeImage: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addImage, removeImage } = imageSlice.actions;

export default imageSlice.reducer;
