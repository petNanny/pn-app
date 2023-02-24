import "./PetSitterCard.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { PetSitter } from "../PetSitterCardList/PetSitterCardList";
import styled from "styled-components";

const CardHeaderLeft = styled(Flex)`
  &&& {
    gap: 4;
  }
`;

const UserAvatar = styled(Avatar)`
  &&& {
    width: 4rem;
    height: 4rem;
  },
`;

const CardHeaderMiddle = styled(Flex)`
  &&& {
    flex-direction: column;
    align-items: start;
  }
`;

const UserName = styled(Heading)`
  &&& {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const PetSitterCardContainer = styled(Card)`
  &&& {
    margin: 1px;
    width: 40%;
    cursor: pointer;
    &:hover {
      background: lightcyan;
    }
  }
`;

const PetSitterCardHeaderContainer = styled(Flex)`
  &&& {
    justify-content: space-between;
  }
`;

const DistanceInfo = styled(Text)`
  &&& {
    opacity: 0.5;
  }
`;

const PriceInfo = styled(Text)`
  &&& {
    opacity: 0.8;
  }
`;

const CardIntroduction = styled(Text)`
  &&& {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const CardFooterText = styled(Text)`
  &&& {
    width: 100%;
    text-align: right;
    color: var(--chakra-colors-blue-500);
  }
`;

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
                      <StarIcon key={i} color={i < prop.rating ? "yellow.500" : "gray.300"} />
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
