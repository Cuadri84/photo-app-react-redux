import React from "react";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../features/favoritePhotos/favoritePhotosSlice";

export const FavoritePhoto = (photo) => {
  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <img src={photo.src} alt={photo.description} />
      {photo.description !== null ? <h1>{photo.description}</h1> : <h1></h1>}
      <h3>W {photo.width}</h3>
      <h3>H {photo.height}</h3>
      <h3>Likes {photo.likes}</h3>
      <h3>Date {photo.date}</h3>
      <button onClick={() => donwloadImage(photo.src, photo.description)}>
        Download
      </button>
      <button onClick={() => dispatch(deletePhoto({ id: photo.id }))}>
        DELETE
      </button>
    </div>
  );
};
