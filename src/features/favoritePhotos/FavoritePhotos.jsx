import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto } from "./favoritePhotosSlice";
import { saveAs } from "file-saver";

export const FavoritePhotos = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favoritePhotos);

  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };

  return (
    <div>
      <ul>
        {favorites.map((photo) => (
          <div>
            <img src={photo.src} alt={photo.description} />
            <button onClick={() => dispatch(deletePhoto({ id: photo.id }))}>
              DELETE
            </button>
            <button onClick={() => donwloadImage(photo.src, photo.description)}>
              Download
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
