import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Icon,
} from "@chakra-ui/react";
// import ProjectItem from "../projectItem";
import ProjectItem from "../projectItem";
import { FaChrome } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import "react-awesome-slider/dist/styles.css";
import { Carousel } from "react-carousel-minimal";

export default function Project2() {
  const title = "Chords Vue";
  const subtitle = "Vue.js, 2022";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };

  const data = [
    {
      image: "/project3/image1.png",
      caption: "",
    },
    {
      image: "/project3/image2.png",
      caption: "",
    },
    {
      image: "/project3/image3.png",
      caption: "",
    },
    {
      image: "/project3/image4.png",
      caption: "",
    },
    {
      image: "/project3/image5.png",
      caption: "",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div onClick={onOpen}>
        <ProjectItem title={title} subtitle={subtitle} />
      </div>

      <Modal
        onClose={onClose}
        size="6xl"
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {title}
            <Box style={gradeStyle}>{subtitle}</Box>
            <Box marginTop={2}>
              <hr />
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Slider/> */}
            <Carousel
              data={data}
              time={3000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "auto",
              }}
            />
            <Heading marginTop={6} size="md">
              TECHNOLOGIES
            </Heading>
            <UnorderedList>
              <ListItem>
                Front-End: Vue.js, Vuetify (Material Design Framework)
              </ListItem>
              <ListItem>Back-End: -</ListItem>
              <ListItem>Deploy on Github pages</ListItem>
            </UnorderedList>
            <Heading marginTop={6} size="md">
              DEMO
            </Heading>
            <Link
              href="
              https://champjiwrd.github.io/vue-layout/
            "
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaChrome} />}
              >
                Visit Chord Vue <Icon as={BiLinkAlt} />
              </Button>
            </Link>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
