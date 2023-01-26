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
        <Link href={"/"}>Sobre</Link>
      </li>
      <li>
        <Link href={"/"}>Experiências</Link>
      </li>
      <li>
        <Link href={"/"}>Projetos</Link>
      </li>
      <li>
        <Link href={"/"}>Educação</Link>
      </li>
      <li>
        <Link href={"/"}>Contatos</Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </DesktopNavContainer>
  );
};
