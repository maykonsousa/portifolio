import { GeneralContext } from "@/context/GeneralContext";
import { light } from "@/styles/themes";
import Link from "next/link";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MobileNavContainer, ThemeIconContainer } from "./MobileNav.styles";

export const MobileNav = () => {
  const { themeName, toggleTheme, showMobileNav, pathName } =
    useContext(GeneralContext);
  return (
    <MobileNavContainer open={showMobileNav}>
      <ul>
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
