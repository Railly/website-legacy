import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
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

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(undefined);

  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = "dark";
    }
    localStorage.theme === "light"
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const components = {
    a: Anchor,
    code: (props) => <Code darkMode={darkMode}>{props.children}</Code>,
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    p: Text,
    ul: List.Ul,
    ol: List.Ol,
    li: List.Li,
  };

  return (
    <>
      <Head>
        <title>Railly Hugo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleMode={toggleMode} darkMode={darkMode} />
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
