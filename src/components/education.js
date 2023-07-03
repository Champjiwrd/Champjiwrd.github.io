import React from 'react';
import { Box, Heading, UnorderedList, ListItem, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Education() {
  const yearStyle = { color: '#FFBB56' };
  const educationList = [
    {
      duration: '2017 - 2021',
      program: 'Computer Engineering',
      school: "King Mongkut's Institute Of Technology Ladkrabang",
      gpa: '3.36',
    },
    {
      duration: '2004 - 2016',
      program: 'Science and Mathematics Program',
      school: 'Bangkok Christian College',
      gpa: '3.50',
    },
  ];
  return (
    <Box mt={'90px'}>
      <Flex>
        <Box>
          <Heading marginBottom={6}>Education</Heading>
          {educationList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Flex marginTop={4}>
                  <Box
                    display={{ base: 'none', sm: 'flex' }}
                    style={yearStyle}
                    maxWidth={150}
                    minWidth={130}
                  >
                    {item.duration}
                  </Box>
                  <Box>
                    <Box
                      display={{ base: 'flex', sm: 'none' }}
                      style={yearStyle}
                      maxWidth={150}
                      minWidth={130}
                    >
                      {item.duration}
                    </Box>
                    <Heading size="md">{item.program}</Heading>
                    <UnorderedList>
                      <ListItem>{item.school}</ListItem>
                    </UnorderedList>
                  </Box>
                </Flex>
              </motion.div>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
}
