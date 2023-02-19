/** @format */

import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Image, Navbar } from "@nextui-org/react";
import React, { useRef } from "react";
import logo from "../../../assets/logo.svg";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
// import { Link } from '@nextui-org/react';
import { Link } from "react-router-dom";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import playstore from "../../../assets/Google.svg";

import "./footer.css";

const Footer = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // window.screenTop({ top: 0, left: 0 });
  // window.screenTop(top="0"));
  const ref = useRef(null);
  const scrollhandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <Box
        padding={"4"}
        bg="white"
        className="container footerbefore"
        position={"relative"}
        py={"10"}
      >
        <Stack
          direction={["column", "column", "column", "row"]}
          // justifyContent={['', 'start', 'space-between']}
          gap="0"
          w={"100%"}
          alignItems={["flex-start", "flex-start", "flex-start", "flex-start"]}
        >
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "", "7"]}
            px={["2", "2", "5", "10"]}
          >
            <Image
              src={logo}
              mb="26"
              css={{
                w: "80%",
                "@md": {
                  w: "100%",
                },
              }}
            />
            <Text
              className="text"
              textAlign={["justify ", "left", "left", "left"]}
            >
              Our team is comprised of people with different kinds of finance
              experience, but we all have this in common–a commitment to ethics
              and integrity. We’re all fully licensed and credentialed. And you
              can count on unbiased recommendations and impartial guidance.
            </Text>
            <Text className="heading_1" my={"4"}>
              CIN-U65929MP2021PTC058908
            </Text>
            <Box display={"flex"} alignItems="center" mt="8">
              <Text className="heading_1 " mr={"5"}>
                Contact
              </Text>
              <Box
                display={"flex"}
                gap="5px"
                color={"red.500"}
                w={"100%"}
                fontSize="xl"
                onClick={scrollhandler}
              >
                <a
                  href="https://instagram.com/ig_stockology?igshid=YmMyMTA2M2Y="
                  target={"_blank"}
                  className="text-red-600  hover:shadow-xl hover:text-pink-500 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineInstagram height={"40px"} width="40px" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100090277334395&mibextid=ZbWKwL"
                  target={"_blank"}
                  className="text-red-600 hover:text-blue-600  hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://t.me/STOC_KOLOGY"
                  target={"_blank"}
                  className="text-red-600 hover:text-blue-600   hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://www.youtube.com/@stockologyyt"
                  className="text-red-600  hover:shadow-xl  hover:scale-110 transition-all duration-150 p-2 rounded-md"
                  target={"_blank"}
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="www.linkedin.com/in/stockologyyy"
                  target={"_blank"}
                  className="text-red-600 hover:shadow-xl  hover:text-blue-600 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/stockologysec?t=r87T8cwTePPMHqsQGqU_QA&s=09"
                  target={"_blank"}
                  className="text-red-600 hover:text-blue-600  hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineTwitter />
                </a>
              </Box>
            </Box>
            <Text mt={"12"} className="heading_1 ">
              Copyright © 2022-23 Stockology All Rights Reserved
            </Text>
          </Box>
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "4", "7"]}
            px={["2", "2", "2", "10"]}
          >
            <Heading mt={"32"} fontSize="lg" className="heading_1 ">
              POPULAR COURSES
            </Heading>
            <Box flexDir={["column"]} display="flex" gap={"5"} mt="5">
              <Link
                to="https://hgyiu.courses.store/301282"
                target={"_blank"}
                className="flex w-fit "
              >
                {/* <span
                  className="
                    animate-ping mr-3
                    
                    inline-flex
                    h-2 w-2
                    rounded-full
                    bg-red-500
                    opacity-75"
                ></span> */}
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="heading_1 anim  "
                >
                  Silver Bundle
                </Text>
              </Link>
              <Link
                to="https://hgyiu.courses.store/301293"
                target={"_blank"}
                className="flex w-fit "
              >
                {" "}
                {/* <span
                  className="
                    animate-ping mr-3
                    
                    inline-flex
                    h-2 w-2
                    rounded-full
                    bg-red-500
                    opacity-75"
                ></span> */}
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="heading_1 anim "
                >
                  Gold Bundle
                </Text>
              </Link>
              <Link
                href="https://hgyiu.courses.store/301301"
                target={"_blank"}
                className="flex w-fit"
              >
                {/* <span
                  className="
                    animate-ping mr-3
                    
                    inline-flex
                    h-2 w-2
                    rounded-full
                    bg-red-500
                    opacity-75"
                ></span> */}
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="heading_1 anim"
                >
                  Platinum Bundle
                </Text>
              </Link>
            </Box>

            <Box
              display={"flex"}
              alignItems="flex-start"
              gap={"1"}
              flexDirection={"column"}
              maxW="100%"
              lineHeight={["5", "5", "7", "7"]}
              px={["0", "0", "2", "0"]}
              mt={["8", "8", "4", "12"]}
            >
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                fontSize="xl"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <IoMdCall fontSize={"20px"} />
                <a href="tel:+91 7415113911">
                  <Text color={"gray.800"} fontSize="md" className="heading_1 ">
                    +91 7415113911
                  </Text>
                </a>
              </Box>
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                width="100%"
                fontSize="xl"
                justifyContent={"space-between"}
              >
                <ImLocation2 fontSize={["20px"]} />
                <a
                  href="https://goo.gl/maps/xqcnXjpWs73ME2u48"
                  target={"_blank"}
                  className="heading_1"
                >
                  <Text color={""} fontSize="sm" className=" text-gray-800">
                    621-623, KRISHNA BUSINESS CENTRE, INDORE, MADHYA PRADESH
                    452016
                  </Text>
                </a>
              </Box>{" "}
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                fontSize="xl"
                alignItems={"center"}
                zIndex="2"
              >
                <IoMdMail fontSize={"20px"} />
                <a href={"mailto:manish.k@stockologysecurities.com"}>
                  <Text color={"gray.800"} fontSize="md" className="heading_1 ">
                    support@stockologysecurities.com
                  </Text>
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "4", "7"]}
            px={["2", "2", "2", "10"]}
          >
            <Heading mt={"32"} fontSize="lg" className="heading_1 ">
              Quick Links
            </Heading>
            <Box flexDir={"column"} display="flex">
              <Link to={"/contact"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="heading_1 ">
                  Contact Us
                </Text>
              </Link>
              <Link to={"/termandcondition"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="heading_1 ">
                  Terms and Condition
                </Text>
              </Link>
              <Link to={"/about"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="heading_1 ">
                  About Us
                </Text>
              </Link>
              <Link to={"/termandcondition"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="heading_1 ">
                  Privacy Policy
                </Text>
              </Link>
            </Box>
            <Box
              display={"flex"}
              alignItems="flex-start"
              gap={"1"}
              flexDirection={"column"}
              mt="12"
              zIndex={"banner"}
              position="relative"
            >
              <a
                href="https://play.google.com/store/apps/details?id=co.george.hgyiu"
                target={"_blank"}
              >
                <Image src={playstore} />
              </a>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
