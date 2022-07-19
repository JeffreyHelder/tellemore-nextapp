import type { NextPage } from "next";
import { useEffect } from "react";
import Helmet from "../components/Head";
import Header from "../components/Header";
import { useTheme } from "styled-components";

const Home: NextPage = () => {
  const theme = useTheme();

  useEffect(() => {
    console.log(theme);
  });

  return (
    <div>
      <Helmet title="Tellemore | Home" description="Jeffrey Helder, a.k.a. Tellemore's website." />
      <Header />
      <main>
        <h1>This is Homepage</h1>
      </main>
    </div>
  );
};

export default Home;
