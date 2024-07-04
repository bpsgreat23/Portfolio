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
  tansform: translateY(-15px)
} 33%{
  tansform: translateY(35px) translateX(35px)
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
  height: 60vh;
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
          I'm a technology enthusiast. I'm passionate about acquiring new skills
          to solve real-world problems. My career objective is to work hard with
          complete dedication.
          <br />
          My primary interests include Software Engineering. I'm also a front-end web developer. In Web Development, I've experience with multiple technologies, particularly the MERN (MongoDB, Express, ReactJS, NodeJS) stack.
          <br />
          I'm passionate about acquiring new skills to solve real-world
          problems. I'm eager to learn new technologies and implement them. I'm
          a motivated learner.
          <br />
          You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="8%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

// "build": "react-scripts build",

export default AboutPage;
