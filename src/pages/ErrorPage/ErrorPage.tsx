import { Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import { ErrorPageContent } from "./styledErrorPage";
import ErrorImage from "./assets/errorImage.jpg";

const ErrorPage = () => {
  return (
    <PageLayout>
      <ErrorPageContent>
        <img src={ErrorImage} id="error-logo" alt="PetNanny 404 Page" />
        <Heading color="#5CACE2">
          Oops... something went wrong. we are working to fix it.
          <Heading color="#ADD8E6">
            <NavLink to="/">
              <Text as="u">Home Page</Text>
            </NavLink>
          </Heading>
        </Heading>
      </ErrorPageContent>
    </PageLayout>
  );
};

export default ErrorPage;
