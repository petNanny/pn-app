import { UnorderedList, ListItem } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AsideMySitterBox = () => {
  const petOwner = useSelector((state: any) => state.petOwner);
  return (
    <FormWrapper title={"My sitter profile"}>
      <UnorderedList listStyleType="none" margin="0" color="#00AFED">
        <ListItem cursor="pointer">
          <Link to={`/userProfile/address/${petOwner._id}`}>My address</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/pet-service/${petOwner._id}`}>Services</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/pet-preference/${petOwner._id}`}>Pet preferences</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/home-area/${petOwner._id}`}>My home and area</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/description/${petOwner._id}`}>Description</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/profile-gallery/${petOwner._id}`}>Profile gallery</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/experience/${petOwner._id}`}>Experience</Link>
        </ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/payment-information/${petOwner._id}`}>Payout method</Link>
        </ListItem>
        <ListItem cursor="pointer">Police check (WIP)</ListItem>
        <ListItem cursor="pointer">
          <Link to={`/userProfile/submission/${petOwner._id}`}>Complete sitter application</Link>
        </ListItem>
      </UnorderedList>
    </FormWrapper>
  );
};

export default AsideMySitterBox;
