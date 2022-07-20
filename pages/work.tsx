import type { NextPage } from "next";
import Helmet from "../components/Head";
import Typography from "../components/Typography";

const Work: NextPage = () => (
  <div>
    <Helmet title="Tellemore | Work" description="Jeffrey Helder's work portfolio" />
    <Typography type="SectionTitle">This is Work page</Typography>
  </div>
);

export default Work;
