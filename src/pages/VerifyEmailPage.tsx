import PageLayout from "../components/Layout/PageLayout";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useVerifyEmailQuery } from "../redux/authApi";
import { useParams } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";

const VerifyEmailPage = () => {
  const { userId, token } = useParams();
  const { data, isSuccess } = useVerifyEmailQuery({ userId, token });

  if (isSuccess) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageLayout>
      <Box textAlign="center" marginTop="10px">
        Please verify your email
        <Heading color="#ADD8E6">
          <NavLink to="/">
            <Text fontSize="1rem" as="u">
              Home Page
            </Text>
          </NavLink>
        </Heading>
      </Box>
    </PageLayout>
  );
};

export default VerifyEmailPage;
