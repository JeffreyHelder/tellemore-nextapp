import * as React from "react";
import Ripples from "react-ripples";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";
import Typography from "./Typography";

type ButtonProps = {
  children: string | React.ReactNode;
  buttonType: "link" | "phone" | "email" | "download";
  displayName: string;
  isMobile: boolean;
  target: string;
};

const ButtonContainer = styled.div(({}) => ({
  display: "flex",
  position: "relative",
  padding: 0,
  margin: 0,
  border: 0,
  borderRadius: "2px",
  marginTop: "14px",
  cursor: "pointer",
  overflow: "hidden",
  "& .button-ripple-effect": {
    width: "100%",
    height: "100%"
  }
}));

const PoppedUpStyles = styled.span(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  paddingLeft: "50px",
  backgroundColor: rgba(theme.palette.white, 0.7),
  backdropFilter: "blur(1px)"
}));

const CardButtonLinkStyle = styled.a(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "300px",
  height: "38px",
  textDecoration: "none",
  backgroundColor: theme.palette.white,
  transition: ".3s",
  "&:hover": {
    backgroundColor: "#d5d5d5",
    "& .icon-container": {
      backgroundColor: "#04ccd8"
    }
  },
  "& .icon-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "38px",
    height: "38px",
    marginRight: "8px",
    backgroundColor: theme.palette.blue,
    transition: ".3s",
    "& >span": {
      color: theme.palette.black,
      fontSize: "18px"
    }
  }
}));

const CardButton = ({ children, displayName, buttonType, target, isMobile }: ButtonProps) => {
  const [copied, setCopied] = React.useState(false);
  const copyNotLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isMobile) {
      return;
    } else if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText(target);
      setCopied(true);
    }
  };
  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }, [copied]);

  const renderButton = () => {
    switch (buttonType) {
      case "email":
        return (
          <CardButtonLinkStyle href={`mailto:${target}?subject=Tellemore.tech`} target="_top" className="link-button" onClick={e => copyNotLink(e)}>
            <span className="icon-container">{children}</span>
            <Typography type="CardButton">{displayName}</Typography>
          </CardButtonLinkStyle>
        );
      case "phone":
        return (
          <CardButtonLinkStyle href={`tel:${target}`} target="_top" className="link-button" onClick={e => copyNotLink(e)}>
            <span className="icon-container">{children}</span>
            <Typography type="CardButton">{displayName}</Typography>
          </CardButtonLinkStyle>
        );
      case "link":
        return (
          <CardButtonLinkStyle href={target} target="_blank" rel="noreferrer" className="link-button">
            <span className="icon-container">{children}</span>
            <Typography type="CardButton">{displayName}</Typography>
          </CardButtonLinkStyle>
        );
      case "download":
        return (
          <CardButtonLinkStyle href={target} target="_top" className="link-button">
            <span className="icon-container">{children}</span>
            <Typography type="CardButton">{displayName}</Typography>
          </CardButtonLinkStyle>
        );
    }
  };
  return (
    <ButtonContainer>
      {copied && (
        <PoppedUpStyles className="slideIn">
          <Typography type="CardButton">copied to clipboard!</Typography>
        </PoppedUpStyles>
      )}
      <Ripples className="button-ripple-effect">{renderButton()}</Ripples>
    </ButtonContainer>
  );
};

export default CardButton;
