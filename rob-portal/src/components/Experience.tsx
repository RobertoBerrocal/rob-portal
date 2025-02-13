import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const experiences = [
  {
    role: "Data Analyst",
    company: "Anheuser-Busch Inbev",
    year: "2022 - 2024",
  },
  {
    role: "Software Engineer",
    company: "Affinidi GmbH",
    year: "2024 - Presente",
  },
];

const Experience = () => {
  return (
    <Box id="experience" py={10} px={8} minH={"100vh"} bg={"blue.800"}>
      <Heading textAlign="center" mb={6}>
        Experiencia
      </Heading>
      <VStack
      //   spacing={4}
      >
        {experiences.map((exp, index) => (
          <Box key={index} textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              {exp.role}
            </Text>
            <Text fontSize="md">
              {exp.company} - {exp.year}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
