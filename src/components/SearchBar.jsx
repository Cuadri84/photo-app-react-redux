import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchBar = (props) => {
  return (
    <div>
      <form onClick={props.onClick}>
        <TextField
          name="search"
          placeholder="Search Images..."
          variant="standard"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
