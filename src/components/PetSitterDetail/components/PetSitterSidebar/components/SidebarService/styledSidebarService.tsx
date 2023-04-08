import styled from "styled-components";
import { Box, Link } from "@chakra-ui/react";
import { devices } from "../../../../../../styles/breakPoints";

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
