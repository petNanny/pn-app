import styled from "styled-components";
import { Button, Divider, Box, Radio, FormLabel, Checkbox, Text } from "@chakra-ui/react";

export const CheckOptionBox = styled(Box)`
  &&& {
    cursor: pointer;
    border-width: 1px;
    border-radius: 4px;
    &[data-checked] {
      background: transparent;
      border-color: #00c38a;
      color: #00c38a;
    }
  }
`;

export const GenderOptionBtn = styled(Button)`
  &&& {
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-weight: normal;
    width: 50%;
    margin: 0;
    border-radius: 4px;
    background: transparent;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    margin: 0;
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
