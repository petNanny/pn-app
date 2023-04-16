import { Container, Flex, Box } from "@chakra-ui/react";
import AsideMyProfileBox from "./PetSitterProfile/AsideMyProfileBox/AsideMyProfileBox";
import AsideMySitterBox from "./PetSitterProfile/AsideMySitterBox/AsideMySitterBox";
import AboutMeForm from "./PetSitterProfile/AboutMeForm/AboutMeForm";
import AddressForm from "./PetSitterProfile/AddressForm/AddressForm";
import PetServiceForm from "./PetSitterProfile/PetServiceForm/PetServiceForm";
import PetPreferencesForm from "./PetSitterProfile/PetPreferencesForm/PetPreferencesForm";
import MyHomeAreaForm from "./PetSitterProfile/MyHomeAreaForm/MyHomeAreaForm";
import DescriptionForm from "./PetSitterProfile/DescriptionForm/DescriptionForm";
import ExperienceForm from "./PetSitterProfile/ExperienceForm/ExperienceForm";
import PaymentForm from "./PetSitterProfile/PaymentForm/PaymentForm";
import CompleteApplicationForm from "./PetSitterProfile/CompleteApplicationForm/CompleteApplicationForm";
import ProfileGallery from "./PetSitterProfile/ProfileGallery/ProfileGallery";
import MyPetForm from "./PetSitterProfile/MyPetForm/MyPetForm";
import AddNewPet from "./PetSitterProfile/AddNewPet/AddNewPet";
import EditPet from "./PetSitterProfile/EditPet/EditPet";
import LegalRequirement from "./PetSitterProfile/LegalRequirement";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../styles/breakPoints";

const MyProfileContainer = styled(Box)`
  &&& {
    display: none;
    @media ${devices.tablet} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-right: 2rem;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
    }
  }
`;

const PetSitter = () => {
  const { formPage, id } = useParams();
  const petOwner = useSelector((state: any) => state.petOwner);
  const hasCreatedPetSitterAccount = petOwner.roles.includes("PetSitter");
  const petId = useSelector((state: any) => state.pet.petId);

  return (
    <Container maxW="6xl" padding="4">
      <Flex>
        <MyProfileContainer>
          <AsideMyProfileBox />
          {hasCreatedPetSitterAccount && <AsideMySitterBox />}
        </MyProfileContainer>
        <Flex flexGrow="3" flexShrink="1" flexBasis="0%">
          {formPage === "about-me" && id === petOwner._id && <AboutMeForm />}
          {formPage === "address" && id === petOwner._id && <AddressForm />}
          {formPage === "pet-service" && id === petOwner._id && <PetServiceForm />}
          {formPage === "pet-preference" && id === petOwner._id && <PetPreferencesForm />}
          {formPage === "home-area" && id === petOwner._id && <MyHomeAreaForm />}
          {formPage === "description" && id === petOwner._id && <DescriptionForm />}
          {formPage === "profile-gallery" && id === petOwner._id && <ProfileGallery />}
          {formPage === "experience" && id === petOwner._id && <ExperienceForm />}
          {formPage === "payment-information" && id === petOwner._id && <PaymentForm />}
          {formPage === "legal-requirement" && id === petOwner._id && <LegalRequirement />}
          {formPage === "submission" && id === petOwner._id && <CompleteApplicationForm />}
          {formPage === "my-pets" && id === petOwner._id && <MyPetForm />}
          {formPage === "new-pet" && id === petOwner._id && <AddNewPet />}
          {formPage === "edit-pet" && id === petId && <EditPet />}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PetSitter;
