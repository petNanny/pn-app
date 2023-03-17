import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const ErrorPageContent = styled(Flex)`
  &&& {
    justify-content: center;
    align-items: center;
    @media ${devices.tablet} {
    }
  }
`;
