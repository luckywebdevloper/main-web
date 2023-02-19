import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";
import { Image, Input, Text } from "@nextui-org/react";
import loginimage from "../../assets/login.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(Number);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("phone", phone);

    dispatch(register(myForm));
  };

  return (
    <>
      <>
        <Heading
          textAlign={"center"}
          mt={["10", "36"]}
          children={"Register"}
          textTransform="uppercase"
        />

        <Box
          display={["flex"]}
          flexDirection={["column", "row"]}
          className="container"
          alignItems={"center"}
          mb={"30"}
        >
          <Box w={["100%", "50%"]}>
            <Image src={loginimage} />
          </Box>
          <VStack h={"full"} w={["50%"]} justifyContent="center" spacing={"16"}>
            <form onSubmit={submitHandler} style={{ width: "100%" }}>
              <Box mb={"10"} mt="10">
                <Input
                  required
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  underlined
                  labelPlaceholder="Enter Your Name"
                  color=""
                  width="80%"
                />
              </Box>
              <Box mb={"10"}>
                <Input
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  type={"email"}
                  underlined
                  labelPlaceholder="Enter Your Email"
                  color=""
                  width="80%"
                />
              </Box>
              <Box mb={"10"}>
                <Input
                  required
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  underlined
                  labelPlaceholder="Enter Your Number"
                  color=""
                  width="80%"
                  type={"number"}
                />
              </Box>
              <Box mb={"10"}>
                <Input.Password
                  required
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  underlined
                  labelPlaceholder="Create Your Password"
                  color=""
                  width="80%"
                  visibleIcon={<AiFillEye fill="currentColor" />}
                  hiddenIcon={<AiFillEyeInvisible fill="currentColor" />}
                />
              </Box>

              <Box textAlign={"center"}>
                <Button
                  mt={"10"}
                  mb="4"
                  colorScheme="red"
                  borderRadius={"full"}
                  w="64"
                  type="submit"
                >
                  Register
                </Button>
                <Text fontWeight={"bold"}>Or</Text>
                <Box marginTop={"2"}>
                  <Link to="/" style={{ marginRight: "9px" }}>
                    <Button border={"1px"}>
                      <FaGoogle />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button border={"1px"} colorScheme="blue">
                      <FaFacebook />
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box>
                already user?{" "}
                <Link to="/login">
                  <Button colorScheme={"green"} variant="link">
                    Login
                  </Button>
                </Link>
              </Box>
            </form>
          </VStack>
        </Box>
      </>
    </>
  );
};

export default Register;
