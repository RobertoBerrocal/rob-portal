import { Box } from "@chakra-ui/react";
import Hero from "../components/Profile";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
