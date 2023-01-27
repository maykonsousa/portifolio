import Image from "next/image";
import React from "react";
import { UnderContructionContainer } from "./Underconstruction.styles";
import ConstructionImg from "@/assets/construction.svg";

export const UnderConstruction = () => {
  return (
    <UnderContructionContainer>
      <Image src={ConstructionImg} alt="construção" width={360} />
      <h1>Calma gafanhotoooo!</h1>
      <p>Ainda estou trabalhando nessa feature</p>
    </UnderContructionContainer>
  );
};
