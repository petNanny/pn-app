import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";
import theme from "../../styles/theme";
export const StyledLoginBox = styled(Box)`
  &&& {
    width: 300px;
    .chakra-text {
      font-size: 1rem;
      color: ${theme.colors.fontcolor.tertiary};
      &:hover {
        text-decoration: underline;
      }
    }
    .chakra-input {
      height: 50px;
    }
    .chakra-input__right-element {
      margin-top: 0.25rem;
      font-size: 1.75rem;
      color: ${theme.colors.fontcolor.secondary};
      cursor: pointer;
    }
    @media ${devices.mobile} {
      width: 480px;
      .chakra-text {
        font-size: 1.25rem;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    height: 50px;
    width: 300px;
    background-color: ${theme.colors.background.secondary};
    color: ${theme.colors.fontcolor.primary};
    margin: 1rem 0;
    @media ${devices.mobile} {
      width: 480px;
    }
  }
`;
