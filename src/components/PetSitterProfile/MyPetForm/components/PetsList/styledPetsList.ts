import styled from "styled-components";
import { Button, Divider, Box, Card, Avatar, Heading, Text } from "@chakra-ui/react";

export const PetCard = styled(Box)`
  &&& {
    padding: 1rem 0;
    border-top: 1px solid rgb(206, 206, 206);
    display: flex;
  }
`;

export const NameBox = styled(Heading)`
  &&& {
    line-height: 40px;
    margin: 0;
    font-size: 1.17rem;
    color: rgb(116, 116, 116);
  }
`;

export const InfoBox = styled(Text)`
  &&& {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 18px;
    color: rgb(116, 116, 116);
  }
`;

export const RemoveBtn = styled(Button)`
  &&& {
    margin-right: 1rem;
    border: 1px solid rgb(235, 76, 82);
    border-radius: 4px;
    background-color: rgb(235, 76, 82);
    touch-action: manipulation;
    width: 100%;
    color: white;
    cursor: pointer;
    padding: 10px;
    height: 52px;
    font-weight: normal;
  }
`;

export const EditBtn = styled(Button)`
  &&& {
    margin-right: 1rem;
    border: 1px solid rgb(0, 175, 237);
    border-radius: 4px;
    background-color: white;
    touch-action: manipulation;
    width: 100%;
    color: rgb(0, 175, 237);
    cursor: pointer;
    padding: 10px;
    height: 52px;
    font-weight: normal;
  }
`;

export const CancelBtn = styled(Button)`
  &&& {
    margin: 0 1rem 1rem 0;
    border-radius: 4px;
    touch-action: manipulation;
    width: 100%;
    background-color: white;
    border: 1px solid rgb(0, 175, 237);
    font-size: 1rem;
    line-height: 30px;
    color: rgb(0, 175, 237);
    padding: 10px;
    height: 52px;
  }
`;

export const ConfirmBtn = styled(Button)`
  &&& {
    margin: 0 0 1rem 0;
    border-radius: 4px;
    touch-action: manipulation;
    width: 100%;
    background-color: rgb(0, 195, 138);
    border: 1px solid rgb(0, 195, 138);
    font-size: 1rem;
    line-height: 30px;
    color: white;
    padding: 10px;
    height: 52px;
  }
`;
