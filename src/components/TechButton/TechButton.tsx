import React from "react";
import {
  FaAws,
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJenkins,
  FaJira,
  FaNodeJs,
  FaReact,
  FaRedhat,
  FaSass,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiPostgresql, SiPrisma, SiSap } from "react-icons/si";
import { DiDotnet, DiScrum } from "react-icons/di";
import { BsKanbanFill } from "react-icons/bs";
import { RiFileExcelLine } from "react-icons/ri";

import { SiJquery } from "react-icons/si";

import { TechButtonContainer } from "./TechButton.styles";

export type NameTechs =
  | "React"
  | "NodeJs"
  | "AWS"
  | "Bootstrap"
  | "Figma"
  | "Jenkins"
  | "Prisma"
  | "Scrum"
  | "Git"
  | "Docker"
  | "Jira"
  | "Sass"
  | "Kanban"
  | "Asp.Net"
  | "Red Hat"
  | "SAP"
  | "Excel"
  | "Postgres"
  | "HTML"
  | "CSS"
  | "JQuery";

export interface TechButtonProps {
  name: NameTechs;
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
  Kanban: <BsKanbanFill />,
  "Asp.Net": <DiDotnet />,
  "Red Hat": <FaRedhat />,
  SAP: <SiSap />,
  Excel: <RiFileExcelLine />,
  Postgres: <SiPostgresql />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JQuery: <SiJquery />,
};

export const TechButton = ({ name }: TechButtonProps) => {
  return (
    <TechButtonContainer>
      {TechsIcons[name] || null} 
      <span>{name}</span>
    </TechButtonContainer>
  );
};
