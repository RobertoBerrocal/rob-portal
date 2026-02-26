import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import powerBiPic from "../assets/power bi.png";
import pythonPic from "../assets/python.png";
import sqlPic from "../assets/sql.png";
import typescriptPic from "../assets/typescript.png";
import reactPic from "../assets/react.png";
import gitPic from "../assets/git.png";
import HorizontalCard from "../components/horizontalCard";

const skillsSet = [
  {
    title: "Power BI",
    // description: "Business analytics service by Microsoft",
    description: ["Insightful dashboards", "DAX", "M language", "KPIs"],
    imagePath: powerBiPic,
    // rating: 5,
  },
  {
    title: "Python",
    description: [
      "ML & AI libraries",
      "Data analysis",
      "Automation",
      "Forecasting",
    ],
    imagePath: pythonPic,
    // rating: 5,
  },
  {
    title: "SQL",
    description: [
      "Advanced queries",
      "Views",
      "Data modeling",
      "ETL processes",
    ],
    imagePath: sqlPic,
    // rating: 5,
  },
  {
    title: "TypeScript",
    description: ["Type safety", "Interfaces", "Classes", "Modules"],
    imagePath: typescriptPic,
    // rating: 3,
  },
  {
    title: "React",
    description: [
      "Components",
      "Hooks",
      "UI libraries",
      "Front-end development",
    ],
    imagePath: reactPic,
    // rating: 3,
  },
  {
    title: "Git",
    description: ["Version control", "Branching", "Merging", "Collaboration"],
    imagePath: gitPic,
    // rating: 2,
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      py={10}
      px={5}
      bg={"blue.800"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading textAlign="center" mb={6} fontSize={"4xl"} pt={10}>
        Skills
      </Heading>
      <Heading textAlign="center" mb={6} fontSize={"xl"}>
        Here is my tech stack
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={6}
        width="100%"
        maxWidth="1100px"
        alignItems="center"
      >
        {skillsSet.map((skill, index) => (
          <HorizontalCard
            key={index}
            imgW="100px"
            imgH="100px"
            maxW="lg"
            cardHeight="180px"
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
