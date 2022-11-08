import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// const initialState = Cookies.get("images")
//   ? JSON.parse(Cookies.get("images"))
//   : [];
const initialState = [];

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      console.log(action.payload);
      for (const image of action.payload) {
        state.push(image);
      }
      Cookies.set("images", state)
    },
  },
});

export const { addImage } = imageSlice.actions;

export default imageSlice.reducer;
