import {
  Box,
  Card,
  CardBody,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import about from "../../assets/about.svg";
import Footer from "../Layout/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import aboutslider1 from "../../assets/aboutslider1.svg";
// import aboutslider1 from '../../assets/images/aboutslider1.svg';
// import aboutslider1 from '../../assets/images/aboutslider1.svg';
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./about.css";
import { Container, Image } from "@nextui-org/react";
const About = () => {
  return (
    <div>
      <section className=" bg-gradient-to-b from-blue-100 to-transparent max-h-[2000px]">
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
              align={["center", "flex-start"]}
              spacing={["6", "12", "12", "10"]}
            >
              <Heading
                fontSize={["3xl", "5xl", "3xl", "7xl"]}
                fontWeight={["semibold", "semibold", "bold", "bold"]}
                className="heading_1"
                w={"100%"}
                marginTop={["0px", "40px", "0", "0"]}
                textAlign={["center", "center", "left", "left"]}
              >
                <span>Welcome </span>to <br />
                Stockology
              </Heading>

              {/* <Text
            fontSize={['xs', 'sm', 'lg', 'lg']}
            lineHeight={['4', '4', '5', '8']}
          >
            STOCKOLOGY SECURITIES is a Indian Based educational firm 1,000,000
            and its paid up capital is Rs. 100,000."
          </Text> */}
              <Text
                fontSize={["sm", "md", "sm", "lg"]}
                lineHeight={["4", "5", "5", "8"]}
                textAlign={["justify", "justify", "justify", "left"]}
                className="text"
                width={["100%"]}
              >
                This is an effort to empower the Indian citizens, through guided
                investing – in one of the best asset classes in the world i.e.
                the stock market. As per National Securities Depository Limited,
                out of a population of 125 crore, the Demat account holders in
                India are less than 1.5 crore. Our aim to increase this number
                by guiding them to invest wisely, for maximum profits. We help
                them become financial literate, via offline workshops PAN India.
              </Text>
              <Text
                className="text"
                textDecoration={"underline"}
                fontSize={["sm", "sm", "xl", "xl"]}
              >
                Our aim to increase this number by guiding them to invest
                wisely, for maximum profits. We help them become financial
                literate, via offline workshops PAN India
              </Text>
            </VStack>
            <Image className="bannerimg" width={990} src={about} />
          </Stack>
          <Box my={"6"}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="sliderabout">
                <Image
                  src={aboutslider1}
                  // className=" hover:shadow-lg hover:scale-105 transition-all duration-150  rounded-lg"
                />
                <Text
                  position={"absolute"}
                  top={["20%", "28%", "32%"]}
                  color={"gray.500"}
                  w={"70%"}
                  fontWeight="medium"
                  fontSize={["xs", "xs", "xs", "3xl"]}
                  lineHeight={["3", "4", "4", "10"]}
                >
                  "It transformed into our mission to spread financial literacy
                  to more and more individuals in multiple ways. Anyone can
                  learn this basic life skill from us"
                </Text>
              </SwiperSlide>
              <SwiperSlide className="sliderabout">
                <Image src={aboutslider1} />
                <Text
                  position={"absolute"}
                  top={["20%", "28%", "32%"]}
                  color={"gray.500"}
                  w={"70%"}
                  fontWeight="medium"
                  fontSize={["xs", "xs", "xs", "3xl"]}
                  lineHeight={["3", "4", "4", "10"]}
                >
                  "Learning empowers us to change and grow and redefines what’s
                  possible. That's why access to the best learning is a right,
                  not a privilege."
                </Text>
              </SwiperSlide>
              <SwiperSlide className="sliderabout">
                <Image src={aboutslider1} />
                <Text
                  position={"absolute"}
                  top={["20%", "28%", "32%"]}
                  color={"gray.500"}
                  w={"70%"}
                  fontWeight="medium"
                  fontSize={["xs", "xs", "xs", "3xl"]}
                  lineHeight={["3", "4", "4", "10"]}
                >
                  "Evolve into a financially aware individual. Everyone who is
                  keen to learn about the stock market and aspires to make more,
                  No matter who we are and where we are"
                </Text>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box
            display={["flex"]}
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Box w={["100%", "100%", "100%", "50%"]} px={"16"}>
              <Heading
                fontSize={["md", "xl"]}
                fontWeight="semibold"
                my="8"
                className="heading_1"
              >
                “The ones who are crazy enough to think they can change the
                world, are the ones that do.”
              </Heading>
              <Text className="text">
                Our Mission – Spreading financial literacy In a country of 125
                crore only 27% people are financially literate,
                Stockologysecurities.com recognizes that the lack of financial
                literacy is a serious impediment to the economic growth of India
              </Text>
            </Box>
            <Box w={["100%", "100%", "100%", "50%"]} py="10">
              <Card boxShadow={"md"}>
                <CardBody>
                  <Stack divider="" spacing="4">
                    <Box>
                      <Heading
                        size="xs"
                        textTransform="uppercase"
                        px={"5"}
                        boxShadow={"lg"}
                        color="red.500"
                        width="fit-content"
                        py={"5"}
                        my="5"
                        borderRadius="xl"
                      >
                        Finance + Edu-Tech
                      </Heading>
                      <Text pt="2" fontSize="2xl" className="heading_1">
                        Stock Market Analysis (Online)
                      </Text>
                    </Box>
                    <Box mt={"14"}>
                      <List spacing={"5"}>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <ListIcon as={FaCircle} color="red.500" />
                          Wide range of certification courses.
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <ListIcon as={FaCircle} color="red.500" />
                          Simple and easy-to-understand lectures.
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <ListIcon as={FaCircle} color="red.500" />
                          Beginner to advance level course.
                        </ListItem>

                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <ListIcon as={FaCircle} color="red.500" />
                          Open online opportunity to learn about Stock Market
                          from anywhere.
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <ListIcon as={FaCircle} color="red.500" />
                          Learn A to Z about Stock Market with our best Mentor.
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default About;
