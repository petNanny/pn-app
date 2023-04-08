import styled from "styled-components";
import { Box, Text, Heading, Icon } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const PetPageContainer = styled(Box)`
  &&& {
    min-height: 60vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
`;

export const PetDetailContainer = styled(Box)`
  &&& {
    max-width: 480px;
    margin: 1rem auto 0;
  }
`;

export const PetShortInfo = styled(Box)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid rgb(206, 206, 206);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
`;

export const PetNameHeading = styled(Heading)`
  &&& {
    font-weight: 400;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: rgb(79, 79, 79);
    @media ${devices.tablet} {
      font-size: 2.5rem;
    }
  }
`;

export const PetShortInfoText = styled(Text)`
  &&& {
    color: rgb(116, 116, 116);
  }
`;

export const PetDetailInfo = styled(Box)`
  &&& {
    border-bottom: 1px solid rgb(206, 206, 206);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
`;

export const PetDetailInfoTitle = styled(Heading)`
  &&& {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: rgb(79, 79, 79);
    @media ${devices.tablet} {
      font-size: 2rem;
    }
  }
`;

export const PetBasicInfo = styled(Box)`
  &&& {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
`;

export const PetBasicInfoText = styled(Text)`
  &&& {
    margin-bottom: 1rem;
    color: rgb(116, 116, 116);
    display: flex;
  }
`;

export const PetCharacteristicsTitle = styled(Heading)`
  &&& {
    line-height: 1.2rem;
    font-weight: 400;
    font-size: 1.2rem;
    color: rgb(79, 79, 79);
    margin-bottom: 2rem;
    @media ${devices.tablet} {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
`;

export const PetCharacteristicBox = styled(Box)`
  &&& {
    min-width: 12.5rem;
    display: flex;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const PetCharacteristicText = styled(Text)`
  &&& {
    margin-left: 1rem;
    color: rgb(147, 147, 147);
  }
`;

export const PetCharacteristicIcon = styled(Icon)`
  &&& {
    color: rgb(0, 191, 142);
  }
`;

export const PetOwnerDetailBox = styled(Box)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const PetOwnerDetailBoxTitle = styled(Heading)`
  &&& {
    font-weight: 400;
    font-size: 1.5rem;
    color: rgb(79, 79, 79);
    margin-bottom: 1rem;
    line-height: 28px;
    @media ${devices.tablet} {
      font-size: 2rem;
      line-height: 40px;
    }
  }
`;
