import Image from "next/image";
import React, { useContext } from "react";
import { HeaderContainer, HeaderContent, HeaderLogo } from "./Header.styles";
import LogoImg from "@/assets/logo.svg";
import LogoLightImg from "@/assets/logoLight.svg";

import Link from "next/link";
import { GeneralContext } from "@/context/GeneralContext";
import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileToggleButton } from "../MobileToggleButton/MobileToggleButton";

export const Header = () => {
  const { themeName } = useContext(GeneralContext);
  const [logo, setLogo] = React.useState(LogoImg);

  React.useEffect(() => {
    if (themeName === "light") {
      setLogo(LogoLightImg);
    } else {
      setLogo(LogoImg);
    }
  }, [themeName]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <MobileToggleButton />
        <HeaderLogo>
          <Link href="/">
            <Image src={logo} alt="Logo com as inciciais M e S" />
          </Link>
        </HeaderLogo>

        <DesktopNav />
      </HeaderContent>
    </HeaderContainer>
  );
};
