import { Box, Button, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Bienvenido a mi Portafolio 🚀</Heading>
      <Text fontSize="lg" mt={4}>
        Este es un proyecto construido con React, TypeScript y Chakra UI.
      </Text>
      <Button colorScheme="teal" mt={6}>
        Explorar
      </Button>
    </Box>
  );
}

export default App;
