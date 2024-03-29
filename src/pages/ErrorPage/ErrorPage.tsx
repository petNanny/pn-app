import { Heading, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import { ErrorPageContent } from "./styledErrorPage";
import ErrorImage from "./assets/errorImage.jpg";

export const ErrorContent = () => {
  return (
    <ErrorPageContent>
      <img src={ErrorImage} id="error-logo" alt="PetNanny 404 Page" />
      <Box>
        <Heading color="#5CACE2">Oops... something went wrong. we are working to fix it.</Heading>
        <Heading color="#ADD8E6">
          <NavLink to="/">
            <Text as="u">Home Page</Text>
          </NavLink>
        </Heading>
      </Box>
    </ErrorPageContent>
  );
};

const ErrorPage = () => {
  return (
    <PageLayout>
      <ErrorContent />
    </PageLayout>
  );
};

export default ErrorPage;
