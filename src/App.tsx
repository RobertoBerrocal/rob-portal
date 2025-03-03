import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />
      <Box flex="1">
        <Box id="profile">
          <Profile />
        </Box>
        <Box id="about me">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        {/* <Box id="projects">
          <Projects />
        </Box> */}
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
