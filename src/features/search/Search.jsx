import React from "react";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./SearchSlice";
import { addPhoto } from "../favoritePhotos/favoritePhotosSlice";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { SearchBar } from "../../components/SearchBar";
import { Download, Favorite } from "@mui/icons-material";
import { AddedToFavModal } from "../../components/AddedToFavModal";

export const Search = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.search.value);
  };
  // const [openModal, setOpenModal] = useState(false);

  const date = new Date().toLocaleString();

  const donwloadImage = (URL, description) => {
    saveAs(URL, description);
  };

  useEffect(() => {
    dispatch(getPhotos(input));
  }, [dispatch, input]);
  return (
    <div>
      {photos === undefined ? (
        <div>LOADING</div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <TextField
              name="search"
              placeholder="Search Images..."
              variant="standard"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          {/* <SearchBar onClick={handleSubmit} /> */}
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
                  <Favorite
                    id="buttons"
                    // onClick={()=>setInterval(() => {
                    //   setOpenModal(true);
                    // }, 1000)}
                  />
                  {/* {openModal ? <AddedToFavModal /> : null}
                  Todo esto meterlo en un componente aparte por cada photo*/}
                </button>
                <button
                  onClick={() =>
                    donwloadImage(photo.urls.regular, photo.alt_description)
                  }
                >
                  <Download />
                </button>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
