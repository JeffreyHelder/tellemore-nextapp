import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/ThemeConfig";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/normalize.css";
import "../styles/global.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => (theme == "light" ? setTheme("dark") : setTheme("light"));

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Layout themeMode={theme} toggleTheme={() => toggleTheme()}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
