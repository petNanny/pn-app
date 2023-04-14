import styled from "styled-components";
import { Box, Link, ListItem, Flex } from "@chakra-ui/react";

export const StyledFooterBox = styled(Box)`
  &&& {
    margin: 0;
    padding: 0;
    color: white;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 700;

    .chakra-heading {
      padding-left: 1rem;
      font-size: 1.6rem;
      font-weight: 550;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
    @media (max-width: 50rem) {
      .chakra-heading {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const StyledFooterFlex = styled(Flex)`
  &&& {
    padding: 1rem 0;
    flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    justify-content: ${(props) => (props.justify ? props.justify : "center")};
    align-items: ${(props) => (props.align ? props.align : "start")};

    @media (max-width: 50rem) {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`;

export const StyledListItem = styled(ListItem)`
  &&& {
    list-style: none;
    line-height: 1.8rem;
    cursor: pointer;
    font-weight: 550;
    @media (max-width: 50rem) {
      line-height: 2rem;
    }
  }
`;
export const StyledImageBox = styled(Box)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: auto;
    padding-left: 1rem;
    .chakra-image {
      max-width: 4rem;
      margin-right: 0.5rem;
    }

    @media (max-width: 50rem) {
      display: flex;
      flex-wrap: no-wrap;
      width: 100%;
      height: auto;
      .chakra-image {
        width: 27%;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const StyledListBox = styled(Box)`
  &&& {
    flex-basis: calc(25vw - 0.5rem);
    padding-right: 0.5rem;
    @media (max-width: 50rem) {
      flex-basis: 50%;
    }
  }
`;

export const StyledLink = styled(Link)`
  &&& {
    text-decoration: underline;
  }
`;

export const StyledFooterTopFlex = styled(StyledFooterFlex)`
  &&& {
    width: 80vw;
    @media (max-width: 50rem) {
      width: 85vw;
    }
  }
`;

export const StyledFooterBottomFlex = styled(StyledFooterFlex)`
  &&& {
    width: 78vw;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;

    @media (max-width: 50rem) {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 85vw;
    }
  }
`;

export const StyledSelectBox = styled(Box)`
  &&& {
    height: 3rem;
    color: rgb(116, 116, 116);
    background-color: white;
    font-weight: 700;
    width: 15rem;

    .chakra-select {
      height: 3rem;
      border-radius: 0;
      border-color: white;
    }
    @media (max-width: 50rem) {
      margin-top: 2rem;
      width: 85vw;
    }
  }
`;
