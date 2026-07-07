import React from "react";
import { darkTheme } from "./Themes";
import styled, { ThemeProvider, keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0%{
  transform: translateY(-15px)
} 33%{
  transform: translateY(35px) translateX(35px)
} 67%{
  transform: translateY(-15px)
}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 2s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 9.5rem;
    width: 92vw;
    min-height: 62vh;
    padding: 1.4rem;
    font-size: calc(0.55rem + 2.2vw);
  }
`;

// const Resume = styled.NavLink()`
// color: whitesmoke;
// `

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="" />
        </Spaceman>
 
        <Main>
          Software Engineer with 1+ years of experience in AI/ML and full-stack
          development, specializing in building AI-powered automation systems and
          scalable web applications. Skilled in Python, React.js, Flask, NLP, and
          Machine Learning, with a proven track record of delivering solutions
          that drive real business impact.
          <br />
          <br />
          Focus areas: AI-powered automation, NLP/LLMs, and production-ready web
          apps using modern frontend + backend stacks.
        </Main>

        <BigTitle text="ABOUT" top="8%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

// "build": "react-scripts build",

export default AboutPage;
