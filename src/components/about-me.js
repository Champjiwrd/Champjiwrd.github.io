import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
export default function AboutMe() {
  return (
    <Box mt={'90px'}>
      <Flex>
        <Box>
          <Heading marginBottom={6}>About me</Heading>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box>
              <p>
                I am a Full-Stack Web Developer with 2 years of experience in
                web development. I am proficient in various programming
                languages, frameworks, and technologies, including HTML, CSS,
                JavaScript, Vue.js, Drupal, PHP, Python and others.
              </p>
            </Box>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}
