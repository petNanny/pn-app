import styled from "styled-components";
import { Flex, Text } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const ErrorPageContent = styled(Flex)`
  &&& {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    @media ${devices.tablet} {
      flex-direction: row;
      margin-bottom: 0rem;
    }
  }
`;

export const BackLinkContent = styled(Text)`
  &&& {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    @media ${devices.tablet} {
      flex-direction: row;
      margin-bottom: 0rem;
    }
  }
`;
