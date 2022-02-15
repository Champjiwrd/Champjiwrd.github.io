import React from "react";
import { Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";

export default function projectItem({ title, subtitle }) {
  const gradeStyle = { color: "#FFBB56", fontSize: 14 };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      className="card-project"
    >
      <Box padding={2} className="card-project">
        <Flex>
          <Box
            borderRadius="lg"
            style={{
              background: "#A3F7BF",
              color: "#435055",
              width: "130px",
              height: "80px",
              minWidth: "130px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ fontSize: "30px", fontWeight: "bold" }}>
              {title.charAt(0)}
            </Box>
          </Box>
          <Box display={{ base: "none", sm: "block" }} marginLeft={4}>
            <Heading size="md">{title}</Heading>
            <Box style={gradeStyle}>{subtitle}</Box>
          </Box>
          <Spacer display={{ base: "none", sm: "flex" }} />
          <Box
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            display={{ base: "none", sm: "flex" }}
          >
            <BsInfoCircle size={20} />
          </Box>
        </Flex>
        <Box
          display={{ base: "block", sm: "none" }}
          marginLeft={0}
          marginTop={2}
        >
          <Heading size="md">{title}</Heading>
          <Box style={gradeStyle}>{subtitle}</Box>
        </Box>
      </Box>
    </motion.div>
  );
}
