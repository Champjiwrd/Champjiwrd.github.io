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
  Text,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';

export default function Project2() {
  const title = 'Junior Developer';
  const subtitle = 'Metamedia Technology Co., Ltd.';
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
            {/* <Slider/> */}
            <Box>
              <Text as="span">
                {subtitle} was the first company that I started working for
                after graduating. I joined as a{' '}
              </Text>
              <Text
                as="span"
                bgGradient="linear(to-l, yellow.500, purple.500 )"
                bgClip="text"
                fontWeight="extrabold"
              >
                Junior Programmer
              </Text>
              <Text as="span">
                {' '}
                with responsibilities related to web development, specifically
                both front-end and back-end tasks.
              </Text>
            </Box>
            <Heading mt={12} size="md">
              TOOLS
            </Heading>
            <UnorderedList mt={3}>
              <ListItem>
                <b>Front-End</b>: HTML, CSS, Javascript, Nuxt.js, Vue.js
              </ListItem>
              <ListItem>
                <b>Back-End</b>: Drupal (PHP)
              </ListItem>
              <ListItem>Automate Testing: Cypress</ListItem>
              <ListItem>Longdo Map</ListItem>
              <ListItem>Line Developer</ListItem>
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
