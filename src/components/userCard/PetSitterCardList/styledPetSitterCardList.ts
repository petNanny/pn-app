import styled from "styled-components";
import { devices } from "../../../styles/breakPoints";

export const UserCardContainer = styled.div`
  &&& {
    width: 100%;
    @media ${devices.laptop} {
      width: 60%;
      height: 800px;
      overflow: scroll;
    }
  }
`;
