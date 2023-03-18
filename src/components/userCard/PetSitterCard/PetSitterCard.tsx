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

const PetSitterCard = ({
  avatar: userAvatar,
  name: userName,
  suburb: userSuburb,
  price: userPrice,
  introduction: userIntroduction,
  distance: userDistance,
}: PetSitter) => {
  return (
    <PetSitterCardContainer>
      <CardHeader>
        <PetSitterCardHeaderContainer>
          <CardHeaderLeft>
            <UserAvatar alt={userName} src={userAvatar} />
            <Box>
              <CardHeaderMiddle>
                <UserName>{userName}</UserName>
                <DistanceInfo>
                  {userDistance} - {userSuburb}
                </DistanceInfo>
                <div>
                  {/* {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < userRating ? "yellow.500" : "gray.300"} /> //show stars according to petSitter rates
                    ))} */}
                  <StarIcon />
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
        <CardIntroduction>{userIntroduction}</CardIntroduction>
      </CardBody>
      <CardFooter>
        <CardFooterText>Read more</CardFooterText>
      </CardFooter>
    </PetSitterCardContainer>
  );
};

export default PetSitterCard;
