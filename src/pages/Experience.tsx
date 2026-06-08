import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import abInbevPic from "../assets/abi.svg.png";
import affinidiPic from "../assets/affinidi.png";
import bcpPic from "../assets/bcp.svg.png";
import deliveryHeroPic from "../assets/delivery-hero.png";
import statkraftPic from "../assets/statkraft.webp";

const experiences = [
  {
    role: "Pricing Data Analyst",
    company: "Delivery Hero SE",
    path: deliveryHeroPic,
    tasks: [
      "Lead data quality and governance strategy for the Global Pricing Team.",
      "Monitor pricing KPIs and automated alerts using Monte Carlo.",
      "Build BigQuery pipelines for pricing analytics and reporting.",
      "Create Tableau dashboards that support stakeholder decision-making.",
    ],
    year: "January 2026 - Present",
    url_link: "https://www.deliveryhero.com/",
    stack: ["Pricing", "BigQuery", "Tableau", "Monte Carlo"],
  },
  {
    role: "Working Student Software Engineer",
    company: "Affinidi GmbH",
    path: affinidiPic,
    tasks: [
      "Developed front-end components using TypeScript and React.",
      "Translated Zeplin and Figma designs into reusable UI components.",
      "Implemented tests using Jest and React Testing Library.",
      "Collaborated in agile workflows using Git-based delivery.",
    ],
    year: "September 2024 - September 2025",
    url_link: "https://www.affinidi.com/",
    stack: ["React", "TypeScript", "Testing", "Design Systems"],
  },
  {
    role: "Direct to Consumer Data Analyst",
    company: "Anheuser-Busch Inbev",
    path: abInbevPic,
    tasks: [
      "Built automated dashboards using Power BI, cutting reporting time by 40%.",
      "Automated reports using Python and PySpark in Databricks.",
      "Developed a Cross Basket Model that produced an 8% AOV uplift.",
      "Built a retention dataset that increased rolling TRR from 15% to 23%.",
    ],
    year: "May 2022 - May 2024",
    url_link: "https://www.ab-inbev.com/",
    stack: ["Power BI", "Python", "PySpark", "Databricks"],
  },
  {
    role: "Digital Solutions Professional Intern",
    company: "Statkraft Peru S.A.",
    path: statkraftPic,
    tasks: [
      "Automated onboarding, off-boarding and approvals with Power Automate.",
      "Developed a reservation app for sites and parking spaces with Power Apps.",
      "Generated departmental KPI reporting in Power BI.",
      "Automated Excel reports using macros and Python.",
    ],
    year: "April 2021 - April 2022",
    url_link: "https://www.statkraft.com/",
    stack: ["Power BI", "Power Apps", "Power Automate", "Python"],
  },
  {
    role: "IT Architecture Pre-Professional Intern",
    company: "Banco de Credito del Peru BCP",
    path: bcpPic,
    tasks: [
      "Tracked Enterprise Architecture and Business Solutions initiatives.",
      "Created administrative metrics reports using Power BI.",
      "Supported machine learning model development.",
      "Conducted ad hoc statistical analysis for internal teams.",
    ],
    year: "January - December 2020",
    url_link: "https://www.viabcp.com/",
    stack: ["Power BI", "Architecture", "Analytics", "ML Support"],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      scrollMarginTop="84px"
      py={{ base: 16, md: 24 }}
      px={{ base: 5, md: 8, xl: 12 }}
      bg="#071316"
      color="white"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <VStack maxW="1180px" mx="auto" align="stretch" gap={10}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} alignItems="end">
          <Box>
            <Badge
              bg="rgba(115, 226, 195, 0.12)"
              color="#73E2C3"
              border="1px solid"
              borderColor="rgba(115, 226, 195, 0.35)"
              borderRadius="full"
              px={4}
              py={2}
              mb={5}
            >
              Experience
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.05"
            >
              From BI automation to pricing analytics and product engineering.
            </Heading>
          </Box>
          <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }}>
            My work sits between business questions and technical delivery:
            define the metric, build the pipeline, design the dashboard and make
            the decision visible.
          </Text>
        </SimpleGrid>
        <VStack align="stretch" gap={0}>
          {experiences.map((exp, index) => (
            <Box
              key={`${exp.company}-${exp.role}`}
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "180px 1fr" }}
              gap={{ base: 4, md: 8 }}
              py={{ base: 7, md: 8 }}
              borderTop="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Text color="#F5B84B" fontWeight="800">
                {exp.year}
              </Text>
              <Box>
                <HStack align="start" gap={4} mb={4}>
                  <Link
                    href={exp.url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    flexShrink={0}
                  >
                    <Box
                      bg="white"
                      borderRadius="md"
                      p={2}
                      boxSize="56px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={exp.path}
                        alt={exp.company}
                        maxW="42px"
                        maxH="42px"
                        objectFit="contain"
                      />
                    </Box>
                  </Link>
                  <Box>
                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
                      {exp.role}
                    </Heading>
                    <Text color="whiteAlpha.700" fontWeight="700">
                      {exp.company}
                    </Text>
                  </Box>
                </HStack>
                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3} mb={5}>
                  {exp.tasks.map((task) => (
                    <Box
                      key={task}
                      bg={index === 0 ? "rgba(115, 226, 195, 0.08)" : "#10282B"}
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="md"
                      p={4}
                    >
                      <Text color="whiteAlpha.900">{task}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <HStack gap={2} flexWrap="wrap">
                  {exp.stack.map((item) => (
                    <Badge
                      key={item}
                      bg="rgba(255, 255, 255, 0.08)"
                      color="whiteAlpha.900"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {item}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Experience;
