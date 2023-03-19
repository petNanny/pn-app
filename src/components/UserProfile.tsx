import { Container, Flex } from "@chakra-ui/react";
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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const PetSitter = () => {
  const { formPage, id } = useParams();
  const petOwner = useSelector((state: any) => state.petOwner);
  const hasCreatedPetSitterAccount = petOwner.roles.includes("PetSitter");

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
          <AsideMyProfileBox />
          {hasCreatedPetSitterAccount && <AsideMySitterBox />}
        </Flex>
        <Flex flexGrow="3" flexShrink="1" flexBasis="0%">
          {formPage === "about-me" && id === petOwner._id && <AboutMeForm />}
          {formPage === "address" && id === petOwner._id && <AddressForm />}
          {formPage === "pet-service" && id === petOwner._id && <PetServiceForm />}
          {formPage === "pet-preference" && id === petOwner._id && <PetPreferencesForm />}
          {formPage === "home-area" && id === petOwner._id && <MyHomeAreaForm />}
          {formPage === "description" && id === petOwner._id && <DescriptionForm />}
          {formPage === "experience" && id === petOwner._id && <ExperienceForm />}
          {formPage === "payment-information" && id === petOwner._id && <PaymentForm />}
          {formPage === "submission" && id === petOwner._id && <CompleteApplicationForm />}
          {formPage === "profile-gallery" && id === petOwner._id && <ProfileGallery />}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PetSitter;
