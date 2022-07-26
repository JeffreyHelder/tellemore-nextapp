import * as React from "react";
import styled from "styled-components";

type SwitchProps = {
  toggleTheme: () => void;
  lightMode: boolean;
};

const SwitchStyle = styled.label(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "48px",
  height: "28px",
  "& input": {
    opacity: 0,
    width: 0,
    height: 0,
    "&:checked + .slider": {
      backgroundColor: theme.palette.black,
      "& span": {
        transform: "translateX(19px)"
      }
    }
  },
  "& .slider": {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "14px",
    backgroundColor: theme.palette.white,
    transition: ".35s",
    "& span": {
      position: "absolute",
      height: "20px",
      width: "20px",
      left: "4px",
      top: "4px",
      borderRadius: "10px",
      backgroundColor: theme.palette.primary,
      transition: ".35s"
    }
  }
}));

const ThemeSwitch = ({ toggleTheme, lightMode }: SwitchProps) => (
  <SwitchStyle className="switch">
    <input onChange={toggleTheme} type="checkbox" checked={lightMode} />
    <span className="slider .round">
      <span className="round"></span>
    </span>
  </SwitchStyle>
);

export default ThemeSwitch;
