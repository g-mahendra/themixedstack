import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="google-site-verification"
            content="JhXLEtsybBqiyGOlbI2Fu6Q3Dbak5Br1FtKN6Zdu0_E"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://twitter.com/GhargeMahendra"
          />
          <meta
            name="twitter:creator"
            content="https://twitter.com/GhargeMahendra"
          />
          <meta name="robots" content="index,follow"></meta>
          <meta name="googlebot" content="index,follow"></meta>
          <meta
            property="article:author"
            content="https://themixedstack.com/about"
          ></meta>
        </Head>
        <body className="bg-white dark:bg-main text-black dark:text-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
