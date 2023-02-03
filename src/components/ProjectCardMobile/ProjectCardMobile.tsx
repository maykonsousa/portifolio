import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";
import {
  CardLinks,
  MoreDetails,
  ProjectCardContainer,
  ProjectCover,
  ProjectFooter,
  ProjectInfo,
} from "./ProjectCardMobile.styles";
import Link from "next/link";
import { TechButton } from "../TechButton/TechButton";
import { GeneralContext } from "@/context/GeneralContext";
import { IProjectData } from "@/helpers/projectsData";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

interface ProjectCardProps {
  project: IProjectData;
}

export const ProjectCardMobile = ({ project }: ProjectCardProps) => {
  const { projectSelected, onOpenVideoModal, onSelectProject } =
    useContext(GeneralContext);

  const isActive = projectSelected?.id === project?.id;
  return (
    <ProjectCardContainer>
      <ProjectCover>
        <Image src={project?.image} alt="imagem projeto" width={480} />
      </ProjectCover>
      <ProjectInfo>
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
        <ul>
          {project?.techs.map((tech) => (
            <TechButton key={tech} name={tech} />
          ))}
        </ul>
      </ProjectInfo>
      {isActive ? (
        <ProjectFooter>
          <CardLinks>
            <button onClick={onOpenVideoModal}>
              <FaYoutube />
              Video
            </button>
            <Link href={project?.links.acess}>
              <FaGlobe />
              Acessar
            </Link>
            <Link href={project?.links.repository}>
              <FaGithub />
              Github
            </Link>
          </CardLinks>
        </ProjectFooter>
      ) : (
        <MoreDetails>
          <button onClick={() => onSelectProject(project)}>
            <GiHealthNormal size={24} />
          </button>
        </MoreDetails>
      )}
    </ProjectCardContainer>
  );
};
