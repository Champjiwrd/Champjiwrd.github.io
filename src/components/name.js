import { Box, Heading } from '@chakra-ui/react';

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
      <Heading size={'2xl'}>Champ</Heading>
    </Box>
  );
}
