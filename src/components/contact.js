import React from "react";
import { Box, Heading, Flex,List,ListItem,Link,Button,Icon } from "@chakra-ui/react";
import CircleIcon from "./circle-icon";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoFacebook,IoMail,IoLogoLinkedin } from 'react-icons/io5'

export default function Contact() {
  return (
    <Box marginLeft={3.5} marginTop={-5} marginBottom={10}>
      <Flex>
        <CircleIcon boxSize={10} color="white" />
        <Box>
          <Heading marginBottom={6}>Contact</Heading>
          <List>
          <ListItem>
            <Link href="https://github.com/champjiwrd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @champjiwrd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/warodom-baiudom-484180205" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @warodom baiudom
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:warodom.baiudom@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                warodom.baiudom@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/champjiwrd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @Champ Warodom
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/champjiwrd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @champjiwrd
              </Button>
            </Link>
          </ListItem>
        </List>
        </Box>
      </Flex>
    </Box>
  );
}
