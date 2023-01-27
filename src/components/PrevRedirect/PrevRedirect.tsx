import React, { useContext } from "react";
import { PrevContainer } from "./PrevRedirect.styles";
import { FcPrevious } from "react-icons/fc";
import { GeneralContext } from "@/context/GeneralContext";

export const PrevRedirect = () => {
  const { onPrevRedirect, prevPath } = useContext(GeneralContext);

  return prevPath ? (
    <PrevContainer onClick={onPrevRedirect}>
      <FcPrevious />
    </PrevContainer>
  ) : null;
};
