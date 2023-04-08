import { UnorderedList, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStoreSelector } from "../../../store/hook";
import FormWrapper from "../../PetSitterProfile/FormWrapper/FormWrapper";

const AsideAdminProfileBox = () => {
  const admin = useStoreSelector((state) => state.adminUser);
  return (
    <FormWrapper title={"My admin"}>
      <UnorderedList listStyleType="none" margin="0" color="#00AFED">
        <ListItem cursor="pointer" height="30px">
          <Link to={`/adminPage/about-admin`}>About Admin</Link>
        </ListItem>
        <ListItem cursor="pointer" height="30px">
          <Link to={`/adminPage/pet-owner`}>Pet Owner</Link>
        </ListItem>
        <ListItem cursor="pointer" height="30px">
          <Link to={`/adminPage/pet-sitter`}>Pet Sitter</Link>
        </ListItem>
      </UnorderedList>
    </FormWrapper>
  );
};

export default AsideAdminProfileBox;
