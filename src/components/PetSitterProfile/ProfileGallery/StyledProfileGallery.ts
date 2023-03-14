import styled from "styled-components";
import {
  Box,
  Button,
  Heading,
  Flex,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export const StyledText = styled(Text)`
  &&& {
    padding: 0;
    color: rgb(116, 116, 116);
    margin: 1rem 0;
  }
`;

export const StyledFormControl = styled(FormControl)`
  &&& {
    margin-top: 0;
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    cursor: pointer;
    border: 1px solid rgb(0, 195, 138);
    border-radius: 4px;
    background-color: rgb(0, 195, 138);
    width: 100%;
    color: white;
    padding: 10px;
    touch-action: manipulation;
    text-align: center;
    margin: 0;
    line-height: 30px;
  }
`;
