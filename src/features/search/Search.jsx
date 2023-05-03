import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./SearchSlice";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { SearchPhoto } from "../../components/SearchPhoto";

export const Search = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.search.value);
  };

  useEffect(() => {
    dispatch(getPhotos(input));
  }, [dispatch, input]);
  return (
    <div>
      {photos === undefined ? (
        <div>LOADING</div>
      ) : (
        <>
          <form onSubmit={handleSubmit} id="searchFilter">
            <TextField
              name="search"
              placeholder="Search Images..."
              variant="standard"
              autoComplete="off"
              InputProps={{ disableUnderline: true }}
            />
            <button type="submit" id="searchIcon">
              <SearchIcon />
            </button>
          </form>
          <ul id="grid">
            {photos.map((photo) => (
              <SearchPhoto {...photo} key={photo.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
