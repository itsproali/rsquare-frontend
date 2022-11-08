import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  value: Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      Cookies.set("token", JSON.stringify(action.payload), { expires: 7 });
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
