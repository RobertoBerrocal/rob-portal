import {
  Box,
  Text,
  Image,
  VStack,
  Link,
  Stack,
  Heading,
} from "@chakra-ui/react";
import roberto from "../assets/roberto_london.jpg";

const About = () => {
  return (
    <Box
      id="about"
      paddingTop={16}
      paddingBottom={16}
      bg="blue.900"
      color="white"
      display="flex"
      justifyContent="center"
    >
      <VStack align="center">
        <Heading textAlign="center" mb={6} fontSize={"4xl"} pt={4}>
          About me
        </Heading>
        <Heading textAlign="center" mb={6} fontSize="xl">
          Know me better!
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={20}
          align="center"
          justify="center"
          flexWrap="wrap"
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Texto */}
          <VStack align={{ base: "center", md: "start" }} maxWidth="750px">
            <Text fontSize="4xl" fontWeight="bold">
              Roberto Carlos Berrocal Chirinos
            </Text>
            <Text fontSize="lg" py={1}>
              I am a Peruvian Industrial Engineer from the{" "}
              <Link
                href="https://www.pucp.edu.pe/"
                color={"teal.300"}
                fontWeight={"bold"}
                target="_blank"
                fontStyle={"italic"}
              >
                @Pontifical Catholic University of Peru
              </Link>{" "}
              , and my journey into the world of data began in 2019 when I took
              my first course in Power BI. That was the moment I fell in love
              with data, leading me to continue learning SQL and Python on my
              own.
            </Text>
            <Text fontSize={"lg"} py={1}>
              In 2020, I started my first internship as an IT Intern in the
              banking sector, where I gained valuable experience in data
              visualization and project management. The following year, in 2021,
              I worked as a Professional Intern in the energy sector, automating
              workflows and reports using Power Automate and Power BI. By 2022,
              I landed my first full-time role as a Data Analyst in the brewery
              industry, where I developed high-quality dashboards and conducted
              deep statistical data analysis. During this period, I also honed
              my skills in Data Engineering and Machine Learning.
            </Text>
            <Text fontSize={"lg"} py={1}>
              In June 2024, I moved to Germany to pursue a Master’s degree in
              Data Science, AI & Digital Business. A few months later, I started
              working as a Working Student Software Engineer, where I deepened
              my knowledge of React, TypeScript, and Node.js, with a strong
              focus on Front-End Development.
            </Text>
              <Text fontSize={"lg"} py={1}>
              On January 2026 I started a new challenge, joining Delivery Hero as a
              Pricing Data Analyst, where I am currently working on pricing strategies
              and data analysis for the company's delivery platform.
            </Text>
            <Text fontSize={"lg"} py={2}>
              I am a self-driven learner who is always eager to embrace new
              challenges and opportunities for growth. My passion lies in
              technology, data, and innovation. I thrive in multicultural
              environments, enjoy team collaboration, and continuously seek to
              expand my expertise. As a native Spanish speaker, I am fluent in
              English and currently learning German and Arabic.
            </Text>
            <Text fontSize={"lg"} py={1}>
              Beyond my professional journey, I have a deep love for traveling,
              exploring new cultures, trying new food , and meeting new people. 
              I am a passionate calisthenics enthusiast, and an avid Champions League fan
              of course supporting Bayern München.
            </Text>
          </VStack>
          {/* Imagen */}
          <Box display="flex" justifyContent="center">
            <Image
              borderRadius="lg"
              shadow={"md"}
              height={{ base: "400px", md: "500px", lg: "500px" }}
              width={{ base: "200px", md: "300px", lg: "300px" }}
              src={roberto}
              alt="Roberto Berrocal in London"
            />
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
};

export default About;
