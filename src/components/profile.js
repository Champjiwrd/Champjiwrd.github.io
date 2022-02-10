import React from "react";
import { Box, Heading, Flex, Center } from "@chakra-ui/react";
// import Image from "next/image";
// import './styles/image.css'
// import Image from "next/image";

export default function profile() {
  const imagesize = 200;
  return (
    <Box marginTop={100}>
      <Flex >
        <Center marginBottom={3}>
          <Box
            style={{
              width: imagesize,
              height: imagesize,
              maxHeight: imagesize,
              maxWidth: imagesize,
              minHeight:imagesize,
              minWidth:imagesize,
              borderRadius: "50%",
              overflow: "hidden",
              borderStyle: "solid",
              borderWidth: "10px",
              borderColor: "white",
            }}
          >
            <img
              src="/profile/profile.png"
              alt="champ"
              width={imagesize}
              height={700}
              // objectPosition="-145px -200px"
              // objectFit="cover"
            />
          </Box>
          <Box marginLeft={10}>
            <Heading>Warodom Baiudom</Heading>
            <Heading size="md">
            Champignon &#127812;
            </Heading>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
}
