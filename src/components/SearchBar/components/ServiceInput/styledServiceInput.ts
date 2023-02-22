import styled from "styled-components";
import {
  Box,
  Icon,
  MenuButton,
  MenuList,
  MenuItemOption,
  Text,
  Img,
  Divider,
  FormLabel,
} from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const ServiceInputContainer = styled(Box)`
  &&& {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1.9rem;
  }
`;

export const SetServiceTextBox = styled(Box)`
  &&& {
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

export const StyledImage = styled(Img)`
  &&& {
    height: 1.5rem;
    width: 1.5rem;
    opacity: 0.63;
    margin: 0 1rem 0 0.5rem;
  }
`;

export const StyledSetServiceText = styled(Text)`
  &&& {
    line-height: 50px;
    margin-right: 5px;
  }
`;

export const StyledMenuButton = styled(MenuButton)`
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

export const BoxInMenuButton = styled(Box)`
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
    padding: 0;
    width: 100%;
    border-color: rgb(206, 206, 206);
    @media ${devices.tablet} {
      width: 400px;
    }
  }
`;

export const TitleBox = styled(Box)`
  &&& {
    padding: 1rem;
    color: rgb(147, 147, 147);
  }
`;

export const StyledMenuDivider = styled(Divider)`
  &&& {
    margin: 0;
    border-color: rgb(206, 206, 206);
  }
`;

export const StyledMenuItemOption = styled(MenuItemOption)`
  &&& {
    flex-direction: row-reverse;
    padding: 1rem;
  }
`;

export const BoxInMenuItemOption = styled(Box)`
  &&& {
    display: flex;
  }
`;

export const MenuItemOptionImageBox = styled(Box)`
  &&& {
    height: 24px;
    width: 24px;
    margin: 0 16px 0 8px;
    padding-top: 5px;
    opacity: 0.63;
  }
`;

export const MenuItemOptionTitle = styled(Text)`
  &&& {
    font-size: 1rem;
    color: rgb(116, 116, 116);
  }
`;

export const MenuItemOptionInfo = styled(Text)`
  &&& {
    font-size: 0.9rem;
    color: rgb(147, 147, 147);
  }
`;
