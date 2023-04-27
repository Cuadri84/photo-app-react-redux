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
          <form onSubmit={handleSubmit} id="searchFilter">
            <TextField
              name="search"
              placeholder="Search Images..."
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <button type="submit" id="searchIcon">
              <SearchIcon />
            </button>
          </form>
          <ul>
            {photos.map((photo) => (
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
                        // onClick={()=>setInterval(() => {
                        //   setOpenModal(true);
                        // }, 1000)}
                      />
                      {/* {openModal ? <AddedToFavModal /> : null}
                  Todo esto meterlo en un componente aparte por cada photo*/}
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
                <h2 id="data">{photo.alt_description}</h2>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
