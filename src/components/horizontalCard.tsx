import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";

interface HorizontalCardProps {
  imagePath?: string;
  title: string;
  subtitle?: string;
  description: string | string[];
  footer?: string;
  imgmaxW?: string;
  imgW?: string;
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
  url_link?: string;
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
  url_link,
}) => {
  return (
    <Card.Root
      flexDirection="row"
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
    >
      {/* Imagen */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href={url_link} target="_blank">
          <Image
            objectFit="cover"
            maxW={imgmaxW}
            src={imagePath}
            alt={title}
            w={imgW}
          />
        </Link>
      </Box>

      {/* Contenido */}
      <Box flex="1" textAlign="left">
        <Card.Body
          paddingTop={0}
          paddingBottom={0}
          paddingRight={4}
          marginLeft={4}
        >
          <Card.Title mb="2">
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
      <Box display="flex" justifyContent="center" alignItems="center">
        {footer && (
          <Card.Footer>
            <Text fontSize="sm" fontStyle="italic">
              {footer}
            </Text>
          </Card.Footer>
        )}
      </Box>
    </Card.Root>
  );
};

export default HorizontalCard;
