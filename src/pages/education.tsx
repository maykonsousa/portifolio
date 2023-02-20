import { DesktopCardEducation, Main } from "@/components";
import {
  EducationNavDesktop,
  EducationPageContainer,
} from "@/styles/pages/Education.styles";
import React, { useState } from "react";

import { IEducationData } from "@/components";
import IgniteReactImg from "@/assets/courses/react-js.svg";
import FigmaForDevsImg from "@/assets/courses/figma.svg";
import ReactNativeImg from "@/assets/courses/react-native.svg";
import UdemyImg from "@/assets/courses/udemy.svg";
import JamiltonImg from "@/assets/courses/jamilton.jpeg";

export const EducationData: IEducationData[] = [
  {
    id: 1,
    year: "2022",
    duration: "100 horas",
    title: "Ignite - ReactJS",
    description:
      "Curso completo de ReactJS Abordando as versõers mais atualizadas inclundo ferramentas como NextJS, Typescript, Context API, Hooks, Styled Components, entre outras. Curso focado 100% na prática.",
    image: IgniteReactImg.src,
    link: "https://www.rocketseat.com.br/",
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
    image: FigmaForDevsImg.src,
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
    duration: "100 horas",
    title: "Ignite - NodeJS",
    description:
      "Curso intensivo de NodeJS, incluindo fundamentos, testes, TDD, DDD, SOLID, Clean Architecture e muito mais! Além disso o curso aborda as versões mais atualizadas do NodeJS incluindo ferramentas como Typescript, Jest, Docker,  Serveless, Prisma entre outras.",
    image: ReactNativeImg.src,
    link: "https://rocketseat.com.br/",
    school: "Rocketseat",
    teacher: {
      name: "Daniele Leão Evangelista",
      website: "https://www.youtube.com/@DanieleLeao",
      avatar: "https://avatars.githubusercontent.com/u/5041791?v=4",
      likedin: "https://www.linkedin.com/in/danieleleaoevangelista/",
      github: "https://github.com/danileao",
    },
  },
  {
    id: 4,
    year: "2020",
    duration: "115 horas",
    title: "Desenvolvimento Web Completo",
    description:
      "Curso completo de desenvolvimento web incluindo HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP, MySQL, Laravel, WordPress, ReactJS, VueJS, NodeJS, Angular, Ionic, SEO, entre outros.",
    image: UdemyImg.src,
    link: "https://www.udemy.com/course/web-completo/",
    school: "React Native",
    teacher: {
      name: "Jamilton Damasceno",
      website: "https://jamiltondamasceno.com.br/",
      avatar: JamiltonImg.src,
      likedin: "https://www.linkedin.com/in/danieleleaoevangelista/",
      github: null,
    },
  },
];

const Education = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id: number) => {
    setActive(id);
  };
  return (
    <>
      <Main>
        <EducationPageContainer>
          <h1>Educação</h1>
          <p>
            Abaixo listo os cursos que tenhio feito não só para mostrar o que
            tenho aprendido mas também para indicar os cursos para quem também
            está buscando se desenvolver
          </p>

          <EducationNavDesktop>
            {EducationData.map((item, index) => (
              <DesktopCardEducation
                key={item.id}
                data={item}
                isActive={active === item.id}
                isLast={index === EducationData.length - 1}
                handleActive={handleActive}
              />
            ))}
          </EducationNavDesktop>
        </EducationPageContainer>
      </Main>
    </>
  );
};

export default Education;

