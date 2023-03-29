import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=6&limit=12");
  const formatResponse = await response.json();
  return formatResponse;
});

export const favoritePhotosSlice = createSlice({
  name: "favorite",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default favoritePhotosSlice.reducer;
