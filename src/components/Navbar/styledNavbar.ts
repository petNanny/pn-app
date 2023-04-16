import styled from "styled-components";
import { devices } from "../../styles/breakPoints";
import { Text, Button, Flex, Box, HStack, Avatar } from "@chakra-ui/react";
import theme from "../../styles/theme";

export const NavbarStyle = styled(Flex)`
  &&& {
    background: ${theme.colors.background.primary};
    height: 5rem;
    padding: 0 1rem;
    align-items: center;

    .navBar__heading {
      color: ${theme.colors.fontcolor.primary};
    }
  }
`;

export const NavbarLogoButton = styled(Button)`
  &&& {
    height: 100%;
    background: ${theme.colors.background.primary};
    .navLogoButton__heading__style {
      font-size: 32px;
      color: ${theme.colors.fontcolor.primary};
    }
  }
`;

export const NavLinkText = styled(Text)`
  &&& {
    color: ${theme.colors.fontcolor.primary};
    margin-right: 10px;
  }
`;

export const NavbarSearchSittersButton = styled(Button)`
  &&& {
    margin-right: 1.5rem;

    .navSearchSittersButton__text__color {
      color: ${theme.colors.background.primary};
    }
  }
`;

export const SidebarLinkText = styled(Text)`
  &&& {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    background: ${({ statusColor }) =>
      statusColor ? `${theme.colors.background.grey}` : `${theme.colors.fontcolor.primary}`};
    color: ${({ statusColor }) =>
      statusColor ? `${theme.colors.fontcolor.primary}` : `${theme.colors.fontcolor.black}`};
    &:hover {
      background-color: ${({ statusColor }) =>
        statusColor ? "grey" : `${theme.colors.background.lightgrey}`};
    }
  }
`;

export const SidebarProfileLinkText = styled(Text)`
  &&& {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgb(242, 242, 242);
  }
`;

export const SidebarLogo = styled(Box)`
  &&& {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background.lightgrey};
    .SidebarLogo__heading__style {
      font-size: 50px;
      color: ${theme.colors.fontcolor.primary};
    }
  }
`;

export const SidebarLine = styled(Box)`
  &&& {
    height: 1px;
    background: ${theme.colors.background.lightgrey};
  }
`;

export const SidebarFunction = styled(HStack)`
  &&& {
    display: inherit;
    @media ${devices.tablet} {
      display: none;
    }
  }
`;

export const NavbarFunction = styled(HStack)`
  &&& {
    display: none;
    @media ${devices.tablet} {
      display: inherit;
    }
  }
`;

export const ProfileImage = styled(Avatar)``;
