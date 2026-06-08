import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AirPollutionPic from "../assets/air pollution.jpg";
import AmazonPic from "../assets/amazon.jpg";
import CkdPic from "../assets/ckd.jpg";
import RedditPic from "../assets/reddit.jpeg";
import RobPic from "../assets/rob-portal-optimized.png";
import UtilitiesPic from "../assets/utilities.jpg";

const projects = [
  {
    title: "E-Commerce Sales",
    description:
      "Business intelligence analysis over Amazon India sales data, focused on commercial visibility and performance tracking.",
    imagePath: AmazonPic,
    url: "https://github.com/RobertoBerrocal/E-CommerceSales",
    tags: ["BI", "Sales", "Analytics"],
    outcome: "Executive sales reporting",
  },
  {
    title: "Chronic Kidney Disease",
    description:
      "Machine learning project for predicting chronic kidney disease using structured clinical data.",
    imagePath: CkdPic,
    url: "https://github.com/RobertoBerrocal/ChronicKidneyDisease",
    tags: ["ML", "Healthcare", "Python"],
    outcome: "Predictive modeling",
  },
  {
    title: "NLP Reddit",
    description:
      "Sentiment analysis on Reddit comments about Hunter X Hunter, turning unstructured text into interpretable signals.",
    imagePath: RedditPic,
    url: "https://github.com/RobertoBerrocal/NLP-Reddit",
    tags: ["NLP", "Sentiment", "Text"],
    outcome: "Opinion mining",
  },
  {
    title: "Air Pollution Forecasting",
    description:
      "Time-series and deep learning workflow for forecasting air pollution levels.",
    imagePath: AirPollutionPic,
    url: "https://github.com/RobertoBerrocal/AirPollutionForecasting",
    tags: ["Forecasting", "Deep Learning", "Time Series"],
    outcome: "Environmental forecasting",
  },
  {
    title: "Utilities",
    description:
      "Practical scripts and workflows for common data analyst tasks and productivity needs.",
    imagePath: UtilitiesPic,
    url: "https://github.com/RobertoBerrocal/utilities",
    tags: ["Automation", "Python", "Tools"],
    outcome: "Daily workflow helpers",
  },
  {
    title: "Rob Portal",
    description:
      "The source code for this portfolio, built as a React and Chakra UI single-page application.",
    imagePath: RobPic,
    url: "https://github.com/RobertoBerrocal/rob-portal",
    tags: ["React", "TypeScript", "Chakra UI"],
    outcome: "Personal product surface",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      scrollMarginTop="84px"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#0D1D20"
      color="white"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <VStack maxW="1180px" mx="auto" align="stretch" gap={10}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} alignItems="end">
          <Box>
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
              Projects
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.05"
            >
              Selected work across BI, machine learning and product interfaces.
            </Heading>
          </Box>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            Each project highlights a different part of my profile: analytical
            framing, data modeling, automation, forecasting or front-end
            execution.
          </Text>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={5}>
          {projects.map((project) => (
            <Card.Root
              key={project.title}
              bg="#10282B"
              color="white"
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="lg"
              shadow="none"
              _hover={{
                borderColor: "rgba(115, 226, 195, 0.55)",
                transform: "translateY(-3px)",
              }}
              transition="all 160ms ease"
            >
              <Image
                src={project.imagePath}
                alt={`${project.title} project preview`}
                h="180px"
                objectFit="cover"
              />
              <Card.Body gap={5} p={5}>
                <Box>
                  <Text color="#F5B84B" fontSize="sm" fontWeight="800" mb={2}>
                    {project.outcome}
                  </Text>
                  <Card.Title fontSize="xl" fontWeight="900" mb={2}>
                    {project.title}
                  </Card.Title>
                  <Card.Description color="whiteAlpha.800">
                    {project.description}
                  </Card.Description>
                </Box>
                <HStack gap={2} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      bg="rgba(255, 255, 255, 0.08)"
                      color="whiteAlpha.900"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Card.Body>
              <Card.Footer px={5} pb={5} pt={0}>
                <Button
                  asChild
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="white"
                  borderRadius="full"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    textDecoration="none"
                  >
                    <FaGithub /> View repository <FaExternalLinkAlt />
                  </Link>
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Projects;
