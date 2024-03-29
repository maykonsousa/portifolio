import { Header } from "@/components";
import { GeneralContextProvider } from "@/context/GeneralContext";
import Global from "@/styles/global";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StrapiProvider } from "../config/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrapiProvider>
    <GeneralContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Maykon Sousa - Front-End Developer"
          key="title"
        />
        <meta
          property="og:image"
          content="https://uploaddeimagens.com.br/images/004/315/262/original/print.png?1674793099"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Maykon Sousa - Front-End Developer"
        />
        <meta
          property="og:description"
          content="Desenvolvedor front-end apaixonado por tecnologia, Coca-Cola e doguinhos caramelos."
        />
        <title>Maykon Sousa - Front-End Developer</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Global />
    </GeneralContextProvider>
    </StrapiProvider>
  );
}

//get server side props
