import styled from "styled-components";
import { Box } from "@chakra-ui/react";
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
