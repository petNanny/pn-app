import styled from "styled-components";
import { FormLabel } from "@chakra-ui/react";

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    cursor: pointer;
    border: 1px solid rgb(0, 195, 138);
    border-radius: 4px;
    background-color: rgb(0, 195, 138);
    color: white;
    padding: 10px;
    touch-action: manipulation;
    text-align: center;
    margin: 0;
    line-height: 30px;
    height: 52px;
    font-weight: normal;
  }
`;
