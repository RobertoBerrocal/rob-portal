import { Box, Text, Image, VStack, Link, Separator } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import Contact from "./Contact";
import robertoProfile from "../assets/roberto-profile.jpg";

const TEXT = `Experienced Data Analyst with a Bachelor's
in Industrial Engineering from the Pontifical
Catholic University of Peru. Skilled in data
extraction, cleaning, and analysis using
Python, SQL, and Power BI. Proficient in
creating advanced data visualizations for
clear insights. Detail-oriented problem
solver with a track record of driving process
improvements and cost optimization.
Collaborative team player with a passion for
continuous learning, currently pursuing an
MSc in Data Science, AI, and Digital Business
at GISMA University of Applied Sciences to
further contribute to the success of dynamic
organizations.`;

const items = [{ value: "a", title: "About me", text: TEXT }];

const AboutMe = () => {
  return (
    <AccordionRoot width={"auto"} margin={5} collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger cursor={"pointer"} justifyContent={"center"}>
            {item.title}
          </AccordionItemTrigger>
          <AccordionItemContent minWidth={100} maxWidth={700}>
            {item.text}
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
const Profile = () => {
  return (
    <Box
      id="profile"
      textAlign="center"
      py={10}
      bg="blue.800"
      color="white"
      minH="100vh"
    >
      <VStack separator={<Separator />}>
        <Text fontSize="5xl" fontWeight="bold">
          Profile
        </Text>
        <Image borderRadius="full" boxSize="150px" src={robertoProfile} />
        <Text fontSize="5xl" fontWeight="bold">
          Roberto Berrocal
        </Text>
        <Text fontSize="2xl">
          Data Analyst | Data Scientist | Front-End Developer
        </Text>
        <Text fontSize="xl" fontStyle="italic">
          MSc Data Science, AI and Digital Business Candidate{" "}
          <Link
            href="https://www.gisma.com/"
            color={"teal.300"}
            fontWeight={"bold"}
            target="_blank"
            pointerEvents={""}
          >
            @GISMA University of Applied Sciences
          </Link>
        </Text>
        <AboutMe />
        <Contact />
      </VStack>
    </Box>
  );
};

export default Profile;
