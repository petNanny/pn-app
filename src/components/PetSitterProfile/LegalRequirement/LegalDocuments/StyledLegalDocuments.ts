import { ListItem, UnorderedList } from "@chakra-ui/react";
import styled from "styled-components";
import theme from "../../../../styles/theme";

export const StyledUnorderdList = styled(UnorderedList)`
  color: ${theme.colors.fontcolor.secondary};
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
