import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.900" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <NavLink to="/profile" style={{ fontSize: "xl", fontWeight: "bold" }}>
          Roberto Berrocal World
        </NavLink>
        <Flex gap={4}>
          <Link href="#profile">Profile</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
