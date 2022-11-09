import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  value: Cookies.get("images") ? JSON.parse(Cookies.get("images")) : [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.value = action.payload;
      Cookies.set("images", JSON.stringify(state.value));
    },
    deleteImage: (state, action) => {
      const toRemove = [];
      action.payload.forEach((item) => toRemove.push(item.id));
      const filter = state.value.filter((item) => !toRemove.includes(item._id));
      state.value = filter;
      Cookies.set("images", JSON.stringify(state.value));
    },
  },
});

export const { addImage, deleteImage } = imageSlice.actions;

export default imageSlice.reducer;
