/** @format */

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// import Ourstracturebefore from "../../assets/Ourstracturebefore.svg";
import stratgy from "../../assets/stratgy.svg";
import detetrmines from "../../assets/Determine.svg";
import Appetites from "../../assets/Appetite.svg";

const OurStrategy = () => {
  return (
    <Box mt={"32"} w="100%" mx={"auto"}>
      <Box className="Ourstracturebefore container " mx="auto">
        <Heading
          className="heading_1"
          my={"7"}
          textAlign="center"
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
        >
          Our Strategy
        </Heading>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "column", "row"]}
          justifyContent={["center", "space-between"]}
          gap={"30px"}
        >
          <Box
            className="ourstratgyCard hover:shadow-2xl transition-all duration-150 hover:scale-105"
            backdropBlur={"3xl"}
            bg="white"
            w={["100%", "100%", "100%", "30%"]}
            h={["350px", "430px"]}
            flexDirection={"column"}
            justifyContent={"space-around"}
            display={"flex"}
            boxShadow="xl"
            boxSizing="#3B82F6"
            padding={"10"}
            borderRadius="xl"
            position="relative"
            my={["5", "0"]}
          >
            <Image src={stratgy} w={"20"} />
            <Heading
              children="Signature Strategy"
              fontSize={["2xl", "3xl"]}
              className="heading_1"
            />
            <Text className="text">
              Learn to analyze and take decisions in stock market by
              understanding order flow analysis using my Signature Strategy.{" "}
            </Text>
          </Box>
          <Box
            className="ourstratgyCard hover:shadow-2xl transition-all duration-150 hover:scale-105"
            backdropBlur={"3xl"}
            bg="white"
            w={["100%", "100%", "100%", "30%"]}
            h={["350px", "430px"]}
            flexDirection={"column"}
            justifyContent={"space-around"}
            display={"flex"}
            boxShadow="xl"
            boxSizing="#3B82F6"
            padding={"10"}
            borderRadius="xl"
            position="relative"
            my={["5", "0"]}
          >
            <Image src={detetrmines} w={"20"} />
            <Heading
              children="Determine Buying & Selling Volume"
              fontSize={["2xl", "3xl"]}
              className="heading_1"
            />
            <Text className="text">
              How to determine the Big Buyers & Big Selling volume in the stock
              market which majorly affects the decisions & outcomes.{" "}
            </Text>
          </Box>{" "}
          <Box
            className="ourstratgyCard hover:shadow-2xl transition-all duration-150 hover:scale-105"
            backdropBlur={"3xl"}
            bg="white"
            w={["100%", "100%", "100%", "30%"]}
            h={["350px", "430px"]}
            flexDirection={"column"}
            justifyContent={"space-around"}
            display={"flex"}
            boxShadow="xl"
            boxSizing="#3B82F6"
            padding={"10"}
            borderRadius="xl"
            position="relative"
            my={["5", "0"]}
          >
            <Image src={Appetites} w={["20"]} />
            <Heading
              children="Learn Risk Appetite"
              fontSize={["2xl", "3xl"]}
              className="heading_1"
            />
            <Text className="text" fontSize={("xs", "md")}>
              Learn what is risk appetite & how to determine and manage it. Why
              it is significant in the market.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStrategy;
