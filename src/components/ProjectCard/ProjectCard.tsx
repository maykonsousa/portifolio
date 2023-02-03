import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";
import { CardLinks, ProjectCardContainer } from "./ProjectCard.styles";
import Link from "next/link";
import { NameTechs, TechButton } from "../TechButton/TechButton";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";
import { GeneralContext } from "@/context/GeneralContext";

interface ProjectCardProps {
  active: boolean;
  onFlip: () => void;
  project: {
    id: number;
    title: string;
    image: StaticImageData;
    description: string;
    techs: NameTechs[];
    links: {
      video: string;
      acess: string;
      repository: string;
    };
  };
}

export const ProjectCard = ({ active, project, onFlip }: ProjectCardProps) => {
  const { onCloseVideoModal, onOpenVideoModal } = useContext(GeneralContext);
  return (
    <ProjectCardContainer className={active ? "flipped" : ""} onClick={onFlip}>
      <div className="front">
        <Image src={project?.image} alt="imagem projeto" width={480} />
      </div>
      <div className="back">
        <h2>{project?.title}</h2>

        <p>{project?.description}</p>

        <ul>
          {project?.techs.map((tech) => (
            <TechButton key={tech} name={tech} />
          ))}
        </ul>

        <CardLinks className="links">
          <button onClick={onOpenVideoModal}>
            <FaYoutube size={20} /> Video
          </button>
          <Link href={project.links.acess}>
            <FaGlobe size={20} />
            Acessar
          </Link>
          <Link href={project.links.repository}>
            <FaGithub size={20} />
            Repositorio
          </Link>
        </CardLinks>
      </div>
    </ProjectCardContainer>
  );
};
