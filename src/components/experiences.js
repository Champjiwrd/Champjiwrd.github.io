import React from "react";
import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";

export default function Experiences() {
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };
  const yearStyle = { color: "#FFBB56" };
  return (
    <Box marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white.500" />
        <Box>
          <Heading marginBottom={6}>Experiences</Heading>
          <Flex>
            <Box style={yearStyle} maxWidth={150} minWidth={130}>
              2021 - Present
            </Box>
            <Box>
              <Heading size="md">
              Junior Developer
              </Heading>
              <UnorderedList>
            <ListItem>Metamedia Technology Co., Ltd.</ListItem>

              </UnorderedList>
            </Box>
          </Flex>
          <Flex marginTop={4} >
            <Box style={yearStyle} maxWidth={150} minWidth={130}>
              2020
            </Box>

            <Box>
              <Heading size="md">
              Back-End Developer Internship
              </Heading>
              <UnorderedList>
                <ListItem>Unixdev Co., Ltd</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
