import styled from "styled-components";
import { Box, Button, FormLabel } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1.9rem;
  }
`;

export const ButtonsBox = styled(Box)`
  &&& {
    display: flex;
    justify-content: space-between;
    padding: 0 1px;
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

export const DatePickerContainer = styled(Box)`
  &&& {
    margin-right: 1rem;
    margin-bottom: 1rem;
    min-width: 12rem;
    height: 50px;
    /* border: 1px solid rgb(206, 206, 206);
    border-radius: 4px; */
    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    .react-datepicker__input-container input {
      height: 100%;
      background-color: transparent;
      width: 100%;
    }
    .react-datepicker-wrapper .react-datepicker__input-container input {
      color: rgb(116, 116, 116);
      border: 1px solid rgb(206, 206, 206);
      border-radius: 4px;
      cursor: pointer;
      padding-left: 10px;
      text-align: justify;
      caret-color: transparent;
      &::-webkit-input-placeholder {
        color: rgb(116, 116, 116);
      }
      @media ${devices.laptop} {
        padding-left: 1rem;
      }
    }
    .react-datepicker-wrapper .react-datepicker__input-container input:focus {
      outline: none;
      border: 1px solid rgb(0, 195, 138);
    }
    .react-datepicker__navigation-icon {
      top: 5px;
    }
    .react-datepicker__header {
      background-color: white;
      border: none;
    }
    .react-datepicker__current-month {
      color: rgb(116, 116, 116);
    }
    .react-datepicker__day-name {
      color: rgb(139, 152, 152);
    }
    .react-datepicker__day {
      margin: 0;
      width: 2rem;
      line-height: 2rem;
    }
    .react-datepicker__day--in-range {
      border-radius: 0;
      color: rgb(0, 195, 138);
      background-color: rgb(240, 248, 255);
    }
    .react-datepicker__day--range-start {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
    .react-datepicker__day--range-end {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
    .react-datepicker__day--range-start,
    .react-datepicker__day--range-end {
      color: rgb(240, 248, 255);
      background-color: rgb(0, 195, 138);
    }
    .react-datepicker__day--in-selecting-range {
      background-color: rgb(0, 195, 138);
    }
  }
`;
