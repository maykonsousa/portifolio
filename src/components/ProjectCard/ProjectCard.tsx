import React from "react";
import { ProjectCardContainer } from "./ProjectCard.styles";

export const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <div className="front">Frente</div>
      <div className="back">Verso</div>
    </ProjectCardContainer>
  );
};
