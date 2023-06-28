// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
import React from 'react';
import Profile from './components/profile';
import AboutMe from './components/about-me';
import Education from './components/education';
import Experiences from './components/experiences';
import Contact from './components/contact';
import Project from './components/project';
import Skill from './components/skill';
import { Container, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import theme from './theme';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import './components/styles/verticalTimeline.css';

export default function App() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <ChakraProvider theme={theme}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.6, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        <Container>
          <Profile />
          <AboutMe />
          <Experiences />
          <Project />
          <Skill />
          <Education />
          <Contact />
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}
