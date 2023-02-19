/** @format */

import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Teamsupport from "../../assets/Team_Support.svg";
import Freewebinar from "../../assets/Freewebinar.svg";
import Regular_market from "../../assets/Regular_market.svg";
import Financial_Planner from "../../assets/Financial_Planner.svg";
import FreeResearchSupport from "../../assets/FreeResearchSupport.svg";

const OurCources = () => {
  return (
    <Box>
      <HStack
        margin="auto"
        justifyContent={["space-between"]}
        flexDirection={["column", "column", "row", "row"]}
        flexWrap="wrap"
        my={["4", "8"]}
        gap="8"
      >
        <Box w={["100%", "80%", "45%", "30%"]} my={["4", "8"]} padding="2">
          <Heading
            className="heading_1"
            fontSize={"5xl"}
            textAlign={["center", "left"]}
          >
            <span>Our</span> Courses
          </Heading>

          <Text
            lineHeight={"7"}
            className="text"
            my={"4"}
            textAlign={["justify", "left"]}
          >
            We help you quench your thirst for knowledge by providing you with
            our specially tailored certifications. Our highly qualified
            instructors, dedicated staff, and 24/7 available helpline are the
            main reasons why we’re the go-to training provider for you.
          </Text>
        </Box>
        <Box
          w={["100%", "80%", "45%", "20%"]}
          my={["4", "8"]}
          height="190PX"
          justifyContent={"space-between"}
          display="flex"
          flexDirection={"column"}
          padding={["0", "3"]}
        >
          <Heading className="heading_1" fontSize={"lg"}>
            Free Course
          </Heading>
          <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text>
          <Link
            to={"/courses"}
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              float: "left",
              justifyItems: "start",
            }}
          >
            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
        <Box
          padding={["0", "3"]}
          w={["100%", "80%", "45%", "20%"]}
          height={"190PX"}
          justifyContent={"space-between"}
          display="flex"
          flexDirection={"column"}
        >
          <Heading className="heading_1" fontSize={"lg"}>
            Paid Course
          </Heading>
          <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text>
          <Link
            to={"/courses"}
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              float: "left",
              justifyItems: "start",
            }}
          >
            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
        <Box
          w={["100%", "80%", "45%", "20%"]}
          padding={["0", "3"]}
          height="190PX"
          justifyContent={"space-between"}
          display="flex"
          flexDirection={"column"}
        >
          <Heading className="heading_1" fontSize={"lg"}>
            Book Webinar
          </Heading>
          <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text>
          <Link
            to={"/courses"}
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              float: "left",
              justifyItems: "start",
            }}
          >
            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
      </HStack>
      <HStack>
        <Heading
          className="heading_1"
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          textAlign="center"
          w={"100%"}
        >
          Why Only Us
        </Heading>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        className="whyonlyus container"
        flexDirection={["column", "column", "row", "row"]}
        mx={"auto"}
        my="16"
        gap={["30px", "30px", "2"]}
        flexWrap={"wrap"}
      >
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-between"}
          h={"250"}
          w="180"
          className=" hover:shadow-2xl transition-all duration-100 hover:scale-105 rounded-xl"
          boxShadow={"lg"}
        >
          <Image src={Teamsupport} objectFit="cover" w={500} />
          <Text
            children="Team Support"
            fontSize={["12"]}
            textAlign="center"
            px={"5"}
            fontWeight="medium"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-between"}
          className=" hover:shadow-2xl transition-all duration-100 hover:scale-105 rounded-xl"
          h={"250"}
          w="180"
          boxShadow={"lg"}
        >
          <Image src={Freewebinar} w={180} />
          <Text
            children="Free Webinar"
            fontSize={["12"]}
            textAlign="center"
            px={"5"}
            fontWeight="medium"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          className=" hover:shadow-2xl transition-all duration-100 hover:scale-105 rounded-xl"
          padding="4"
          justifyContent={"space-between"}
          h={"250"}
          w="180"
          boxShadow={"lg"}
        >
          <Image src={Regular_market} w={180} />
          <Text
            px={"5"}
            fontWeight="medium"
            children="Regular Market updates "
            fontSize={["12"]}
            textAlign="center"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          className=" hover:shadow-2xl transition-all duration-100 hover:scale-105 rounded-xl"
          justifyContent={"space-between"}
          h={"250"}
          w="180"
          boxShadow={"lg"}
        >
          <Image src={FreeResearchSupport} w={180} />
          <Text
            px={"5"}
            fontWeight="medium"
            children="Free Research Support"
            fontSize={["12"]}
            textAlign="center"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          className=" hover:shadow-2xl transition-all duration-100 hover:scale-105 rounded-xl"
          padding="4"
          justifyContent={"space-between"}
          h={"250"}
          w="180"
          boxShadow={"lg"}
        >
          <Image src={Financial_Planner} w={180} />
          <Text
            px={"5"}
            fontWeight="medium"
            children="One to One Support"
            fontSize={["12"]}
            textAlign="center"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default OurCources;
