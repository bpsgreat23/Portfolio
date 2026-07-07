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
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  min-height: 70vh;
  z-index: 3;
  line-height: 1.2;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 92vw;
    min-height: auto;
    padding: 1.4rem;
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
            Python, JavaScript, TypeScript, C, C++, SQL
          </Description>

          <Description>
            <span>Frontend: </span>
            React.js, Next.js, HTML5, CSS3, Tailwind CSS
          </Description>

          <Description>
            <span>Backend & APIs: </span>
            Flask, Node.js, Express.js, REST APIs, OAuth 2.0
          </Description>

          <Description>
            <span>AI / ML / NLP: </span>
            Supervised & Unsupervised ML, Deep Learning, NLP, BERT, TF-IDF,
            Word2Vec, TensorFlow (Keras), LLMs, Groq API, OpenAI API, Prompt
            Engineering, Reinforcement Learning (Q-Learning, SARSA, Policy
            Gradients)
          </Description>

          <Description>
            <span>Data & Analytics: </span>
            Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau,
            Scikit-learn, Folium
          </Description>

          <Description>
            <span>Databases & Other: </span>
            MongoDB, SQLite3, SQL, OCR, Web Scraping, Streamlit, Time Series
            (ARIMA, ADF Test, ACF, PACF)
          </Description>

          <Description>
            <span>DevOps & Tools: </span>
            Git, GitHub, CI/CD Pipelines, Docker (basic), VS Code
          </Description>
        </Main>
      </Box>
      <BigTitle text="SKILLS" top="78%" left="47%" />
    </ThemeProvider>
  );
};

export default MySkillpage;
