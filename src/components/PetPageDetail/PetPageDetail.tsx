import { Box, Spinner, Avatar } from "@chakra-ui/react";
import { useGetOnePetQuery } from "../../redux/petApi";
import { useParams } from "react-router-dom";
import {
  PetPageContainer,
  PetDetailContainer,
  PetShortInfo,
  PetNameHeading,
  PetShortInfoText,
  PetDetailInfo,
  PetDetailInfoTitle,
  PetBasicInfo,
  PetBasicInfoText,
  PetCharacteristicsTitle,
  PetCharacteristicBox,
  PetCharacteristicText,
  PetCharacteristicIcon,
  PetOwnerDetailBox,
  PetOwnerDetailBoxTitle,
} from "./styledPetPageDetail";
import { FaCheck } from "react-icons/fa";

const PetPageDetail = () => {
  const { id } = useParams();
  const { data: petData, isLoading: isPetLoading } = useGetOnePetQuery(id);
  if (!petData) return null;
  if (isPetLoading) return <Spinner />;

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const characteristics = [
    { name: "neutered", value: petData.neutered, info: "Neutered" },
    { name: "vaccinated", value: petData.vaccinated, info: "Vaccinated" },
    { name: "chipped", value: petData.chipped, info: "Chipped" },
    { name: "houseTrained", value: petData.houseTrained, info: "House trained" },
    { name: "friendlyWithDogs", value: petData.friendlyWithDogs, info: "Friendly with dogs" },
    { name: "friendlyWithCats", value: petData.friendlyWithCats, info: "Friendly with cats" },
    { name: "friendlyWithKids", value: petData.friendlyWithKids, info: "Friendly with kids" },
    { name: "friendlyWithAdults", value: petData.friendlyWithAdults, info: "Friendly with adults" },
  ];

  return (
    <PetPageContainer>
      <PetDetailContainer>
        <PetShortInfo>
          <Box marginBottom="1rem">
            <PetNameHeading as="h1">{capitalize(petData.petName)}</PetNameHeading>
            <PetShortInfoText>
              {petData.species}
              {petData.breed ? `, ${capitalize(petData.breed)}` : null}
            </PetShortInfoText>
          </Box>
          <Avatar size="2xl" src={petData.avatar} />
        </PetShortInfo>
        <PetDetailInfo>
          <PetDetailInfoTitle as="h2">About {capitalize(petData.petName)}</PetDetailInfoTitle>
          <PetBasicInfo>
            <PetBasicInfoText>
              <strong>Gender:</strong>&nbsp;<p>{petData.gender}</p>
            </PetBasicInfoText>
            <PetBasicInfoText>
              <strong>Year of birth:</strong>&nbsp;<p>{petData.yearOfBirth}</p>
            </PetBasicInfoText>
          </PetBasicInfo>
          <PetCharacteristicsTitle as="h3">Characteristics</PetCharacteristicsTitle>
          <Box display="flex" flexWrap="wrap">
            {characteristics.map((characteristic) => (
              <PetCharacteristicBox key={characteristic.name}>
                {characteristic.value ? (
                  <>
                    <PetCharacteristicIcon as={FaCheck} />
                    <PetCharacteristicText>{characteristic.info}</PetCharacteristicText>
                  </>
                ) : null}
              </PetCharacteristicBox>
            ))}
          </Box>
        </PetDetailInfo>
        <Box marginBottom="4rem" display="flex" justifyContent="space-between">
          <PetOwnerDetailBox>
            <PetOwnerDetailBoxTitle as="h2">
              Owner of {capitalize(petData.petName)}
            </PetOwnerDetailBoxTitle>
            <Box color="rgb(116, 116, 116)">{petData.petOwner.userName}</Box>
          </PetOwnerDetailBox>
          <Avatar size="xl" src={petData.petOwner.avatar} />
        </Box>
      </PetDetailContainer>
    </PetPageContainer>
  );
};

export default PetPageDetail;
