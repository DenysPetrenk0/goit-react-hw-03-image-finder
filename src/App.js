/** @format */

import React, { Component } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Searchbar from "./components/searchbar/Searchbar";
import LoaderComponent from "./components/loader/LoaderComponent";
import Button from "./components/button/Button";
import { AppStyles } from "./AppStyles";
import axios from "axios";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import Modal from "./components/modal/Modal";

const API_KEY = "22372696-7b3b1eaff1e1a15c11afd4170";

class App extends Component {
  state = {
    images: [],
    page: 1,
    valueQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueQuery !== this.state.valueQuery) {
      this.makesRequest();
    }
  }

  onSubmit = (query) => {
    this.setState({ valueQuery: query, images: [], page: 1, error: null });
  };

  makesRequest = () => {
    const { page, valueQuery } = this.state;
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${valueQuery}&page=${page}&image_type=photo&pretty=true&per_page=12`
      )
      .then((response) => {
        if (response.data.hits.length === 0) {
          this.messegError();
        }
        this.setState((prev) => ({
          images: [...prev.images, ...response.data.hits],
          page: prev.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  messegError = () => {
    error({
      text: "oops something went wrong!!!!!!!!!!!",
    });
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: "" });
  };

  openModal = (event) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: event.target.dataset.source });
  };

  render() {
    const { images, isLoading, error, showModal, largeImageURL } = this.state;
    return (
      <AppStyles>
        {error && this.messegError()}
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <LoaderComponent />}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} openModal={this.openModal} />
            <Button makesRequest={this.makesRequest} />
            {window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })}
          </>
        )}
        {showModal && (
          <Modal closeModal={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </AppStyles>
    );
  }
}

export default App;
