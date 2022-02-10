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

export default function Project2() {
  const title = "TOEIC Project";
  const subtitle = "Django Website, 2021";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };

  return (
    <div>
      <div onClick={onOpen}>
        <ProjectItem title={title} subtitle={subtitle} />
      </div>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
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
            <Heading marginTop={6} size="md">
              Skill using
            </Heading>
            <UnorderedList>
              <ListItem>Back-End: Django Python framework</ListItem>
              <ListItem>Front-End: HTML, CSS, Javascript</ListItem>
              <ListItem>Deploy on Herokuapp</ListItem>
            </UnorderedList>
            <Heading marginTop={6} size="md">
              Demo
            </Heading>
            <Link
              href="
            https://voccoli.herokuapp.com/
            "
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaChrome} />}
              >
                Visit Voccoli <Icon as={BiLinkAlt} />
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
