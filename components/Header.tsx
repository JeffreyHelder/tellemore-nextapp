import React, { useEffect, useState } from "react";
import { NAV_ITEMS, BRAND_DATA } from "../lib/MockData";
import Image from "next/image";
import Typography from "./Typography";
import logo from "../public/logo.png";
import styled from "styled-components";
import { rgba } from "../styles/functions/manipulateColors";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";

type HeaderProps = {
  toggleTheme: () => void;
  lightMode: boolean;
  isMobile: boolean;
};

const StyledHeader = styled.header(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "fixed",
  top: 0,
  left: 0,
  width: "calc(100vw - 80px)",
  padding: "20px 40px",
  background: rgba(theme.palette.background, 0.95),
  backdropFilter: "blur(12px)",
  zIndex: 999,
  transition: ".35s",
  "& .header-inner-container": {
    maxWidth: "1640px",
    width: "100%",
    margin: "auto",
    display: "inline-flex",
    justifyContent: "space-between"
  },
  "& .tellemore-logo-container": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    "& span": {
      width: "50px !important",
      marginRight: "16px !important"
    }
  },
  "@media screen and (max-width: 840px)": {
    padding: "10px 14px",
    width: "calc(100vw - 28px)",
    "& .tellemore-logo-container": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
      "& span": {
        width: "30px !important",
        marginRight: "10px !important"
      }
    }
  },
  "& .tellemore-navigation-wrapper": {
    display: "inline-flex",
    alignItems: "center",
    "& .tellemore-navigation": {
      display: "flex",
      marginRight: "20px",
      "&_inner": {
        listStyle: "none",
        padding: 0,
        display: "inline-flex",
        "& >li>p": {
          padding: "4px",
          cursor: "pointer"
        },
        "& li:not(:last-child)": {
          marginRight: "10px"
        }
      }
    }
  },
  "& .mobile-menu": {
    color: theme.palette.text,
    width: "34px",
    height: "34px",
    lineHeight: "34px",
    textAlign: "center"
  },
  "& .mobile-menu-close": {
    position: "absolute",
    top: "10px",
    right: "14px"
  },
  "& .mobile-menu-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: rgba(theme.palette.background, 0.9),
    backdropFilter: "blur(4px)"
  },
  "& .tellemore-mobile-menu-navigation-wrapper": {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    bottom: "calc(100% - 310px)",
    left: "calc(50% - 62px)",
    zIndex: 100
  },
  "& .tellemore-mobile-menu-navigation_inner": {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    "& >li": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      marginBottom: "20px"
    },
    "& >li>p": {
      padding: "4px",
      cursor: "pointer"
    }
  }
}));

const Header = ({ toggleTheme, lightMode, isMobile }: HeaderProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRoute = (route: string) => {
    setIsMenuOpen(false);
    router.push(route);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
    return;
  }, [isMobile]);

  return (
    <StyledHeader>
      <div className="header-inner-container">
        <div onClick={() => handleRoute("/")} className="tellemore-logo-container">
          <Image src={logo} alt="basic teal circle logo" />
          <Typography type="LogoCopy">{BRAND_DATA.company}</Typography>
        </div>
        {isMobile ? (
          <>
            <span onClick={() => setIsMenuOpen(true)} className="mobile-menu material-symbols-outlined">
              menu
            </span>
            {isMenuOpen && (
              <>
                <span onClick={() => setIsMenuOpen(false)} className="mobile-menu-backdrop" />
                <span onClick={() => setIsMenuOpen(false)} className="mobile-menu mobile-menu-close material-symbols-outlined">
                  close
                </span>
                <div className="tellemore-mobile-menu-navigation-wrapper">
                  <nav className="tellemore-mobile-menu-navigation">
                    <ul className="tellemore-mobile-menu-navigation_inner">
                      {NAV_ITEMS.sort((a, b) => a.order - b.order).map(item => (
                        <li key={item.slug} onClick={() => handleRoute(item.slug)}>
                          <Typography type="Nav" className={router.pathname == item.slug ? "active" : ""}>
                            {item.title}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <ThemeSwitch lightMode={lightMode} toggleTheme={toggleTheme} />
                </div>
              </>
            )}
          </>
        ) : (
          <div className="tellemore-navigation-wrapper">
            <nav className="tellemore-navigation">
              <ul className="tellemore-navigation_inner">
                {NAV_ITEMS.sort((a, b) => a.order - b.order).map(item => (
                  <li key={item.slug} onClick={() => handleRoute(item.slug)}>
                    <Typography type="Nav" className={router.pathname == item.slug ? "active" : ""}>
                      {item.title}
                    </Typography>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeSwitch lightMode={lightMode} toggleTheme={toggleTheme} />
          </div>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
