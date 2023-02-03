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
      "Aplicação feita com o intuito de integrar os alunos participantes do treinamento Next Level Week. Produzido pela Rocketseat. A ideia é que usuários cadastrados possam acompanhar um ranking de indicações e também visualizar perfis de outros usuários permitindo que pudesem se conectar pelas redes sociais. Projeto construído com front-end feito em Next e o back em Node",
    techs: ["React", "NodeJs", "Prisma", "Postgres"],
    links: {
      video: "https://www.youtube.com/embed/XiyLcUevd4s",
      acess: "https://nlwcommunity.vercel.app/",
      repository: "https://github.com/maykonsousa/nlw_community",
    },
  },
  {
    id: 2,
    title: "Portifólio V2",
    image: portifolioV2,
    description:
      "Aplicação feita com o intuito de integrar os alunos participantes do treinamento Next Level Week. Produzido pela Rocketseat. A ideia é que usuários cadastrados possam acompanhar um ranking de indicações e também visualizar perfis de outros usuários permitindo que pudesem se conectar pelas redes sociais. Projeto construído com front-end feito em Next e o back em Node",
    techs: ["React", "NodeJs", "Prisma", "Postgres"],
    links: {
      video: "https://www.youtube.com/embed/XiyLcUevd4s",
      acess: "https://nlwcommunity.vercel.app/",
      repository: "https://github.com/maykonsousa/nlw_community",
    },
  },
];
