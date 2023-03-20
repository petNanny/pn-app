import {
  ProfileContentContainer,
  PetSitterPageContainer,
} from "./styledPetSitterPagePetSitterProfile";
import "yet-another-react-lightbox/styles.css";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";
import PetSitterMobileHeader from "./components/PetSitterMobileHeader/PetSitterMobileHeader";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { extractIdFromURL } from "../../utils/common";
import { useLocation } from "react-router-dom";

const PetSitterPagePetSitterProfile = () => {
  const location = useLocation();
  const petSitterId = extractIdFromURL(location.pathname);
  const { data: petSitterData } = useGetOnePetSitterQuery(petSitterId);

  let userName, userAvatar, userIntro, userSuburb;
  if (petSitterData) {
    ({
      petOwner: { userName, avatar: userAvatar },
      introduction: userIntro,
      address: { city: userSuburb },
    } = petSitterData);
  }

  return (
    <>
      <PetSitterPageContainer>
        <ProfileContentContainer>
          <PetSitterGallery userName={userName} />
          <PetSitterMobileHeader
            userAvatar={userAvatar}
            userName={userName}
            userIntro={userIntro}
            userSuburb={userSuburb}
          />
        </ProfileContentContainer>
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterPagePetSitterProfile;
