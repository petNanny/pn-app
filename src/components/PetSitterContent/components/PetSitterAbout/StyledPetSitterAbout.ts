import styled from "styled-components";
import { devices } from "../../../../styles/breakPoints";
import theme from "../../../../styles/theme";

export const StyledPetSitterAboutTitle = styled.h2`
  color: ${theme.colors.fontcolor.secondary};
  font-size: 1.5rem;
  @media ${devices.tablet} {
    font-size: 2rem;
  }
`;

export const StyledPetSitterAboutContent = styled.div`
  color: ${theme.colors.fontcolor.gray};
  font-size: 1rem;
  p {
    margin: 16px 0;
  }
`;
