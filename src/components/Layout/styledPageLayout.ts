import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { devices } from "../../styles/breakPoints";

export const Layout = styled(Flex)`
   {
    flex-direction: column;
    overflow: scroll;
    @media ${devices.laptop} {
      flex-direction: row;
    }
  }
`;
