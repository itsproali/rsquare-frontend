import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("token")
  ? JSON.parse(Cookies.get("token"))
  : "";

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state = action.payload;
      Cookies.set("token", JSON.stringify(action.payload));
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
