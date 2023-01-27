import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DesktopNavContainer } from "./DesktopNav.styles";

export const DesktopNav = () => {
  return (
    <DesktopNavContainer>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>Sobre</Link>
      </li>
      <li>
        <Link href={"/experiences"}>Experiências</Link>
      </li>
      <li>
        <Link href={"/projects"}>Projetos</Link>
      </li>
      <li>
        <Link href={"/education"}>Educação</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contatos</Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </DesktopNavContainer>
  );
};
