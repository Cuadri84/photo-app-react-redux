import React, { useState } from "react";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../features/favoritePhotos/favoritePhotosSlice";
import { PhotoModal } from "./PhotoModal";
import { Delete, Download, Edit } from "@mui/icons-material";
import cancelModal from "../assets/cancelModal.png";

export const FavoritePhoto = (photo) => {
  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };
  const dispatch = useDispatch();

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="favoritePhoto">
      <div className="imgAndButtons">
        <img
          src={photo.src}
          alt={photo.description}
          onClick={() => setOpenModal(true)}
        />
        <div>
          <button id="buttons">
            <Edit onClick={() => setOpenModal(true)} />
          </button>
          <button
            variant="outlined"
            onClick={() => dispatch(deletePhoto({ id: photo.id }))}
            id="buttons"
          >
            <Delete />
          </button>
          <button
            onClick={() => donwloadImage(photo.src, photo.description)}
            id="buttons"
          >
            <Download />
          </button>
        </div>
      </div>

      {openModal ? (
        <div id="overlay" onClick={() => setOpenModal(false)}>
          <div id="modal">
            <img
              src={cancelModal}
              onClick={() => setOpenModal(false)}
              alt="cancel modal button"
            ></img>
            <PhotoModal {...photo} />
          </div>
        </div>
      ) : null}

      <div id="data">
        {photo.description !== null ? (
          <>
            <h2 onClick={() => setOpenModal(true)}>
              {capitalizeFirst(photo.description)}
            </h2>
          </>
        ) : (
          <br />
        )}

        <h4>W {photo.width}</h4>
        <h4>H {photo.height}</h4>
        <h4>Likes {photo.likes}</h4>
        <h4>Date {photo.date}</h4>
      </div>
    </div>
  );
};
