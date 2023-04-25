import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FavoritePhoto } from "../../components/FavoritePhoto";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const FavoritePhotos = () => {
  const favorites = useSelector((state) => state.favorite.favoritePhotos);

  const [favList, setFavlist] = useState(favorites);

  function sortByH(e) {
    let type = e.target.value;
    const sorted = [...favList].sort((a, b) =>
      a[type] < b[type] ? 1 : b[type] < a[type] ? -1 : 0
    );
    setFavlist(sorted);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    console.log(input);
    let filtered;

    filtered = favList.filter(
      (search) => search.description.includes(input)
      //si borro .includes(input) y hago una busqueda no da error y obviamente no hace el filter,pero si luego inlcuyo el.include(input hace el filter) y hago una busqueda
    );

    setFavlist(filtered);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="searchFilter">
        <TextField
          name="search"
          placeholder="Search Images..."
          variant="standard"
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
        <option>WIDTH</option>
        <option>HEIGHT</option>
        <option>LIKES</option>
        <option>DATE</option>
      </select>

      {favList <= 0 ? (
        <h1>Go back and save the photos you like</h1>
      ) : (
        <ul>
          {favList.map((photo) => (
            <FavoritePhoto {...photo} key={photo.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
