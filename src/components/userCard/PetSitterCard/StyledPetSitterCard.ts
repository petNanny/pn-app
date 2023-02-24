import { Card, Flex, Avatar, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const CardHeaderLeft = styled(Flex)`
  &&& {
    gap: 4;
  }
`;

export const UserAvatar = styled(Avatar)`
  &&& {
    width: 4rem;
    height: 4rem;
  },
`;

export const CardHeaderMiddle = styled(Flex)`
  &&& {
    flex-direction: column;
    align-items: start;
  }
`;

export const UserName = styled(Heading)`
  &&& {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

export const PetSitterCardContainer = styled(Card)`
  &&& {
    margin: 1px;
    width: 40%;
    cursor: pointer;
    &:hover {
      background: lightcyan;
    }
  }
`;

export const PetSitterCardHeaderContainer = styled(Flex)`
  &&& {
    justify-content: space-between;
  }
`;

export const DistanceInfo = styled(Text)`
  &&& {
    opacity: 0.5;
  }
`;

export const PriceInfo = styled(Text)`
  &&& {
    opacity: 0.8;
  }
`;

export const CardIntroduction = styled(Text)`
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

export const CardFooterText = styled(Text)`
  &&& {
    width: 100%;
    text-align: right;
    color: var(--chakra-colors-blue-500);
  }
`;
