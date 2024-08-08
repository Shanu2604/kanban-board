import React from "react";

const SearchBar = ({ searchInput, onSearch }) => {
  const searchHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Search Tasks Here...."
        value={searchInput}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchBar;
