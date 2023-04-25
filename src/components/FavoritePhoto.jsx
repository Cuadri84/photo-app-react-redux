import React, { useState } from "react";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import { deletePhoto } from "../features/favoritePhotos/favoritePhotosSlice";
import { PhotoModal } from "./PhotoModal";
import { Delete, Download, Edit } from "@mui/icons-material";

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
    <div>
      <div className="imgAndButtons">
        <img
          src={photo.src}
          alt={photo.description}
          onClick={() => setOpenModal(true)}
        />
        <div>
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
        <div>
          <p onClick={() => setOpenModal(false)}>X</p>
          <PhotoModal {...photo} />
        </div>
      ) : null}

      {photo.description !== null ? (
        <>
          <h1 onClick={() => setOpenModal(true)}>
            {capitalizeFirst(photo.description)}
          </h1>
        </>
      ) : (
        <br />
      )}
      <Edit onClick={() => setOpenModal(true)} />
      <h3>W {photo.width}</h3>
      <h3>H {photo.height}</h3>
      <h3>Likes {photo.likes}</h3>
      <h3>Date {photo.date}</h3>
    </div>
  );
};
