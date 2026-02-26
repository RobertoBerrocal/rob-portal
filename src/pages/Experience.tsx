import { Box, Heading, VStack } from "@chakra-ui/react";
import HorizontalCard from "../components/horizontalCard";
import affinidiPic from "../assets/affinidi.png";
import abInbevPic from "../assets/abi.svg.png";
import statkraftPic from "../assets/statkraft.webp";
import deliveryHeroPic from "../assets/delivery-hero.png";
import bcpPic from "../assets/bcp.svg.png";

const experiences = [
    {
    role: "Pricing Data Analyst",
    company: "Delivery Hero SE",
    path: deliveryHeroPic,
    tasks: [
      "Lead the Data Quality and Data Governance strategy for the Global Pricing Team, ensuring data accuracy and reliability across all pricing models and dashboards.",
      "Monitor KPI's and automated alerts to identify and resolve data quality issues proactively using Monte Carlo.",
      "Implemented end-to-end data pipelines on BigQuery, ensuring efficient data processing and integration for pricing analytics.",
      "Create interactive dashboards and reports using Tableau, providing actionable insights to stakeholders and supporting data-driven decision-making.",
    ],
    year: "January 2026 - Present",
    url_link: "https://www.deliveryhero.com/",
  },
  {
    role: "Working Student Software Engineer",
    company: "Affinidi GmbH",
    path: affinidiPic,
    tasks: [
      "Developed and maintained front-end components using TypeScript and React, ensuring intuitive and functional user experiences.",
      "Design components using Zeplin and Figma",
      "Implemented end-to-end tests using Jest and React Testing Library.",
      "Actively collaborated in an agile environment, utilizing tools like Git for version control, branching, and merging workflows.",
    ],
    year: "September 2024 - September 2025",
    url_link: "https://www.affinidi.com/",
  },
  {
    role: "Direct to Consumer Data Analyst",
    company: "Anheuser-Busch Inbev",
    path: abInbevPic,
    tasks: [
      "Built automated dashboards using Power BI, cutting reporting time by 40%.",
      "Developed and maintained Power BI cubes, facilitating better data integration for users.",
      "Automated various reports using Python and PySpark in Databricks.",
      "Owned key business KPIs: NR (Net Revenue), TRR (Terminal Retention Rate), SLA (Service Level Agreement), NPS (Net Promoter Score), Stock Out.",
      "Conducted data extraction, transformation, modeling, and cleaning tasks.",
      "Developed a Cross Basket Model to analyze interactions between SKUs, resulting in an 8% AOV (Average Order Value) uplift in the last half of 2023.",
      "Created a customer retention dataset based on buying behavior, increasing the rolling TRR from 15% to 23% from October 2023 onwards.",
      "Created a new KPI: 'Availability Rate', that measured the availability of certain SKUs grouped by different portfolios. The ideal portfolio availability increased from 11% to 19% from January to June 2024.",
    ],
    year: "May 2022 - May 2024",
    url_link: "https://www.ab-inbev.com/",
  },
  {
    role: "Digital Solutions Professional Intern",
    company: "Statkraft Perú S.A.",
    path: statkraftPic,
    tasks: [
      "Automated employee onboarding and off-boarding processes, approvals and bonus perks using Power Automate, reducing manual efforts by 30%.",
      "Developed a reservation app for sites and parking spaces using Power Apps increasing booking efficiency.",
      "Generated reports for departmental indicators and KPIs using Power BI, leading to better performance tracking.",
      "Automated Excel reports using Macros/Python.",
      "Automated the Salary Offer Proposal process.",
    ],
    year: "April 2021 - April 2022",
    url_link: "https://www.statkraft.com/",
  },
  {
    role: "IT Architecture Pre-Professional Intern",
    company: "Banco de Crédito del Perú BCP",
    path: bcpPic,
    tasks: [
      "Monitored Enterprise Architecture and Business Solutions projects, ensuring timely delivery of milestones.",
      "Created administrative metrics reports for the department using Power BI.",
      "Participated in the development of machine learning models, enhancing forecasting accuracy.",
      "Conducted ad hoc statistical data analysis.",
    ],
    year: "January - December 2020",
    url_link: "https://www.viabcp.com/",
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      py={10}
      px={8}
      minH={"100vh"}
      bg={"blue.900"}
      color={"white"}
    >
      <Heading textAlign="center" mb={6} fontSize="4xl" pt={10}>
        Work Experience
      </Heading>
      <Heading textAlign="center" mb={6} fontSize="xl">
        Here is a brief overview of my professional journey
      </Heading>
      <VStack>
        {experiences.map((exp, index) => (
          <HorizontalCard
            key={index}
            title={exp.role}
            subtitle={exp.company}
            imagePath={exp.path}
            description={exp.tasks}
            footer={exp.year}
            maxW="5xl"
            url_link={exp.url_link}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
