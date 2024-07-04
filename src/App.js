import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
// import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillpage";
import SoundBar from "./subComponents/SoundBar";
import Experience from "./components/Experience";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            {/* <Route exact path="/blog" element={<BlogPage />} /> */}
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/skills" element={<MySkillPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
