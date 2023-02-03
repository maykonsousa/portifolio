import {
  Main,
  ProjectsGroupDesktop,
  ProjectsGroupMobile,
  VideoModal,
} from "@/components";
import { GeneralContext } from "@/context/GeneralContext";
import { ProjectsContainer } from "@/styles/pages/Projects.styles";
import { useContext, useState } from "react";

const Projects = () => {
  const { projectSelected } = useContext(GeneralContext);

  return (
    <Main>
      <VideoModal project={projectSelected} />
      <ProjectsContainer>
        <h1>Projetos</h1>
        <ProjectsGroupDesktop />
        <ProjectsGroupMobile />
      </ProjectsContainer>
    </Main>
  );
};

export default Projects;
