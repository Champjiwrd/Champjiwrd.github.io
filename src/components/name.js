import { Box, Heading } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import './styles/app.css';
export default function name() {
  return (
    <Box className="landing-page">
      <Heading
        size={'3xl'}
        bgGradient="linear(to-l, yellow.500, purple.500 )"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Warodom Baiudom Test
      </Heading>
      <Heading size={'xl'}>
        <Typewriter
          loop={true}
          onInit={typewriter => {
            typewriter
              .typeString('Hello, World!')
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
