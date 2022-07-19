import * as React from "react";
import { NAV_ITEMS, BRAND_DATA } from "../lib/MockData";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

type HeaderProps = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: HeaderProps) => (
  <header>
    <div>
      <Image src={logo} alt="basic teal circle logo" />
      <h1>{BRAND_DATA.company}</h1>
    </div>
    <nav>
      <ul>
        {NAV_ITEMS.sort((a, b) => a.order - b.order).map(item => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <button type="button" onClick={toggleTheme}>
      Switch Theme
    </button>
  </header>
);

export default Header;
