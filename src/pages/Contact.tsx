import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

const channels = [
  {
    label: "Email",
    value: "r.berrocal@pucp.edu.pe",
    href: "mailto:r.berrocal@pucp.edu.pe",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "roberto-berrocal",
    href: "https://www.linkedin.com/in/roberto-berrocal",
    icon: FaLinkedin,
  },
  {
    label: "Phone",
    value: "+49 162 272 4948",
    href: "tel:+491622724948",
    icon: FaPhone,
  },
  {
    label: "WhatsApp",
    value: "+51 991 729 154",
    href: "https://wa.me/51991729154",
    icon: FaWhatsapp,
  },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      scrollMarginTop="84px"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#071316"
      color="white"
    >
      <Box
        maxW="1180px"
        mx="auto"
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
        gap={{ base: 10, lg: 14 }}
        alignItems="center"
      >
        <VStack align="start" gap={6}>
          <Badge
            bg="rgba(115, 226, 195, 0.12)"
            color="#73E2C3"
            border="1px solid"
            borderColor="rgba(115, 226, 195, 0.35)"
            borderRadius="full"
            px={4}
            py={2}
          >
            Contact
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.05"
          >
            Have a data problem, dashboard idea or product workflow to improve?
          </Heading>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            I am open to selected analytics, BI and front-end collaborations
            where the goal is clear, measurable and useful for real users.
          </Text>
          <HStack gap={3} flexWrap="wrap">
            <Button
              asChild
              bg="#F5B84B"
              color="#071316"
              borderRadius="full"
              px={6}
              fontWeight="900"
              _hover={{ bg: "#FFD076" }}
            >
              <Link href="mailto:r.berrocal@pucp.edu.pe">
                <FaEnvelope /> Send email
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="whiteAlpha.400"
              color="white"
              borderRadius="full"
              px={6}
              _hover={{ bg: "whiteAlpha.100" }}
            >
              <Link
                href="https://www.linkedin.com/in/roberto-berrocal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </Link>
            </Button>
          </HStack>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <Link
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  bg="#10282B"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderRadius="lg"
                  p={5}
                  minH="150px"
                  _hover={{ borderColor: "rgba(115, 226, 195, 0.55)" }}
                >
                  <Icon color="#73E2C3" size={24} />
                  <Text color="whiteAlpha.600" fontWeight="800" mt={5} mb={1}>
                    {channel.label}
                  </Text>
                  <Text fontWeight="800">{channel.value}</Text>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
