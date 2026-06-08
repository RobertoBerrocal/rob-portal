import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const navItems = [
  { label: "Profile", id: "profile" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

const Navbar = () => {
  return (
    <Box
      as="header"
      bg="rgba(7, 19, 22, 0.88)"
      backdropFilter="blur(18px)"
      color="white"
      py={{ base: 3, md: 3 }}
      px={{ base: 4, md: 8, xl: 12 }}
      position="sticky"
      top={0}
      width="100%"
      zIndex="1000"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        maxW="1180px"
        mx="auto"
        justify="space-between"
        align="center"
        direction="row"
        gap={{ base: 3, md: 4 }}
      >
        <Link
          onClick={() => scrollToSection("profile")}
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="800"
          letterSpacing="0"
          cursor="pointer"
          _hover={{ textDecoration: "none", color: "#73E2C3" }}
        >
          Roberto Berrocal
        </Link>
        <Flex
          as="nav"
          gap={{ base: 3, md: 5 }}
          display={{ base: "none", md: "flex" }}
          whiteSpace="nowrap"
          align="center"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              cursor="pointer"
              color="whiteAlpha.800"
              fontSize="sm"
              fontWeight="600"
              _hover={{ color: "#73E2C3", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            size="sm"
            bg="#F5B84B"
            color="#071316"
            fontWeight="800"
            borderRadius="full"
            _hover={{ bg: "#FFD076" }}
            onClick={() => scrollToSection("contact")}
          >
            Contact <FaArrowRight />
          </Button>
        </Flex>
        <Button
          display={{ base: "inline-flex", md: "none" }}
          size="sm"
          bg="#F5B84B"
          color="#071316"
          fontWeight="800"
          borderRadius="full"
          _hover={{ bg: "#FFD076" }}
          onClick={() => scrollToSection("contact")}
        >
          Contact <FaArrowRight />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
