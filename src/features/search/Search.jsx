import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./SearchSlice";
import { addPhoto } from "../favoritePhotos/favoritePhotosSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);

  const date = new Date().toLocaleString();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  return (
    <div>
      {photos === undefined ? (
        <div>LOADING</div>
      ) : (
        <ul>
          {photos.map((photo) => (
            <div>
              <img
                key={photo.id}
                src={photo.urls.regular}
                alt={photo.alt_description}
              ></img>

              <button
                onClick={() =>
                  dispatch(
                    addPhoto({
                      id: photo.id,
                      name: photo.name,
                      description: photo.description,
                      src: photo.src,
                      likes: photo.likes,
                      width: photo.width,
                      height: photo.height,
                      donwload: photo.donwload,
                      date: date,
                    })
                  )
                }
              >
                ADD
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
