/** @format */

import React from "react";
import { ImageGalleryItemStyles } from "./ImageGalleryItemStyles";

const ImageGalleryItem = ({ images, openModal }) => {
  const getLargeImage = (event) => {
    openModal(event.target.dataset.source);
  };
  return images.map((image) => (
    <ImageGalleryItemStyles key={image.id}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={getLargeImage}
        data-source={image.largeImageURL}
      />
    </ImageGalleryItemStyles>
  ));
};

export default ImageGalleryItem;
