import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileToggleContainer } from "./MobileToggleButton.styles";

export const MobileToggleButton = () => {
  return (
    <MobileToggleContainer onClick={() => {}}>
      <GiHamburgerMenu size={32} />
    </MobileToggleContainer>
  );
};
