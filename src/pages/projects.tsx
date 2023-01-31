import { Header, Main, ProjectCard, UnderConstruction } from "@/components";
import {
  ProjectsContainer,
  ProjectsGroup,
} from "@/styles/pages/Projects.styles";
import React from "react";

const Projects = () => {
  return (
    <Main>
      <ProjectsContainer>
        <h1>Projetos</h1>
        <ProjectsGroup>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectsGroup>
      </ProjectsContainer>
    </Main>
  );
};

export default Projects;
