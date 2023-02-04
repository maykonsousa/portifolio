import React, { useContext } from "react";
import { ProjectsGroup } from "./ProjectsGroupDesktop.styles";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { GeneralContext } from "@/context/GeneralContext";

export const ProjectsGroupDesktop = () => {
  const { projects, projectSelected, onSelectProject } =
    useContext(GeneralContext);

  return (
    <ProjectsGroup>
      {projects?.map((project) => (
        <ProjectCard
          active={project.id === projectSelected?.id}
          key={project.id}
          project={project}
          onFlip={() => onSelectProject(project)}
        />
      ))}
    </ProjectsGroup>
  );
};
