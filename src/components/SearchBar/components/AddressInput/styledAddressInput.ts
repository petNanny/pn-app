import styled from "styled-components";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const StyledInputGroup = styled(InputGroup)`
  &&& {
    min-width: 30rem;
  }
`;

export const StyledInputLeftElement = styled(InputLeftElement)`
  &&& {
    height: 50px;
  }
`;

export const StyledIcon = styled(Icon)`
  &&& {
    font-size: 30px;
    font-weight: 200;
    color: rgb(116, 116, 116);
    margin-left: 5px;
  }
`;

export const StyledInput = styled(Input)`
  &&& {
    &::placeholder {
      color: rgb(116, 116, 116);
    }
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    height: 50px;
    width: 100%;
    padding: 10px 10px 10px 48px;
    &:focus-visible {
      box-shadow: none;
      border: 1px solid rgb(0, 195, 138);
    }
    color: rgb(116, 116, 116);
  }
`;
