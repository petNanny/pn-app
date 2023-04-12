import styled from "styled-components";
import { Box, Button, Text } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const LoadingBox = styled(Box)`
  &&& {
    height: 14rem;
    max-width: 100%;
    margin: auto;
    @media ${devices.tablet} {
      height: 20rem;
    }
    @media ${devices.laptop} {
      height: 26rem;
    }
  }
`;

export const PageContent = styled(Box)`
  &&& {
    min-height: 60vh;
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
  }
`;
