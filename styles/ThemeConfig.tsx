const COMMON = {
  breakpoints: {
    sm: 550,
    md: 840,
    lg: 1240,
    xl: 1640
  },
  palette: {
    primary: "#1BE39B",
    blue: "#00F0FF",
    purple: "#9A0DF0",
    white: "#FFFFFF",
    black: "#070C09"
  }
};

export const lightTheme = {
  palette: {
    background: "#FFFFFF",
    paper: "#DFFBF1",
    text: "#2C3733",
    ...COMMON.palette
  },
  breakpoints: COMMON.breakpoints
};

export const darkTheme = {
  palette: {
    background: "#1B211E",
    paper: "#2C3733",
    text: "#FFFFFF",
    ...COMMON.palette
  },
  breakpoints: COMMON.breakpoints
};
