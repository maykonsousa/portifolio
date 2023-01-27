import { GeneralContext } from "@/context/GeneralContext";
import { light } from "@/styles/themes";
import Link from "next/link";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MobileNavContainer, ThemeIconContainer } from "./MobileNav.styles";

export const MobileNav = () => {
  const { themeName, toggleTheme, showMobileNav } = useContext(GeneralContext);
  return (
    <MobileNavContainer open={showMobileNav}>
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
            <ThemeIconContainer
              active={themeName === "light"}
              onClick={() => toggleTheme("light")}
            >
              <FaSun size={24} />
            </ThemeIconContainer>

            <ThemeIconContainer
              active={themeName === "dark"}
              onClick={() => toggleTheme("dark")}
            >
              <FaMoon size={24} />
            </ThemeIconContainer>
          </div>
        </li>
      </ul>
    </MobileNavContainer>
  );
};
