import styled from "styled-components";
import { UnorderedList, FormControl, FormLabel, Input } from "@chakra-ui/react";
import theme from "../../../styles/theme";

export const StyledUnorderdList = styled(UnorderedList)`
  color: ${theme.colors.fontcolor.secondary};
`;

export const StyledFormControl = styled(FormControl)`
  margin-top: 1rem;
`;

export const StyledFormLabel = styled(FormLabel)`
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  background-color: #00c38a;
  color: #fff;
`;

export const StyledInput = styled(Input)`
  display: none;
`;
