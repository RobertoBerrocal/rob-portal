import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.900" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <NavLink to="/profile" style={{ fontSize: "xl", fontWeight: "bold" }}>
          Roberto Berrocal
        </NavLink>
        <Flex gap={4}>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
