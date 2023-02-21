import "@testing-library/jest-dom";
import { EducationData } from "@/helpers/educationData";
import { dark } from "@/styles/themes";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import IgniteReactImg from "@/assets/courses/react-js.svg";

import {
  DesktopCardEducation,
  IDesktopCardEducationProps,
} from "./DesktopCardEducation";

const mockData = {
  id: 1,
  year: "2022",
  duration: "100 horas",
  title: "Ignite - ReactJS",
  description:
    "Curso completo de ReactJS Abordando as versõers mais atualizadas inclundo ferramentas como NextJS, Typescript, Context API, Hooks, Styled Components, entre outras. Curso focado 100% na prática.",
  image: IgniteReactImg.src,
  link: "https://rocketseat.com.br/ignite",
  school: "Rocketseat",
  teacher: {
    name: "Diego Fernandes",
    website: "https://rocketseat.com.br/",
    avatar: "https://avatars.githubusercontent.com/u/2254731?v=4",
    likedin: "https://www.linkedin.com/in/diego-schell-fernandes/",
    github: "https://github.com/diego3g",
  },
};
const createComponent = (
  props: IDesktopCardEducationProps = {} as IDesktopCardEducationProps
) => {
  return render(
    <ThemeProvider theme={dark}>
      <DesktopCardEducation {...props} />
    </ThemeProvider>
  );
};

const handleActive = jest.fn();

describe("DesktopCardEducation", () => {
  it("should render", () => {
    const { container } = createComponent({
      data: mockData,
      isActive: false,
      isLast: false,
      handleActive,
    });
    expect(container).toBeTruthy();
  });

  it("should be able to render the aside informations", () => {
    const { getByText } = createComponent({
      data: mockData,
      isActive: false,
      isLast: false,
      handleActive,
    });

    const year = getByText("2022");
    const title = getByText("Ignite - ReactJS");
    const duration = getByText("100 horas");

    expect(year).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });

  it("should be able to call the handleActive function", () => {
    const { getByText } = createComponent({
      data: mockData,
      isActive: false,
      isLast: false,
      handleActive,
    });

    const aside = getByText("2022");
    aside.click();

    expect(handleActive).toHaveBeenCalled();
  });

  it("should be able to render the main informations", () => {
    const { getByText } = createComponent({
      data: mockData,
      isActive: true,
      isLast: false,
      handleActive,
    });

    const school = getByText("Rocketseat");
    const description = getByText(
      "Curso completo de ReactJS Abordando as versõers mais atualizadas inclundo ferramentas como NextJS, Typescript, Context API, Hooks, Styled Components, entre outras. Curso focado 100% na prática."
    );
    const nameTeacher = getByText("Diego Fernandes");
    expect(school).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(nameTeacher).toBeInTheDocument();
  });

  it("should be able to render the border with the last class", () => {
    const { container } = createComponent({
      data: mockData,
      isActive: false,
      isLast: true,
      handleActive,
    });

    const aside = container.querySelector("aside");
    expect(aside).toHaveClass("last");
  });
});

