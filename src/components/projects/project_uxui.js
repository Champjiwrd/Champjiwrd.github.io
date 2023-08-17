import React from 'react';
import {
  Box,
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
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';
import { RiComputerLine } from 'react-icons/ri';

export default function Project1() {
  const title = 'UXUI Project';
  const subtitle = 'UXUI Computer Engineering, 2020';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: '#FFBB56', fontSize: 14 };

  return (
    <div>
      <div onClick={onOpen}>
        <ProjectItem title={title} subtitle={subtitle} />
      </div>

      <Modal
        onClose={onClose}
        size={{ base: 'full', lg: '4xl' }}
        isOpen={isOpen}
        scrollBehavior={'inside'}
        isCentered
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
            <Heading size="md">OVERVIEW</Heading>
            <Box mt={3}>
              <Text
                as="span"
                bgGradient="linear(to-l, yellow.500, purple.500 )"
                bgClip="text"
                fontWeight="extrabold"
              >
                UX/UI
              </Text>
              <Text
                as="span"
              >
                {' '}is a subject taught at the university, and this project is a part of the course. It involves designing a user interface for a mobile application related to donation collection.
              </Text>
            </Box>

            <Heading mt={12} size="md">
              RESULT
            </Heading>

            <Box mt={5}>
              <iframe title='Uxui project' width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYV8ZPAHNxWEQc1ycmW6n2v%2Fuxui-ce%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D95-69%26viewport%3D-594%252C489%252C0.25%26t%3DWedo6IvDMCwV9HX7-1%26scaling%3Dscale-down%26mode%3Ddesign" allowfullscreen></iframe>
            </Box>
            <Heading mt={12} size="md">
              TOOLS
            </Heading>
            <UnorderedList mt={3}>
              <ListItem>figma</ListItem>
              <ListItem>User Experiences</ListItem>
            </UnorderedList>
            <Center mt={12}>
              <Divider mr={5} />
              <RiComputerLine size={50} />
              <Divider ml={5} />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
