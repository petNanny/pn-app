import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";
export const StyledLoginBox = styled(Box)`
  &&& {
    width: 300px;
    .chakra-text {
      font-size: 1rem;
      color: #00afed;
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
      color: #4f4f4f;
    }
    @media (min-width: 576px) {
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
    background-color: #00c38a;
    color: #ffffff;
    margin: 1rem 0;
    @media (min-width: 576px) {
      width: 480px;
    }
  }
`;
