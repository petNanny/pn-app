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

const PetSitterCard = (prop: PetSitter) => {
  return (
    <PetSitterCardContainer>
      <CardHeader>
        <PetSitterCardHeaderContainer>
          <CardHeaderLeft>
            <UserAvatar name={prop.name} src={prop.avatar} />
            <Box>
              <CardHeaderMiddle>
                <UserName>{prop.name}</UserName>
                <DistanceInfo>
                  {prop.distance}km - {prop.suburb}
                </DistanceInfo>
                <div>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < prop.rating ? "yellow.500" : "gray.300"} /> //show stars according to petSitter rates
                    ))}
                </div>
              </CardHeaderMiddle>
            </Box>
          </CardHeaderLeft>
          <Box>
            <PriceInfo>
              {prop.price} AUD <br></br>/ night{" "}
            </PriceInfo>
          </Box>
        </PetSitterCardHeaderContainer>
      </CardHeader>
      <CardBody>
        <CardIntroduction>{prop.introduction}</CardIntroduction>
      </CardBody>
      <CardFooter>
        <CardFooterText>Read more</CardFooterText>
      </CardFooter>
    </PetSitterCardContainer>
  );
};

export default PetSitterCard;
