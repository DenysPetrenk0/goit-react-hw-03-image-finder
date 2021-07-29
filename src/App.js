/** @format */

import { React, Component } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Searchbar from "./components/searchbar/Searchbar";
import Loader from "./components/loader/Loader";
import Button from "./components/button/Button";
import { AppStyles } from "./AppStyles";

class App extends Component {
  state = {};
  render() {
    return (
      <AppStyles>
        <Searchbar onSubmit={this.props.onSubmit} />
        <ImageGallery />
        <Loader />
        <Button />
      </AppStyles>
    );
  }
}

export default App;
