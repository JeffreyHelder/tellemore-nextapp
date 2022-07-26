import * as React from "react";
import styled from "styled-components";

export type TypographyProps = {
  className?: string;
  children?: string | React.ReactNode;
  as?: any;
  type: TypographyType;
  style?: React.CSSProperties;
};

export type TypographyType =
  | "SiteTitle"
  | "SiteTagline"
  | "SectionTitle"
  | "SectionBody"
  | "CardButton"
  | "CardName"
  | "CardTitle"
  | "Nav"
  | "LogoCopy"
  | "Subtitle"
  | "Body"
  | "Tiny";

const SiteTitle = styled.h1(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "2px",
  fontSize: "32px",
  fontWeight: "600",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "0.4vw",
    fontSize: "8vw"
  },
  "@media screen and (min-width: 1640px)": {
    letterSpacing: "5.76px",
    fontSize: "96px"
  }
}));

const SiteTagline = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "0.96px",
  fontSize: "16px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "0.125vw",
    fontSize: "2.5vw"
  },
  "@media screen and (min-width: 1640px)": {
    letterSpacing: "1.92px",
    fontSize: "32px"
  }
}));

const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "1.44px",
  fontSize: "24px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "2.88px",
    fontSize: "48px"
  }
}));

const SectionBody = styled.p(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1.2,
  letterSpacing: "0.84px",
  fontSize: "14px",
  fontWeight: "400",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "1.44px",
    fontSize: "24px",
    fontWeight: "400"
  }
}));

const CardButton = styled.p(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.black,
  lineHeight: 1,
  letterSpacing: "0.84px",
  fontSize: "14px",
  fontWeight: "600",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    fontSize: "16px"
  }
}));

const CardName = styled.h3(({ theme }) => ({
  color: theme.palette.white,
  lineHeight: 1,
  letterSpacing: "1.68px",
  fontSize: "28px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "1.92px",
    fontSize: "32px"
  }
}));

const CardTitle = styled.h3(({ theme }) => ({
  color: theme.palette.white,
  lineHeight: 1,
  letterSpacing: "0.84px",
  fontSize: "14px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "0.96px",
    fontSize: "16px"
  }
}));

const NavCopy = styled.p(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "1.44px",
  fontSize: "24px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "&.active": {
    color: theme.palette.primary
  },
  "&:hover": {
    opacity: ".75"
  },
  "@media screen and (min-width: 840px)": {
    letterSpacing: "1.2px",
    fontSize: "20px"
  }
}));

const LogoCopy = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "0.9px",
  fontSize: "15px",
  fontWeight: "600",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 550px)": {
    letterSpacing: "1.32px",
    fontSize: "22px"
  }
}));

const Subtitle = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "0.94px",
  fontSize: "18px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s"
}));

const Body = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "0.84px",
  fontSize: "14px",
  fontWeight: "400",
  margin: 0,
  padding: 0,
  transition: ".35s",
  "@media screen and (min-width: 680px)": {
    letterSpacing: "1.2px",
    fontSize: "18px"
  }
}));

const Tiny = styled.h3(({ theme }) => ({
  color: theme.palette.text,
  lineHeight: 1,
  letterSpacing: "0.6px",
  fontSize: "10px",
  fontWeight: "500",
  margin: 0,
  padding: 0,
  transition: ".35s"
}));

export const defaultVariantMapping: { [key in TypographyType]: any } = {
  SiteTitle: SiteTitle,
  SiteTagline: SiteTagline,
  SectionTitle: SectionTitle,
  SectionBody: SectionBody,
  CardButton: CardButton,
  CardName: CardName,
  CardTitle: CardTitle,
  Nav: NavCopy,
  LogoCopy: LogoCopy,
  Subtitle: Subtitle,
  Body: Body,
  Tiny: Tiny
};

// eslint-disable-next-line react/display-name
const Typography = React.forwardRef((props: TypographyProps, ref) => {
  const StyledComponent = props.as || defaultVariantMapping[props.type];

  return (
    <StyledComponent {...props} className={props.className} style={props.style}>
      {props.children}
    </StyledComponent>
  );
});

export default Typography;
