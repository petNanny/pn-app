import { Stack, Container, Box, Divider, useToast, Button, Text } from "@chakra-ui/react";
import Login from "../components/Login/Login";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import LoginTitleBelow from "../components/LoginTitleBelow/LoginTitleBelow";
import PageLayout from "../components/Layout/PageLayout";
import { useGoogleLoginMutation } from "../redux/authApi";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { setCredential } from "../store/reducer/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
          <LoginTitle />
          <Box paddingTop="3">
            <Login />
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
          <LoginTitleBelow />
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default LoginPage;
