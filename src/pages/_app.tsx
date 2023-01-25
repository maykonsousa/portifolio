import Global from "@/styles/global";
import { dark } from "@/styles/themes/Dark.theme";
import { light } from "@/styles/themes/Light.theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Head>
        <title>Maykon Sousa - Front-End Developer</title>
      </Head>
      <Component {...pageProps} />
      <Global />
    </ThemeProvider>
  );
}
