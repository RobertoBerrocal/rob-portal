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
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
