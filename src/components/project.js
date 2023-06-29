import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Project1 from './projects/project1_graduate';
import Project2 from './projects/project2_toeic';
import Metamedia from './projects/project_metamedia';
// import Project3 from "./projects/project3_vue";
export default function Projects() {
  //   const projects = [<Project1 key='graduate' />];
  return (
    <Box mt={'90px'}>
      <Flex>
        <Box>
          <Heading marginBottom={6}>Work Experiences</Heading>
          {/* <Box>{projects}</Box> */}
          <Metamedia key="metamedia" />
          <Project2 key="toeic" />
          <Project1 key="graduate" />
        </Box>
      </Flex>
    </Box>
  );
}
