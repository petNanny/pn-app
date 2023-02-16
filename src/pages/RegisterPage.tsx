import { useState } from "react";
import { Stack, Container, Text, Box, Divider, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import StrategiesLoginButton from "../components/Login/StrategiesLoginButton";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import SignUp from "../components/SignUp/SignUp";

const RegisterPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const navigate = useNavigate();
  return (
    <Container maxWidth="5xl" display="flex" justifyContent="center">
      <Stack display="flex" flexDirection="column" alignItems="center">
        <Text textColor="#4F4F4F" fontSize={{ base: "20", sm: "28" }}>
          Sign up for Pawshake
        </Text>
        <Text textColor="#4F4F4F" fontSize={{ base: "16", sm: "20" }}>
          {`It's free!`}
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
          {!showSignUpForm ? (
            <Button
              type="button"
              backgroundColor="#00C38A"
              color="#ffffff"
              width={{ base: "300px", sm: "480px" }}
              height="50px"
              onClick={() => setShowSignUpForm(true)}
            >
              Sign up with email
            </Button>
          ) : (
            <SignUp />
          )}
        </Box>
        <Divider paddingY="4" />
        <Text textColor="#4F4F4F" fontSize={{ base: "20", sm: "28" }}>
          Already have a Pawshake account?
        </Text>

        <Text
          textColor="#00AFED"
          fontSize={{ base: "16", sm: "20" }}
          cursor="pointer"
          _hover={{ textDecoration: "underline" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Text>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
