import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin={true.toString()}
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body className="selection:bg-indigo-200 dark:selection:bg-purple-800/70 bg-white dark:bg-gray-800">
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
