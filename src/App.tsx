import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Box } from "@chakra-ui/react";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minH="100vh">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default App;
