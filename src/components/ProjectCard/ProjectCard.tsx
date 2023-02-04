import Image, { StaticImageData } from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CardLinks, ProjectCardContainer } from "./ProjectCard.styles";
import Link from "next/link";
import { NameTechs, TechButton } from "../TechButton/TechButton";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";
import { GeneralContext } from "@/context/GeneralContext";
import { GiReturnArrow } from "react-icons/gi";

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
  const { onOpenVideoModal, unSelectProject } = useContext(GeneralContext);
  const [flipped, setFlipped] = useState("");

  useEffect(() => {
    setFlipped(active ? "flipped" : "");
  }, [active]);

  return (
    <ProjectCardContainer className={flipped}>
      <div className="front" onClick={onFlip}>
        <Image src={project?.image} alt="imagem projeto" width={480} />
      </div>
      <div className="back">
        <div className="header">
          <h2>{project?.title}</h2>
          <GiReturnArrow onClick={unSelectProject} />
        </div>

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
