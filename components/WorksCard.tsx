import * as React from "react";
import Image from "next/future/image";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";
import Typography from "./Typography";

type HomeCardProps = {
  onClick: () => void;
  title: string;
  imageUrl: string;
  description: string;
  link?: string;
  linkName?: string;
};

const HomeCardStyle = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
  width: "100%",
  minWidth: "250px",
  marginBottom: "20px",
  backgroundColor: `${rgba(theme.palette.paper, 0.5)}`,
  color: theme.palette.text,
  textAlign: "center",
  cursor: "pointer",
  transition: ".3s",
  "& .img-container": {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  "& >img": {
    width: "100%",
    height: "100%"
  },
  "& .works-card-info-layer": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    padding: "10px 14px",
    width: "calc(100% - 28px)",
    height: "calc(100% - 20px)",
    background: `linear-gradient(180deg, ${rgba(theme.palette.black, 0.3)} 52.33%, ${rgba(theme.palette.black, 0.8)} 92.33%)`,
    opacity: 0,
    transition: ".3s",
    "& >a>*, >a": {
      textDecoration: "none",
      color: theme.palette.blue,
      "&:hover": {
        textDecoration: "underline"
      }
    }
  },
  "&:hover .works-card-info-layer": {
    opacity: 1
  },
  "@media screen and (max-width: 550px)": {
    marginBottom: "80px",
    borderTop: `1px ${rgba(theme.palette.black, 0.2)} solid`,
    "& .works-card-info-layer": {
      opacity: 1,
      padding: "0 14px",
      height: "35px",
      top: "calc(100% - 35px)",
      alignItems: "center",
      background: rgba(theme.palette.black, 0.8)
    }
  }
}));

const WorksCard = ({ onClick, title, imageUrl, description, link, linkName }: HomeCardProps) => (
  <HomeCardStyle onClick={() => onClick()}>
    <div className="works-card-info-layer">
      <Typography type="CardTitle">{title}</Typography>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <Typography type="CardTitle">{linkName}</Typography>
        </a>
      )}
    </div>
    <Image width="800" height="800" src={imageUrl} alt={description} />
  </HomeCardStyle>
);

export default WorksCard;
