import styled from "styled-components";
import { Box, Button, Heading } from "@chakra-ui/react";
import { devices } from "../../styles/breakPoints";

export const SearchBox = styled(Box)`
  &&& {
    border-bottom: 1px solid rgb(206, 206, 206);
    background-color: #fff;
    width: 100%;
    padding: 1rem;
    @media ${devices.laptop} {
      top: 66px;
      //position: fixed;
      //z-index: 8;
      margin-top: 0;
    }
  }
`;

export const HeadingContainer = styled(Box)`
  &&& {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    @media ${devices.laptop} {
      display: block;
      padding-bottom: 0;
    }
  }
`;

export const Heading1 = styled(Heading)`
  &&& {
    color: rgb(79, 79, 79);
    font-weight: normal;
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 29px;
    @media ${devices.tablet} {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 40px;
    }
  }
`;

export const Heading2 = styled(Heading)`
  &&& {
    color: rgb(116, 116, 116);
    font-weight: normal;
    display: inline;
    font-size: 1.2rem;
    line-height: 23px;
    @media ${devices.tablet} {
      font-size: 1.5rem;
      line-height: 40px;
    }
    @media ${devices.laptop} {
      margin-left: 1rem;
    }
  }
`;

export const InputsContainer = styled(Box)`
  &&& {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
    @media ${devices.laptop} {
      flex-direction: row;
    }
  }
`;

export const MobileButtonsContainer = styled(Box)`
  &&& {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledMobileBtn = styled(Button)`
  &&& {
    color: rgb(0, 175, 237);
    background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    height: 30px;
    font-weight: normal;
  }
`;

export const MobileSearchBtn = styled(Button)`
  &&& {
    border: 1px solid rgb(0, 195, 138);
    border-radius: 4px;
    background-color: rgb(0, 195, 138);
    touch-action: manipulation;
    width: 100%;
    color: white;
    padding: 10px;
    display: block;
    line-height: 30px;
    height: 52px;
    margin-bottom: 1rem;
    font-weight: normal;
  }
`;
