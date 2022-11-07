import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slices/tokenSlice";
import imageReducer from "../slices/imageSlice";

const store = configureStore({
  reducer: { token: tokenReducer, images: imageReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
