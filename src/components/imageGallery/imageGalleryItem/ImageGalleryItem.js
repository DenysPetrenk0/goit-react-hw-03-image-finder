/** @format */

import React from "react";
import { ImageGalleryItemStyles } from "./ImageGalleryItemStyles";

const ImageGalleryItem = ({ images, openModal }) => {
  return images.map((image) => (
    <ImageGalleryItemStyles key={image.id}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={openModal}
        data-source={image.largeImageURL}
      />
    </ImageGalleryItemStyles>
  ));
};

export default ImageGalleryItem;
