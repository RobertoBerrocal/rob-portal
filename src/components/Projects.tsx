import { Box, Heading, Link, VStack } from "@chakra-ui/react";

const projects = [
  { name: "GitHub", url: "https://github.com/RobertoBerrocal" },
];

const Projects = () => {
  return (
    <Box id="projects" py={10} px={8} minH={"100vh"}>
      <Heading textAlign="center" mb={6}>
        Proyectos
      </Heading>
      <VStack
      //   spacing={4}
      >
        {projects.map((proj, index) => (
          <Link key={index} href={proj.url} fontSize="xl">
            {proj.name}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
