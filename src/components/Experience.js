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
  /* border: 1px solid green; */
  position: relative;
  /* margin-top: 2rem; */
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
`;

const ItemContainer = styled.div`
  width: 42%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;
`;

const Box = styled.p`
  height: fit-content;
  background-color: #eeedde;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 2em;
  text-transform: capitalize;
  color: black;
`;

const Text = styled.h3`
  display: block;
  font-size: 0.875em;
  // text-transform: capitalize;
  color: black;
  font-weight: 400;
  margin: 0.5rem 0;
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
            <Item>&nbsp;</Item>
            <RoadMapItem
              title="Web Developer @Bharat Intern"
              subtext={`I acquired the internship between 10th July 2023 to 10th August 2023 in which I developed and launched a unit conversion website, achieving a 6% increase in user engagement within the first month of launch, designed and implemented a professional portfolio website, showcasing my projects and skills to a global audience, resulting in 3% more inquiries from potential clients and employers and utilized a comprehensive tech stack including HTML, CSS, Bootstrap, jQuery, and JavaScript to create intuitive and visually appealing frontend experiences.`}
            />
          </Items>
        </Container>
        {/* </WrapperBox> */}
      </Section>
      <BigTitle text="EXPERIENCE" top="10%" left="4" />
    </ThemeProvider>
  );
};

export default Experience;
