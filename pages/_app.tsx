import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/ThemeConfig"; 
import type { AppProps } from 'next/app'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
