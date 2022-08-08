import * as React from "react";
import styled from "styled-components";

type BarContainerProps = {
  children: React.ReactNode;
};

const BarContainerStyles = styled.div(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: "80%",
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
  height: "calc(100% - 100px)"
}));

const BarContainer = ({ children }: BarContainerProps) => <BarContainerStyles>{children}</BarContainerStyles>;

export default BarContainer;
