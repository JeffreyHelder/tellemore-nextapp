import type { NextPage } from "next";
import ContactCard from "../components/ContactCard";
import Helmet from "../components/Head";

const Contact: NextPage = ({ isMobile }: any) => (
  <div>
    <Helmet title="Tellemore | Contact" description="Jeffrey Helder's virtual contact card." />
    <ContactCard isMobile={isMobile} />
  </div>
);

export default Contact;
