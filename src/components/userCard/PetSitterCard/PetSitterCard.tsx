import { CardHeader, CardBody, CardFooter, Box } from "@chakra-ui/react";
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

const PetSitterCard = (props: PetSitter) => {
  const {
    avatar: userAvatar,
    name: userName,
    suburb: userSuburb,
    distance: userDistance,
    rating: userRating,
    price: userPrice,
    introduction: userIntoduction,
  } = props;
  return (
    <PetSitterCardContainer>
      <CardHeader>
        <PetSitterCardHeaderContainer>
          <CardHeaderLeft>
            <UserAvatar name={userName} src={userAvatar} />
            <Box>
              <CardHeaderMiddle>
                <UserName>{PetSitterCard.name}</UserName>
                <DistanceInfo>
                  {userDistance}km - {userSuburb}
                </DistanceInfo>
                <div>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < userRating ? "yellow.500" : "gray.300"} /> //show stars according to petSitter rates
                    ))}
                </div>
              </CardHeaderMiddle>
            </Box>
          </CardHeaderLeft>
          <Box>
            <PriceInfo>{userPrice} AUD</PriceInfo>
            <PriceInfo>/ night</PriceInfo>
          </Box>
        </PetSitterCardHeaderContainer>
      </CardHeader>
      <CardBody>
        <CardIntroduction>{userIntoduction}</CardIntroduction>
      </CardBody>
      <CardFooter>
        <CardFooterText>Read more</CardFooterText>
      </CardFooter>
    </PetSitterCardContainer>
  );
};

export default PetSitterCard;
