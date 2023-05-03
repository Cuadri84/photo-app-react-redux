import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAs } from "file-saver";
import { addPhoto } from "../features/favoritePhotos/favoritePhotosSlice";
import { Download, Favorite } from "@mui/icons-material";

export const SearchPhoto = (photo) => {
  const dispatch = useDispatch();
  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };
  const date = new Date().toLocaleString();

  const [addedModal, setAddedModal] = useState(false);

  const [color, setColor] = useState(true);
  const changeColor = () => {
    let red = "#A02";
    setColor(red);
    setAddedModal(true);
    setInterval(() => {
      setAddedModal(false);
    }, 4000);
  };

  return (
    <div className="favoritePhoto">
      <div key={photo.id} className="imgAndButtons">
        <img
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description}
          height="250"
          width="200"
        ></img>
        <div className="divButtonsHome">
          <button
            id="buttons"
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
            <Favorite
              id="buttons"
              key={photo.id}
              style={{ color }}
              onClick={changeColor}
            />
          </button>
          <button
            id="buttons"
            onClick={() =>
              donwloadImage(photo.urls.regular, photo.alt_description)
            }
          >
            <Download />
          </button>
        </div>
      </div>
      {addedModal ? (
        <h3 id="addedModal">Added photo to favorites</h3>
      ) : (
        <h3 id="addedModal"></h3>
      )}
      <h2 id="data">{photo.alt_description}</h2>
    </div>
  );
};
