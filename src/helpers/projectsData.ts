import { StaticImageData } from "next/image";

import { NameTechs } from "@/components/TechButton/TechButton";
import nlwImage from "@/assets/projects/nlw_community.png";
import portifolioV2 from "@/assets/projects/portifolio_v2.png";

export interface IProjectData {
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
}

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: "NLW Community",
    image: nlwImage,
    description:
      "Aplicação com o intuito de criar uma comunidade entre os alunos participantes do NLW Setup, evento produzido pela Rocketseat.",
    techs: ["React", "NodeJs", "Prisma", "Postgres"],
    links: {
      video: "https://www.youtube.com/embed/cGpYIeX8bFY",
      acess: "https://nlwcommunity.vercel.app/",
      repository: "https://github.com/maykonsousa/nlw_community",
    },
  },
  {
    id: 2,
    title: "Portifólio V2",
    image: portifolioV2,
    description:
      "Esse foi o meu segundo portifólio, onde eu tentei aplicar o máximo de conhecimento que eu tinha na época. Foi feito com HTML, CSS, Bootstrap e Javascript.",
    techs: ["HTML", "CSS", "Bootstrap", "JQuery"],
    links: {
      video: "https://www.youtube.com/embed/EZLm2mP5amo",
      acess: "https://maykonsousa.github.io",
      repository: "https://github.com/maykonsousa/maykonsousa.github.io",
    },
  },
];
