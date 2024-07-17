import React from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
  useDisclosure,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
  Link,
  Flex,
  Center,
} from '@chakra-ui/react';
// import ProjectItem from "../projectItem";
import ProjectItem from '../projectItem';
import 'react-awesome-slider/dist/styles.css';
// import { longdo, map, LongdoMap } from './../../longdo-map/LongdoMap';
import { RiComputerLine } from 'react-icons/ri';
import { PiDotOutlineLight } from 'react-icons/pi';
export default function Project2() {
  const title = 'Junior Developer';
  const subtitle = 'Metamedia Technology Co., Ltd.';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradeStyle = { color: '#FFBB56', fontSize: 14 };

  let map;
  const initMap = () => {
    map = new window.longdo.Map({
      placeholder: document.getElementById('map'),
      src: 'https://api.longdo.com/map3/',
    });
    map.Ui.Zoombar.visible(false);
    map.Ui.DPad.visible(false);
    map.Ui.Geolocation.visible(false);
    map.Ui.Terrain.visible(false);
    map.Ui.LayerSelector.visible(false);
    map.Ui.Scale.visible(false);
    if (map.Ui.Fullscreen) map.Ui.Fullscreen.visible(false);
  };

  const getLocation = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition);
    // }

    const province = new window.longdo.Overlays.Object('10', 'IG', {
      simplify: '0.0008',
      lineWidth: 4,
      lineColor: 'rgb(131,94,203)',
      fillColor: 'rgba(214,188,250, 0.5)',
      clickable: false,
      weight: 1,
      title: 'Bangkok',
      detail: '',
      label: '',
      pointer: true,
      labelOptions: {
        style: 'color:black',
      },
    });
    map.Overlays.load(province);
    map.zoom(10);
    map.location({ lat: 13.747371, lon: 100.609195 });
    // var polygonList = map.Overlays.list();
    // var locationList = [];
    // polygonList.forEach(polygon => {
    //   if (polygon.data) {
    //     polygon.data.data.forEach(item => {
    //       locationList = locationList.concat(item);
    //     });
    //   }
    // });
    // if (locationList.length > 0) {
    //   var boundingBox = window.longdo.Util.locationBound(locationList);
    //   map.bound(boundingBox);
    // }
  };
  const showPosition = position => {
    const currentPosition = {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
    var marker = new window.longdo.Marker(currentPosition);
    map.Overlays.add(marker);
    map.location(currentPosition);
    map.zoom(16);
  };
  const calculateDateDifference = (date1, date2) => {
    var diffMonths =
      date2.getMonth() -
      date1.getMonth() +
      12 * (date2.getFullYear() - date1.getFullYear());
    var years = Math.floor(diffMonths / 12);
    var months = diffMonths % 12;

    return `( ${years} years ${months} months )`;
  };

  const openModal = () => {
    onOpen();
    if (!map) {
      setTimeout(() => {
        initMap();
      }, 100);
    }
  };

  return (
    <div>
      <div className="card-container" onClick={openModal}>
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
                {/* after graduating. I joined as a{' '} */}
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
            <Box borderRadius={20} mt={12} h="500px">
              <div className="map-container">
                <div id="map" style={{ width: '100%', height: '100%' }}></div>
              </div>
            </Box>
            <Box mt={12}>
              <Text>
                I have been assigned to plot positions or create something in
                Longdo Map
                <Text
                  as="span"
                  className="text-detail"
                  color="RGBA(255, 255, 255, 0.48)"
                >
                  {' '}
                  (an online mapping service that provides detailed maps and
                  navigation information for various locations in Thailand){' '}
                </Text>
                according to the customer's requirements, and develop the
                front-end program using Vue.js to align with the user interface.
                Additionally, I will write an API to store and retrieve data
                from the database.
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
            <Flex mt={3}>
              <Center>
                <Box>Jun 2021 - Present</Box>
                <PiDotOutlineLight />
                <Box color="RGBA(255, 255, 255, 0.48)">
                  {calculateDateDifference(new Date('2021-06-16'), new Date())}
                </Box>
              </Center>
            </Flex>
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
            <Center mt={12}>
              <Divider mr={5} />
              <RiComputerLine size={50} />
              <Divider ml={5} />
            </Center>
          </ModalBody>
          {/* <Box px={6}>
            <Divider mt={12} mb={6} />
          </Box> */}
        </ModalContent>
      </Modal>
    </div>
  );
}
