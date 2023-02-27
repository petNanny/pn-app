import { UnorderedList, ListItem } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { Link } from "react-router-dom";
const AsideMyProfileBox = () => {
  return (
    <FormWrapper title={"My profile"}>
      <UnorderedList listStyleType="none" margin="0" color="#00AFED">
        <ListItem cursor="pointer">
          <Link to={"/petSitter/about-me"}>About me</Link>
        </ListItem>
        <ListItem cursor="pointer">My pets (WIP)</ListItem>
      </UnorderedList>
    </FormWrapper>
  );
};

export default AsideMyProfileBox;
