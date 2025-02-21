import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import powerBiPic from "../assets/power bi.png";
import pythonPic from "../assets/python.png";
import sqlPic from "../assets/sql.png";
import typescriptPic from "../assets/typescript.png";
import reactPic from "../assets/react.png";
import gitPic from "../assets/git.png";
import HorizontalCard from "./horizontalCard";

const skillsSet = [
  {
    title: "Power BI",
    description: "Business analytics service by Microsoft",
    imagePath: powerBiPic,
    // rating: 5,
  },
  {
    title: "Python",
    description:
      "High-level programming language for general-purpose programming",
    imagePath: pythonPic,
    // rating: 5,
  },
  {
    title: "SQL",
    description: "Structured Query Language used for managing databases",
    imagePath: sqlPic,
    // rating: 5,
  },
  {
    title: "TypeScript",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
    imagePath: typescriptPic,
    // rating: 3,
  },
  {
    title: "React",
    description: "JavaScript library for building user interfaces",
    imagePath: reactPic,
    // rating: 3,
  },
  {
    title: "Git",
    description:
      "Distributed version control system for tracking changes in source code",
    imagePath: gitPic,
    // rating: 2,
  },
];

const Skills = () => {
  return (
    <Box id="skills" py={10} px={8} minH={"100vh"} bg={"blue.800"}>
      <Heading textAlign="center" mb={6} fontSize={"4xl"}>
        Tech Stack
      </Heading>
      <SimpleGrid columns={[1, 2, 3]}>
        {skillsSet.map((skill, index) => (
          <HorizontalCard
            key={index}
            imgW="100px"
            maxW="lg"
            title={skill.title}
            description={skill.description}
            imagePath={skill.imagePath}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
