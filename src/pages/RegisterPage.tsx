import { useState } from "react";
import { Stack, Container, Box, Divider } from "@chakra-ui/react";
import StrategiesLoginButton from "../components/StrategiesLoginButton/StrategiesLoginButton";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import SignUp from "../components/SignUp/SignUp";
import { StyledButton } from "../components/SignUp/styledSignUp";
import SignUpTitle from "../components/SignUpTitle/SignUpTitle";
import SignUpTitleBelow from "../components/SignUpTitleBelow/SignUpTitleBelow";
import PageLayout from "../components/Layout/PageLayout";

const RegisterPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  return (
    <PageLayout>
      <Container maxWidth="5xl" display="flex" justifyContent="center" padding="4" marginBottom="4">
        <Stack display="flex" flexDirection="column" alignItems="center">
          <SignUpTitle />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="3"
            paddingTop="14"
            paddingBottom="5"
          >
            <StrategiesLoginButton
              icon={<AiFillFacebook />}
              backgroundColor={"#3B5998"}
              strategyName={"Facebook"}
              color={"#FFFFFF"}
            />
            <StrategiesLoginButton
              icon={<FcGoogle />}
              backgroundColor={"#FFFFFF"}
              strategyName={"Google"}
              color={"#000000"}
            />
            <StrategiesLoginButton
              icon={<AiFillApple />}
              backgroundColor={"#FFFFFF"}
              strategyName={"Apple"}
              color={"#000000"}
            />
          </Box>
          <Divider />

          <Box paddingTop="3">
            {!showSignUpForm ? (
              <StyledButton type="button" onClick={() => setShowSignUpForm(true)}>
                Sign up with email
              </StyledButton>
            ) : (
              <SignUp />
            )}
          </Box>
          <Divider paddingY="4" />
          <SignUpTitleBelow />
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default RegisterPage;
