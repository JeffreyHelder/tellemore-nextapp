import * as React from "react";
import styled from "styled-components";
import Typography from "./Typography";

type SectionHeaderProps = {
  title: string;
};

const SwitchStyle = styled.label(() => ({
  display: "flex",
  marginTop: "14px",
  marginLeft: "18px",
  "@media screen and (min-width: 550px)": {
    marginTop: "60px"
  }
}));

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <SwitchStyle>
    <Typography type="SectionTitle">{title}</Typography>
  </SwitchStyle>
);

export default SectionHeader;
