import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/layouts/main";
import "../components/styles/skill.css";
import { motion } from "framer-motion";

import { ColorModeScript } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={"dark"} />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.6, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
