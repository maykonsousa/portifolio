import { GeneralContext } from "@/context/GeneralContext";
import Link from "next/link";
import React, { useContext } from "react";
import { EmailBar } from "../EmailBar/EmailBar";
import { MobileNav } from "../MobileNav/MobileNav";
import { Socialbar } from "../SocialBar/Socialbar";
import { ChildrenContainer, MainContainer } from "./Main.styles";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  const { showMobileNav } = useContext(GeneralContext);
  return (
    <MainContainer>
      <Socialbar />
      {showMobileNav ? <MobileNav /> : null}
      <ChildrenContainer>{children}</ChildrenContainer>
      <EmailBar />
    </MainContainer>
  );
};
