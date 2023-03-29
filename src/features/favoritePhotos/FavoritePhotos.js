import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./favoritePhotosSlice";

export const FavoritePhotos = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.favorite.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          alt={photo.author}
          src={photo.download_url}
          width="300"
          height="200"
        >
          {/* <FavoriteButton/> */}
        </img>
      ))}
    </div>
  );
};
