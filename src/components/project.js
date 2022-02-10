import React from "react";
import { Box, Heading,  Flex } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";
import Project1 from "./projects/project1_graduate";
import Project2 from "./projects/project2_toeic";
export default function Projects() {
  //   const projects = [<Project1 key='graduate' />];
  return (
    <Box marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white.500" />
        <Box>
          <Heading marginBottom={6}>Projects</Heading>
          {/* <Box>{projects}</Box> */}
          <Project1 key="graduate" />
          <Project2 key="toeic" />
        </Box>
      </Flex>
    </Box>
  );
}
