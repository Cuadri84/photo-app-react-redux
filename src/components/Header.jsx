import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../contexts/homeContext";

export const Header = () => {
  const { home, setHome } = useContext(HomeContext);

  return (
    <header>
      {home ? (
        <div>
          <h1 id="photoApp">PHOTO APP</h1>
          <NavLink to={"/favorite"} id="goBackFav">
            <span onClick={() => setHome(false)}>GO TO FAVORITES</span>
          </NavLink>
        </div>
      ) : (
        <div>
          <h1 id="myPhotos">MY PHOTOS</h1>
          <NavLink to={"/"} id="goBackFav">
            <span onClick={() => setHome(true)}>GO BACK</span>
          </NavLink>
        </div>
      )}
    </header>
  );
};
