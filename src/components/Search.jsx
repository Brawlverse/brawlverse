import React from "react";

function Search({ setSearchTerm }) {
  return (
    <input type="text" className="search-input" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search 89 Brawlers" />
  );
}

export default Search;
