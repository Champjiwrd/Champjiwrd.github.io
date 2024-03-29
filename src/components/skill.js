import React from "react";
import { Box, Heading, Flex, Center, Wrap } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";
import { IoLogoVue, IoLogoReact, IoLogoPython } from "react-icons/io5";
import {
  DiDjango,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejs,
} from "react-icons/di";
import { SiPhp, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import "./styles/skill.css";
export default function skill() {
  const iconSize = 60;
  const language = [
    { id: 1, title: "HTML", icon: <DiHtml5 size={iconSize} /> },
    { id: 2, title: "CSS", icon: <DiCss3 size={iconSize} /> },
    { id: 3, title: "JavaScript", icon: <DiJavascript size={iconSize} /> },
    { id: 4, title: "Python", icon: <IoLogoPython size={iconSize} /> },
    { id: 5, title: "", icon: <SiPhp size={iconSize} /> },
  ];
  const framework = [
    { title: "Vue.js", icon: <IoLogoVue size={iconSize} /> },
    { title: "Nuxt.js", icon: <SiNuxtdotjs size={iconSize} /> },
    { title: "React.js", icon: <IoLogoReact size={iconSize} /> },
    { title: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
    { title: "Node.js", icon: <DiNodejs size={iconSize} /> },
    { title: "", icon: <DiDjango size={iconSize} /> },
  ];
  let languageList = [];
  language.forEach((item, index) => {
    languageList.push(
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        key={`languague-${index}`}
      >
        <Box className="icon-skill" alignContent={"center"}>
          <Center>{item.icon}</Center>
          <Center>{item.title}</Center>
        </Box>
      </motion.div>
    );
  });
  let framworkList = [];
  framework.forEach((item, index) => {
    framworkList.push(
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        key={`framework-${index}`}
      >
        <Box className="icon-skill" alignContent={"center"}>
          <Center>{item.icon}</Center>
          <Center>{item.title}</Center>
        </Box>
      </motion.div>
    );
  });
  return (
    <Box marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white.500" />
        <Box>
          <Heading marginBottom={6}>Technical skills</Heading>
          <Box>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 },
              }}
            >
              <Wrap>{languageList}</Wrap>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 },
              }}
            >
              <Heading size="md" marginY={6}>
                Framework & Library
              </Heading>

              <Wrap>{framworkList}</Wrap>
            </motion.div>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
