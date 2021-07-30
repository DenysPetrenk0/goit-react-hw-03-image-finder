/** @format */

import React from "react";
import { ButtonStyles } from "./ButtonStyles";

const Button = ({ makesRequest }) => {
  const loadMore = () => {
    makesRequest();
  };

  return (
    <ButtonStyles type="button" onClick={loadMore}>
      Load more
    </ButtonStyles>
  );
};

export default Button;
