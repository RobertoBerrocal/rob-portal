import { Box, Heading, VStack, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="contact" py={10} px={8} minH={"100vh"} bg={"blue.800"}>
      <Heading textAlign="center" mb={6}>
        Contacto
      </Heading>
      <VStack
        //   spacing={4}
        align="center"
      >
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
