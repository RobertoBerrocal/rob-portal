import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@chakra-ui/react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Affinidi GmbH",
    year: "Sep 2024 - Present",
  },
  {
    role: "Data Analyst",
    company: "Anheuser-Busch Inbev",
    year: "May 2022 - May 2024",
  },
  {
    role: "Digital Solutions Professional Intern",
    company: "Statkraft Perú S.A.",
    year: "April 2021 - April 2022",
  },
  {
    role: "IT Architecture Pre-Professional Intern",
    company: "Banco de Crédito del Perú BCP",
    year: "Jan 2020 - Dec 2020",
  },
];

const Experience = () => {
  return (
    <Box
      // width={"auto"}
      id="experience"
      py={10}
      px={8}
      minH={"100vh"}
      bg={"blue.800"}
      color={"white"}
    >
      <Heading textAlign="center" mb={6}>
        Work Experience
      </Heading>
      <SimpleGrid columns={[4, 2]} px={[4, 10]} gap={4}>
        {experiences.map((exp, index) => (
          <Card.Root
            _hover={{ bg: "blue.300" }}
            textAlign={"center"}
            key={index}
            bg="blue.100"
            color="black"
            p={4}
          >
            <CardBody>
              <CardTitle>{exp.role}</CardTitle>
              <CardDescription
                fontStyle={"italic"}
                marginTop={2}
                marginBottom={2}
                fontWeight={"bold"}
                color={"black"}
              >
                {exp.company}
              </CardDescription>
              {/* <Text fontSize="sm" fontStyle="italic">
                {exp.year}
              </Text> */}
              <CardFooter justifyContent={"center"} padding={0}>
                {exp.year}
              </CardFooter>
            </CardBody>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
