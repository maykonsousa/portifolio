import React from 'react'
import { Main } from '../Main/Main'
import { AboutContent, AboutImage, AboutPageContainer, TechContainer } from './About.styles'
import { SlideAbout } from '../SlideAbout/SlideAbout'
import { TechButton } from '../TechButton/TechButton'
import { useQuery } from '@apollo/client'
import { GetExperiencesDocument } from '@/gql/graphql'

export const AboutPage = () => {
  const {data} = useQuery(GetExperiencesDocument)
  console.log(data?.experiences?.data)
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
          <TechButton name="React" />
          <TechButton name="NodeJs" />
          <TechButton name="Jenkins" />
          <TechButton name="AWS" />
          <TechButton name="Prisma" />
          <TechButton name="Bootstrap" />
          <TechButton name="Figma" />
          <TechButton name="Scrum" />
        </TechContainer>
      </AboutContent>
    </AboutPageContainer>
  </Main>
  )
}
