import React from "react";
import {
  Box,
  Heading,
  Image,
  Icon,
  Flex,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CircleIcon from "./circle-icon";
import {
  IoLogoVue,
  IoLogoReact,
  IoLogoPython,
  IoLogoNodejs,
} from "react-icons/io5";
import { DiDjango, DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
export default function skill() {
  return (
    <Box marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white.500" />
        <Box>
          <Heading marginBottom={6}>Technical skills</Heading>
          <Box>
            <Wrap>
              <Box alignContent={"center"}>
                <DiHtml5 size={80} />
                <Center>HTML</Center>
              </Box>

              <Box alignContent={"center"}>
                <DiCss3 size={80} />
                <Center>CSS</Center>
              </Box>

              <Box alignContent={"center"}>
                <DiJavascript size={80} />
                <Center>JavaScript</Center>
              </Box>

              <Box alignContent={"center"}>
                <IoLogoPython size={80} />
                <Center>Python</Center>
              </Box>
            </Wrap>
            <Heading size="md" marginY={6}>
              Framework & Library
            </Heading>
            <Wrap>
              <Box alignContent={"center"}>
                <IoLogoVue size={80} />
                <Center>Vue.js</Center>
              </Box>

              <Box alignContent={"center"}>
                <IoLogoReact size={80} />
                <Center>React.js</Center>
              </Box>

              <Box alignContent={"center"}>
                <IoLogoNodejs size={80} />
                <Center>Node.js</Center>
              </Box>
              <Box alignContent={"center"}>
                <DiDjango size={80} />
              </Box>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
