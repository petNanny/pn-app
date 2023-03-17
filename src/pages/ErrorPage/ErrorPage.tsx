import { Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../components/Layout/PageLayout";
import { ErrorPageContent } from "./styledErrorPage";

const ErrorPage = () => {
  return (
    <PageLayout>
      <ErrorPageContent>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2VmNzc2MTM0ZjIxNjdhM2JhNzRmMWEwMzY4MDMzNThhNjVkYzFiNiZjdD1n/AKWXpDjlLgYFe1cZou/giphy.gif"
          id="error-logo"
        />
        <Heading color="#5CACE2">
          Oops... something went wrong. Can I go
          <NavLink to="/">
            <Heading color="lightblue">
              <Text as="u">home now?</Text>
            </Heading>
          </NavLink>
        </Heading>
      </ErrorPageContent>
    </PageLayout>
  );
};

export default ErrorPage;
