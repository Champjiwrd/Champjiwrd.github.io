import React from "react";
import { Box, Heading, Image, Icon, Flex, Center } from "@chakra-ui/react";

import { motion } from "framer-motion";

export default function projectItem({ title, subtitle }) {
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="card-project"
    >
      <Box padding={2}
      className="card-project"
      >
        <Flex>
          <Box
            borderRadius="lg"
            style={{
              background: "#A3F7BF",
              color: "#435055",
              width: "130px",
              height: "80px",
              minWidth:"130px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ fontSize: "30px", fontWeight: "bold" }}>
              {title.charAt(0)}
            </Box>
          </Box>
          <Box marginLeft={4}>
            <Heading size="md">{title}</Heading>
            <Box style={gradeStyle}>{subtitle}</Box>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}
