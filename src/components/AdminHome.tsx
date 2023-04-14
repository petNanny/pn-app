import { useParams, Navigate } from "react-router-dom";
import { useStoreSelector } from "../store/hook";
import { Container, Flex } from "@chakra-ui/react";
import AsideAdminProfileBox from "./AdminProfile/AsideAdminProfileBox/AsideAdminProfile";
import AboutAdminForm from "./AdminProfile/AboutAdminForm/AboutAdminForm";
import PetOwnerForm from "./AdminProfile/PetOwnerForm/PetOwnerForm";
import PetSitterForm from "./AdminProfile/PetSitterForm/PetSitterForm";

const AdminHome = () => {
  const { formPage } = useParams();
  const admin = useStoreSelector((state) => state.adminUser);

  return (
    <Container maxW="6xl" padding="4">
      <Flex>
        <Flex
          flexDirection="column"
          gap="5"
          marginRight="2rem"
          flexGrow="1"
          flexShrink="1"
          flexBasis="0%"
        >
          <AsideAdminProfileBox />
        </Flex>
        <Flex flexGrow="3" flexShrink="1" flexBasis="0%">
          {formPage === "about-admin" && <AboutAdminForm />}
          {formPage === "pet-owner" && <PetOwnerForm />}
          {formPage === "pet-sitter" && <PetSitterForm />}
        </Flex>
      </Flex>
    </Container>
  );
};

export default AdminHome;
