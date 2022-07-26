import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import ContactCardButton from "./ContactCardButton";
import Typography from "./Typography";
import CardProfile from "../public/cardProfile.png";

type ContactCardProps = {
  isMobile: boolean;
};

const ContactCardStyle = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: "24px",
  margin: "20px auto 0 auto",
  width: "calc(416px - 48px)",
  height: "calc(578px - 48px)",
  backgroundColor: theme.palette.black,
  borderRadius: "40px 40px 12px 12px",
  overflow: "hidden",
  "@media screen and (max-width: 840px)": {
    margin: 0,
    padding: "24px 0 0 0",
    width: "100vw",
    borderRadius: 0,
    height: "calc(100vh - 54px - 24px)"
  },
  "&:before": {
    position: "absolute",
    content: "''",
    top: 0,
    left: 0,
    width: "100%",
    height: "98px",
    backgroundColor: theme.palette.purple
  },
  "& .contact-card-inner": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "min-content",
    margin: "0 auto",
    "& .contact-card-button-group": {
      marginTop: "10px"
    },
    "& .contact-card-image": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "174px",
      height: "174px",
      margin: " 0 auto",
      borderRadius: "87px",
      backgroundColor: theme.palette.black
    }
  },
  "& .contact-card-info": {
    textAlign: "center",
    "& >*:nth-child(2)": {
      marginTop: "6px"
    }
  }
}));

const ContactCard = ({ isMobile }: ContactCardProps) => (
  <ContactCardStyle>
    <div className="contact-card-inner">
      <div className="contact-card-image">
        <Image width={isMobile ? "125px" : "150px"} height={isMobile ? "125px" : "150px"} src={CardProfile} alt="profile picture of Jeffrey Helder" />
      </div>
      <div className="contact-card-info">
        <Typography type="CardName">Jeffrey Helder</Typography>
        <Typography type="CardTitle">Web Developer & UI/UX Strategist</Typography>
      </div>
      <div className="contact-card-button-group">
        <ContactCardButton buttonType="download" displayName="Save Contact" isMobile={isMobile} target="https://www.tellemore.tech/jeffreyhelder.vcf">
          <span className="material-symbols-rounded">file_download</span>
        </ContactCardButton>
        <ContactCardButton buttonType="phone" displayName="647-215-6891" isMobile={isMobile} target="16472156891">
          <span className="material-symbols-rounded">smartphone</span>
        </ContactCardButton>

        <ContactCardButton buttonType="email" displayName="jeffrey.d.helder@gmail.com" isMobile={isMobile} target="jeffrey.d.helder@gmail.com">
          <span className="material-symbols-rounded">mail</span>
        </ContactCardButton>

        <ContactCardButton buttonType="link" displayName="View Resume" isMobile={isMobile} target="/Jeffrey_Helder_Resume_dev.pdf">
          <span className="material-symbols-rounded">picture_as_pdf</span>
        </ContactCardButton>

        <ContactCardButton buttonType="link" displayName="GitHub" isMobile={isMobile} target="https://github.com/JeffreyHelder">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.01934 1.5C7.24265 1.49977 5.52387 2.13186 4.17065 3.28312C2.81743 4.43439 1.9181 6.02968 1.63364 7.78345C1.34918 9.53722 1.69815 11.335 2.6181 12.855C3.53805 14.3749 4.96891 15.5179 6.65459 16.0792C7.02959 16.1467 7.16384 15.9165 7.16384 15.7185C7.16384 15.5408 7.15784 15.0697 7.15559 14.4435C5.07434 14.8935 4.63484 13.44 4.63484 13.44C4.49782 12.9877 4.20327 12.5995 3.80459 12.3458C3.12959 11.8815 3.85634 11.892 3.85634 11.892C4.33634 11.958 4.76009 12.2423 5.00159 12.663C5.10293 12.8473 5.23977 13.0097 5.40419 13.1408C5.56861 13.2719 5.75736 13.3692 5.95957 13.427C6.16177 13.4848 6.37342 13.502 6.5823 13.4776C6.79118 13.4531 6.99316 13.3876 7.17659 13.2847C7.21109 12.9052 7.38059 12.5505 7.65284 12.2843C5.99234 12.096 4.24634 11.454 4.24634 8.58675C4.23712 7.84515 4.51251 7.12822 5.01584 6.5835C4.7881 5.93798 4.81492 5.22994 5.09084 4.6035C5.09084 4.6035 5.71859 4.40175 7.14734 5.36925C8.37272 5.03326 9.66595 5.03326 10.8913 5.36925C12.3208 4.401 12.9478 4.6035 12.9478 4.6035C13.2253 5.22975 13.2516 5.9385 13.0228 6.5835C13.528 7.12817 13.8032 7.84698 13.7908 8.58975C13.7908 11.4645 12.0433 12.096 10.3768 12.2812C10.7368 12.6488 10.9206 13.1528 10.8831 13.6658C10.8831 14.6663 10.8741 15.4733 10.8741 15.7185C10.8741 15.9187 11.0076 16.1512 11.3893 16.0778C13.0743 15.5154 14.5043 14.3719 15.4233 12.8517C16.3423 11.3316 16.6904 9.53406 16.4053 7.78074C16.1203 6.02741 15.2207 4.43272 13.8674 3.28199C12.5142 2.13127 10.7957 1.49959 9.01934 1.5Z"
              fill="#252C28"
            />
          </svg>
        </ContactCardButton>
      </div>
    </div>
  </ContactCardStyle>
);

export default ContactCard;
