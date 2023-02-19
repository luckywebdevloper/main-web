/** @format */

import {
  Box,
  Button,
  // Card,
  // CardBody,
  // CardHeader,
  Heading,
  // HStack,
  Stack,
  // StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Container, Image } from "@nextui-org/react";
import Learning from "../../assets/Learning.svg";

// import intro from '../../assets/videos/intro.mp4';
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import OurCources from "./OurCources";
import OurStrategy from "../OurStrategy/OurStrategy";
import CheckFreeVideo from "./CheckFreeVideo";
import VisionandMision from "./VisionandMision";
import DeliveryMethods from "../DeleveryMethod/DeliveryMethods";
import Coresvalue from "./Coresvalue";

const Home = () => {
  return (
    <div className="">
      <div>
        {" "}
        <section className=" bg-gradient-to-b from-blue-100 to-transparent max-h-[2000px]  ">
          <Container lg className="">
            <Stack
              direction={["column", "column", "row", "row"]}
              height={["100vh"]}
              w={"100%"}
              maxH={"800px"}
              justifyContent={["center", "center", "center", "space-between"]}
              alignItems="center"
              spacing={["28"]}
            >
              <VStack
                width={"full"}
                align={["center", "center", "flex-start", "flex-start"]}
                spacing={["6", "6", "6", "8"]}
                w={["100%", "50%"]}
              >
                <Heading
                  fontSize={["3xl", "5xl", "3xl", "6xl"]}
                  fontWeight={["semibold", "semibold", "bold", "bold"]}
                  className="heading_1"
                  w={"100%"}
                  marginTop={["0px", "40px", "0", "0"]}
                  textAlign={["center", "center", "left", "left"]}
                >
                  <span>Learning </span>Never <br />
                  Exhausts The Mind
                </Heading>
                <Text
                  fontSize={["sm", "md", "sm", "lg"]}
                  lineHeight={["4", "5", "5", "8"]}
                  textAlign={["justify", "justify", "justify", "left"]}
                  className="text"
                  width={["100%"]}
                  children="Stockology Securities Private Limited is a Private incorporated on 23 December 2021. It is classified as Non-govt company and is registered at Registrar of Companies, Indore."
                />
                <Box>
                  <Link to="/courses">
                    <Button
                      size={["md", "lg", "md", "lg"]}
                      float={"left"}
                      colorScheme="red"
                      borderRadius={"full"}
                      width={["40", "40", "48", "72"]}
                    >
                      View Course
                    </Button>
                  </Link>
                </Box>
              </VStack>
              <Image
                className="bannerimg"
                src={Learning}
                width={820}
                height={""}
              />
            </Stack>
          </Container>
        </section>
        <Container lg>
          <OurCources />
          <OurStrategy />
          <Box w={"full"} position="relative" my={"28"}>
            <DeliveryMethods />
          </Box>
        </Container>
        <Box>
          <CheckFreeVideo />
        </Box>
        <Box>
          <VisionandMision />
        </Box>
        <Box>
          <Coresvalue />
        </Box>
      </div>
    </div>
  );
};

export default Home;
