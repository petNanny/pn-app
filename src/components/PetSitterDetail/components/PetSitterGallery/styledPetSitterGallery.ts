import styled from "styled-components";
import { Button, Box, Image, Heading, CircularProgress } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

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

export const LoadingBox = styled(CircularProgress)`
  &&& {
    height: 14rem;
    max-width: 100%;
    margin: auto;
    @media ${devices.tablet} {
      height: 20rem;
    }
    @media ${devices.laptop} {
      height: 26rem;
    }
  }
`;

export const CoverImage = styled(Image)`
  &&& {
    height: 14rem;
    max-width: 100%;
    margin: auto;
    @media ${devices.tablet} {
      height: 20rem;
    }
    @media ${devices.laptop} {
      height: 26rem;
    }
  }
`;

export const BackImage = styled(Image)`
  &&& {
    height: 14rem;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
    filter: blur(50px);
    @media ${devices.tablet} {
      height: 20rem;
    }
    @media ${devices.laptop} {
      height: 26rem;
    }
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
    line-height: 2rem;
    flex-wrap: wrap;
    height: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    padding: 1px 6px;
  }
`;

export const NameBox = styled(Heading)`
  &&& {
    position: absolute;
    left: calc(8rem + 8px);
    bottom: 1rem;
    color: rgb(255, 255, 255);
    margin: 0;
    line-height: 2rem;
    font-size: 2rem;
    @media ${devices.tablet} {
      left: calc(10rem + 8px);
    }
    @media ${devices.laptop} {
      left: 1rem;
    }
  }
`;
