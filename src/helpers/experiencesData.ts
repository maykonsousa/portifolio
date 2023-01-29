import Brand01 from "../assets/pagseguroDark.svg";
import Brand02 from "../assets/pagseguro.svg";
import Brand03 from "../assets/stefanini.svg";
import Brand04 from "../assets/globo.svg";
import Brand05 from "../assets/globoLight.svg";
export interface Experience {
  id: number;
  company: string;
  ocupation: string;
  logoLight: string;
  logoDark: string;
  period: string;
  description: string;
  techs: string[];
}

export const ExperiencesData: Experience[] = [
  {
    id: 1,
    company: "PagSeguro Pagbank S.A.",
    ocupation: "Desenvolvedor Front-end",
    logoLight: Brand01,
    logoDark: Brand02,
    period: "junho/21 até o momento",
    description:
      "Et esse sit officia laborum incididunt labore pariatur proident minim laborum. Ex ut laborum ad minim velit enim officia eiusmod adipisicing deserunt ipsum fugiat culpa duis. Cupidatat do magna est nostrud reprehenderit aliqua enim nisi qui sit mollit.",

    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Prisma",
      "Scrum",
    ],
  },

  {
    id: 2,
    company: "Stefanini S/A",
    ocupation: "Desenvolvedor Front-end",
    logoLight: Brand03,
    logoDark: Brand03,
    period: "set/2020 até jun/2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Prisma",
      "Scrum",
    ],
  },

  {
    id: 3,
    company: "Rede Globo SA",
    ocupation: "Desenvolvedor Front-end",
    logoLight: Brand05,
    logoDark: Brand04,
    period: "junho/21 até o momento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Prisma",
      "Scrum",
    ],
  },

  {
    id: 4,
    company: "PagSeguro",
    ocupation: "Desenvolvedor Front-end",
    logoLight: Brand01,
    logoDark: Brand02,
    period: "junho/21 até o momento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Prisma",
      "Scrum",
    ],
  },

  {
    id: 5,
    company: "PagSeguro",
    ocupation: "Desenvolvedor Front-end",
    logoLight: Brand01,
    logoDark: Brand02,
    period: "junho/21 até o momento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Prisma",
      "Scrum",
    ],
  },
];
