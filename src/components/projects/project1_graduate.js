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
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';

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
              System used for tracking a suspect person who has exactly what is
              needed (such as shirt, bag, color) from CCTV.
            </Box>
            <Heading mt={12} size="md">
              Result Demo
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
              <ListItem>Color classification</ListItem>
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
