import styled from "styled-components";
import { Box, Avatar, Button, Heading, Text } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const MobileHeaderContainer = styled(Box)`
  &&& {
    position: relative;
    bottom: 1rem;
    word-break: break-word;
    margin: 0;
    left: 1rem;
    @media ${devices.laptop} {
      display: none;
    }
  }
`;

export const MobileHeaderAvatar = styled(Avatar)`
  &&& {
    position: absolute;
    box-sizing: content-box;
    width: 6rem;
    height: 6rem;
    top: -3rem;
    border: 2px solid white;
    margin: auto 1rem auto 0px;
    @media ${devices.tablet} {
      width: 7rem;
      height: 7rem;
      top: -3.5rem;
      border: 4px solid white;
    }
  }
`;

export const MobileHeaderPetSitterInfo = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-left: calc(7rem + 8px);
    @media ${devices.tablet} {
      padding-left: calc(9rem + 8px);
    }
  }
`;

export const SavedForFavoriteBtn = styled(Button)`
  &&& {
    padding: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    float: right;
    margin: 1rem 1rem 0 2rem;
    box-sizing: content-box;
    background: transparent;
  }
`;

export const MobileHeaderIntro = styled(Heading)`
  &&& {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    line-height: normal;
    font-size: 1.2rem;
    @media ${devices.tablet} {
      font-size: 1.5rem;
    }
  }
`;

export const MobileHeaderSuburb = styled(Text)`
  &&& {
    margin: 0;
  }
`;
