import type { NextPage } from "next";
import Helmet from "../components/Head";
import Header from "../components/Header";

const About: NextPage = () => (
  <div>
    <Helmet title="Tellemore | About" description="About Jeffrey Helder, a.k.a. Tellemore." />
    <Header />
    <main>
      <h1>This is About page</h1>
    </main>
  </div>
);

export default About;
