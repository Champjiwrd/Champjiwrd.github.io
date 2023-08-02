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
  Flex,
  Link,
  Button,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';
import { RiComputerLine } from 'react-icons/ri';
import { PiDotOutlineLight } from 'react-icons/pi';

export default function Project2() {
  const title = 'Web Developer Internship';
  const subtitle = 'UnixDev Co.,Ltd';
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
              I have had the opportunity to intern as a web developer internship
              position. My responsibilities included working on various projects
              within the company, specifically modifying and adjusting different
              functions according to client requirements. The main framework I
              used for this was Django.
            </Box>
            <Heading marginTop={12} size="md">
              TOOLS
            </Heading>
            <UnorderedList mt={3}>
              <ListItem>
                Front-End: HTML, CSS, Javascript, Django Template
              </ListItem>
              <ListItem>Back-End: Django</ListItem>
            </UnorderedList>
            <Heading mt={12} size="md">
              WORKING PERIOD
            </Heading>
            <Flex mt={3}>
              <Center>
                <Box>Jun 2020 - Jul 2020</Box>
                <PiDotOutlineLight />
                <Box color="RGBA(255, 255, 255, 0.48)">(2 months)</Box>
              </Center>
            </Flex>
            <Heading mt={12} size="md">
              COMPANY
            </Heading>
            <Box mt={3}>
              <Link href="https://www.unixdev.co.th/" target="_blank">
                <Button colorScheme="purple" variant="outline">
                  {subtitle}
                </Button>
              </Link>
            </Box>
            <Center mt={12}>
              <Divider mr={5} />
              <RiComputerLine size={50} />
              <Divider ml={5} />
            </Center>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
