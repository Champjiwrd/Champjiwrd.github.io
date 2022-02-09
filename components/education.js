import React from "react";
import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";

export default function Education() {
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };
  const yearStyle = { color: "#FFBB56" };
  return (
    <Box marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white.500" />
        <Box>
          <Heading marginBottom={6}>Education</Heading>
          <Flex>
            <Box style={yearStyle} maxWidth={150} minWidth={130}>
              2017 - 2021
            </Box>
            <Box>
              <Heading size="md">
                Computer Engineering
              </Heading>
              <UnorderedList>
                <ListItem>
                  King Mongkut&apos;s Institute Of Technology Ladkrabang
                </ListItem>
              </UnorderedList>
              <Box style={gradeStyle}>(3.36)</Box>
            </Box>
          </Flex>
          <Flex marginTop={4} >
            <Box style={yearStyle} maxWidth={150} minWidth={130}>
              2004 - 2016
            </Box>

            <Box>
              <Heading size="md">
                Science and Mathematics Program
              </Heading>
              <UnorderedList>
                <ListItem>Bangkok Christian College</ListItem>
              </UnorderedList>
              <Box style={gradeStyle}>(3.50)</Box>

            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
