import type { NextPage } from "next";
import Helmet from "../components/Head";
import Typography from "../components/Typography";

const Home: NextPage = () => (
  <>
    <Helmet title="Tellemore | Home" description="Jeffrey Helder, a.k.a. Tellemore's website." />
    <Typography type="SiteTitle">tellemore.tech</Typography>
    <Typography type="SiteTagline">building your web solutions.</Typography>
  </>
);

export default Home;
