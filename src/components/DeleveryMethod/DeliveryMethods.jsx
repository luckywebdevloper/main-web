/** @format */

import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import classroom from "../../assets/classroom.svg";
import Slider from "./Slider";
import online_instructer from "../../assets/onlineeducation.svg";
import online_self from "../../assets/online_self.svg";

const DeliveryMethods = () => {
  return (
    <Box className="">
      <Box
        className="container sliderBefore"
        display={["flex"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Card
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          py={"10"}
          boxShadow="none"
        >
          <Heading
            size="md"
            className="heading_1"
            fontSize={["2xl", "4xl"]}
            ml="5"
            w={["100%", "60%"]}
          >
            Our Available Delivery Methods
          </Heading>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box className=" p-5 rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image src={classroom} boxSize="12" mr={"4"} />
                  Classroom Training
                </Heading>
                <Text pt="2" fontSize="sm" className="text">
                  Get trained at one of our dedicated venues within a quiet,
                  safe, and clean environment, away from the noise and pressure
                  of the workplace.
                </Text>
              </Box>
              <Box className=" p-5 rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image src={online_instructer} boxSize="12" mr={"4"} />
                  Online Instructor-Led Training
                </Heading>
                <Text pt="2" fontSize="sm">
                  Attend our award-winning training courses via the virtual
                  classroom method with our excellent instructors at your home
                  without going anywhere.
                </Text>
              </Box>
              <Box className=" p-5 rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image src={online_self} boxSize="12" mr={"4"} />
                  Online Self-Paced Training
                </Heading>
                <Text pt="2" fontSize="sm">
                  Get your desired training by gaining immediate Lifetime access
                  to our e-learning portal, which is accessible 24/7.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box w={["100%", "100%", "100%", "50%"]}>
          <Slider />
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryMethods;
