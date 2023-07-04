import { Box, Heading } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
export default function name() {
  return (
    <Box my={300}>
      <Heading
        size={'3xl'}
        bgGradient="linear(to-l, yellow.500, purple.500 )"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Warodom Baiudom
      </Heading>
      <Heading size={'xl'}>
        <Typewriter
          loop={true}
          onInit={typewriter => {
            typewriter
              .typeString('Hello!')
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm Champ")
              .start();
          }}
        />
      </Heading>
    </Box>
  );
}
