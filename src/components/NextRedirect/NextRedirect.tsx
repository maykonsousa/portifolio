import React, { useContext } from "react";
import { FcPrevious } from "react-icons/fc";
import { GeneralContext } from "@/context/GeneralContext";
import { NextContainer } from "./NextRedirect.styles";

export const NextRedirect = () => {
  const { nextPath, onNextRedirect } = useContext(GeneralContext);

  return nextPath ? (
    <NextContainer onClick={onNextRedirect}>
      <FcPrevious />
    </NextContainer>
  ) : null;
};
