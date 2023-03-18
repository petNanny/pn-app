import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { devices } from "../../styles/breakPoints";

export const LaptopAndDesktop = styled(Box)`
  &&& {
    display: none;
    @media ${devices.laptop} {
      display: inherit;
    }
  }
`;

export const MobileAndTablet = styled(Box)`
  &&& {
    display: inherit;
    @media ${devices.laptop} {
      display: none;
    }
  }
`;
