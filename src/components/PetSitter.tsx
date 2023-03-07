import { Container, Flex } from "@chakra-ui/react";
import AsideMyProfileBox from "./PetSitterProfile/AsideMyProfileBox/AsideMyProfileBox";
import AsideMySitterBox from "./PetSitterProfile/AsideMySitterBox/AsideMySitterBox";
import AboutMeForm from "./PetSitterProfile/AboutMeForm/AboutMeForm";
import PetServiceForm from "./PetSitterProfile/PetServiceForm/PetServiceForm";
import PetPreferencesForm from "./PetSitterProfile/PetPreferencesForm/PetPreferencesForm";
import MyHomeAreaForm from "./PetSitterProfile/MyHomeAreaForm/MyHomeAreaForm";
import DescriptionForm from "./PetSitterProfile/DescriptionForm/DescriptionForm";
import ExperienceForm from "./PetSitterProfile/ExperienceForm/ExperienceForm";
import PaymentForm from "./PetSitterProfile/PaymentForm/PaymentForm";
import CompleteApplicationForm from "./PetSitterProfile/CompleteApplicationForm/CompleteApplicationForm";
import ProfileGallery from "./PetSitterProfile/ProfileGallery/ProfileGallery";

import { useParams } from "react-router-dom";
const PetSitter = () => {
  const { formPage } = useParams();

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
          <AsideMySitterBox />
        </Flex>
        <Flex flexGrow="3" flexShrink="1" flexBasis="0%">
          {formPage === "about-me" && <AboutMeForm />}
          {formPage === "pet-service" && <PetServiceForm />}
          {formPage === "pet-preference" && <PetPreferencesForm />}
          {formPage === "home-area" && <MyHomeAreaForm />}
          {formPage === "description" && <DescriptionForm />}
          {formPage === "experience" && <ExperienceForm />}
          {formPage === "payment-information" && <PaymentForm />}
          {formPage === "submission" && <CompleteApplicationForm />}
          {formPage === "profile-gallery" && <ProfileGallery />}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PetSitter;
