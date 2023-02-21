import styled from "styled-components";
import { Box, Icon, MenuButton, MenuList, Text, Button, MenuItem } from "@chakra-ui/react";

export const PetTypeText = styled(Box)`
  &&& {
    color: rgb(92, 92, 92);
    margin-bottom: 0.5rem;
    line-height: 30px;
  }
`;

export const PetSizeText = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    font-size: 0.9rem;
  }
`;

export const PetSelectItem = styled(Box)`
  &&& {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PetTypeContainer = styled(Box)`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

export const PetSelectItemNum = styled(Text)`
  &&& {
    line-height: 40px;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    color: rgb(116, 116, 116);
    text-align: center;
  }
`;

export const ClearBtn = styled(Button)`
  &&& {
    padding: 0;
    font-size: 1rem;
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

export const IncreaseBtn = styled(Button)`
  &&& {
    border: 1px solid rgb(0, 195, 138);
    color: rgb(0, 195, 138);
    background: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0;
    &:hover {
      background: rgb(255, 255, 255);
    }
  }
`;

export const DecreaseBtn = styled(Button)`
  &&& {
    border: 1px solid;
    color: ${(props) => (props.color > 0 ? "rgb(0, 195, 138)" : "rgb(206, 206, 206)")};
    background: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0;
    &:hover {
      background: rgb(255, 255, 255);
    }
  }
`;

export const StyledMenuButton = styled(MenuButton)`
  &&& {
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    height: 50px;
    min-width: 7rem;
    padding: 10px;
    &[aria-expanded="true"] {
      border-color: rgb(0, 195, 138);
    }
  }
`;

export const BoxInMenuButton = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    padding: 0;
    width: 400px;
    border-color: rgb(206, 206, 206);
  }
`;

export const PetNumSetBox = styled(Box)`
  &&& {
    display: flex;
    flex-direction: row;
  }
`;
