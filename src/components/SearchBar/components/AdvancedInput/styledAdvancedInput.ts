import {
  Box,
  Checkbox,
  Icon,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import styled from "styled-components";
import { devices } from "../../../../styles/breakPoints";

export const AdvancedInputContainer = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    @media ${devices.laptop} {
      margin-right: 1rem;
    }
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1.9rem;
    @media ${devices.laptop} {
      display: none;
    }
  }
`;

export const AdvancedCheckItemText = styled(Text)`
  &&& {
    line-height: 30px;
    padding-left: 0.2rem;
    color: rgb(116, 116, 116);
    font-size: 1rem;
  }
`;

export const MenuBtn = styled(MenuButton)`
  &&& {
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    height: 50px;
    width: 100%;
    padding: 10px;
    &[aria-expanded="true"] {
      border-color: rgb(0, 195, 138);
    }
    @media ${devices.laptop} {
      min-width: 12rem;
    }
  }
`;

export const MenuBtnInBox = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(116, 116, 116);
  }
`;

export const MenuBtnIcon = styled(Icon)`
  &&& {
    font-size: 1.5rem;
    color: rgb(116, 116, 116);
  }
`;

export const StyledMenuList = styled(MenuList)`
  &&& {
    padding: 1rem;
    width: 100%;
    border-color: rgb(206, 206, 206);
    @media ${devices.laptop} {
      width: 400px;
    }
  }
`;

export const MenuTitle = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    margin-bottom: 0.5rem;
    line-height: 30px;
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

export const ButtonsBox = styled(Box)`
  &&& {
    display: flex;
    justify-content: space-between;
  }
`;

export const ClearBtn = styled(Button)`
  &&& {
    padding: 0;
    font-size: 1rem;
    height: 2rem;
    color: rgb(116, 116, 116);
    background-color: transparent;
    font-weight: 300;
    &:hover {
      background: none;
      text-decoration: underline rgb(116, 116, 116);
    }
  }
`;

export const ApplyBtn = styled(MenuItem)`
  &&& {
    padding: 0;
    font-size: 1rem;
    height: 2rem;
    color: rgb(0, 195, 138);
    background-color: transparent;
    margin-right: auto;
    font-weight: 300;
    &:hover {
      background: none;
      text-decoration: underline rgb(0, 195, 138);
    }
  }
`;
