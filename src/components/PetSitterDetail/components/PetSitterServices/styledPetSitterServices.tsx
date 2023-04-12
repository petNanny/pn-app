import styled from "styled-components";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const ServiceTitle = styled(Heading)`
  &&& {
    margin-bottom: 1rem;
    color: rgb(92, 92, 92);
    line-height: 22px;
    font-size: 1.17rem;
    font-weight: normal;
    @media ${devices.tablet} {
      line-height: 40px;
    }
  }
`;

export const ServiceContainer = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
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

export const AdditionalServiceBox = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

export const AdditionalServiceIcon = styled(Icon)`
  &&& {
    color: rgb(0, 195, 138);
    font-size: 1.5rem;
  }
`;

export const AdditionalServiceText = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }
`;
