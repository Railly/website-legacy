import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import MainLayout from "components/Layouts/MainLayout";

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
    if (localStorage.theme === undefined) {
      localStorage.theme = "dark";
    }
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
  }, []);

  return (
    <>
      <Head>
        <title>Railly Hugo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleMode={toggleMode} darkMode={darkMode} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default MyApp;
