import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  cursor: pointer;
  position: fixed;
  left: 1.5rem;
  top: 2rem;
  z-index: 3;
`;
const LogoComponent = (props) => {
  return <Logo color={props.theme}>BP</Logo>;
};

export default LogoComponent;
