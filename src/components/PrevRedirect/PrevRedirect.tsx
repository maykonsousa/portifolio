import React, { useContext } from "react";
import { PrevContainer } from "./PrevRedirect.styles";
import { GeneralContext } from "@/context/GeneralContext";
import { FaArrowUp } from "react-icons/fa";

export const PrevRedirect = () => {
  const { onPrevRedirect, prevPath } = useContext(GeneralContext);

  return prevPath ? (
    <PrevContainer onClick={onPrevRedirect}>
      <FaArrowUp />
    </PrevContainer>
  ) : null;
};
