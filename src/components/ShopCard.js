import { Box, Heading, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { del, selectshops } from "../features/shop/shopSlice";
export default function ShopCard({
  id,
  name,
  area,
  category,
  startDate,
  endDate,
}) {
  const shops = useSelector(selectshops);

  const dispatch = useDispatch();
  var colourArray = [
    "tomato",
    "red",
    "yellow",
    "pink",
    "green",
    "skyblue",
    "black",
  ];

  var randomItem = colourArray[Math.floor(Math.random() * colourArray.length)];
  // function deleteShop() {
  //   console.log(id);
  // }
  return (
    <Box
      maxW="sm"
      borderColor={randomItem}
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      margin="1"
    >
      <Box m="5" as="a">
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
          Start Date - End Date
          <br />
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
          onClick={() => dispatch(del(id))}
        >
          Delete
        </button>
      </Box>
    </Box>
  );
}
