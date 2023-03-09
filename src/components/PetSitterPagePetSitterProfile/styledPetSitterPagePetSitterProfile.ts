import styled from "styled-components";
import { Button, Box, Image, Heading } from "@chakra-ui/react";

export const PetSitterPageContainer = styled(Box)`
  &&& {
    min-height: 100vh;
    padding: 1rem 1rem 0;
    display: flex;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export const ProfileContentContainer = styled(Box)`
  &&& {
    width: 65%;
  }
`;

export const PetSitterGalleryContainer = styled(Box)`
  &&& {
    position: relative;
    margin-bottom: 1rem;
  }
`;

export const PetSitterGalleryImageContainer = styled(Box)`
  &&& {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
`;

export const CoverImage = styled(Image)`
  &&& {
    height: 26rem;
    max-width: 100%;
    margin: auto;
  }
`;

export const BackImage = styled(Image)`
  &&& {
    height: 26rem;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
    filter: blur(50px);
  }
`;

export const MoreImagesBtn = styled(Button)`
  &&& {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 20%;
    border-radius: 4px;
    touch-action: manipulation;
    cursor: pointer;
    background-color: white;
    border: 1px solid rgb(206, 206, 206);
    color: rgb(79, 79, 79);
    font-weight: normal;
  }
`;

export const ImageTitle = styled(Heading)`
  &&& {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: rgb(255, 255, 255);
    margin: 0;
    line-height: 2rem;
    font-size: 2rem;
  }
`;
