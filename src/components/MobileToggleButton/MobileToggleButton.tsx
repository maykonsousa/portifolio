import { GeneralContext } from "@/context/GeneralContext";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileToggleContainer } from "./MobileToggleButton.styles";

export const MobileToggleButton = () => {
  const { toggleMobileNav } = useContext(GeneralContext);
  return (
    <MobileToggleContainer onClick={toggleMobileNav}>
      <GiHamburgerMenu size={32} />
    </MobileToggleContainer>
  );
};
