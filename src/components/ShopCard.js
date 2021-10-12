import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";

export default function ShopCard({ name, area, category, startDate, endDate }) {
  var myArray = [
    "tomato",
    "red",
    "yellow",
    "pink",
    "green",
    "skyblue",
    "black",
  ];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  return (
    <Box
      maxW="sm"
      borderColor={randomItem}
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      margin="1"
    >
      <Box m="5" as="a" href="/blog-post-thing">
        <Heading m="5" mb="0" as="h4" size="md">
          {name}
        </Heading>
        <Text m="5" mt="0">
          {area}
        </Text>
        <Text m="5" mt="0">
          {category}
        </Text>
        <Text m="5" mt="0">
          {`${startDate} - ${endDate}`}
        </Text>
        <button
          style={{
            background: "tomato",
            border: "0.01rem solid black",
            height: "2em",
            borderRadius: "1em",
            padding: "0 1em",
            fontWeight: "bold",
          }}
        >
          Delete
        </button>
      </Box>
    </Box>
  );
}
