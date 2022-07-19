import * as React from "react";
import Header from "./Header";

type LayoutProps = {
  children: any;
  toggleTheme: () => void;
};

const Layout = ({ children, toggleTheme }: LayoutProps) => (
  <>
    <Header toggleTheme={() => toggleTheme()} />
    <main>{children}</main>
  </>
);

export default Layout;
