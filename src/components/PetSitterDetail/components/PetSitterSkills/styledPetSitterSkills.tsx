import styled from "styled-components";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const SkillsHeader = styled(Heading)`
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

export const SkillBox = styled(Box)`
  &&& {
    margin-bottom: 0.5rem;
    margin-right: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    @media ${devices.tablet} {
      margin-bottom: 1rem;
      width: 40%;
    }
  }
`;

export const SkillText = styled(Text)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1rem;
    display: flex;
    align-items: center;
  }
`;

export const StyledIcon = styled(Icon)`
  &&& {
    color: rgb(0, 195, 138);
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const SkillDescription = styled(Text)`
  &&& {
    color: rgb(116, 116, 116);
    line-height: 18px;
    font-size: 1rem;
  }
`;
