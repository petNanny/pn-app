import styled from "styled-components";
import { Box, Button, Text, Heading, Checkbox } from "@chakra-ui/react";

export const SetAvailabilityContainer = styled(Box)`
  &&& {
    margin-right: 2rem;
    min-width: 320px;
    flex: 1 1 0%;
  }
`;

export const SetHeading = styled(Heading)`
  &&& {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
    color: rgb(79, 79, 79);
  }
`;

export const TextWrapper = styled(Box)`
  &&& {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const NormalText = styled(Text)`
  &&& {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: rgb(116, 116, 116);
    line-height: 18px;
  }
`;

export const ConfirmTextBtn = styled(Button)`
  &&& {
    background-color: transparent;
    color: rgb(0, 175, 237);
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-weight: 400;
  }
`;

export const AwayModeContainer = styled(Box)`
  &&& {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: rgb(249, 249, 249);
    border: 1px solid rgb(206, 206, 206);
    border-radius: 5px;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    margin: 0 0 1rem 0;
    &:hover {
      .chakra-checkbox__control {
        border-color: rgb(0, 195, 138);
      }
    }
    .chakra-checkbox__control {
      width: 1.5rem;
      height: 1.5rem;
      background-color: white;
      border: 1px solid rgb(206, 206, 206);
      border-radius: 8px;
      box-shadow: unset;
    }
    .chakra-checkbox__control[data-checked] {
      border-color: rgb(0, 195, 138);
      color: rgb(0, 195, 138);
    }
  }
`;

export const CheckItemText = styled(Text)`
  &&& {
    line-height: 30px;
    padding-left: 0.2rem;
    color: rgb(116, 116, 116);
    font-size: 1rem;
  }
`;
