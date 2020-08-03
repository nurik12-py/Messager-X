import React from "react";
import "./searchBox.css";
import { ReactComponent as SearchIcon } from "../../../node_modules/bootstrap-icons/icons/search.svg";
const SearchBox = ({ onChange, onFocus, onBlur }) => {
  return (
    <div className="d-flex">
      <input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="search"
        placeholder="Search for users"
      />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
