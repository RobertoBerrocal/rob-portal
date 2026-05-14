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
      py={{ base: 3, md: 4 }}
      px={{ base: 4, md: 8 }}
      position="sticky"
      top={0}
      width="100%"
      zIndex="1000"
    >
      <Flex
        justify="space-between"
        align={{ base: "start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 3, md: 4 }}
      >
        <Link
          onClick={() => scrollToSection("profile")}
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          cursor="pointer"
        >
          Roberto Berrocal World
        </Link>
        <Flex
          gap={{ base: 3, md: 4 }}
          overflowX={{ base: "auto", md: "visible" }}
          width={{ base: "100%", md: "auto" }}
          whiteSpace="nowrap"
          pb={{ base: 1, md: 0 }}
        >
          <Link onClick={() => scrollToSection("profile")} cursor="pointer">
            Profile
          </Link>
          <Link onClick={() => scrollToSection("about")} cursor="pointer">
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
