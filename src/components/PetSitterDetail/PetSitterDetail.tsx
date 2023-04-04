import {
  ProfileContentContainer,
  PetSitterPageContainer,
  ProfileDetailSection,
  ProfileDetailSectionHeading,
} from "./styledPetSitterDetail";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";
import PetSitterMobileHeader from "./components/PetSitterMobileHeader/PetSitterMobileHeader";
import PetSitterSkills from "./components/PetSitterSkills/PetSitterSkills";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { Stack, Button, Text, Image } from "@chakra-ui/react";
import { useParams, Navigate } from "react-router-dom";

const PetSitterDetail = () => {
  const { id } = useParams();
  const { data: petSitterData, isLoading: isPetSitterLoading } = useGetOnePetSitterQuery(id);

  let petSitterName,
    petSitterAvatar,
    petSitterIntro,
    petSitterSuburb,
    petSitterId,
    petSitterSkills,
    petSitterLanguages;

  if (isPetSitterLoading) return <div>Loading...</div>;

  if (petSitterData) {
    ({
      petOwner: { userName: petSitterName, avatar: petSitterAvatar },
      introduction: petSitterIntro,
      address: { city: petSitterSuburb },
      _id: petSitterId,
      experience: petSitterSkills,
      languages: petSitterLanguages,
    } = petSitterData);
  } else {
    return <Navigate to="/error" replace />;
  }

  return (
    <>
      <PetSitterPageContainer>
        <ProfileContentContainer>
          <PetSitterGallery petSitterName={petSitterName} petSitterId={petSitterId} />
          <PetSitterMobileHeader
            petSitterAvatar={petSitterAvatar}
            petSitterName={petSitterName}
            petSitterIntro={petSitterIntro}
            petSitterSuburb={petSitterSuburb}
          />
          <ProfileDetailSection>
            <ProfileDetailSectionHeading as="h2">Skills</ProfileDetailSectionHeading>
            <PetSitterSkills
              petSitterSkills={petSitterSkills}
              petSitterLanguages={petSitterLanguages}
            />
          </ProfileDetailSection>
          <Stack>
            <div>PetSitterDetail</div>
            <Text>petSitterId : {petSitterData?._id}</Text>
            <Text>petSitter userName : {petSitterData?.petOwner?.userName}</Text>
            <Text>petSitter language : {petSitterData?.languages}</Text>
            <Image boxSize="150px" src={petSitterData?.petOwner?.avatar} />
            <Button>Chat with this petSitter</Button>
            <Button>Order service from this petSitter</Button>
          </Stack>
        </ProfileContentContainer>
      </PetSitterPageContainer>
    </>
  );
};

export default PetSitterDetail;
