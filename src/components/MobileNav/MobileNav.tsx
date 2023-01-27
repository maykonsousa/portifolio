import { GeneralContext } from "@/context/GeneralContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MobileNavContainer, ThemeIconContainer } from "./MobileNav.styles";

export const MobileNav = () => {
  const { themeName, toggleTheme, showMobileNav, pathName, toggleMobileNav } =
    useContext(GeneralContext);
  return (
    <MobileNavContainer open={showMobileNav}>
      <div>
        <button onClick={toggleMobileNav}>
          <IoClose size={24} />
        </button>
      </div>
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
