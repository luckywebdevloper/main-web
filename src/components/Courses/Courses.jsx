/** @format */

import { Box, Heading, HStack, Stack, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from "../../redux/actions/profile";
import contact from "../../assets/Contact us 2.svg";
import { loadUser } from "../../redux/actions/user";
import Contact from "../webinar/webinar";
// import { TextChild } from "@nextui-org/react/types/text/child";
import Edu_Tech from "../../assets/Edu-tech.svg";
import { Container, Image, Button } from "@nextui-org/react";
import { videos } from "./freevideodata";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW="200px"
        size={"sm"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform="uppercase"
          children={"Creator"}
        />

        <Text
          fontFamily={"body"}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={"center"}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={"yellow"}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={"ghost"}
          colorScheme={"yellow"}
          onClick={() => addToPlaylistHandler(id)}>
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  // const [keyword, ] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const addToPlaylistHandler = async (couseId) => {
    await dispatch(addToPlaylist(couseId));
    dispatch(loadUser());
  };

  const categories = [
    "Web development",
    "Artificial Intellegence",
    "Data Structure & Algorithm",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const { loading, courses, error, message } = useSelector(
    (state) => state.course
  );
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <>
      {" "}
      <div className="">
        <section className=" bg-gradient-to-b from-blue-100 to-transparent max-h-[2000px]">
          <Container lg>
            <Box
              alignItems="center"
              className="md:pt-20 pt-10"
              display="flex"
              justifyContent="center"
              w={"100%"}>
              <Image
                className="bannerimg  "
                // boxSize={"2xl"}

                width="80%"
                objectFit="cover"
                src={Edu_Tech}
              />
            </Box>
            <Stack
              direction={["column", "column", "row", "row"]}
              // height={["100vh"]}
              my="10"
              w={"100%"}
              justifyContent={"center"}
              // alignItems="center"
              spacing={["48"]}>
              <VStack
                width={"full"}
                align={["center", "center", "flex-start", "flex-start"]}
                spacing={["4", "6", "6", "8"]}
                w={["100%", "100%"]}
                my="12">
                <Heading
                  fontSize={["3xl", "5xl", "3xl", "6xl"]}
                  fontWeight={["semibold", "semibold", "bold", "bold"]}
                  className="heading_1"
                  w={"100%"}
                  marginTop={["0px", "40px", "0", "0"]}
                  textAlign={"center"}>
                  <span>Our </span>Courses
                </Heading>
                <Text
                  fontSize={["sm", "md", "sm", "lg"]}
                  lineHeight={["4", "0", "4", "0"]}
                  textAlign={"center"}
                  className="text"
                  width={["100%"]}>
                  Preparing you for the upcoming investor phase
                </Text>
                <Text
                  fontSize={["xs", "xs", "xs", "sm"]}
                  w={"100%"}
                  lineHeight={["5", "4", "5", "6"]}
                  textAlign={["center", "center", "left", "center"]}
                  className="text">
                  Learn with our expert mentor and know the basics and secrets
                  of stock market for your wealth creation.
                  <br /> Join us today and start your journey to become a
                  successful investor.
                </Text>
              </VStack>
            </Stack>
          </Container>
        </section>
      </div>
      <Box className="container">
        <Box
          justifyContent="space-between"
          alignItems={"center"}
          display={"flex"}>
          <Box
            display={"flex"}
            alignItems="flex-end"
            gap={"10"}
            className="heading_1"
            my="20px"
            fontSize={"20px"}
            fontWeight="semibold">
            <Heading children="Our Courses" />

            <Link
              to={"/courses"}
              className="heading_1  px-3 py-2  rounded-md hover:scale-105 transition-all hover:shadow-xl  shadow ">
              Free Course
            </Link>
            <a
              href="https://hgyiu.courses.store/"
              className="heading_1  px-3 py-2  rounded-md hover:scale-105 transition-all hover:shadow-xl  shadow "
              target={"_blank"}>
              Paid Course
            </a>
          </Box>
          {/* <Input
            border={"none"}
            borderBottom="1px solid"
            borderRadius={"none"}
            _focusVisible={"none"}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search "
            type="text"
            width={["200px", "300px"]}
            // icons={<FaSearch />}
          ></Input> */}
        </Box>
      </Box>
      <Container lg className="container">
        <div className=" flex justify-between flex-wrap gap-5">
          {videos.map((item) => {
            const { id, url, Dis, tum } = item;
            return (
              <div className="">
                <iframe
                  width="300px"
                  key={id}
                  height="180px"
                  className=" m-0 rounded-xl shadow-sm hover:scale-110 transition-all duration-150 hover:shadow-lg shadow-gray-500"
                  src={url}
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            );
          })}
        </div>
      </Container>
      <Box className="slidercontainer">
        <Box
          className="container sliderBefore"
          display={["flex"]}
          py="10"
          justifyContent={"space-between"}
          my={"10"}
          flexDirection={["column", "column", "column", "row"]}>
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Box className="contact-img" mt={"28"}>
              <Image src={contact} />
            </Box>
          </Box>

          <Box w={["100%", "100%", "100%", "50%"]}>
            <Text
              fontSize={"5xl"}
              w="fit-content"
              className="heading_1 contact "
              fontWeight={"22px"}>
              Get a<span> Free Webinar </span>for your
              <br /> overall growth.
            </Text>
            <Contact />
          </Box>
        </Box>
      </Box>
      {/* <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Heading children="All Courses" m={"8"} />

        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type={"text"}
          focusBorderColor="yellow.500"
        />

        <HStack
          overflowX={"auto"}
          paddingY="8"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
              <Text children={item} />
            </Button>
          ))}
        </HStack>

        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          justifyContent={["flex-start", "space-evenly"]}
          alignItems={["center", "flex-start"]}
        >
          {courses.length > 0 ? (
            courses.map((item) => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                views={item.views}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
                lectureCount={item.numOfVideos}
                addToPlaylistHandler={addToPlaylistHandler}
                loading={loading}
              />
            ))
          ) : (
            <Heading mt="4" children="Courses Not Found" />
          )}
        </Stack>
      </Container> */}
    </>
  );
};

export default Courses;
