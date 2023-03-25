import { Card, Flex, Avatar, Heading, Text, Box } from "@chakra-ui/react";
import styled from "styled-components";
import { devices } from "../../../styles/breakPoints";

export const CardHeaderLeft = styled(Flex)`
  &&& {
    gap: 16px;
  }
`;

export const UserAvatar = styled(Avatar)`
  &&& {
    width: 4rem;
    height: 4rem;
  }
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
    width: 100%;
    cursor: pointer;
    &:hover {
      background: lightcyan;
    }
    @media ${devices.laptop} {
      width: 100%;
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
    display: none;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    @media ${devices.tablet} {
      display: -webkit-box;
    }
  }
`;

export const CardFooterText = styled(Text)`
  &&& {
    display: none;
    width: 100%;
    text-align: right;
    color: var(--chakra-colors-blue-500);
    @media ${devices.tablet} {
      display: block;
    }
  }
`;
