import * as React from "react";
import Header from "./Header";

type LayoutProps = {
  children: any;
  toggleTheme: () => void;
  themeMode: string;
};

const Layout = ({ children, toggleTheme, themeMode }: LayoutProps) => (
  <>
    <Header themeMode={themeMode} toggleTheme={() => toggleTheme()} />
    <main>{children}</main>
  </>
);

export default Layout;
