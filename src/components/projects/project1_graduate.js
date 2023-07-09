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
  Image,
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';
import { RiComputerLine } from 'react-icons/ri';

export default function Project1() {
  const title = 'Individual and Object Detection from CCTV';
  const subtitle = 'Graduation Project, 2020 - 2021';
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
                The graduation project{' '}
              </Text>
              <Text as="span">
                involves developing a tracking system for individuals based on
                their shirt color. The objective of this project was to utilize
                CCTV video for person detection and identification based on
                their clothing color. This system aims to facilitate the process
                of tracking and identifying individuals or suspects from CCTV
                videos, thereby reducing the search time required.
              </Text>
            </Box>

            <Heading mt={12} size="md">
              RESULT
            </Heading>

            <Box mt={5}>
              <Image
                borderRadius={10}
                boxSize={'full'}
                src="/projects/cctv.gif"
              />
            </Box>
            <Heading mt={12} size="md">
              TOOLS
            </Heading>
            <UnorderedList mt={3}>
              <ListItem>YOLOv4 Object Detection</ListItem>
              <ListItem>Color Classification</ListItem>
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
