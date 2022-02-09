import React from "react";
import NavBar from "../navbar";
import { Container } from "@chakra-ui/react";

export default function main({ children, router }) {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
}
