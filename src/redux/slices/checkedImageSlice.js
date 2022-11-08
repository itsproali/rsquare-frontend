import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const checkedImageSlice = createSlice({
  name: "selected_image",
  initialState,
  reducers: {
    addCheckedImage: (state, action) => {
      state.value.push(action.payload);
    },
    removeCheckedImage: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  },
});

export const { addCheckedImage, removeCheckedImage } =
  checkedImageSlice.actions;

export default checkedImageSlice.reducer;
