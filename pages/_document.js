import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
            integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
            crossorigin="anonymous"
          />
          {/* <link rel="icon" href="/static/images/logo.png"></link> */}
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          ></link>
      

          <meta name="title" content="Yetubrand" />
          <meta
            name="description"
            content="A Yetubrand é uma agência criativa, sediada no Talatona. O nosso foco é acrescentar valor à sua marca."
          />
          <meta
            name="keywords"
            content="Marketing , Digital, Angola, Luanda , Design , Programação, Inovação"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="rating" content="general" />
          <meta name="DC.creator.address" content="geral@yetubrand.com" />
          <meta name="DC.publisher" content="Yetubrand" />
          <meta name="DC.Identifier" content="http://yetubrand.com" />
          <meta name="DC.type" content="text.homepage.institucional" />

          <meta property="og:title" content="Yetubrand guiamos marcas" />
          <meta
            property="og:description"
            content="Somos a bússola de marcas que almejam atingir a plenitude nos seus negócios, e para isso, contamos com uma equipa jovem com ideias inovadoras"
          />
          <meta
            property="og:image"
            content="https://yetubrand.com/static/images/logo-yetubrand-white.webp"
          />
          <meta property="og:url" content="https://yetubrand.com/"></meta>

          <title> Yetubrand </title>
        </Head>

        <body>
          <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
