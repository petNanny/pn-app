import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";

export const ButtonsBox = styled(Box)`
  &&& {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const ClearBtn = styled(Button)`
  &&& {
    padding: 0;
    font-size: 1rem;
    height: 2rem;
    color: rgb(116, 116, 116);
    background-color: transparent;
    font-weight: 300;
    &:hover {
      background: none;
      text-decoration: underline rgb(116, 116, 116);
    }
  }
`;

export const ApplyBtn = styled(Button)`
  &&& {
    padding: 0;
    font-size: 1rem;
    height: 2rem;
    color: rgb(0, 195, 138);
    background-color: transparent;
    font-weight: 300;
    &:hover {
      background: none;
      text-decoration: underline rgb(0, 195, 138);
    }
  }
`;

export const DatePickBtn = styled(Box)`
  &&& {
    min-width: 12rem;
    height: 50px;
    cursor: pointer;
    .rmdp-week-day {
      color: rgb(139, 152, 152);
    }
    .custom-input {
      border-radius: 4px;
      border: 1px solid rgb(206, 206, 206);
      padding: 10px;
      height: 50px;
      text-align: center;
      color: rgb(116, 116, 116);
      cursor: pointer;
      caret-color: transparent;
    }
    .custom-input::-webkit-input-placeholder {
      color: rgb(116, 116, 116);
    }
    .custom-input:focus {
      outline: none;
      border: 1px solid rgb(0, 195, 138);
    }
    .custom-calendar .rmdp-day {
      color: rgb(116, 116, 116);
    }
    .custom-calendar .rmdp-disabled {
      color: rgb(220, 224, 224);
      background-color: white;
    }
    .custom-calendar .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
      background-color: rgb(240, 248, 255);
      color: rgb(116, 116, 116);
    }
    .custom-calendar .rmdp-range {
      background-color: rgb(0, 195, 138);
      color: rgb(240, 248, 255);
    }
    .custom-calendar .rmdp-range.rmdp-today span {
      background-color: rgb(0, 195, 138);
      color: rgb(240, 248, 255);
    }
    .custom-calendar .rmdp-range.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
      background-color: rgb(0, 195, 138);
      color: rgb(240, 248, 255);
    }
    .custom-calendar .rmdp-today span {
      background-color: white;
      color: rgb(116, 116, 116);
      font-weight: bold;
    }
  }
`;
