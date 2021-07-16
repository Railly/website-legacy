import "tailwindcss/tailwind.css";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import Heading from "components/Markdown/Heading";
import Text from "components/Markdown/Text";
import MainLayout from "components/Layouts/MainLayout";
import Anchor from "components/Markdown/Anchor";
import List from "components/Markdown/List";
import Code from "components/Markdown/Pre";

const components = {
  a: Anchor,
  code: Code,
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Text,
  ul: List.Ul,
  ol: List.Ol,
  li: List.Li,
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Railly Hugo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MDXProvider components={components}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MDXProvider>
      <Footer />
    </>
  );
}

export default MyApp;
