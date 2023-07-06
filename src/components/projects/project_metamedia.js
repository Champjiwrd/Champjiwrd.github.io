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
  Button,
  Text,
  Link,
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
              <ListItem>
                <Link href="https://map.longdo.com/main/" target="_blank">
                  Longdo Map
                </Link>
              </ListItem>
              <ListItem>Line Developer</ListItem>
            </UnorderedList>
            <Heading mt={12} size="md">
              WORKING PERIOD
            </Heading>
            <Box mt={3}>Jun 2020 - Present </Box>
            <Heading mt={12} size="md">
              COMPANY
            </Heading>
            <Box mt={3}>
              <Link href="https://www.mm.co.th/" target="_blank">
                <Button colorScheme="purple" variant="outline">
                  {subtitle}
                </Button>
              </Link>
            </Box>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
