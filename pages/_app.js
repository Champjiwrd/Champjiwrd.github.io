import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/layouts/main";

import { ColorModeScript } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={'dark'} />
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ChakraProvider>
  );
}

export default MyApp;
