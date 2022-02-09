import React from "react";
import {
  Container,
  Box,
  Heading,
  Divider,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";
import Profile from "../components/profile";
import AboutMe from "../components/about-me";
import Education from "../components/education";
import Experiences from "../components/experiences";
import Contact from "../components/contact";
import { ChakraProvider } from "@chakra-ui/react";

import Head from "next/head";
import Skill from "../components/skill";

export default function index() {
  return (
    <Box>
      <Head>
        <title>Warodom Baiudom Portfolio</title>
      </Head>
      <Profile />
      <div style={{ marginTop: "-15px", marginLeft: "65px" }}>
        <VerticalTimeline layout={"1-column-left"}>
          <Box marginLeft={0}>
            <AboutMe />
            <Experiences />
            <Skill />
            <Education />
          </Box>
        </VerticalTimeline>
        <Contact />

      </div>
    </Box>
  );
}
