import * as React from "react";
import { NAV_ITEMS, BRAND_DATA } from "../lib/MockData";
import Image from "next/image";
import Typography from "./Typography";
import logo from "../public/logo.png";
import Link from "next/link";
import styled from "styled-components";

type HeaderProps = {
  toggleTheme: () => void;
  themeMode: string;
};

const StyledHeader = styled.header(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "calc(100vw - 80px)",
  justifyContent: "space-between",
  padding: "20px 40px"
}));

const Header = ({ toggleTheme }: HeaderProps) => (
  <StyledHeader>
    <div>
      <Image src={logo} alt="basic teal circle logo" />
      <Typography type="LogoCopy">{BRAND_DATA.company}</Typography>
    </div>
    <div>
      <nav>
        <ul>
          {NAV_ITEMS.sort((a, b) => a.order - b.order).map(item => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <Typography type="Nav">{item.title}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  </StyledHeader>
);

export default Header;
