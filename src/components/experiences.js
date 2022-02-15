import React from "react";
import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";
import { motion } from "framer-motion";

export default function Experiences() {
  // const gradeStyle = { color: "#FFBB56", fontSize: 14 };
  const yearStyle = { color: "#FFBB56" };
  const experiencesList = [
    {
      duration: "2021 - Present",
      position: "Junior Developer",
      company: "Metamedia Technology Co., Ltd.",
    },
    {
      duration: "2020",
      position: "Back-End Developer Internship",
      company: "Unixdev Co., Ltd",
    },
  ];
  return (
    <Box marginBottom={10}>
      <Flex>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1 },
          }}
        >
          <CircleIcon boxSize={10} color="white.500" />
        </motion.div>
        <Box>
          <Heading marginBottom={6}>Experiences</Heading>
          {experiencesList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Flex marginTop={4} key={index}>
                  <Box
                    display={{ base: "none", sm: "flex" }}
                    style={yearStyle}
                    maxWidth={150}
                    minWidth={130}
                  >
                    {item.duration}
                  </Box>

                  <Box>
                    <Box
                      display={{ base: "flex", sm: "none" }}
                      style={yearStyle}
                      maxWidth={150}
                      minWidth={130}
                    >
                      {item.duration}
                    </Box>
                    <Heading size="md">{item.position}</Heading>
                    <UnorderedList>
                      <ListItem>{item.company}</ListItem>
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
