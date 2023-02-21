import { IEducationData } from "@/components";
import IgniteReactImg from "@/assets/courses/react-js.svg";
import FigmaForDevsImg from "@/assets/courses/react-js.svg";
import ReactNativeImg from "@/assets/courses/react-native.svg";

export const EducationData: IEducationData[] = [
  {
    id: 1,
    year: "2022",
    duration: "100 horas",
    title: "Ignite - ReactJS",
    description:
      "Curso completo de ReactJS Abordando as versõers mais atualizadas inclundo ferramentas como NextJS, Typescript, Context API, Hooks, Styled Components, entre outras. Curso focado 100% na prática.",
    image: IgniteReactImg,
    link: "https://rocketseat.com.br/ignite",
    school: "Rocketseat",
    teacher: {
      name: "Diego Fernandes",
      website: "https://rocketseat.com.br/",
      avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
      likedin: "https://www.linkedin.com/in/diego-schell-fernandes/",
      github: "https://github.com/diego3g",
    },
  },
  {
    id: 2,
    year: "2022",
    duration: "2 horas",
    title: "Figma for Devs",
    description:
      "Um curso ensinando usar a ferramenta de prototipação Figma sob o ponto de vista de um desenvolvedor incluindo fundamentos do Figma, migração de projeto de UI para código HTML/CSS, integração e automatização entre design tokens do Figma com o GitHub Actions.",
    image: FigmaForDevsImg,
    link: "https://rocketseat.com.br/",
    school: "Rocketseat",
    teacher: {
      name: "Diego Fernandes",
      website: "https://rocketseat.com.br/",
      avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
      likedin: "https://www.linkedin.com/in/diego-schell-fernandes/",
      github: "https://github.com/diego3g",
    },
  },
  {
    id: 3,
    year: "2021",
    duration: "1 mês",
    title: "React Native",
    description: "Curso de React Native",
    image: ReactNativeImg,
    link: "https://reactnative.dev/",
    school: "React Native",
    teacher: {
      name: "Diego Fernandes",
      website: "https://rocketseat.com.br/",
      avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
      likedin: "https://www.linkedin.com/in/diego-schell-fernandes/",
      github: "https://github.com/diego3g",
    },
  },
];

