import * as React from "react";
import Header from "./Header";
import styled from "styled-components";

type LayoutProps = {
  children: any;
  toggleTheme: () => void;
  lightMode: boolean;
};

const MainStyle = styled.main(({ theme }) => ({
  display: "block",
  backgroundColor: theme.palette.background,
  paddingTop: "54px",
  minHeight: "calc(100vh - 54px)",
  "& .layout-inner-container": {
    maxWidth: "1640px",
    margin: "auto"
  },
  "@media screen and (min-width: 840px)": {
    paddingTop: "92px",
    minHeight: "calc(100vh - 92px)"
  }
}));

const Layout = ({ children, toggleTheme, lightMode }: LayoutProps) => (
  <>
    <Header lightMode={lightMode} toggleTheme={() => toggleTheme()} />
    <MainStyle>
      <div className="layout-inner-container">{children}</div>
    </MainStyle>
  </>
);

export default Layout;
