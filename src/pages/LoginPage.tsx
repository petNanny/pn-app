import React from "react";
import { Stack, Container, Text, Box, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import StrategiesLoginButton from "../components/Login/StrategiesLoginButton";
import Login from "../components/Login/Login";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="5xl" display="flex" justifyContent="center">
      <Stack display="flex" flexDirection="column" alignItems="center">
        <Text textColor="#4F4F4F" fontSize="28">
          Already a Pawshake member?
        </Text>
        <Text textColor="#4F4F4F" fontSize="20">
          Log in below!
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="3"
          paddingTop="14"
          paddingBottom="5"
        >
          <StrategiesLoginButton
            icon={<AiFillFacebook size="30" />}
            backgroundColor={"#3B5998"}
            strategyName={"Facebook"}
            color={"#FFFFFF"}
          />
          <StrategiesLoginButton
            icon={<FcGoogle size="30" />}
            backgroundColor={"#FFFFFF"}
            strategyName={"Google"}
            color={"#000000"}
          />
          <StrategiesLoginButton
            icon={<AiFillApple size="30" />}
            backgroundColor={"#FFFFFF"}
            strategyName={"Apple"}
            color={"#000000"}
          />
        </Box>
        <Divider />
        <Box paddingTop="3">
          <Login />
        </Box>

        <Divider paddingY="4" />
        <Text textColor="#4F4F4F" fontSize="28">
          Not signed up on Pawshake yet?
        </Text>

        <Text
          textColor="#00AFED"
          fontSize="16"
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          onClick={() => navigate("/register")}
        >
          Sign up
        </Text>
      </Stack>
    </Container>
  );
};

export default LoginPage;
