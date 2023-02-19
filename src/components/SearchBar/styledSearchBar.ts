import styled from "styled-components";
import { Box, Heading, HStack } from "@chakra-ui/react";

export const SearchBox = styled(Box)`
  &&& {
    border-bottom: 1px solid rgb(206, 206, 206);
    position: fixed;
    background-color: #fff;
    top: 66px;
    width: 100%;
    padding: 1rem;
    z-index: 8;
  }
`;

export const Heading1 = styled(Heading)`
  &&& {
    color: rgb(79, 79, 79);
    font-weight: normal;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 40px;
  }
`;

export const Heading2 = styled(Heading)`
  &&& {
    color: rgb(116, 116, 116);
    font-weight: normal;
    display: inline;
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: 40px;
  }
`;

export const InputsContainer = styled(HStack)`
  &&& {
    margin-bottom: 1rem;
  }
`;
