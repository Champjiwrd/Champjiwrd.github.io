import React from 'react';
import {
  Box,
  Flex,
  Button,
  Icon,
  Center,
  Divider,
  Link,
} from '@chakra-ui/react';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook,
  IoMail,
  IoLogoLinkedin,
} from 'react-icons/io5';

export default function Contact() {
  const iconSize = 60;
  const contactList = [
    {
      link: 'https://github.com/champjiwrd',
      label: '@champjiwrd',
      icon: <Icon size={iconSize} as={IoLogoGithub} />,
    },
    {
      link: 'https://www.linkedin.com/in/warodom-baiudom-484180205',
      label: '@warodom baiudom',
      icon: <Icon size={iconSize} as={IoLogoLinkedin} />,
    },
    {
      link: 'mailto:warodom.baiudom@gmail.com',
      label: 'mail',
      icon: <Icon size={iconSize} as={IoMail} />,
    },
    {
      link: 'https://facebook.com/champjiwrd',
      label: '@Champ Warodom',
      icon: <Icon size={iconSize} as={IoLogoFacebook} />,
    },
    {
      link: 'https://instagram.com/champjiwrd',
      label: '@champjiwrd',
      icon: <Icon size={iconSize} as={IoLogoInstagram} />,
    },
  ];
  return (
    <Box marginTop={40} marginBottom={10}>
      {/* <Flex>
        <Box>
          <Heading marginBottom={6}>Contact</Heading>
          <List>
            {contactList.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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
      </Flex> */}

      <Box alignContent={'center'}>
        <Center>
          <Divider />
          <Flex>
            {contactList.map((item, indexItem) => {
              return (
                <Box key={indexItem}>
                  <Link href={item.link} target="_blank">
                    <Button variant="ghost" colorScheme="purple">
                      {item.icon}
                    </Button>
                  </Link>
                </Box>
              );
            })}
          </Flex>
          <Divider />
        </Center>
      </Box>
      <Box>
        <Center>Warodom Baiudom</Center>
      </Box>
    </Box>
  );
}
