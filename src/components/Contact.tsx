import { Box, Heading, VStack, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="contact" py={10} px={8} bg={"blue.800"}>
      <Heading textAlign="center" mb={6} fontSize={"4xl"}>
        Contact me
      </Heading>
      <Heading textAlign="center" mb={6} fontSize={"xl"}>
        Let's work together!
      </Heading>
      <VStack align="center">
        <Link
          href="mailto:r.berrocal@pucp.edu.pe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> r.berrocal@pucp.edu.pe
        </Link>
        <Text display={"flex"} alignItems={"center"} gap={2}>
          <FaPhone />
          <Link href="tel:+491622724948" target="_blank" color="teal.300">
            +49 162 272 4948
          </Link>
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
      </VStack>
    </Box>
  );
};

export default Contact;
