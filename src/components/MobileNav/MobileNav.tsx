import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MobileNavContainer, ThemeIconContainer } from "./MobileNav.styles";

export const MobileNav = () => {
  return (
    <MobileNavContainer>
      <ul>
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
          <div>
            <ThemeIconContainer active={false}>
              <FaSun size={24} />
            </ThemeIconContainer>

            <ThemeIconContainer active={false}>
              <FaMoon size={24} />
            </ThemeIconContainer>
          </div>
        </li>
      </ul>
    </MobileNavContainer>
  );
};
