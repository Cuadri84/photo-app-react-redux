import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FavoritePhoto } from "../../components/FavoritePhoto";

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

  return (
    <div>
      <select onChange={sortByH}>
        <option selected disabled={true}>
          Order by
        </option>
        <option>width</option>
        <option>height</option>
        <option>likes</option>
        <option>date</option>
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
