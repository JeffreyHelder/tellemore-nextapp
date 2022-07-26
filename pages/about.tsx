import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Helmet from "../components/Head";
import SectionHeader from "../components/SectionHeader";
import Typography from "../components/Typography";
import AboutProfile from "../public/jeffrey.png";

const PageWrapper = styled.div(({}) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "940px",
  margin: "auto"
}));

const AboutWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  margin: "80px auto 0 auto",
  "& .about-page-text-container": {
    width: "80%",
    maxWidth: "640px",
    "& >p:first-child": {
      marginBottom: "24px"
    }
  }
}));

const AboutVideoWrapper = styled.div(({}) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  marginTop: "80px",
  "& .about-video-inner-container": {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    height: 0,
    width: "100%",
    "& >iframe, video": {
      width: "100%",
      height: " 100%",
      position: "absolute"
    }
  }
}));

const About: NextPage = ({ isMobile }: any) => (
  <div>
    <Helmet title="Tellemore | About" description="About Jeffrey Helder, a.k.a. Tellemore." />
    <PageWrapper>
      <SectionHeader title="about" />
      <AboutWrapper>
        <div className="about-page-text-container">
          <Typography type="SectionBody">
            Hi. I’m Jeffrey Helder. I write code, plan web-apps, and make graphics. To be more technical, I am a react developer, ui/ux strategist and a graphic designer.
          </Typography>
          <Typography type="SectionBody">
            I enjoy making single-page webapps, working with vector graphics, simple motion graphics, 3d productions, and learning new media skills.
          </Typography>
        </div>
        <Image width={isMobile ? "82px" : "165px"} height={isMobile ? "145px" : "291px"} src={AboutProfile} alt="jeffrey helder image" />
      </AboutWrapper>
      <AboutVideoWrapper>
        <div className="about-video-inner-container">
          <iframe
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </AboutVideoWrapper>
    </PageWrapper>
  </div>
);

export default About;
