import type { NextPage } from "next";
import Helmet from "../components/Head";

const Home: NextPage = () => (
  <div>
    <Helmet title="Tellemore | Home" description="Jeffrey Helder, a.k.a. Tellemore's website." />
    <main>
      <h1>tellemore.tech</h1>
      <h3>building your web solutions.</h3>
    </main>
  </div>
);

export default Home;
