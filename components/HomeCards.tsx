import * as React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import rgba from "../styles/functions/rgba";
import Typography from "./Typography";

type HomeCardProps = {
  title: string;
  children: string | React.ReactNode;
  slug: string;
};

const HomeCardStyle = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "130px",
  width: "135px",
  backgroundColor: `${rgba(theme.palette.paper, 0.35)}`,
  border: `1px solid ${rgba(theme.palette.primary, 1)}`,
  borderRadius: "8px",
  color: theme.palette.text,
  textAlign: "center",
  cursor: "pointer",
  backdropFilter: "blur(8px)",
  transition: ".3s",
  "& >span": {
    marginTop: "20px",
    fontSize: "55px"
  },
  "&:hover": {
    backgroundColor: theme.palette.paper,
    border: `1px solid ${rgba(theme.palette.primary, 0.5)}`
  },
  "@media screen and (min-width: 680px)": {
    height: "185px",
    width: "190px",
    "& >span": {
      marginTop: "20px",
      fontSize: "80px"
    }
  }
}));

const HomeCard = ({ title, children, slug }: HomeCardProps) => {
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <HomeCardStyle onClick={() => handleRoute(slug)}>
      <Typography type="Body">{title}</Typography>
      {children}
    </HomeCardStyle>
  );
};

export default HomeCard;
