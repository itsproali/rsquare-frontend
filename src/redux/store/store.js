import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slices/tokenSlice";
import selectedImageReducer from "../slices/selectedImageSlice";
import imageReducer from "../slices/imageSlice";

const store = configureStore({
  reducer: {
    token: tokenReducer,
    selected_image: selectedImageReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
