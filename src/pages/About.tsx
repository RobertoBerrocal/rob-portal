import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import roberto from "../assets/roberto-london-optimized.jpg";

const principles = [
  "Business-first analytics",
  "Reliable data foundations",
  "Clear dashboards and interfaces",
  "Multicultural collaboration",
];

const About = () => {
  return (
    <Box
      id="about"
      scrollMarginTop="84px"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#092125"
      color="white"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <SimpleGrid
        maxW="1180px"
        mx="auto"
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 10, lg: 16 }}
        alignItems="center"
      >
        <Box position="relative" order={{ base: 2, lg: 1 }}>
          <Box
            position="absolute"
            inset={{ base: "-10px", md: "-14px" }}
            border="1px solid"
            borderColor="rgba(115, 226, 195, 0.42)"
            borderRadius="28px"
            transform="rotate(2deg)"
          />
          <Image
            borderRadius="24px"
            shadow="2xl"
            height={{ base: "420px", md: "560px" }}
            width="100%"
            maxW="440px"
            objectFit="cover"
            objectPosition="center 35%"
            src={roberto}
            alt="Roberto Berrocal in London"
            position="relative"
          />
        </Box>
        <VStack align="start" gap={6} order={{ base: 1, lg: 2 }}>
          <Badge
            bg="rgba(115, 226, 195, 0.12)"
            color="#73E2C3"
            border="1px solid"
            borderColor="rgba(115, 226, 195, 0.35)"
            borderRadius="full"
            px={4}
            py={2}
          >
            About
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.05"
          >
            Industrial engineering roots, data science depth and product-minded
            execution.
          </Heading>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            I am Roberto Carlos Berrocal Chirinos, a Peruvian Industrial
            Engineer from the{" "}
            <Link
              href="https://www.pucp.edu.pe/"
              color="#73E2C3"
              fontWeight="800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pontifical Catholic University of Peru
            </Link>
            . My path into data started in 2019 with Power BI, then expanded
            into SQL, Python, analytics engineering and machine learning.
          </Text>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            Since then I have worked across banking, energy, consumer goods,
            identity technology and delivery platforms. In June 2024, I moved
            to Germany for an MSc in Data Science, AI & Digital Business, and in
            January 2026 I joined Delivery Hero as a Pricing Data Analyst.
          </Text>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            Outside work, I enjoy traveling, learning languages, calisthenics
            and football. I bring that same curiosity into teams: direct,
            collaborative and focused on making complex systems easier to use.
          </Text>
          <HStack gap={2} flexWrap="wrap">
            {principles.map((principle) => (
              <Badge
                key={principle}
                bg="rgba(255, 255, 255, 0.08)"
                color="whiteAlpha.900"
                borderRadius="full"
                px={3}
                py={1}
              >
                {principle}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default About;
