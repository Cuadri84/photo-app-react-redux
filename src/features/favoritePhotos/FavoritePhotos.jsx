import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FavoritePhoto } from "../../components/FavoritePhoto";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const FavoritePhotos = () => {
  const favorites = useSelector((state) => state.favorite.favoritePhotos);

  const [selectedOrder, setSelectedOrder] = useState();
  const [input, setInput] = useState("");

  function sortByH(e) {
    let type = e.target.value;
    setSelectedOrder(type);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;

    setInput(input);
  };

  return (
    <div id="favorites">
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
      <select onChange={sortByH} id="order">
        <option selected disabled={true}>
          ORDER BY
        </option>
        <option>width</option>
        <option>height</option>
        <option>likes</option>
        <option>date</option>
      </select>

      {favorites <= 0 ? (
        <h1 id="goBack">Go back and save the photos you like</h1>
      ) : (
        <ul id="grid">
          {favorites ? (
            [...favorites]
              .sort((a, b) =>
                a[selectedOrder] < b[selectedOrder]
                  ? 1
                  : b[selectedOrder] < a[selectedOrder]
                  ? -1
                  : 0
              )

              .filter((search) =>
                search.description ? search.description.includes(input) : false
              )
              .map((photo) => <FavoritePhoto {...photo} key={photo.id} />)
          ) : (
            <li></li>
          )}
        </ul>
      )}
    </div>
  );
};
