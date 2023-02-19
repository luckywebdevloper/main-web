/** @format */

import { Box, Button, Container, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/other";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";

const Webinar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <div>
      <VStack h="full" justifyContent={"center"} spacing="16">
        {/* <Heading children="Contact Us" /> */}

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Box my={"4"}>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              width="100%"
              underlined
              label="Name"
              placeholder="Enter Your Name"
            />
          </Box>
          <Box my={"4"}>
            <Input
              required
              id="name"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              width="100%"
              underlined
              label="Phone"
              placeholder="Enter Your phone"
            />
          </Box>

          <Box my={"4"}>
            <Input
              required
              id="email"
              value={email}
              width="100%"
              onChange={(e) => setEmail(e.target.value)}
              // placeholder="abc@gmail.com"
              type={"email"}
              clearable
              underlined
              label="Email"
              placeholder="Enter Your Email"
            />
          </Box>

          <Box my={"4"}>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message...."
              label="Message"
              width="100%"
              bordered
              rows={5}
            />
          </Box>

          <Box>
            <Text className="text" fontSize={"xs"}>
              *By submitting this form you agree to our terms & conditions & our
              privacy policy which explains how we may collect, use & disclose
              your personal information including to third parties.
            </Text>
          </Box>
          <Button
            my={"5"}
            colorScheme="red"
            type="submit"
            w={["56"]}
            borderRadius={"full"}
            onSubmit={submitHandler}
          >
            Submit
          </Button>
        </form>
      </VStack>
    </div>
  );
};

export default Webinar;
