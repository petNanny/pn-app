import styled from "styled-components";
import { devices } from "../../styles/breakPoints";

export const StyledPetSitterContactContainer = styled.div`
  display: none;
  flex: 1;

  @media ${devices.laptop} {
    display: block;
  }
`;
