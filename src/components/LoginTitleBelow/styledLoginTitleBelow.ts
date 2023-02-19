import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const StyledLoginBelowTitle = styled(Text)`
  font-size: 1.25rem;
  color: #4f4f4f;

  @media ${devices.mobile} {
    font-size: 1.75rem;
  }
`;

export const StyledLoginBelowSecondaryTitle = styled(Text)`
  color: #00afed;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  @media ${devices.mobile} {
    font-size: 1.25rem;
  }
`;
