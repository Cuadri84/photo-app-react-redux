import React from "react";
import { useEffect } from "react";
import { saveAs } from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./SearchSlice";
import { addPhoto } from "../favoritePhotos/favoritePhotosSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);
  const date = new Date().toLocaleString();

  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };

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
            <div key={photo.id}>
              <img
                key={photo.id}
                src={photo.urls.regular}
                alt={photo.alt_description}
                height="250"
                width="200"
              ></img>
              <h1>{photo.alt_description}</h1>
              <button
                onClick={() =>
                  dispatch(
                    addPhoto({
                      id: photo.id,
                      description: photo.alt_description,
                      src: photo.urls.regular,
                      likes: photo.likes,
                      width: photo.width,
                      height: photo.height,
                      date: date,
                    })
                  )
                }
              >
                ADD
              </button>
              <button
                onClick={() =>
                  donwloadImage(photo.urls.regular, photo.alt_description)
                }
              >
                Download
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
