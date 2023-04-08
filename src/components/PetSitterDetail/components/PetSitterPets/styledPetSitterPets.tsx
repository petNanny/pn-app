import styled from "styled-components";
import { Box, Text, Card } from "@chakra-ui/react";
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

export const PetSitterPetBox = styled(Card)`
  &&& {
    color: rgb(116, 116, 116);
    text-decoration: none;
    width: 14rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: flex;
    cursor: pointer;
    box-shadow: none;
    flex-direction: row;
  }
`;

export const PetInfoBox = styled(Box)`
  &&& {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PetNameText = styled(Text)`
  &&& {
    color: rgb(116, 116, 116);
  }
`;

export const PetBreedText = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    margin-top: 0.5rem;
  }
`;
