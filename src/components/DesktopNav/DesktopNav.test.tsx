import { dark } from "@/styles/themes";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DesktopCardEducation } from "../DesktopCardEducation/DesktopCardEducation";
import { DesktopNav } from "./DesktopNav";
import "@testing-library/jest-dom";

const createComponent = () => {
  return render(
    <ThemeProvider theme={dark}>
      <DesktopNav />
    </ThemeProvider>
  );
};

describe("DesktopNav", () => {
  it("should render", () => {
    const { container } = createComponent();
    expect(container).toBeTruthy();
  });

  it("should be able to render the links", () => {
    const { getByText } = createComponent();

    const home = getByText("Home");
    const about = getByText("Sobre");
    const experiences = getByText("Experiências");
    const projects = getByText("Projetos");
    const education = getByText("Educação");
    const contact = getByText("Contatos");

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(experiences).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(education).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });
});

