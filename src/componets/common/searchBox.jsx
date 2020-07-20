import React from "react";
import "./searchBox.css";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
const SearchBox = ({ onChange }) => {
  return (
    <div className="d-flex">
      <input
        onChange={onChange}
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
