import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
export default function AboutMe() {
  return (
    <Box mt={'90px'}>
      <Flex>
        <Box>
          <Heading marginBottom={6}>About me</Heading>
          <p>I am a full-stack Developer</p>
        </Box>
      </Flex>
    </Box>
  );
}
