import React from "react";
import {
  FaAws,
  FaBootstrap,
  FaConfluence,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJenkins,
  FaJira,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiKubernetes, SiPrisma } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { TechButtonContainer } from "./TechButton.styles";

interface TechButtonProps {
  name: string;
}

interface TechsIconsProps {
  [key: string]: React.ReactNode;
}

const TechsIcons: TechsIconsProps = {
  React: <FaReact />,
  NodeJs: <FaNodeJs />,
  AWS: <FaAws />,
  Bootstrap: <FaBootstrap />,
  Figma: <FaFigma />,
  Jenkins: <FaJenkins />,
  Prisma: <SiPrisma />,
  Scrum: <DiScrum />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  Jira: <FaJira />,
  Sass: <FaSass />,
};

export const TechButton = ({ name }: TechButtonProps) => {
  return (
    <TechButtonContainer>
      {TechsIcons[name] || null} {name}
    </TechButtonContainer>
  );
};
