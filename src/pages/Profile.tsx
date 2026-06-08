import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaArrowDown,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import robertoProfile from "../assets/roberto-profile-optimized.jpg";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const metrics = [
  { value: "6+", label: "years across data, BI and software" },
  { value: "40%", label: "reporting time reduced with automation" },
  { value: "23%", label: "rolling retention improved through analytics" },
];

const Profile = () => {
  return (
    <Box
      id="profile"
      scrollMarginTop="84px"
      minH={{ base: "auto", lg: "calc(100vh - 72px)" }}
      pt={{ base: 14, md: 20 }}
      pb={{ base: 14, md: 18 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#071316"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, lg: 16 }}
        align="center"
        justify="space-between"
        textAlign={{ base: "center", md: "left" }}
        maxW="1180px"
        w="100%"
      >
        <VStack
          align={{ base: "center", md: "start" }}
          maxW="690px"
          gap={6}
          py={4}
        >
          <Badge
            bg="rgba(115, 226, 195, 0.12)"
            color="#73E2C3"
            border="1px solid"
            borderColor="rgba(115, 226, 195, 0.35)"
            borderRadius="full"
            px={4}
            py={2}
            fontSize="sm"
            fontWeight="700"
          >
            Pricing Data Analyst at Delivery Hero
          </Badge>
          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight="1.02"
            fontWeight="900"
            maxW="720px"
          >
            I turn messy data into pricing decisions, dashboards and products
            people trust.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            maxW="640px"
          >
            Roberto Berrocal, Data Analyst and Engineer based in Berlin. MSc in
            Data Science, AI & Digital Business, with hands-on experience across
            BI, data engineering, pricing analytics and front-end development.
          </Text>
          <HStack
            gap={3}
            flexWrap="wrap"
            justify={{ base: "center", md: "start" }}
          >
            <Button
              bg="#F5B84B"
              color="#071316"
              borderRadius="full"
              px={6}
              fontWeight="900"
              _hover={{ bg: "#FFD076" }}
              onClick={() => scrollToSection("projects")}
            >
              See projects <FaArrowDown />
            </Button>
            <Button
              variant="outline"
              borderColor="whiteAlpha.400"
              color="white"
              borderRadius="full"
              px={6}
              _hover={{ bg: "whiteAlpha.100" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </Button>
          </HStack>
          <HStack
            gap={5}
            flexWrap="wrap"
            justify={{ base: "center", md: "start" }}
            color="whiteAlpha.800"
          >
            <Text display="flex" alignItems="center" gap={2}>
              <FaMapMarkerAlt color="#73E2C3" />
              Berlin, Germany
            </Text>
            <Text display="flex" alignItems="center" gap={2}>
              <FaCheckCircle color="#73E2C3" />
              Available for selected projects
            </Text>
          </HStack>
          <HStack
            gap={5}
            flexWrap="wrap"
            justify={{ base: "center", md: "start" }}
          >
            <Link
              href="https://www.linkedin.com/in/roberto-berrocal"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              color="#73E2C3"
              fontWeight="700"
              _hover={{ color: "#A8F5DF" }}
            >
              <FaLinkedin /> LinkedIn
            </Link>
            <Link
              href="https://github.com/RobertoBerrocal"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
              color="#73E2C3"
              fontWeight="700"
              _hover={{ color: "#A8F5DF" }}
            >
              <FaGithub /> GitHub
            </Link>
          </HStack>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap={4} w="100%" pt={4}>
            {metrics.map((metric) => (
              <Box
                key={metric.value}
                borderTop="1px solid"
                borderColor="whiteAlpha.300"
                pt={4}
              >
                <Text fontSize="3xl" fontWeight="900" color="#F5B84B">
                  {metric.value}
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  {metric.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
        <Box
          display="flex"
          justifyContent="center"
          flexShrink={0}
          position="relative"
        >
          <Box
            position="absolute"
            inset={{ base: "-10px", md: "-16px" }}
            border="1px solid"
            borderColor="rgba(245, 184, 75, 0.55)"
            borderRadius="32px"
            transform="rotate(-3deg)"
          />
          <Image
            borderRadius="28px"
            boxSize={{ base: "260px", md: "360px", lg: "420px" }}
            src={robertoProfile}
            objectFit="cover"
            objectPosition="center 28%"
            shadow="2xl"
            alt="Roberto Berrocal"
            position="relative"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
