import React from "react";
import { useSelector } from "react-redux";

import { Photo } from "../../components/Photo";

export const FavoritePhotos = () => {
  const favorites = useSelector((state) => state.favorite.favoritePhotos);

  return (
    <div>
      <ul>
        {favorites.map((photo) => (
          <Photo {...photo} />
        ))}
      </ul>
    </div>
  );
};
