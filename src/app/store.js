import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/SearchSlice";
import favoriteReducer from "../features/favoritePhotos/favoritePhotosSlice";

export const store = configureStore({
  reducer: { search: searchReducer, favorite: favoriteReducer },
});
