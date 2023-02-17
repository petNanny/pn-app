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
        <Text variant="headerPrimary">Sign up for Pawshake</Text>
        <Text variant="headerSecondary">{`It's free!`}</Text>
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
            <Button type="button" variant="submitBtn" onClick={() => setShowSignUpForm(true)}>
              Sign up with email
            </Button>
          ) : (
            <SignUp />
          )}
        </Box>
        <Divider paddingY="4" />
        <Text variant="headerPrimary">Already have a Pawshake account?</Text>

        <Text variant="LinkText" onClick={() => navigate("/login")}>
          Login
        </Text>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
