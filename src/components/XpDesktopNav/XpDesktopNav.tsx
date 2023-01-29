import { GeneralContext } from "@/context/GeneralContext";
import { Experience, ExperiencesData } from "@/helpers/experiencesData";
import Image from "next/image";
import React from "react";
import { TechButton } from "../TechButton/TechButton";
import {
  ExperienceDetail,
  ExperienceItem,
  ExperiencesList,
  XpDesktopNavContainer,
} from "./XpDesktopNav.styles";

export const XpDesktopNav = () => {
  const { themeName } = React.useContext(GeneralContext);
  const [activeExperience, setActiveExperience] = React.useState<Experience>(
    ExperiencesData[0]
  );

  const onSetActiveExperience = (id: number) => {
    const experience =
      ExperiencesData.find((item) => item.id === id) || ExperiencesData[0];

    setActiveExperience(experience);
  };
  return (
    <XpDesktopNavContainer>
      <ExperiencesList>
        {ExperiencesData.map(({ id, company, period, logoDark, logoLight }) => (
          <ExperienceItem
            active={activeExperience.id === id}
            key={id}
            onClick={() => onSetActiveExperience(id)}
          >
            <Image
              src={themeName === "dark" ? logoDark : logoLight}
              width={140}
              alt={company}
            />
            <small>{period} </small>
          </ExperienceItem>
        ))}
      </ExperiencesList>
      <ExperienceDetail>
        <h1>{activeExperience.company}</h1>
        <h3>{activeExperience.ocupation}</h3>
        <small>{activeExperience.period}</small>
        <p>{activeExperience.description}</p>
        <ul>
          {activeExperience.techs.map((item) => (
            <TechButton name={item} key={item} />
          ))}
        </ul>
      </ExperienceDetail>
    </XpDesktopNavContainer>
  );
};
