import React, { useState } from "react";
import { editDescription } from "../features/favoritePhotos/favoritePhotosSlice";
import { useDispatch } from "react-redux";
import { Save } from "@mui/icons-material";

export const PhotoModal = (photo) => {
  const dispatch = useDispatch();

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [newDescription, setNewDescription] = useState(photo.description);
  const handleChange = ({ target }) => {
    setNewDescription(target.value);
  };

  const saveNewDescription = () => {
    dispatch(
      editDescription({
        id: photo.id,
        description: newDescription,
      })
    );
  };

  return (
    <div>
      <img src={photo.src} alt={photo.description} id="imageModal" />
      {photo.description !== null ? (
        <div id="modalData">
          <textarea
            value={newDescription}
            onChange={handleChange}
            id="textarea"
          >
            <h2> {capitalizeFirst(photo.description)}</h2>
          </textarea>
          <button onClick={saveNewDescription} id="saveButton">
            <Save />
          </button>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};
