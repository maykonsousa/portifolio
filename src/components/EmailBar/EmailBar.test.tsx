import { dark } from "@/styles/themes";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { EmailBar } from "./EmailBar";

const createComponent = () => {
  return render(
    <ThemeProvider theme={dark}>
      <EmailBar />
    </ThemeProvider>
  );
};

describe("EmailBar", () => {
  it("should render", () => {
    const { container } = createComponent();
    expect(container).toBeTruthy();
  });

  it("should be able to render the email", () => {
    const { getByText } = createComponent();
    const email = getByText("maykon.sousa@hotmail.com");
    expect(email).toBeInTheDocument();
  });
});

