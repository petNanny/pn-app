import {
  ProfileContentContainer,
  PetSitterPageContainer,
  ProfileDetailSection,
  ProfileDetailSectionHeading,
} from "./styledPetSitterDetail";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";
import PetSitterMobileHeader from "./components/PetSitterMobileHeader/PetSitterMobileHeader";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { Stack, Button, Text, Image, Box } from "@chakra-ui/react";
import { useParams, Navigate } from "react-router-dom";
import PetSitterCalendar from "./components/PetSitterCalendar/PetSitterCalendar";

const PetSitterDetail = () => {
  const { id } = useParams();
  const { data: petSitterData, isLoading: isPetSitterLoading } = useGetOnePetSitterQuery(id);

  let petSitterName,
    petSitterAvatar,
    petSitterIntro,
    petSitterSuburb,
    petSitterId,
    petSitterNotAvailableDates;

  if (isPetSitterLoading) return <div>Loading...</div>;

  if (petSitterData) {
    ({
      petOwner: { userName: petSitterName, avatar: petSitterAvatar },
      introduction: petSitterIntro,
      address: { city: petSitterSuburb },
      _id: petSitterId,
      notAvailableDates: petSitterNotAvailableDates,
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
            <ProfileDetailSectionHeading as="h2">Availability</ProfileDetailSectionHeading>
            <PetSitterCalendar petSitterNotAvailableDates={petSitterNotAvailableDates} />
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
