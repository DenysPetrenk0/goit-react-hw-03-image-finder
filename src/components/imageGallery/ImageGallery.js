/** @format */

import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyles } from "./ImageGalleryStyles";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryStyles>
      <ImageGalleryItem images={images} openModal={openModal} />
    </ImageGalleryStyles>
  );
};

export default ImageGallery;
