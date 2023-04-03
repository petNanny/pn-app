import { CardHeader, CardBody, CardFooter, Box, AvatarBadge, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { PetSitter } from "../PetSitterCardList/PetSitterCardList";
import {
  PetSitterCardContainer,
  PetSitterCardHeaderContainer,
  CardHeaderLeft,
  UserAvatar,
  CardHeaderMiddle,
  UserName,
  DistanceInfo,
  PriceInfo,
  CardIntroduction,
  CardFooterText,
} from "./StyledPetSitterCard";
import { useNavigate } from "react-router-dom";
import { MdCheck } from "react-icons/md";

const PetSitterCard = ({
  avatar: petSitterAvatar,
  name: petSitterName,
  suburb: petSitterSuburb,
  price: petSitterPrice,
  introduction: petSitterIntroduction,
  distance: petSitterDistance,
  id,
  rating: petSitterRating,
  isActivePetSitter,
}: PetSitter) => {
  const navigate = useNavigate();
  const handleClickPetSitter = () => {
    navigate(`/petSitter/${id}`);
  };

  console.log("isActivePetSitter", isActivePetSitter);
  return (
    <PetSitterCardContainer onClick={handleClickPetSitter}>
      <CardHeader>
        <PetSitterCardHeaderContainer>
          <CardHeaderLeft>
            <UserAvatar alt={petSitterName} src={petSitterAvatar}>
              {isActivePetSitter && (
                <AvatarBadge boxSize="1.25em" bg="transparent" border="none">
                  <MdCheck color="green" fontSize="2rem" />
                </AvatarBadge>
              )}
            </UserAvatar>
            <Box>
              <CardHeaderMiddle>
                <UserName>{petSitterName}</UserName>
                <DistanceInfo>
                  {petSitterDistance} - {petSitterSuburb}
                </DistanceInfo>
                <div>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < petSitterRating ? "yellow.500" : "gray.300"} /> //show stars according to petSitter rates
                    ))}
                </div>
              </CardHeaderMiddle>
            </Box>
          </CardHeaderLeft>
          <Box>
            <PriceInfo>{petSitterPrice} AUD</PriceInfo>
            <PriceInfo>/ night</PriceInfo>
          </Box>
        </PetSitterCardHeaderContainer>
      </CardHeader>
      <CardBody>
        <CardIntroduction>{petSitterIntroduction}</CardIntroduction>
      </CardBody>
      <CardFooter>
        <CardFooterText>Read more</CardFooterText>
      </CardFooter>
    </PetSitterCardContainer>
  );
};

export default PetSitterCard;
