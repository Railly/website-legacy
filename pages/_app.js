import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Railly Hugo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
