import { Box, Flex, Link } from "@chakra-ui/react";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <Box
      bg="blue.950"
      color="white"
      py={4}
      px={8}
      position="fixed"
      width="100%"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        <Link
          onClick={() => scrollToSection("profile")}
          fontSize="xl"
          fontWeight="bold"
          cursor="pointer"
        >
          Roberto Berrocal World
        </Link>
        <Flex gap={4}>
          <Link onClick={() => scrollToSection("profile")} cursor="pointer">
            Profile
          </Link>
          <Link onClick={() => scrollToSection("about me")} cursor="pointer">
            About me
          </Link>
          <Link onClick={() => scrollToSection("skills")} cursor="pointer">
            Skills
          </Link>
          <Link onClick={() => scrollToSection("experience")} cursor="pointer">
            Experience
          </Link>
          <Link onClick={() => scrollToSection("projects")} cursor="pointer">
            Projects
          </Link>
          <Link onClick={() => scrollToSection("contact")} cursor="pointer">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
