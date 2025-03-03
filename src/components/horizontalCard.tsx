import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";

interface HorizontalCardProps {
  imagePath?: string;
  title: string;
  subtitle?: string;
  description?: string | string[];
  footer?: string;
  imgmaxW?: string;
  imgW?: string;
  imgH?: string;
  url_link?: string;
  cardHeight?: string;
  maxW?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  subtitle,
  imagePath,
  description,
  footer,
  maxW = "xl",
  imgmaxW = "200px",
  imgW = "200px",
  imgH,
  url_link,
  cardHeight,
}) => {
  return (
    <Card.Root
      flexDirection="row"
      gap={8}
      overflow="hidden"
      maxW={maxW}
      bg="white"
      _hover={{ bg: "gray.200" }}
      textAlign={"center"}
      color="black"
      p={4}
      m={5}
      shadow={"md"}
      borderRadius={"2xl"}
      height={cardHeight}
    >
      {/* Image */}
      <Box alignItems={"center"} alignContent={"center"}>
        {" "}
        <Link href={url_link} target="_blank">
          {" "}
          <Image
            objectFit="cover"
            maxW={imgmaxW}
            src={imagePath}
            alt={title}
            w={imgW}
            h={imgH}
          />
        </Link>
      </Box>

      {/* Content */}
      <Box flex="1" textAlign="left">
        <Card.Body
          paddingTop={0}
          paddingBottom={0}
          paddingLeft={0}
          paddingRight={0}
          marginLeft={0}
        >
          <Card.Title mb="2" fontWeight={"bold"}>
            {title}
            {subtitle && (
              <Text fontSize="sm" fontStyle="italic">
                @{subtitle}
              </Text>
            )}
          </Card.Title>
          <Card.Description color="black">
            {Array.isArray(description) ? (
              <List.Root>
                {description.map((desc, index) => (
                  <List.Item key={index}>{desc}</List.Item>
                ))}
              </List.Root>
            ) : (
              <Text>{description}</Text>
            )}
          </Card.Description>
        </Card.Body>
      </Box>
      {/* Footer */}
      {footer && (
        <Box alignContent={"center"} alignItems={"center"}>
          <Card.Footer paddingLeft={0} paddingRight={0} marginRight={4}>
            <Text fontSize="sm" fontStyle="italic">
              {footer}
            </Text>
          </Card.Footer>
        </Box>
      )}
    </Card.Root>
  );
};

export default HorizontalCard;
