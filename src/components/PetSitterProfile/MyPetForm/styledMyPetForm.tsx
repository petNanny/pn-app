import styled from "styled-components";
import { Button, Divider } from "@chakra-ui/react";

export const AddButton = styled(Button)`
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
    margin: 0 0 1rem 0;
    height: 52px;
  }
`;

export const DividedLine = styled(Divider)`
  &&& {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
