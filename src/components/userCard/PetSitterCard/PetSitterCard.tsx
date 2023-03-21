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
import { useNavigate } from "react-router-dom";

const PetSitterCard = (props: PetSitter) => {
  const { id, avatar, userName, city, distance, rating, price, introduction } = props;
  const navigate = useNavigate();

  const handleClickPetSitter = () => {
    navigate(`/petSitter/details/${id}`);
  };
  return (
    <PetSitterCardContainer onClick={handleClickPetSitter}>
      <CardHeader>
        <PetSitterCardHeaderContainer>
          <CardHeaderLeft>
            <UserAvatar name={userName} src={avatar} />
            <Box>
              <CardHeaderMiddle>
                <UserName>{userName}</UserName>
                <DistanceInfo>
                  {distance}km - {city}
                </DistanceInfo>
                <div>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < rating ? "yellow.500" : "gray.300"} /> //show stars according to petSitter rates
                    ))}
                </div>
              </CardHeaderMiddle>
            </Box>
          </CardHeaderLeft>
          <Box>
            <PriceInfo>{price} AUD</PriceInfo>
            <PriceInfo>/ night</PriceInfo>
          </Box>
        </PetSitterCardHeaderContainer>
      </CardHeader>
      <CardBody>
        <CardIntroduction>{introduction}</CardIntroduction>
      </CardBody>
      <CardFooter>
        <CardFooterText>Read more</CardFooterText>
      </CardFooter>
    </PetSitterCardContainer>
  );
};

export default PetSitterCard;
