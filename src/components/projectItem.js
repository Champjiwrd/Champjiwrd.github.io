import React from 'react';
import {
  Box,
  Heading,
  Card,
  CardBody,
  Stack,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function projectItem({ title, subtitle }) {
  const gradeStyle = { color: '#FFBB56', fontSize: 14 };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      className="card-project"
    >
      <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden">
        <Box
          bg="#A3F7BF"
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="black"
          fontSize="4xl"
          fontWeight="bold"
          textTransform="uppercase"
          width={{ base: '100%', sm: '200px' }}
          h={{ base: '200px', sm: 'auto' }}
        >
          {title.charAt(0)}
        </Box>

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text style={gradeStyle} py="2">
              {subtitle}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Detail
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </motion.div>
  );
}
