/** @format */

import React from "react";
import { createPortal } from "react-dom";
import { ModalStyled } from "./ModalStyled";

const modalRoot = document.querySelector("#modalRoot");

const Modal = ({ closeModal, largeImageURL }) => {
  const handelBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalStyled onClick={handelBackdrop}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
