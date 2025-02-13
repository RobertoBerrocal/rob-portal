import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const skills = ["React", "TypeScript", "SQL", "Python", "Power BI", "Git"];

const Skills = () => {
  return (
    <Box id="skills" py={10} px={8} minH={"100vh"}>
      <Heading textAlign="center" mb={6}>
        Habilidades
      </Heading>
      <SimpleGrid
        columns={[2, 3]}
        //   spacing={6}
      >
        {skills.map((skill, index) => (
          <Text key={index} fontSize="xl" fontWeight="bold" textAlign="center">
            {skill}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
