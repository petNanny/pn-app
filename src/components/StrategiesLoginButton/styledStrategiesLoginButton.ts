import styled from "styled-components";
import { Button, Box } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const StyledStrategiesButton = styled(Button)`
  width: 300px;
  font-size: 1rem;
  height: 50px;
  .chakra-button__icon {
    font-size: 30px;
  }
  @media ${devices.mobile} {
    width: 480px;
    .chakra-text {
      font-size: 1.25rem;
    }
  }
`;

export const StyledStrategiesTextBox = styled(Box)`
  flex: 1;
`;
