import { Card } from "@chakra-ui/react";
import styled from "styled-components";
import { devices } from "../../styles/breakPoints";

export const GoogleMapContainer = styled(Card)`
  margin: 0px;
  @media ${devices.laptop} {
    width: 100%;
  }
`;
