import type { NextPage } from "next";
import Helmet from "../components/Head";
import Header from "../components/Header";

const Work: NextPage = () => (
  <div>
    <Helmet title="Tellemore | Work" description="Jeffrey Helder's work portfolio" />
    <Header />
    <main>
      <h1>This is Work page</h1>
    </main>
  </div>
);

export default Work;
