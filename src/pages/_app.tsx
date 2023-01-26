import { GeneralContextProvider } from "@/context/GeneralContext";
import Global from "@/styles/global";
import { dark } from "@/styles/themes/Dark.theme";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeneralContextProvider>
      <Head>
        <title>Maykon Sousa - Front-End Developer</title>
      </Head>
      <Component {...pageProps} />
      <Global />
    </GeneralContextProvider>
  );
}

//get server side props
