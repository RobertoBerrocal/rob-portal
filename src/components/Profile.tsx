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
      py={10}
      bg="blue.800"
      color="white"
      marginTop={12}
      // minH="100vh"
    >
      <Stack
        direction="row"
        marginTop="50px"
        marginBottom="50px"
        marginLeft="80px"
        gap={20}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image borderRadius="full" boxSize="300px" src={robertoProfile} />
        </Box>
        <VStack marginLeft={10} align="stretch" maxWidth="820px">
          <Text fontSize="5xl" fontWeight="bold">
            I am Roberto! Nice to meet you!
          </Text>
          <Text fontSize="2xl">
            Data Analyst | Data Scientist | Front-End Developer
          </Text>
          <Text fontSize="lg">
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
              pointerEvents={""}
              fontStyle={"italic"}
            >
              @GISMA University of Applied Sciences
            </Link>
          </Text>
          <Text display={"flex"} alignItems={"center"} gap={2} marginTop={4}>
            <FaMapMarkerAlt />
            Berlin, Germany
          </Text>
          <Text display={"flex"} alignItems={"center"} gap={2} marginBottom={4}>
            <FaCheckCircle color="green" />
            Available for new projects
          </Text>
          <HStack>
            <Link
              href="https://www.linkedin.com/in/roberto-berrocal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </Link>
            <Link
              href="https://github.com/RobertoBerrocal"
              target="_blank"
              rel="noopener noreferrer"
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
