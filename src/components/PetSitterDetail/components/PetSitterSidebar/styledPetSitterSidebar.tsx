import styled from "styled-components";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const ProfileSidebar = styled(Box)`
  &&& {
    display: none;
    @media ${devices.laptop} {
      display: block;
      width: 35%;
      padding-left: 3rem;
      height: 100%;
      position: sticky;
      top: 1rem;
    }
  }
`;

export const SidebarInfoContainer = styled(Box)`
  &&& {
    padding: 1rem;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
  }
`;

export const SidebarPetSitterInfoContainer = styled(Box)`
  &&& {
    display: flex;
    border-bottom: 1px solid rgb(206, 206, 206);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SidebarLikeBtn = styled(Button)`
  &&& {
    display: flex;
    padding: 0;
    background: transparent;
    margin-left: auto;
    color: rgb(235, 87, 87);
  }
`;

export const SidebarPetSitterName = styled(Text)`
  &&& {
    font-size: 1.5rem;
    color: rgb(79, 79, 79);
    margin-bottom: 0.5rem;
    line-height: 28px;
  }
`;

export const SidebarPetSitterIntro = styled(Heading)`
  &&& {
    font-size: 1rem;
    margin: 0.5rem 1rem 0.5rem 0;
    line-height: 18px;
    color: rgb(79, 79, 79);
    font-weight: 400;
  }
`;

export const SidebarPetSitterSuburb = styled(Text)`
  &&& {
    font-size: 1rem;
    margin: 0;
    color: rgb(116, 116, 116);
    line-height: 18px;
  }
`;

export const SidebarServicesContainer = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgb(206, 206, 206);
  }
`;

export const SidebarServicesContent = styled(Box)`
  &&& {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ServiceIconBox = styled(Box)`
  &&& {
    opacity: 0.63;
    margin-right: 1rem;
    margin-left: 0.5rem;
    line-height: 40px;
    @media ${devices.tablet} {
      line-height: 1.5rem;
      margin-top: 0.2rem;
    }
  }
`;

export const ServiceDescContainer = styled(Box)`
  &&& {
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 100%;
  }
`;

export const ServiceDescContentBox = styled(Box)`
  &&& {
    color: rbg(147, 147, 147);
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ServicePriceBox = styled(Box)`
  &&& {
    min-width: 3rem;
    text-align: center;
    color: rgb(116, 116, 116);
  }
`;

export const AllServicesLink = styled(Link)`
  &&& {
    line-height: 30px;
    color: rgb(0, 175, 237);
    text-decoration: none;
  }
`;

export const ContactBtn = styled(Button)`
  &&& {
    text-align: center;
    border: 1px solid rgb(0, 195, 138);
    border-radius: 4px;
    background-color: rgb(0, 195, 138);
    touch-action: manipulation;
    width: 100%;
    color: white;
    cursor: pointer;
    padding: 10px;
    font-weight: 400;
  }
`;

export const SidebarPolicyContainer = styled(Box)`
  &&& {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgb(206, 206, 206);
  }
`;

export const SidebarPolicyTitle = styled(Heading)`
  &&& {
    margin-bottom: 1rem;
    line-height: 40px;
    font-size: 1.17rem;
    color: rgb(116, 116, 116);
    font-weight: normal;
  }
`;

export const SidebarPolicyInfo = styled(Box)`
  &&& {
    color: rgb(172, 172, 172);
    font-size: 0.9rem;
  }
`;

export const SidebarPolicyInfoText = styled(Text)`
  &&& {
    color: rgb(172, 172, 172);
    font-size: 0.9rem;
    margin: 0.9rem 0;
    line-height: 1rem;
  }
`;
