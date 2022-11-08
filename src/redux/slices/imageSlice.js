import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("images")
  ? JSON.parse(Cookies.get("images"))
  : [];

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state = action.payload;
      Cookies.set("images", JSON.stringify(state));
    },
  },
});

export const { addImage } = imageSlice.actions;

export default imageSlice.reducer;
