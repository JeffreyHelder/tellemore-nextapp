import type { NextPage } from "next";
import Helmet from "../components/Head";
import Typography from "../components/Typography";

const About: NextPage = () => (
  <div>
    <Helmet title="Tellemore | About" description="About Jeffrey Helder, a.k.a. Tellemore." />
    <Typography type="SectionTitle">This is About page</Typography>
  </div>
);

export default About;
