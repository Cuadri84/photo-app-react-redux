import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../contexts/homeContext";

export const Header = () => {
  const { home, setHome } = useContext(HomeContext);

  return (
    <div>
      {home ? (
        <div>
          <h1>Photo app</h1>
          <NavLink to={"/favorite"}>
            <span onClick={() => setHome(false)}>go to favorites</span>
          </NavLink>
        </div>
      ) : (
        <div>
          <h1>Favorites</h1>
          <NavLink to={"/"}>
            <span onClick={() => setHome(true)}>go back</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};
