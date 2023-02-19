/** @format */

import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CoreValue from "../../assets/corevalue.svg";
const Coresvalue = () => {
  return (
    <Box w={"full"} my={["0", "0"]}>
      <Box
        className="container"
        minH={"fit-content"}
        maxH={["250px", "460px", "570px", "700px"]}>
        <Image
          src={CoreValue}
          padding={["3", "3", "10", "2"]}
          objectFit="cover"
          margin={"auto"}
        />
      </Box>
      <Heading
        fontWeight={"bold"}
        fontSize={["xl", "3xl", "4xl", "5xl"]}
        color="gray.500"
        textAlign={"center"}>
        CORE VALUES
      </Heading>
    </Box>
  );
};

export default Coresvalue;
