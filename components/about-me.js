import React from "react";
import { Box, Heading, Image,Icon,Flex } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";

export default function AboutMe() {

  return (
    <Box marginBottom={10}>
      <Flex>
      <CircleIcon boxSize={10} color='white.500' />
      <Box>
      <Heading marginBottom={6}>About me</Heading>
      <p>I am a full-stack Developer</p>
      </Box>
      </Flex>
    </Box>
  );
}
