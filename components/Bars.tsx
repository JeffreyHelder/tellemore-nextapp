import * as React from "react";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";

type BarProps = {
  color: string;
};

const BarStyles = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "11%",
  "& .the-actual-bar": {
    position: "absolute",
    transformOrigin: "top left",
    transform: "rotateZ(5deg)",
    width: "110vw",
    height: "100%",
    borderRadius: "5vh",
    boxShadow: ` inset -6px 12px 16px ${rgba(theme.palette.black, 0.3)}`,
    "&.blue": {
      backgroundColor: theme.palette.blue
    },
    "&.purple": {
      backgroundColor: theme.palette.purple
    },
    "&.primary": {
      backgroundColor: theme.palette.primary
    }
  }
}));

const Bars = ({ color }: BarProps) => {
  const doTheThing = (e: any) => {
    console.log(e);
  };

  return (
    <BarStyles onMouseEnter={doTheThing}>
      <div className={`the-actual-bar ${color}`} />
    </BarStyles>
  );
};

export default Bars;
