import React from "react";
import { useSelector } from "react-redux";
import { FavoritePhoto } from "../../components/FavoritePhoto";

export const FavoritePhotos = () => {
  const favorites = useSelector((state) => state.favorite.favoritePhotos);

  return (
    <div>
      {favorites <= 0 ? (
        <h1>Go back and save the photos you like</h1>
      ) : (
        <ul>
          {favorites.map((photo) => (
            <FavoritePhoto {...photo} />
          ))}
          {console.log(favorites)}
        </ul>
      )}
    </div>
  );
};
