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
  ModalFooter,
  useDisclosure,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
// import ProjectItem from "../projectItem";
import ProjectItem from "../projectItem";
import YoutubeEmbed from "../YoutubeEmbed";

export default function Project1() {
  const title = "Individual and Object Detection from CCTV";
  const subtitle = "Graduation Project , 2020 - 2021";
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
            <Heading marginTop={6} marginBottom={2} size="md"> Video Demo</Heading>
            <YoutubeEmbed embedId="HHnR7vX4W6Y" />

            <Heading marginTop={6} size="md">
              Skill using
            </Heading>
            <UnorderedList>
              <ListItem>
                King Mongkut&apos;s Institute Of Technology Ladkrabang
              </ListItem>
              <ListItem>Color classification</ListItem>
            </UnorderedList>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
