import {
  Box,
  Text,
  Image,
  VStack,
  Link,
  Stack,
  HStack,
} from "@chakra-ui/react";
import robertoProfile from "../assets/roberto-profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Profile = () => {
  return (
    <Box
      id="profile"
      paddingTop={16}
      paddingBottom={10}
      bg="blue.800"
      color="white"
      marginTop={12}
      display="flex"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={20}
        align="center"
        justify="center"
        flexWrap="wrap"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Imagen */}
        <Box display="flex" justifyContent="center">
          <Image
            borderRadius="full"
            boxSize={{ base: "200px", md: "300px", lg: "350px" }}
            src={robertoProfile}
            marginBottom={10}
            shadow={"md"}
            alt="Roberto Berrocal"
          />
        </Box>

        {/* Texto */}
        <VStack align={{ base: "center", md: "start" }} maxWidth="750px" py={4}>
          <Text fontSize="5xl" fontWeight="bold">
            I am Roberto! Nice to meet you!
          </Text>
          <Text fontSize="2xl" fontStyle={"italic"}>
            Data Analyst | Data Scientist | Front-End Developer
          </Text>
          <Text fontSize="xl">
            I am a Data Analyst with a strong focus on building insightful
            dashboards and conducting in-depth data analysis to help companies
            make informed, data-driven decisions for success. Additionally, I
            have experience in Front-End Development, crafting interactive and
            user-friendly websites. Currently pursuing an MSc in Data Science,
            AI & Digital Business at{" "}
            <Link
              href="https://www.gisma.com/"
              color={"teal.300"}
              fontWeight={"bold"}
              target="_blank"
              fontStyle={"italic"}
            >
              @GISMA University of Applied Sciences
            </Link>
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={2}
            pt={4}
            fontSize={"xl"}
          >
            <FaMapMarkerAlt />
            Berlin, Germany
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={2}
            pt={4}
            fontSize={"xl"}
          >
            <FaCheckCircle color="green" />
            Available for new projects
          </Text>
          <HStack gap={4} py={8}>
            <Link
              href="https://www.linkedin.com/in/roberto-berrocal"
              target="_blank"
              rel="noopener noreferrer"
              display="flex"
              alignItems="center"
              gap={2}
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
            >
              <FaGithub /> GitHub
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Profile;
