import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "x-u-3JCGtffCniAJOYb3NXFUilPh6YXiFlDhNnnyyLw";
const URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=10`;

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const initialState = {
  loading: false,
  photos: [],
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPhotos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.loading = false;
      state.photos = action.payload;
      state.error = "";
    });
    builder.addCase(getPhotos.rejected, (state, action) => {
      state.loading = false;
      state.photos = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
