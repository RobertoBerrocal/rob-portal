import { Box, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";

interface ExperienceProps {
  role: string;
  company: string;
  path: string;
  tasks: string[];
  year: string;
}

const HorizontalCard: React.FC<ExperienceProps> = ({
  role,
  company,
  path,
  tasks,
  year,
}) => {
  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="5xl"
      bg="white"
      _hover={{ bg: "grey.300" }}
      textAlign={"center"}
      color="black"
      p={4}
      m={5}
    >
      {/* Imagen */}
      <Box>
        <Image objectFit="cover" maxW="200px" src={path} alt={role} />
      </Box>

      {/* Contenido */}
      <Box flex="1" textAlign="left">
        <Card.Body
          paddingTop={0}
          paddingBottom={0}
          paddingRight={4}
          paddingLeft={6}
        >
          <Card.Title mb="2">
            {role}
            <Text textStyle={"sm"} fontStyle={"italic"}>
              {" "}
              @{company}{" "}
            </Text>
          </Card.Title>
          <Card.Description color="black">
            <List.Root>
              {tasks.map((task, index) => (
                <List.Item key={index}>{task}</List.Item>
              ))}
            </List.Root>
          </Card.Description>
        </Card.Body>
      </Box>

      {/* Footer */}
      <Box
      //   minWidth={"200px"}
      // textAlign="right"
      >
        <Card.Footer>
          <Text fontSize="sm" fontStyle="italic">
            {year}
          </Text>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default HorizontalCard;
