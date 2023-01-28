import { Main, SlideAbout } from "@/components";
import ProfileImg from "@/assets/profileAbout.jpg";
import {
  AboutContent,
  AboutImage,
  AboutPageContainer,
  TechContainer,
} from "@/styles/pages/About.styles";
import Image from "next/image";

import React from "react";
import {
  FaAws,
  FaBootstrap,
  FaFigma,
  FaJenkins,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { DiScrum } from "react-icons/di";

const About = () => {
  const getAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = getAge("1984-08-08");

  return (
    <>
      <Main>
        <AboutPageContainer>
          <AboutImage>
            <SlideAbout />
          </AboutImage>
          <AboutContent>
            <h1>Sobre mim</h1>
            <p>
              Bom eu tenho <span>{age}</span> anos, casado, pai de três filhos e
              atualmente moramos em João pessoa, Paraíba, Brazil. Atuei com
              muito tempo com apoio administrativo e logística em instituições
              públicas e privadas até que mem 2020 resolvi migrar para a área de
              tecnologia e tenho atuado com desenvolvimento web desde então.
            </p>
            <p>
              Atualmente trabalho na empresa{" "}
              <strong>Pagseguro Pagbank S/A</strong> como desenvolvedor
              front-end, onde atuo com desenvolvimento de novas funcionalidades
              e manutenção de plataformas internas voltadas para o atendimento.
              Abaixo listo algumas tecnologias que tenho atuado:
            </p>

            <TechContainer>
              <li>
                <FaReact size={20} /> React
              </li>

              <li>
                <FaNodeJs size={20} />
                Node.JS
              </li>

              <li>
                <FaJenkins size={20} /> Jenkins
              </li>
              <li>
                <FaAws size={20} /> AWS
              </li>
              <li>
                <SiPrisma size={20} /> Prisma
              </li>
              <li>
                <FaBootstrap size={20} />
                Bootstrap
              </li>
              <li>
                <DiScrum size={20} /> Scrum
              </li>
              <li>
                <FaFigma size={20} /> Figma
              </li>
            </TechContainer>
          </AboutContent>
        </AboutPageContainer>
      </Main>
    </>
  );
};

export default About;
