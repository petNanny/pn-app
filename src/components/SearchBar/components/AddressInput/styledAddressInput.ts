import styled from "styled-components";
import { Box, Icon, Input, InputGroup, InputLeftElement, FormLabel } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const AddressInputContainer = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    @media ${devices.laptop} {
      margin-right: 1rem;
    }
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1.9rem;
  }
`;

export const StyledInputGroup = styled(InputGroup)`
  &&& {
    width: 100%;
    @media ${devices.laptop} {
      min-width: 30rem;
    }
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
