import type { NextPage } from "next";
import Helmet from "../components/Head";
import Typography from "../components/Typography";

const Contact: NextPage = () => (
  <div>
    <Helmet title="Tellemore | Contact" description="Jeffrey Helder's virtual contact card." />
    <Typography type="SectionTitle">This is Contact page</Typography>
  </div>
);

export default Contact;
