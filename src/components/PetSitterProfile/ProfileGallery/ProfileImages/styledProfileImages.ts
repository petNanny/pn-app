import styled from "styled-components";
import { Box, Button, Image } from "@chakra-ui/react";

export const ImageCardsContainer = styled(Box)`
  &&& {
    margin-top: 2rem;
  }
`;

export const ImageCard = styled(Box)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    background-color: white;
  }
`;

export const MoveBox = styled(Box)`
  &&& {
    padding: 0.5rem;
    border-bottom: 1px solid rgb(206, 206, 206);
    border-radius: 4px 4px 0 0;
    background-color: rgb(249, 249, 249);
    width: 100%;
    cursor: grab;
  }
`;

export const ImageContentContainer = styled(Box)`
  &&& {
    padding: 1rem;
  }
`;

export const ImageBox = styled(Image)`
  &&& {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    object-fit: contain;
  }
`;

export const RemoveBtn = styled(Button)`
  &&& {
    width: 100%;
    margin: 1rem auto 0 auto;
  }
`;
