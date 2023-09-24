import React from "react";
import { Flex, Box } from "@chakra-ui/react";

function Navbar(props) {
  return (
    <Flex justifyContent={"space-between"} padding={3}>
      <Flex>
        <Box display={{ base: "none", lg: "block" }} mr={30}>
          Shop Now
        </Box>
        <Box mr={30}>Health Expert</Box>
        <Box mr={10}>Naked Way</Box>
      </Flex>
      <Flex mr={10}>
        <h3>Nack</h3>
      </Flex>
      <Flex>
        <Box ml={10}>About Us</Box>
        <Box ml={20}>USer</Box>
        <Box ml={20}>Cart</Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;
