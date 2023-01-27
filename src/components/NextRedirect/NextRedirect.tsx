import React, { useContext } from "react";
import { GeneralContext } from "@/context/GeneralContext";
import { NextContainer } from "./NextRedirect.styles";
import { FaArrowDown } from "react-icons/fa";

export const NextRedirect = () => {
  const { nextPath, onNextRedirect } = useContext(GeneralContext);

  return nextPath ? (
    <NextContainer onClick={onNextRedirect}>
      <FaArrowDown />
    </NextContainer>
  ) : null;
};
