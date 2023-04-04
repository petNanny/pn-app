import { useState, useEffect } from "react";
import { Stack, Container, Box, Divider, useToast } from "@chakra-ui/react";
import StrategiesLoginButton from "../components/StrategiesLoginButton/StrategiesLoginButton";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import SignUp from "../components/SignUp/SignUp";
import { StyledButton } from "../components/SignUp/styledSignUp";
import SignUpTitle from "../components/SignUpTitle/SignUpTitle";
import SignUpTitleBelow from "../components/SignUpTitleBelow/SignUpTitleBelow";
import PageLayout from "../components/Layout/PageLayout";
import { useGoogleLoginMutation } from "../redux/authApi";
import { GoogleLogin } from "@react-oauth/google";
import { setCredential } from "../store/reducer/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [googleLogin, { data, isSuccess, isError }] = useGoogleLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const onSuccess = async (response: any) => {
    await googleLogin({ tokenId: response.credential });
  };

  const onFailure = () => {
    toast({
      title: "Login failed.",
      description: "Please try again.",
      status: "error",
      duration: 9000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredential(data));
      toast({
        title: "Login success.",
        description: "You've been successful login your account",
        status: "success",
        duration: 9000,
        isClosable: true,
        containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
      });
      navigate("/");
    }
    if (isError) {
      onFailure();
    }
  }, [isSuccess, isError]);

  return (
    <PageLayout>
      <Container maxWidth="5xl" display="flex" justifyContent="center" padding="4" marginBottom="4">
        <Stack display="flex" flexDirection="column" alignItems="center">
          <SignUpTitle />
          <Box paddingTop="3">
            {!showSignUpForm ? (
              <StyledButton type="button" onClick={() => setShowSignUpForm(true)}>
                Sign up with email
              </StyledButton>
            ) : (
              <SignUp />
            )}
          </Box>
          <Divider />
          <Box paddingTop="1rem">
            <GoogleLogin
              onSuccess={(credential) => {
                onSuccess(credential);
              }}
              onError={onFailure}
              locale="en"
            />
          </Box>
          <Divider paddingY="4" />
          <SignUpTitleBelow />
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default RegisterPage;
