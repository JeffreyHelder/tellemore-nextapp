import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/ThemeConfig";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/normalize.css";
import "../styles/global.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  //Detect if screen is mobile sized and set isMobile
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 840) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  //Theme controller
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => (theme == "light" ? setTheme("dark") : setTheme("light"));

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Layout isMobile={isMobile} lightMode={theme == "light" ? true : false} toggleTheme={() => toggleTheme()}>
        <Component {...pageProps} isMobile={isMobile} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
