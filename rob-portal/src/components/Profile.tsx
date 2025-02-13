import { Box, Text, Button, Image, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box textAlign="center" py={10} bg="blue.800" color="white" minH="100vh">
      <VStack
      //   spacing={4}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://source.unsplash.com/150x150/?developer"
          alt="Profile"
        />
        <Text fontSize="2xl" fontWeight="bold">
          Roberto Berrocal
        </Text>
        <Text fontSize="lg">Front-End Developer & Data Analyst</Text>
        <Button
          colorScheme="blue"
          as="a"
          // href="#contact"
        >
          Contáctame
        </Button>
      </VStack>
    </Box>
  );
};

export default Profile;
