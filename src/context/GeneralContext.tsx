import { GetServerSideProps } from "next";
import { setCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes";
import { useRouter } from "next/router";

interface GeneralContextType {
  themeName: "light" | "dark";
  toggleTheme: (name?: "dark" | "light") => void;
  toggleMobileNav: () => void;
  onPrevRedirect: () => void;
  onNextRedirect: () => void;
  showMobileNav: boolean;
  pathName: string;
  prevPath: string | null;
  nextPath: string | null;
}

interface GeneralProviderProps {
  children: React.ReactNode;
  cookieTheme?: "light" | "dark";
}

interface RedirectMapProps {
  prev: string | null;
  next: string | null;
}

interface RedirectMap {
  [key: string]: RedirectMapProps;
}

type ThemeType = typeof light | typeof dark;

export const PathRedirectMap: RedirectMap = {
  "/": {
    prev: "/404",
    next: "/about",
  },
  "/about": {
    prev: "/",
    next: "/experiences",
  },
  "/experiences": {
    prev: "/about",
    next: "/projects",
  },
  "/projects": {
    prev: "/experiences",
    next: "/education",
  },
  "/education": {
    prev: "/projects",
    next: "/contact",
  },
  "/contact": {
    prev: "/education",
    next: "404",
  },
};

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
  const [pathName, setPathName] = useState<string>("/");

  const router = useRouter();

  const prevPath = PathRedirectMap[pathName].prev;
  const nextPath = PathRedirectMap[pathName].next;

  const toggleTheme = (name?: "dark" | "light") => {
    if (name) {
      setThemeName(name);
      setCookie(null, "theme", name, {
        maxAge: 30 * 24 * 60 * 60,
      });
    } else {
      setThemeName(themeName === "light" ? "dark" : "light");
      setCookie(null, "theme", themeName === "light" ? "dark" : "light", {
        maxAge: 30 * 24 * 60 * 60,
      });
    }
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const onPrevRedirect = () => {
    if (prevPath) {
      router.push(prevPath);
    }
  };

  const onNextRedirect = () => {
    if (nextPath) {
      router.push(nextPath);
    }
  };

  useEffect(() => {
    setCookie(null, "theme", themeName, {
      maxAge: 30 * 24 * 60 * 60,
    });
    setTheme(themeName === "light" ? light : dark);

    setPathName(router.asPath);
  }, [themeName, router]);

  return (
    <GeneralContext.Provider
      value={{
        themeName,
        toggleTheme,
        toggleMobileNav,
        onPrevRedirect,
        onNextRedirect,
        showMobileNav,
        prevPath,
        nextPath,
        pathName,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GeneralContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = parseCookies();

  return {
    props: {
      cookieTheme: theme || "dark",
    },
  };
};
