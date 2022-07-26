import type { NextPage } from "next";
import Helmet from "../components/Head";
import Typography from "../components/Typography";
import styled from "styled-components";
import HomeCard from "../components/HomeCards";

const TitleWrapper = styled.div(() => ({
  padding: "60px 0 0 100px",
  "@media screen and (max-width: 840px)": {
    padding: "20px 0 0 20px"
  }
}));

const CardContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "720px",
  marginTop: "60px",
  "& >div": {
    marginRight: "20px"
  },
  "@media screen and (max-width: 680px)": {
    display: "block",
    marginTop: "40px",
    "& >div": {
      marginBottom: "20px",
      marginRight: 0
    }
  }
}));

const Home: NextPage = () => (
  <>
    <Helmet title="Tellemore | Home" description="Jeffrey Helder, a.k.a. Tellemore's website." />
    <TitleWrapper>
      <Typography type="SiteTitle">tellemore.tech</Typography>
      <Typography type="SiteTagline">building your web solutions.</Typography>
      <CardContainer>
        <HomeCard slug="/contact" title="Virtual Contact Card">
          <span className="material-symbols-outlined">contacts</span>
        </HomeCard>
        <HomeCard slug="/work" title="Work & Portfolio">
          <span className="material-symbols-outlined">important_devices</span>
        </HomeCard>
        <HomeCard slug="/about" title="Get To Know Me">
          <span className="material-symbols-outlined">frame_person</span>
        </HomeCard>
      </CardContainer>
    </TitleWrapper>
  </>
);

export default Home;
