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

const CardHeaderLeft= styled(Flex)`
&&& {
  gap: 4;
  }
`;

const UserAvatar= styled(Avatar)`
&&& {
  size: lg;
  }
`;

const PetSitterCard = (prop: PetSitter) => {
  return (
    <Card className="petSitter-card">
      <CardHeader>
        <Flex className="petSitter-card-header">
          <CardHeaderLeft>
            <Avatar size="lg" name={prop.name} src={prop.avatar} />
            <Box>
              <Flex flexDirection="column" alignItems="flex-start">
                <Heading size="sm">{prop.name}</Heading>
                <Text opacity="0.5">
                  {prop.distance}km - {prop.suburb}{" "}
                </Text>
                <div>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon key={i} color={i < prop.rating ? "yellow.500" : "gray.300"} />
                    ))}
                </div>
              </Flex>
            </Box>
          </CardHeaderLeft>
          <Box>
            <Text opacity="0.8">
              {prop.price} AUD <br></br>/ night{" "}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text className="Card-introduction">{prop.introduction}</Text>
      </CardBody>
      <CardFooter>
        <Text width="100%" textAlign="right" color="blue.500">
          Read more
        </Text>
      </CardFooter>
    </Card>
  );
};

export default PetSitterCard;
