import Image from "next/image";
import React, { useContext } from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNav,
} from "./Header.styles";
import LogoImg from "@/assets/logo.svg";
import LogoLightImg from "@/assets/logoLight.svg";

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { GeneralContext } from "@/context/GeneralContext";
import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileToggleButton } from "../MobileToggleButton/MobileToggleButton";

export const Header = () => {
  const { themeName } = useContext(GeneralContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <MobileToggleButton />
        <HeaderLogo>
          <Image
            src={themeName === "dark" ? LogoImg : LogoLightImg}
            alt="Logo com as inciciais M e S"
          />
        </HeaderLogo>

        <DesktopNav />
      </HeaderContent>
    </HeaderContainer>
  );
};
