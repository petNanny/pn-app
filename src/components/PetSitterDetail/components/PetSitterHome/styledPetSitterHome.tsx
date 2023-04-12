import styled from "styled-components";
import { Box, Heading, Text, Icon, Image } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const HomeSubTitle = styled(Heading)`
  &&& {
    margin-bottom: 1rem;
    color: rgb(92, 92, 92);
    line-height: 22px;
    font-weight: normal;
    font-size: 1.17rem;
    @media ${devices.tablet} {
      line-height: 40px;
    }
  }
`;

export const AcceptedPetBox = styled(Box)`
  &&& {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    @media ${devices.laptop} {
      width: 20%;
    }
  }
`;

export const AboutHomeIcon = styled(Icon)`
  &&& {
    font-size: 1.4rem;
    color: rgb(0, 195, 138);
  }
`;

export const AcceptedPetTitle = styled(Text)`
  &&& {
    margin: 0.3rem 0;
    color: rgb(116, 116, 116);
    font-size: 1rem;
    line-height: 18px;
  }
`;

export const AcceptedPetInfo = styled(Text)`
  &&& {
    color: rgb(116, 116, 116);
    font-size: 0.9rem;
    line-height: 1rem;
  }
`;

export const PetSitterHomeBox = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    @media ${devices.tablet} {
      margin-bottom: 1rem;
      width: 40%;
    }
  }
`;

export const HomeInfo = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    font-size: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
  }
`;

export const PetSitterHomeMapContainer = styled(Box)`
  position: relative;
`;

export const PetSitterHomeMapImg = styled(Image)`
  width: 100%;
  border-radius: 0.5rem;
`;

export const PetSitterHomeMapCircle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  height: 40%;
  border-radius: 100%;
  background-color: #00afed;
  opacity: 0.25;
  margin: -10%;
  border: 3px solid blue;
`;
