import React from 'react';
import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Button,
  Icon,
} from '@chakra-ui/react';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
  IoMail,
  IoLogoLinkedin,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactList = [
    {
      link: 'https://github.com/champjiwrd',
      label: '@champjiwrd',
      icon: <Icon as={IoLogoGithub} />,
    },
    {
      link: 'https://www.linkedin.com/in/warodom-baiudom-484180205',
      label: '@warodom baiudom',
      icon: <Icon as={IoLogoLinkedin} />,
    },
    {
      link: 'mailto:warodom.baiudom@gmail.com',
      label: 'mail',
      icon: <Icon as={IoMail} />,
    },
    {
      link: 'https://facebook.com/champjiwrd',
      label: '@Champ Warodom',
      icon: <Icon as={IoLogoFacebook} />,
    },
    {
      link: 'https://instagram.com/champjiwrd',
      label: '@champjiwrd',
      icon: <Icon as={IoLogoInstagram} />,
    },
  ];
  return (
    <Box marginTop={-5} marginBottom={10}>
      <Flex>
        <Box>
          <Heading marginBottom={6}>Contact</Heading>
          <List>
            {contactList.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.5 },
                  }}
                >
                  <ListItem>
                    <Link href={item.link} target="_blank">
                      <Button
                        variant="ghost"
                        colorScheme="teal"
                        leftIcon={item.icon}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </ListItem>
                </motion.div>
              );
            })}
          </List>
        </Box>
      </Flex>
    </Box>
  );
}
