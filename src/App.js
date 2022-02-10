import React from "react";
import Profile from "./components/profile";
import AboutMe from "./components/about-me";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import Project from "./components/project";
import Skill from "./components/skill";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Container,
  Box,
  ChakraProvider,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import theme from './theme' 

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
        transition={{ duration: 0.6, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Container>
          <Profile />
          <div style={{ marginTop: "-15px", marginLeft: "65px" }}>
            <VerticalTimeline layout={"1-column-left"}>
              <Box marginLeft={0}>
                <AboutMe />
                <Experiences />
                <Project />
                <Skill />
                <Education />
              </Box>
            </VerticalTimeline>
            <Contact />
          </div>
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}
