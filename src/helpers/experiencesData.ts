import pagsDark from "../assets/pagseguroDark.svg";
import pagsLight from "../assets/pagseguro.svg";
import stefanini from "../assets/stefanini.svg";
import globoDark from "../assets/globo.svg";
import globoLight from "../assets/globoLight.svg";
import sarah from "../assets/sarah.png";
import iges from "../assets/iges.svg";
import { NameTechs } from "@/components/TechButton/TechButton";
import { StaticImageData } from "next/image";
export interface Experience {
  id: number;
  company: string;
  ocupation: string;
  logoLight: string | StaticImageData;
  logoDark: string | StaticImageData;
  logo?: string | StaticImageData;
  period: string;
  description: string;
  techs: NameTechs[];
}

export const ExperiencesData: Experience[] = [
  {
    id: 1,
    company: "PagSeguro Pagbank S.A.",
    ocupation: "Desenvolvedor Front-end",
    logoLight: pagsLight,
    logoDark: pagsDark,
    period: "junho/21 até o momento",
    description:
      "Atuo com sustentação e incremento de novas features para uma plataforma interna utilizada por mais de 4000 colaboradores do nosso time de atendimento e também na manutenção e redesign da nova página de FAQ do Pagseguro.",
    techs: [
      "React",
      "NodeJs",
      "Jenkins",
      "Git",
      "Docker",
      "AWS",
      "Jira",
      "Sass",
      "Kanban",
    ],
  },

  {
    id: 2,
    company: "Stefanini S/A",
    ocupation: "Desenvolvedor Front-end",
    logoLight: stefanini,
    logoDark: stefanini,
    period: "set/2020 até jun/2021",
    description:
      "Atuei em times multidiciplinares apoiando na construção e sustentação de ferramentas webs para grandes clientes como Cassi e Dell. Essa foi a minha primeira experiência formal como desenvolvedor front-end, onde pude aprender muito sobre o mercado de trabalho e sobre o desenvolvimento de software",

    techs: [
      "React",
      "Asp.Net",
      "Red Hat",
      "Git",
      "Docker",
      "Jira",
      "Sass",
      "Kanban",
    ],
  },
  {
    id: 3,
    company: "Instituto de Gestão Estratégica de Saúde do DF",
    ocupation: "Assistente Administrativo",
    logoLight: iges,
    logoDark: iges,
    period: "mai/2020 até jun/2021",
    description:
      "Aprovado em 8º lugar no concurso público, atuei controlando a logística de materiais e medicamentos de um grande hospital público do DF. Durante a pandemia houveram muitas movimentações de materiais aproveitei o conhecimento em desenvolvimento para criar um sistema paralelo de controle de estoque para gerenciar a entrada e saída de itens provenientes de doações e da Secretaria de Saúde que vinham sem nota fiscal.",

    techs: ["React", "NodeJs", "SAP", "Excel"],
  },

  {
    id: 4,
    company: "Rede Globo S/A",
    ocupation: "Almoxarife Técnico",
    logoLight: globoLight,
    logoDark: globoDark,
    period: "Ago/2018 até jun/2019",
    description:
      "Atuei junto a equipe de jornalismo onde era responsável por gerenciar toda a movimentação de ativos de produção, como câmeras, microfones, tripés, veículos etc., controlando entradas, saídas, viagens e manutenções preventivas e corretivas.  Desenvolvi um sistema em Excel para gerenciar a movimentação de equipamentos extras utilizados em produções especiais registrando datas e colaboradores envolvidos e exibia um painel eletrônico com os equipamentos disponíveis para uso.",

    techs: ["Excel"],
  },
  {
    id: 5,
    company: "Rede Sarah de Hospitais",
    ocupation: "Almoxarife",
    logoLight: sarah,
    logoDark: sarah,
    period: "fev/2009 até o maio/2012",
    description:
      "Aprovado em 2º lugar no concurso público, atuei primeiramente no Centro de Distribuição controlando o abastecimento de materiais dos hospitais de Brasília, assim como atendendo à demandas de outros hopitais de toda a rede gerenciando estoques, pontos de ressuprimento entradas de notas fiscais, etc. Criei um sistema em Excel para gerenciamento do estoque que auxiliava na tomada de decisões sobre atendimento de demandas de outros hospitais e também gerava etiquetas de endereçamento de produtos.  Também atuei como almoxarife no Hospital Sarah Kubitschek onde era responsável por gerenciar o estoque da farmácia onde era responsável pelo recebimento e distribuição de medicamentos, controle de validade etc",

    techs: ["SAP", "Excel"],
  },
];
