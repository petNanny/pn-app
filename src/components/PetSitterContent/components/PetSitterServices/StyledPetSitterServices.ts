import styled from "styled-components";
import { devices } from "../../../../styles/breakPoints";
import theme from "../../../../styles/theme";

export const StyledPetSitterServicesTitle = styled.h2`
  color: ${theme.colors.fontcolor.secondary};
  font-size: 1.5rem;
  @media ${devices.tablet} {
    font-size: 2rem;
  }
`;

export const StyledPetSitterServicesSubtitle = styled.h3`
  color: ${theme.colors.fontcolor.lightBlack};
  margin-bottom: 16px;
`;
