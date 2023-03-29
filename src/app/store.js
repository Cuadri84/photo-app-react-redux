import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "../features/favoritePhotos/favoritePhotosSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
