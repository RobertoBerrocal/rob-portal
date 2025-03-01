import { Box, Heading, VStack, Link, Text } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      py={10}
      px={8}
      // minH={"100vh"}
      bg={"blue.800"}
    >
      <Heading textAlign="center" mb={6}>
        Contact
      </Heading>
      <VStack
        //   spacing={4}
        align="center"
      >
        <Text display={"flex"} alignItems={"center"} gap={2}>
          <FaPhone />
          +49 162 272 4948
        </Text>
        <Text display={"flex"} alignItems={"center"} gap={2}>
          <FaWhatsapp />
          <Link
            href="https://wa.me/51991729154"
            target="_blank"
            color="teal.300"
          >
            +51 991 729 154
          </Link>
        </Text>
        <Text display={"flex"} alignItems={"center"} gap={2}>
          <FaMapMarkerAlt />
          Berlin, Germany
        </Text>
        <Link
          href="mailto:r.berrocal@pucp.edu.pe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> r.berrocal@pucp.edu.pe
        </Link>
        <Link
          href="https://www.linkedin.com/in/roberto-berrocal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </Link>
        {/* make the following link to open in other tab */}
        <Link
          href="https://github.com/RobertoBerrocal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </Link>
      </VStack>
    </Box>
  );
};

export default Contact;
