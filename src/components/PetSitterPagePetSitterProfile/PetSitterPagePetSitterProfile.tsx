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
import { useState, useEffect } from "react";

const PetSitterPagePetSitterProfile = () => {
  const defaultData = {
    petOwner: {
      userName: "",
      avatar: "",
    },
    introduction: "",
    address: {
      city: "",
    },
  };
  const [petData, setPetData] = useState(defaultData);
  const location = useLocation();
  const petSitterId = extractIdFromURL(location.pathname);
  const { data: petSitterData } = useGetOnePetSitterQuery(petSitterId);

  useEffect(() => {
    if (petSitterData !== undefined && petSitterData.petOwner !== undefined) {
      setPetData(petSitterData);
    }
  }, [petSitterData]);

  const userName = petData.petOwner.userName;
  const userAvatar = petData.petOwner.avatar;
  const userIntro = petData.introduction;
  const userSuburb = petData.address.city;

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
