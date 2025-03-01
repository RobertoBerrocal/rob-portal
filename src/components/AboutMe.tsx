import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <AccordionRoot
        width="auto"
        margin={5}
        collapsible
        defaultValue={["b"]}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger
              cursor="pointer"
              textAlign="center"
              alignItems={"center"}
            >
              {item.title}
            </AccordionItemTrigger>
            <AccordionItemContent
              minWidth={100}
              maxWidth={700}
              textAlign="center"
            >
              {item.text}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Box>
  );
};

export default AboutMe;
