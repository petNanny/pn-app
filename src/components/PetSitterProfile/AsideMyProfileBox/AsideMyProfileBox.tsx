import { UnorderedList, ListItem } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AsideMyProfileBox = () => {
  const petOwner = useSelector((state: any) => state.petOwner);
  return (
    <FormWrapper title={"My profile"}>
      <UnorderedList listStyleType="none" margin="0" color="#00AFED">
        <ListItem cursor="pointer">
          <Link to={`/userProfile/about-me/${petOwner._id}`}>About me</Link>
        </ListItem>
        <ListItem cursor="pointer">My pets (WIP)</ListItem>
      </UnorderedList>
    </FormWrapper>
  );
};

export default AsideMyProfileBox;
