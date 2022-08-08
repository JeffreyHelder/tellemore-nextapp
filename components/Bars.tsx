import * as React from "react";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";

type BarProps = {
  color: string;
};

const BarStyles = styled.div(({ theme }) => ({
  transformOrigin: "top left",
  transform: "rotateZ(8deg)",
  width: "110vw",
  height: "11%",
  borderRadius: "5vh",
  boxShadow: `inset -6px 12px 16px ${rgba(theme.palette.black, 0.3)}`,
  transition: ".32s",
  "&.blue": {
    backgroundColor: theme.palette.blue
  },
  "&.purple": {
    backgroundColor: theme.palette.purple
  },
  "&.primary": {
    backgroundColor: theme.palette.primary
  },
  "&.move-more": {
    transform: "translateX(25px) translateY(2px) rotateZ(8deg)"
  },
  "&.move-less": {
    transform: "translateX(10px) rotateZ(8deg)"
  },
  "&.move-even-less": {
    transform: "translateX(5px) rotateZ(8deg)"
  }
}));

const Bars = ({ color }: BarProps) => {
  const doTheThing = (e: any) => {
    e.target.classList.add("move-more");
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.add("move-less");
      if (e.target.previousElementSibling.previousElementSibling) {
        e.target.previousElementSibling.previousElementSibling.classList.add("move-even-less");
      }
    }
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.add("move-less");
      if (e.target.nextElementSibling.nextElementSibling) {
        e.target.nextElementSibling.nextElementSibling.classList.add("move-even-less");
      }
    }
  };
  const removeTheThing = (e: any) => {
    e.target.classList.remove("move-more");
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.remove("move-less");
      if (e.target.previousElementSibling.previousElementSibling) {
        e.target.previousElementSibling.previousElementSibling.classList.remove("move-even-less");
      }
    }
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.remove("move-less");
      if (e.target.nextElementSibling.nextElementSibling) {
        e.target.nextElementSibling.nextElementSibling.classList.remove("move-even-less");
      }
    }
  };

  return <BarStyles className={color} onMouseEnter={doTheThing} onMouseLeave={removeTheThing} />;
};

export default Bars;
