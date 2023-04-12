import styled from "styled-components";
import { devices } from "../../../styles/breakPoints";

export const PetOwnerContainer = styled.div`
  &&& {
    width: 100%;
    @media ${devices.laptop} {
      width: 60%;
    }
  }
`;
