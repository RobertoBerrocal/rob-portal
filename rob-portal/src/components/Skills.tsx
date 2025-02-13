import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  RatingGroup,
  HStack,
  Icon,
  Card,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const skillsSet = [
  {
    name: "Power BI",
    description: "Business analytics service by Microsoft",
    rating: 5,
  },
  {
    name: "Python",
    description:
      "High-level programming language for general-purpose programming",
    rating: 5,
  },
  {
    name: "SQL",
    description: "Structured Query Language used for managing databases",
    rating: 5,
  },
  {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
    rating: 3,
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces",
    rating: 3,
  },
  {
    name: "Git",
    description:
      "Distributed version control system for tracking changes in source code",
    rating: 2,
  },
];

const Skills = () => {
  return (
    <Box id="skills" py={10} px={8} minH={"100vh"}>
      <Heading textAlign="center" mb={6}>
        Tech Stack
      </Heading>
      <SimpleGrid
        columns={[2, 2]}
        gap={4}
        //   spacing={6}
      >
        {skillsSet.map((skills, index) => (
          <Card.Root
            _hover={{ bg: "blue.300" }}
            textAlign={"left"}
            key={index}
            bg="blue.100"
            color="black"
            p={4}
          >
            <CardBody>
              <CardTitle>{skills.name}</CardTitle>
              <CardDescription
                // fontStyle={"italic"}
                marginTop={2}
                marginBottom={2}
                fontWeight={"bold"}
                color={"black"}
              >
                {skills.description}
              </CardDescription>
              <CardFooter justifyContent={"center"} padding={0}>
                {/* <HStack>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon
                      as={StarIcon}
                      key={i} // Usa "i" como key, NO "index"
                      color={i < skills.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
                </HStack> */}
              </CardFooter>
            </CardBody>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
