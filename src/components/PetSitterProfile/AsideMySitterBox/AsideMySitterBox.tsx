import { UnorderedList, ListItem } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { Link } from "react-router-dom";

const AsideMySitterBox = () => {
  return (
    <FormWrapper title={"My sitter profile"}>
      <UnorderedList listStyleType="none" margin="0" color="#00AFED">
        <ListItem cursor="pointer">My address(WIP)</ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/pet-service"}>Services</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/pet-preference"}>Pet preferences</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/home-area"}>My home and area</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/description"}>Description</Link>
        </ListItem>
        <ListItem cursor="pointer">Profile gallery (WIP)</ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/experience"}>Experience</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/payment-information"}>Payout method</Link>
        </ListItem>
        <ListItem cursor="pointer">Police check (WIP)</ListItem>
        <ListItem cursor="pointer">
          <Link to={"/petSitter/submission"}>Complete sitter application</Link>
        </ListItem>
      </UnorderedList>
    </FormWrapper>
  );
};

export default AsideMySitterBox;
