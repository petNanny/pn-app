import {
  ProfileContentContainer,
  PetSitterPageContainer,
} from "./styledPetSitterPagePetSitterProfile";
import "yet-another-react-lightbox/styles.css";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";

const PetSitterPagePetSitterProfile = () => {
  return (
    <>
      <PetSitterPageContainer>
        <ProfileContentContainer>
          <PetSitterGallery />
        </ProfileContentContainer>
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterPagePetSitterProfile;
