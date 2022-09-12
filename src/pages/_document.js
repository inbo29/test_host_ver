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
            content="G.R.E - GREAT RESET Entertainment"
          />
          <meta name="robots" content="index, follow"/>
          <meta name="title" content="G.R.E - Entertainment"/>
          
          <meta name="author" content="GREAT RESET Entertainment" />
          <meta name="keywords" content="G.R.E - Entertainment,great,great reset entertainment, great reset, GRE, g r e, gre, G R E,그레이트리셋엔터테이먼트,그레이트,리셋,그레이트리셋, 그레이트 리셋, Maniac, uranus, minshik, 매니악, 오라노스, 오양가, uyanga, 민식, 사인히어"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="G.R.E - Entertainment" />
          <meta property="og:description" content="G.R.E - Entertainment" />
          <meta property="og:site_name" content="GREAT RESET ENTERTAINMENT"/>
          <meta property="og:image" content="https://i.ibb.co/64kcYyL/great-reset-png.png"/>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="G.R.E - Entertainment" />
          <meta name="twitter:description" content="G.R.E - Entertainment" />
          <meta property="twitter:image" content="https://i.ibb.co/64kcYyL/great-reset-png.png"/>
          <meta name="twitter:image:width" content="1024" />
          <meta name="twitter:image:height" content="512" />

          <meta name="google" content="notranslate"/>
          <link rel="canonical" href="https://www.greatreset.io/"/>

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
