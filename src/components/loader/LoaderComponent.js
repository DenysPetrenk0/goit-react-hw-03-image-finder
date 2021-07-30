/** @format */

import React from "react";
import Loader from "react-loader-spinner";
import { LoaderComponentStyled } from "./LoaderComponentStyled";

const LoaderComponent = () => {
  return (
    <LoaderComponentStyled>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </LoaderComponentStyled>
  );
};

export default LoaderComponent;
