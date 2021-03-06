import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="kor">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="GREAT RESET Entertainment"
          />
          <meta
            name="description"
            content="GRE - GREAT RESET Entertainment"
          />
          <meta name="author" content="" />
          <meta name="google" content="notranslate"/>
          <link rel="shortcut icon" href="/img/favicon2.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="notranslate">
          <Main />
          {/* <div id="react-root"></div> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
