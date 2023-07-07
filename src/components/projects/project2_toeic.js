import React from 'react';
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
  Center,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import { FaChrome } from 'react-icons/fa';
import { BiLinkAlt } from 'react-icons/bi';
import 'react-awesome-slider/dist/styles.css';
import { Carousel } from 'react-carousel-minimal';

export default function Project2() {
  const title = 'Voccoli Project';
  const subtitle = 'Vocabulary Website';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: '#FFBB56', fontSize: 14 };

  const data = [
    {
      image: '/project2/image1.jpg',
      caption: '',
    },
    {
      image: '/project2/image2.jpg',
      caption: '',
    },
    {
      image: '/project2/image3.jpg',
      caption: '',
    },
    {
      image: '/project2/image4.jpg',
      caption: '',
    },
    {
      image: '/project2/image5.jpg',
      caption: '',
    },
    {
      image: '/project2/image6.jpg',
      caption: '',
    },
    {
      image: '/project2/image7.jpg',
      caption: '',
    },
  ];

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
            {/* <Image
              borderRadius={10}
              boxSize={'full'}
              width={300}
              src="/project2/image1.jpg"
            /> */}
            <Center>
              <Carousel
                data={data}
                time={3000}
                height={'500px'}
                radius="10px"
                automatic={true}
                dots={true}
                boxSize={'full'}
                slideBackgroundColor="transparent"
                slideImageFit={'contain'}
              />
            </Center>

            <Heading mt={12} size="md">
              OVERVIEW
            </Heading>
            <Box mt={3}>
              A website about vocabulary learning, with categorized word lists
              and vocabulary quizzes. It provides tests for various vocabulary
              categories and summarizes the words you answered correctly and
              incorrectly.
            </Box>
            <Heading mt={12} size="md">
              TOOLS
            </Heading>
            <UnorderedList mt={3}>
              <ListItem>
                <b>Front-End</b>: Vue.js, Vuetify
              </ListItem>
              <ListItem>
                <b>Back-End</b>: Django Python framework
              </ListItem>
              <ListItem>
                <b>Web Server</b>: NGINX
              </ListItem>
            </UnorderedList>
            <Heading mt={12} size="md">
              DEMO
            </Heading>
            <Box mt={3}>
              <Link href="https://voccoli.com/" target="_blank">
                <Button
                  variant="outline"
                  colorScheme="purple"
                  leftIcon={<Icon as={FaChrome} />}
                >
                  Visit Voccoli <Icon as={BiLinkAlt} />
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
