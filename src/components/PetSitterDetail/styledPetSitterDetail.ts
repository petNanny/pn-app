import styled from "styled-components";
import { Box, Heading } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const PetSitterPageContainer = styled(Box)`
  &&& {
    min-height: 100vh;
    padding: 1rem 1rem 0;
    display: flex;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export const ProfileContentContainer = styled(Box)`
  &&& {
    width: 100%;
    @media ${devices.laptop} {
      width: 65%;
    }
  }
`;

export const ProfileDetailSection = styled(Box)`
  &&& {
    margin-bottom: 2rem;
    @media ${devices.laptop} {
      margin-bottom: 4rem;
    }
  }
`;

export const ProfileDetailSectionHeading = styled(Heading)`
  &&& {
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 40px;
    color: rgb(79, 79, 79);
    @media ${devices.tablet} {
      font-size: 2rem;
    }
  }
`;
