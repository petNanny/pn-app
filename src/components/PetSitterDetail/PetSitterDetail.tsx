import { ProfileContentContainer, PetSitterPageContainer } from "./styledPetSitterDetail";
import "yet-another-react-lightbox/styles.css";
import PetSitterGallery from "./components/PetSitterGallery/PetSitterGallery";
import PetSitterMobileHeader from "./components/PetSitterMobileHeader/PetSitterMobileHeader";
import { useGetOnePetSitterQuery } from "../../redux/petSitterApi";
import { Stack, Button, Text, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const PetSitterDetail = () => {
  const { id } = useParams();
  const { data: petSitterData } = useGetOnePetSitterQuery(id);

  let petSitterName, petSitterAvatar, petSitterIntro, petSitterSuburb, petSitterId;
  if (petSitterData) {
    ({
      petOwner: { userName: petSitterName, avatar: petSitterAvatar },
      introduction: petSitterIntro,
      address: { city: petSitterSuburb },
      _id: petSitterId,
    } = petSitterData);
  } else {
    return <div>not found</div>;
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
