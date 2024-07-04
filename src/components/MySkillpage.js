import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import styled from "styled-components";
import { Develope } from "../components/AIISvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  /* background-color: ${(props) => props.theme.body}; */
  padding: 2rem;
  width: 60vw;
  height: 70vh;
  z-index: 3;
  line-height: 1;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    padding-left: 1rem;
  }
  ul {
    padding-left: 2rem;
  }
  span {
    font-weight: bolder;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillpage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Skills
          </Title>
          <Description>
            <span>Languages: </span>
             C/C++, JavaScript, Python
          </Description>
          <Description>
            <span>Domains: </span>
             Web Development, Computer Networks, Object Oriented Programming, Database Management, SQL, Operating Systems
          </Description>
          <Description>
            <span>React Libraries: </span>
            Material UI, React Router, Redux, React Suite, React-Motion, React-Bootstrap.
          </Description>
          <Description>
            <span>Softwares: </span>
            VS Code, Git, Leetcode, Codeforces, Github, Codechef
          </Description>
          <Description>
            <span>Web Technologies: </span>
            MongoDB, Express, ReactJS, NodeJS, Bootstrap, jQuery
          </Description>
          <Description>
            <span>Soft Skills: </span>
            Team Work, Time Management, Leadership Quality, Communication
            Skills, Literature Writing, Problem Solving
          </Description>
        </Main>
      </Box>
      <BigTitle text="SKILLS" top="78%" left="47%" />
    </ThemeProvider>
  );
};

export default MySkillpage;
