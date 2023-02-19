/** @format */
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import { Link } from 'react-router-dom';
import contactus from "../../assets/contactus.png";
import location from "../../assets/location.png";
// import { FiPhone } from 'react-icons/fi';
import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";

import contactImage from "../../assets/Contact us 2.svg";
import Footer from "../Layout/Footer/Footer";
import { Container, Image, Link } from "@nextui-org/react";
import Contact from "../contact-form/contact";

const Contact_page = () => {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-b from-blue-100 to-transparent max-h-[2500px]  ">
        <Container lg>
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
                <span>Team </span>Stockology
              </Heading>
              <Heading className="heading_1" fontSize={"sm"}>
                Hey there!
              </Heading>
              <Text
                fontSize={["sm", "md", "sm", "lg"]}
                lineHeight={["4", "5", "5", "8"]}
                textAlign={["justify", "justify", "justify", "left"]}
                className="text"
                width={["100%"]}
                children="Welcome to Stockology. We are glad to have you onboard. Please let us know if you need any help or have any query related to our application or courses. Our goal is to ensure you have a positive experience and get the most out of our courses.  Also we would appreciate your feedback for making the experience more wholesome for you.  "
              />
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
            </VStack>
            <Image className="bannerimg" src={contactus} width={820} />
          </Stack>
          <Box my={"5"} className="container">
            <Heading
              display={"flex"}
              textAlign="center"
              justifyContent={"center"}
              letterSpacing="widest"
              fontSize={["md", "lg", "2xl", "3xl"]}
            >
              Let's help you
              <span className="mx-2 md:mx-3  text-red-600"> navigate</span>
              your next
            </Heading>
            <Box
              display={"flex"}
              flexDirection={["column", "column", "row"]}
              justifyContent="space-around"
            >
              <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md"
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
              >
                <Image src={location} objectFit="cover" width={385} />
                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology Securities Pvt. Ltd.
                </Heading>
                <Text className="text" fontSize={["xs", "sm", "md"]} ml={"3"}>
                  621-623, KRISHNA BUSINESS CENTRE, INDORE, MADHYA PRADESH
                  452016
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <Link
                    href="tel:+91 7415113911"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-7415113911
                  </Link>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box>
              <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md"
              >
                <Image src={location} width={385} objectFit="cover" />
                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology Securities Pvt. Ltd.
                </Heading>
                <Text className="text" ml={"3"} fontSize={["xs", "sm", "md"]}>
                  3rd FLOOR TECHNO PARK, IT PARK, JABALPUR, Madhya Pradesh
                  482003
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <Link
                    href="tel:+91-8602755337"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-8602755337
                  </Link>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <Box className="slidercontainer">
        <Box
          className="container sliderBefore"
          display={["flex"]}
          py="10"
          justifyContent={"space-between"}
          my={"10"}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Box className="contact-img" mt={"28"}>
              <Image src={contactImage} />
            </Box>
          </Box>
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Text
              fontSize={"5xl"}
              w="fit-content"
              className="heading_1 contact "
              fontWeight={"semibold"}
            >
              Contact Us..!!
            </Text>
            <Contact />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact_page;
