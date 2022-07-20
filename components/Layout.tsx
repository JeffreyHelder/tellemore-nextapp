import * as React from "react";
import Header from "./Header";

type LayoutProps = {
  children: any;
  toggleTheme: () => void;
  lightMode: boolean;
};

const Layout = ({ children, toggleTheme, lightMode }: LayoutProps) => (
  <>
    <Header lightMode={lightMode} toggleTheme={() => toggleTheme()} />
    <main>{children}</main>
  </>
);

export default Layout;
