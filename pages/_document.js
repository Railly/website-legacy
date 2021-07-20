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
          <body className="bg-white dark:bg-gray-800">
            <Main />
            <NextScript />
          </body>
        </Html>
        <style jsx global>{`
          *::selection {
            background: #d1fae5; /* WebKit/Blink Browsers */
          }
          *::-moz-selection {
            background: #d1fae5; /* Gecko Browsers */
          }

          .dark *::selection {
            background: #fcd34d33; /* WebKit/Blink Browsers */
          }
          .dark *::-moz-selection {
            background: #fcd34d33; /* Gecko Browsers */
          }
        `}</style>
      </>
    );
  }
}
