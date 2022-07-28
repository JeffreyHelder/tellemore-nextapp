import { useState } from "react";
import styled from "styled-components";
import { rgba, lighten } from "../styles/functions/manipulateColors";
import Typography from "./Typography";

type DropProps = {
  title: string;
  options: string[];
  onClick: (e: any) => void;
  selected: string;
};

const DropDownStyle = styled.div(({ theme }) => ({
  display: "flex",
  margin: "0 20px",
  width: "calc(100% - 40px)",
  justifyContent: "flex-end",
  position: "relative",
  "& .dropdown-title-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    "& >span": {
      marginLeft: "6px",
      fontSize: "28px",
      fontWeight: 300,
      color: theme.palette.text,
      transition: ".3s",
      "&.flip-cup": {
        transform: "rotateZ(-180deg)"
      }
    }
  },
  "& .dropdown-options-container": {
    position: "absolute",
    right: "10px",
    top: "100%",
    backgroundColor: lighten(rgba(theme.palette.black, 0.9), 0.4),
    backdropFilter: "blur(8px)",
    borderRadius: "4px",
    zIndex: 101,
    "& >ul": {
      margin: 0,
      padding: 0,
      listStyle: "none",
      "& >li": {
        padding: "14px 60px",
        textAlign: "center",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: rgba(theme.palette.background, 0.5)
        },
        "&:last-child>*": {
          color: theme.palette.blue
        },
        "&.active >*": {
          color: `${theme.palette.primary} !important`
        }
      }
    }
  },
  "& >*": {
    userSelect: "none"
  }
}));

const DropDown = ({ title, options, onClick, selected }: DropProps) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = (e: any) => {
    onClick(e.currentTarget.outerText);
    setOpen(false);
  };

  return (
    <DropDownStyle>
      <div onClick={() => setOpen(!open)} className="dropdown-title-container">
        <Typography type="SectionBody">{title}</Typography>
        <span className={`material-symbols-outlined ${open && "flip-cup"}`}>expand_more</span>
      </div>
      {open && (
        <div className="dropdown-options-container">
          <ul>
            {options.map(option => (
              <li onClick={e => handleOnClick(e)} key={option} className={selected === option ? "active" : ""}>
                <Typography type="CardTitle">{option}</Typography>
              </li>
            ))}
            <li onClick={e => handleOnClick(e)} key="clear" className="dropdown-clear-out">
              <Typography type="CardTitle">clear</Typography>
            </li>
          </ul>
        </div>
      )}
    </DropDownStyle>
  );
};

export default DropDown;
