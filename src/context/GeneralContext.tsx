import { GetServerSideProps } from "next";
import { setCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes";
import { useRouter } from "next/router";
import { IProjectData, projectsData } from "@/helpers/projectsData";
import { sendMailService } from "@/services/sendMailService";

export interface GeneralContextType {
  themeName: "light" | "dark";
  toggleTheme: (name?: "dark" | "light") => void;
  toggleMobileNav: () => void;
  onPrevRedirect: () => void;
  onNextRedirect: () => void;
  onOpenVideoModal: () => void;
  onCloseVideoModal: () => void;
  onSelectProject: (project: IProjectData) => void;
  onSendEmail: () => void;
  unSelectProject: () => void;
  onCancelSendEmail: () => void;
  onSendWhatsAppMessage: () => void;
  handleChangeFormState: ({ name, value }: IInputProps) => void;
  formState: ISendEmailData;
  projectSelected: IProjectData | null;
  projects: IProjectData[];
  openVideoModal: boolean;
  showMobileNav: boolean;
  pathName: string;
  prevPath: string | null;
  nextPath: string | null;
  sendEmailState: ISendEmailProps;
}

interface GeneralProviderProps {
  children: React.ReactNode;
  cookieTheme?: "light" | "dark";
}

interface ISendEmailProps {
  status: "success" | "error" | "loading" | "redirect" | null;
  message: string;
}

interface RedirectMapProps {
  prev: string | null;
  next: string | null;
}

interface RedirectMap {
  [key: string]: RedirectMapProps;
}

export interface ISendEmailData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface IInputProps {
  name: string;
  value: string;
}

type ThemeType = typeof light | typeof dark;

//mapping de rotas
export const PathRedirectMap: RedirectMap = {
  "/": {
    prev: null,
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
    next: null,
  },
};

const initialSendEmailState: ISendEmailProps = {
  status: null,
  message: "",
};
const initialFormState: ISendEmailData = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

//create context
export const GeneralContext = createContext<GeneralContextType>({
  themeName: "light" || "dark",
} as GeneralContextType);

//create provider
export const GeneralContextProvider = ({ children }: GeneralProviderProps) => {
  //estados globais
  const cookieTheme = parseCookies().theme as "light" | "dark";
  const [themeName, setThemeName] = useState<"light" | "dark">(
    cookieTheme || "dark"
  );
  const [theme, setTheme] = useState<ThemeType>(dark);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("/");
  const [openVideoModal, setOpenVideoModal] = useState<boolean>(false);
  const [projectSelected, setProjectSelected] = useState<IProjectData | null>(
    null
  );

  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [sendEmailState, setSendEmailState] = useState<ISendEmailProps>(
    initialSendEmailState
  );
  const [formState, setFormState] = useState<ISendEmailData>(initialFormState);

  const onSelectProject = (project: IProjectData) => {
    project ? setProjectSelected(project) : null;
  };

  const unSelectProject = () => {
    setProjectSelected(null);
  };

  //troca de tema
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

  // abre e fecha o menu mobile
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  //navegação pelas setas
  const router = useRouter();
  const prevPath = PathRedirectMap[pathName].prev;
  const nextPath = PathRedirectMap[pathName].next;
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

  const onOpenVideoModal = () => {
    setOpenVideoModal(true);
  };

  const onCloseVideoModal = () => {
    setOpenVideoModal(false);
  };

  const handleChangeFormState = ({ name, value }: IInputProps) => {
    setFormState({ ...formState, [name]: value });
  };

  const onSendEmail = async () => {
    setSendEmailState({ message: "Enviando e-mail", status: "loading" });

    try {
      await sendMailService(formState);
      setSendEmailState({
        status: "success",
        message: "E-mail enviado com sucesso!",
      });
    } catch {
      setSendEmailState({
        status: "error",
        message: "Erro ao enviar e-mail! Deseja enviar via Whatsapp?",
      });
    }
  };

  const onCancelSendEmail = () => {
    setSendEmailState(initialSendEmailState);
  };

  const onSendWhatsAppMessage = async () => {
    setSendEmailState({
      message: "Abrindo o Whatsapp Web...",
      status: "redirect",
    });

    setTimeout(() => {
      const url = `https://api.whatsapp.com/send?phone=5561992943297&text=`;
      const message = `*MENSAGEM ENVIADA PELO SITE*%0A%0A
    *Nome:* ${formState.name}%0A
    *E-mail:* ${formState.email}%0A
    *Telefone:* ${formState.phone}%0A
    *Mensagem:*%0A%0A 
    ${formState.message}`;
      window.open(`${url}${message}`, "_blank");
    }, 2000);

    setTimeout(() => {
      setSendEmailState(initialSendEmailState);
    }, 2000);
  };

  useEffect(() => {
    setCookie(null, "theme", themeName, {
      maxAge: 30 * 24 * 60 * 60,
    });
    setTheme(themeName === "light" ? light : dark);

    setPathName(router.asPath);
  }, [themeName, router]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        toggleTheme,
        toggleMobileNav,
        onPrevRedirect,
        onNextRedirect,
        onOpenVideoModal,
        onCloseVideoModal,
        onSelectProject,
        unSelectProject,
        onSendEmail,
        onCancelSendEmail,
        onSendWhatsAppMessage,
        handleChangeFormState,
        formState,
        themeName,
        projectSelected,
        projects,
        openVideoModal,
        showMobileNav,
        prevPath,
        nextPath,
        pathName,
        sendEmailState,
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

