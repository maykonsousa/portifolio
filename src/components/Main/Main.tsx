import Link from "next/link";
import React from "react";
import { EmailBar } from "../EmailBar/EmailBar";
import { Socialbar } from "../SocialBar/Socialbar";
import { ChildrenContainer, MainContainer } from "./Main.styles";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <MainContainer>
      <Socialbar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <EmailBar />
    </MainContainer>
  );
};
