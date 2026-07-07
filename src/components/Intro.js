import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";
const Box = styled(motion.div)`
  position: absolute;
  left: 45%;
  top: 55%;
  transform: translate(-50%, -50%);

  width: min(55vw, 860px);
  padding: 2.25rem 1.9rem;

  /* to create 2 color border :- */
  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 10;

  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 92vw;
    padding: 1.5rem 1.1rem;
    top: 58%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1.15;
  min-width: 260px;
  // color: white;

  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const Right = styled.div`
  flex: 0.85;

  display: flex;
  justify-content: center;
  align-items: center;

  .pic {
    width: min(240px, 100%);
    height: auto;
    border-radius: 16px;
    filter: contrast(1.05);
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.text};
  font-weight: 700;

  .headline {
    font-size: calc(0.5rem + 1vw);
    color: white;
    line-height: 1.25;
    margin-bottom: 0.15rem;
  }

  .subtitle {
    font-size: calc(0.5rem + 0.9vw);
    font-weight: 500;
    color: white;
    margin-top: 0.15rem;
  }

  .summary {
    font-size: calc(0.5rem + 0.85vw);
    font-weight: 300;
    color: white;
    margin-top: 0.35rem;
    max-width: 52ch;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  font-size: calc(0.65rem + 0.6vw);
  font-weight: 600;
  color: ${(props) => props.theme.text};
  // color: white;

  padding: 0.55rem 0.85rem;
  border-radius: 999px;

  // background: rgba(255, 255, 255, 0.06);
  background: rgba(234, 218, 218, 0.81);
  border: 1px solid rgba(255, 255, 255, 0.12);

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2cff7a;
    box-shadow: 0 0 0 4px rgba(44, 255, 122, 0.12);
  }
`;

const TechLine = styled.div`
  margin-top: 0.25rem;

  color: ${(props) => props.theme.text};
  // color: white;
  font-size: calc(0.7rem + 0.8vw);
  font-weight: 600;

  .label {
    font-weight: 600;
    // color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    color: white;
    margin-right: 0.5rem;
  }

  .tech {
    // color: ${(props) => props.theme.text};
    color: white;
  }
`;

const Intro = () => {
  const techs = useMemo(
    () => [
      "AI/ML",
      "Python",
      "React",
      "Next.js",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Full Stack Development",
      "Cloud Computing",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % techs.length);
    }, 1500);

    return () => window.clearInterval(id);
  }, [techs.length]);

  return (
    <Box
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ type: "spring", duration: 1.8, delay: 0.4 }}
    >
      <Left>
        <Title>
          <div className="headline" text='white'>Software Engineer | AI/ML Engineer</div>
          <div className="subtitle">Building intelligent applications with Python, Machine Learning, React, Next.js, and Cloud.</div>
          <div className="summary">
            Focused on scalable software systems and production-ready AI—turning
            real-world problems into clean, maintainable products.
          </div>
        </Title>

        <Badge>
          <span className="dot" />
          Available for Full-Time Opportunities
        </Badge>

        <TechLine aria-live="polite">
          <span className="label">Technologies:</span>
          <span className="tech">{techs[index]}</span>
        </TechLine>
      </Left>

      <Right>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="pic" src={Me} alt="Bhanu Pratap Singh avatar" />
        </motion.div>
      </Right>
    </Box>
  );
};

export default Intro;
