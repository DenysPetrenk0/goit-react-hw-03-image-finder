/** @format */

import React, { Component } from "react";
import { HeaderStyles } from "./searchbarStyles";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handlChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handlSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <HeaderStyles>
        <form className="SearchForm" onSubmit={this.handlSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handlChange}
          />
        </form>
      </HeaderStyles>
    );
  }
}

export default Searchbar;
