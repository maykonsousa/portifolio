import { GetServerSideProps } from "next";
import { setCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes";

interface GeneralContextType {
  themeName: "light" | "dark";
  toggleTheme: () => void;
  toggleMobileNav: () => void;
  showMobileNav: boolean;
}

interface GeneralProviderProps {
  children: React.ReactNode;
  cookieTheme?: "light" | "dark";
}

type ThemeType = typeof light | typeof dark;

//create context
export const GeneralContext = createContext<GeneralContextType>({
  themeName: "light" || "dark",
} as GeneralContextType);

//create provider
export const GeneralContextProvider = ({ children }: GeneralProviderProps) => {
  const cookieTheme = parseCookies().theme as "light" | "dark";
  const [themeName, setThemeName] = useState<"light" | "dark">(
    cookieTheme || "dark"
  );
  const [theme, setTheme] = useState<ThemeType>(dark);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    setCookie(null, "theme", themeName === "light" ? "dark" : "light", {
      maxAge: 30 * 24 * 60 * 60,
    });
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    setCookie(null, "theme", themeName, {
      maxAge: 30 * 24 * 60 * 60,
    });
    setTheme(themeName === "light" ? light : dark);
  }, [themeName]);

  return (
    <GeneralContext.Provider
      value={{ themeName, toggleTheme, toggleMobileNav, showMobileNav }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GeneralContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = parseCookies();
  console.log(ctx);

  console.log("theme server", ctx);
  return {
    props: {
      cookieTheme: theme || "dark",
    },
  };
};
