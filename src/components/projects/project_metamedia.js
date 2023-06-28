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
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';

export default function Project2() {
  const title = 'Junior Developer';
  const subtitle = 'Metamedia Technology Co., Ltd.';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: '#FFBB56', fontSize: 14 };

  const modalSize = 'full'; // Check window width for responsiveness
  return (
    <div>
      <div onClick={onOpen}>
        <ProjectItem title={title} subtitle={subtitle} />
      </div>

      <Modal
        onClose={onClose}
        size={modalSize}
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
            {/* <Slider/> */}
            <Heading marginTop={6} size="md">
              TASK
            </Heading>
            <UnorderedList>
              <ListItem>Front-End: HTML, CSS, Javascript, Vue.js</ListItem>
              <ListItem>Back-End: Drupal (PHP)</ListItem>
              <UnorderedList>
                <ListItem>Front-End: HTML, CSS, Javascript, Vue.js</ListItem>
                <ListItem>Back-End: Drupal (PHP)</ListItem>
              </UnorderedList>
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
