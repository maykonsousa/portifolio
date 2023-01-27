import { Html, Head, Main, NextScript } from "next/document";

import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Global from "@/styles/global";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <meta
              property="og:title"
              content="Maykon Sousa - Front-End Developer"
              key="title"
            />
            {/* <meta
            property="og:image"
            content="https://uploaddeimagens.com.br/images/004/300/801/original/Screenshot_from_2023-01-16_14-34-49.png?1673890503"
          /> */}
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
              property="og:image:alt"
              content="Maykon Sousa - Front-End Developer"
            />
            <meta
              property="og:description"
              content="Desenvolvedor front-end apaixonado por tecnologia, Coca-cola e doguinhos caramelos."
            />
          </Head>
          <body>
            <Main />

            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
