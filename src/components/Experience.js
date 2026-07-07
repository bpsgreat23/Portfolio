import React from "react";
import styled from "styled-components";
import DrawSvg from "../subComponents/DrawSvg";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Section = styled.div`
   border: 1px solid green; 
  position: relative;
   margin-top: 2rem; 
  overflow: hidden;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

// const WrapperBox = styled.div`
//   width: 100vw;
//   /* height: 100vh; */
//   position: relative;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   /* border: 2px solid blue; */
//   height: calc(100vh - 2rem);
//   /* overflow: hidden; */

//   z-index: 1;
// `;

const Container = styled.div`
  /* border: 1px solid red; */

  width: 100%;
  height: 200vh;
  margin: 0 auto;
  /* margin-top: 3rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  /* background-color: blue; */
`;

const SvgContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  /* background-color: lightblue; */

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      /* &:hover {
        color: ${(props) => props.theme.body};
        background-color: ${(props) => props.theme.text};
      } */
    }
    p {
      border-radius: 40px 0 40px 0;
      /* &:hover {
        color: ${(props) => props.theme.body};
        background-color: ${(props) => props.theme.text};
      } */
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
      /* &:hover {
        color: ${(props) => props.theme.body};
        background-color: ${(props) => props.theme.text};
      } */
    }
    p {
      border-radius: 0 40px 0 40px;
      /* &:hover {
        color: ${(props) => props.theme.body};
        background-color: ${(props) => props.theme.text};
      } */
    }
  }
`;

const Item = styled.li`
  width: 80%;
  height: 100%;
  display: flex;
  /* border: 1px solid red; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  width: 42%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
  margin-left: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    width: 92vw;
    margin-left: 0;
    padding: 0.85rem;
    margin-top: 1rem;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: #eeedde;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
  text-align: justify;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 2em;
  text-transform: capitalize;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.3em;
    line-height: 1.2;
  }
`;

const Text = styled.h3`
  display: block;
  font-size: 0.875em;
  // text-transform: capitalize;
  color: black;
  font-weight: 400;
  margin: 0.5rem 0;

  white-space: pre-line;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }
`;

const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Experience = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Section>
        {/* <WrapperBox> */}
        <LogoComponent theme="light" />
        <PowerButton />
        <SocialIcons theme="light" />

        {/* <Title>My Education and Experience</Title> */}
        <Container>
          <SvgContainer>
            <DrawSvg />
          </SvgContainer>
          <Items>
            <ParticleComponent theme="light" />
            <RoadMapItem
              title="Associate Software Engineer @Bhatia Brothers FZE"
              subtext={`• Built an AI-powered Cost Estimation Agent using NLP, OCR, and transformer-based parsing to automate data extraction from emails, RFQs, and BOQs — achieved 85–90% accuracy and reduced manual effort by 40%.
• Developed predictive cost and profitability models using regression and ensemble learning to automate job costing sheets, improving pricing accuracy by 20% and cutting turnaround from hours to minutes.
• Integrated Gmail ingestion with OAuth 2.0 and optimized inference pipelines, reducing manual email handling by 60% and processing latency by 30%.`}
            />
            <ParticleComponent theme="light" />
            
            <RoadMapItem
              title="Full-Stack Developer Intern @Apna Samaj Tech Ltd."
              subtext={`• Developed scalable web applications using Next.js, React.js, and TypeScript, reducing code redundancy by 20% and improving performance by 25% via lazy loading and code-splitting.
• Implemented SEO optimization strategies, boosting search rankings by 15% and reducing page load time by 30%.
• Built and integrated RESTful APIs for frontend-backend sync, cutting API response time by 40ms.`}
            />
            <ParticleComponent theme="light" />
            
            
              
          </Items>
        </Container>
        {/* </WrapperBox> */}
      </Section>
      <BigTitle text="EXPERIENCE" top="10%" left="4" />
    </ThemeProvider>
  );
};

export default Experience;
