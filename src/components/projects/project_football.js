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
    Divider,
    Tag,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import { FaChrome } from 'react-icons/fa';
import { BiLinkAlt } from 'react-icons/bi';
import 'react-awesome-slider/dist/styles.css';
// import { Carousel } from 'react-carousel-minimal';
import { RiComputerLine } from 'react-icons/ri';

export default function Project2() {
    const title = 'Football Score Project';
    const subtitle = 'Football score Website';
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
                        {/* <Image
              borderRadius={10}
              boxSize={'full'}
              width={300}
              src="/project2/image1.jpg"
            /> */}
                        <Center>
                            {/* <Carousel
                                data={data}
                                time={3000}
                                height={'500px'}
                                radius="10px"
                                automatic={true}
                                dots={true}
                                boxSize={'full'}
                                slideBackgroundColor="transparent"
                                slideImageFit={'contain'}
                            /> */}
                            <iframe style={{ height: '400px', width: '100%' }} title='football' src='https://football-score-flame.vercel.app/tables' ></iframe>
                        </Center>

                        <Heading mt={12} size="md">
                            OVERVIEW
                        </Heading>
                        <Box mt={3}>
                            This website serves as my personal platform dedicated to tracking Thai League football scores. Its primary purpose is to facilitate my learning journey and showcase my proficiency in React and TypeScript.
                        </Box>
                        <Heading mt={12} size="md">
                            TOOLS
                        </Heading>
                        <UnorderedList mt={3}>
                            <ListItem>
                                <b>Front-End</b>: React Typescript, Material UI
                            </ListItem>

                        </UnorderedList>
                        <Heading mt={12} size="md">
                            DEMO{' '}
                            <Tag size={'sm'} variant="solid" colorScheme="green">
                                Developing
                            </Tag>
                        </Heading>
                        <Box mt={3}>
                            <Link href="https://football-score-flame.vercel.app/" target="_blank">
                                <Button
                                    variant="outline"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={FaChrome} />}
                                >
                                    Visit Football Score <Icon as={BiLinkAlt} />
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
