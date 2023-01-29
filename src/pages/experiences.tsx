import { Main, XpDesktopNav, XpMobileNav } from "@/components";
import { ExperiencesPageContainer } from "@/styles/pages/Experiences.styles";
import React from "react";

const Experiences = () => {
  return (
    <Main>
      <ExperiencesPageContainer>
        <h1>Experiências</h1>
        <p>Para mais detalhes, clique na empresa correspondente</p>
        <XpDesktopNav />
        <XpMobileNav />
      </ExperiencesPageContainer>
    </Main>
  );
};

export default Experiences;
