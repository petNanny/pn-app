import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const StyledLoginTitle = styled(Text)`
  font-size: 1.25rem;
  color: #4f4f4f;

  @media ${devices.mobile} {
    font-size: 1.75rem;
  }
`;

export const StyledLoginSecondaryTitle = styled(Text)`
  color: #4f4f4f;
  font-size: 1rem;

  @media ${devices.mobile} {
    font-size: 1.25rem;
  }
`;
