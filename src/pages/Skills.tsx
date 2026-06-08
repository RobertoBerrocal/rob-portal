import {
  Badge,
  Box,
  Card,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import cloudPic from "../assets/cloud-comp.png";
import figmaPic from "../assets/figma-optimized.png";
import gitPic from "../assets/git.png";
import powerBiPic from "../assets/power bi.png";
import pythonPic from "../assets/python.png";
import reactPic from "../assets/react.png";
import sqlPic from "../assets/SQL.png";
import tableauPic from "../assets/tableau.png";
import typescriptPic from "../assets/typescript.png";

const skillGroups = [
  {
    title: "Analytics & BI",
    description:
      "Dashboards, KPI systems and decision-ready reporting for commercial and operational teams.",
    tools: [
      { name: "Power BI", image: powerBiPic },
      { name: "Tableau", image: tableauPic },
      { name: "Figma", image: figmaPic },
    ],
    highlights: ["DAX / M", "Data storytelling", "Executive reporting"],
  },
  {
    title: "Data Engineering",
    description:
      "Reliable data models, pipelines and transformations that make analytics easier to trust.",
    tools: [
      { name: "SQL", image: sqlPic },
      { name: "Python", image: pythonPic },
      { name: "Cloud", image: cloudPic },
    ],
    highlights: ["ETL pipelines", "Data modeling", "Automation"],
  },
  {
    title: "Product Engineering",
    description:
      "Front-end implementation experience that helps me build analytical products end to end.",
    tools: [
      { name: "React", image: reactPic },
      { name: "TypeScript", image: typescriptPic },
      { name: "Git", image: gitPic },
    ],
    highlights: ["Component systems", "Type safety", "Collaboration"],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      scrollMarginTop="84px"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#0D1D20"
      color="white"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <VStack maxW="1180px" mx="auto" align="stretch" gap={10}>
        <Box maxW="760px">
          <Badge
            bg="rgba(245, 184, 75, 0.14)"
            color="#F5B84B"
            border="1px solid"
            borderColor="rgba(245, 184, 75, 0.35)"
            borderRadius="full"
            px={4}
            py={2}
            mb={5}
          >
            Core Stack
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="1.05"
            mb={4}
          >
            The stack behind my analytical work.
          </Heading>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            I combine business context, data infrastructure and product thinking
            to move from raw tables to useful decisions.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={5}>
          {skillGroups.map((group) => (
            <Card.Root
              key={group.title}
              bg="#10282B"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              overflow="hidden"
              shadow="none"
            >
              <Card.Body gap={6} p={{ base: 5, md: 6 }}>
                <Box>
                  <Card.Title fontSize="2xl" fontWeight="900" mb={3}>
                    {group.title}
                  </Card.Title>
                  <Card.Description color="whiteAlpha.800" fontSize="md">
                    {group.description}
                  </Card.Description>
                </Box>
                <HStack gap={3} flexWrap="wrap">
                  {group.tools.map((tool) => (
                    <HStack
                      key={tool.name}
                      bg="rgba(255, 255, 255, 0.06)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="full"
                      px={3}
                      py={2}
                      minH="44px"
                    >
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        boxSize="22px"
                        objectFit="contain"
                      />
                      <Text fontSize="sm" fontWeight="700">
                        {tool.name}
                      </Text>
                    </HStack>
                  ))}
                </HStack>
                <HStack gap={2} flexWrap="wrap">
                  {group.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      bg="rgba(115, 226, 195, 0.12)"
                      color="#73E2C3"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {highlight}
                    </Badge>
                  ))}
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Skills;
