import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

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
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
