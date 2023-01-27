import { GeneralContext } from "@/context/GeneralContext";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DesktopNavContainer } from "./DesktopNav.styles";

export const DesktopNav = () => {
  const { pathName } = useContext(GeneralContext);

  console.log(pathName);

  return (
    <DesktopNavContainer>
      <li className={pathName === "/" ? "active" : ""}>
        <Link href={"/"}>Home</Link>
      </li>

      <li className={pathName === "/about" ? "active" : ""}>
        <Link href={"/about"}>Sobre</Link>
      </li>
      <li className={pathName === "/experiences" ? "active" : ""}>
        <Link href={"/experiences"}>Experiências</Link>
      </li>
      <li className={pathName === "/projects" ? "active" : ""}>
        <Link href={"/projects"}>Projetos</Link>
      </li>
      <li className={pathName === "/education" ? "active" : ""}>
        <Link href={"/education"}>Educação</Link>
      </li>
      <li className={pathName === "/contact" ? "active" : ""}>
        <Link href={"/contact"}>Contatos</Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </DesktopNavContainer>
  );
};
