import { GeneralContext } from "@/context/GeneralContext";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeToggleContainer } from "./ThemeToggle.styles";

export const ThemeToggle = () => {
  const { toggleTheme, themeName } = useContext(GeneralContext);

  return (
    <ThemeToggleContainer>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox"
        onChange={() => toggleTheme()}
        checked={themeName === "light" ? true : false}
      />
      <label htmlFor="checkbox" className="label">
        <FaSun />
        <FaMoon />
        <div className="ball" />
      </label>
    </ThemeToggleContainer>
  );
};
