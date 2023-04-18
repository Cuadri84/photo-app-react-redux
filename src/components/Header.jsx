import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <NavLink to={"/favorite"}>favorite</NavLink>
    </div>
  );
};
