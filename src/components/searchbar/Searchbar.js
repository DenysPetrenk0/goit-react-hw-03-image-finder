/** @format */

import React from "react";
import { HeaderStyles } from "./searchbarStyles";

const Searchbar = () => {
  return (
    <HeaderStyles>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </HeaderStyles>
  );
};

export default Searchbar;
