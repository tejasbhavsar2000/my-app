import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';


export default function Navbar() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        Shop List
      </Box>
    </>
  );
}