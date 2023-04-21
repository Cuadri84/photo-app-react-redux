import React, { useState } from "react";
import { editDescription } from "../features/favoritePhotos/favoritePhotosSlice";
import { useDispatch } from "react-redux";

export const PhotoModal = (photo) => {
  const dispatch = useDispatch();

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [newDescription, setNewDescription] = useState(photo.description);
  const handleChange = ({ target }) => {
    console.log(target.value);
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
    <>
      <img src={photo.src} alt={photo.description} height="550" width="500" />
      {photo.description !== null ? (
        <div>
          <textarea value={newDescription} onChange={handleChange}>
            {capitalizeFirst(photo.description)}
          </textarea>
          <button onClick={saveNewDescription}>save</button>
        </div>
      ) : (
        <br />
      )}
    </>
  );
};
