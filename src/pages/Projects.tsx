import { Box, Heading, SimpleGrid, Image, Card, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import AirPollutionPic from "../assets/air pollution.jpg";
import AmazonPic from "../assets/amazon.jpg";
import CkdPic from "../assets/ckd.jpg";
import RedditPic from "../assets/reddit.jpeg";
import UtilitiesPic from "../assets/utilities.jpg";
import RobPic from "../assets/rob portal.png";

const projects = [
  {
    title: "E-Commerce Sales",
    description:
      "Business Intelligence approach on Amazon India E-Commerce sales data.",
    imagePath: AmazonPic,
    url: "https://github.com/RobertoBerrocal/E-CommerceSales",
  },
  {
    title: "Chornic Kidney Disease",
    description: "Predicting Chronic Kidney Disease using Machine Learning.",
    imagePath: CkdPic,
    url: "https://github.com/RobertoBerrocal/ChronicKidneyDisease",
  },
  {
    title: "NLP - Reddit",
    description:
      "Sentiment Analysis on Reddit comments on Hunter X Hunter anime.",
    imagePath: RedditPic,
    url: "https://github.com/RobertoBerrocal/NLP-Reddit",
  },
  {
    title: "Air Pollution Forecasting",
    description:
      "Forecasting of Air Pollution leves using Deep Learning and Time Series.",
    imagePath: AirPollutionPic,
    url: "https://github.com/RobertoBerrocal/AirPollutionForecasting",
  },
  {
    title: "Utilities",
    description: "Some utilities for the daily life as a data analyst.",
    imagePath: UtilitiesPic,
    url: "https://github.com/RobertoBerrocal/utilities",
  },
  {
    title: "Rob Portal",
    description:
      "Source code for my personal website. Exactly what you are seeing.",
    imagePath: RobPic,
    url: "https://github.com/RobertoBerrocal/rob-portal",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      py={10}
      px={5}
      bg={"blue.800"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading textAlign="center" mb={6} fontSize={"4xl"} pt={10}>
        Personal Projects
      </Heading>
      <Heading textAlign="center" mb={6} fontSize={"xl"}>
        See the projects I have worked on!
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={6}
        width="100%"
        maxWidth="1100px"
        alignItems="center"
      >
        {projects.map((project, index) => (
          <Card.Root
            key={index}
            maxW="sm"
            overflow="hidden"
            bg="white"
            _hover={{ bg: "gray.200" }}
            textAlign={"center"}
            color="black"
            m={5}
            shadow={"md"}
            borderRadius={"2xl"}
          >
            <Image
              src={project.imagePath}
              h={"160px"}
              // w={"200px"}
              objectFit="cover"
            />
            <Card.Body gap="2">
              <Card.Title>{project.title}</Card.Title>
              <Card.Description color="black">
                {project.description}
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2" justifyContent={"center"}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={2}
                color="black"
              >
                <FaGithub color="black" /> GitHub
              </Link>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
