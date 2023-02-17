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
        <Text variant="headerPrimary">Already a Pawshake member?</Text>
        <Text variant="headerSecondary">Log in below!</Text>
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
        <Text variant="headerPrimary">Not signed up on Pawshake yet?</Text>

        <Text variant="LinkText" onClick={() => navigate("/register")}>
          Sign up
        </Text>
      </Stack>
    </Container>
  );
};

export default LoginPage;
