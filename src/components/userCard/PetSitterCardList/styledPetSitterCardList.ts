import styled from "styled-components";
import { devices } from "../../../styles/breakPoints";
import { Box, Button } from "@chakra-ui/react";

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

export const PaginationContainer = styled(Box)`
  &&& {
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const PaginationBtn = styled(Button)`
  &&& {
    cursor: pointer;
    touch-action: manipulation;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background: transparent;
    padding: 0;
  }
`;
