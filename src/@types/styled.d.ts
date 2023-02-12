import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      text: string;
      "background-content": string;
      "link-hover": string;
      "zinc-100": string;
      "zinc-200": string;
      "zinc-300": string;
      "zinc-400": string;
      "zinc-500": string;
      "zinc-600": string;
      "zinc-700": string;
      "zinc-800": string;
      "zinc-900": string;
      "purple-500": string;
      "purple-600": string;
      "green-500": string;
      "green-600": string;
    };
  }
}

