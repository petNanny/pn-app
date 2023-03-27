import styled from "styled-components";
import {
  Box,
  Button,
  FormLabel,
  PopoverBody,
  Checkbox,
  PopoverFooter,
  Text,
} from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

export const DateInputContainer = styled(Box)`
  &&& {
    margin-bottom: 1rem;
    @media ${devices.laptop} {
      margin-right: 1rem;
    }
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  &&& {
    color: rgb(147, 147, 147);
    line-height: 1.9rem;
    display: block;
    @media ${devices.laptop} {
      display: none;
    }
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

export const TriggerBtn = styled(Button)`
  &&& {
    padding: 1rem;
    background-color: transparent;
    min-width: 100%;
    height: 50px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    color: rgb(116, 116, 116);
    font-weight: normal;
    justify-content: flex-start;
    &[aria-expanded="true"] {
      border-color: rgb(0, 195, 138);
    }
    @media ${devices.laptop} {
      min-width: 12rem;
    }
  }
`;

export const StyledDayPicker = `
  .rdp-day_selected, .rdp-day_selected:hover {
    background-color: rgb(0, 195, 138);
  }
  .rdp-day_range_start {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;

export const StyledPopoverBody = styled(PopoverBody)`
  &&& {
    padding: 0;
  }
  /* .rdp-day_range_start {
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rdp-day_range_end {
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  } */
`;

export const DatesSelectModeBox = styled(Box)`
  &&& {
    margin: 0 1rem;
    padding: 1rem;
    background-color: rgb(249, 249, 249);
  }
`;

export const DatesSelectModeBtn = styled(Checkbox)`
  &&& {
    &:hover {
      .chakra-checkbox__control {
        border-color: rgb(0, 195, 138);
      }
    }
    .chakra-checkbox__control {
      width: 1.5rem;
      height: 1.5rem;
      background-color: white;
      border: 1px solid rgb(206, 206, 206);
      border-radius: 8px;
      box-shadow: unset;
    }
    .chakra-checkbox__control[data-checked] {
      border-color: rgb(0, 195, 138);
      color: rgb(0, 195, 138);
    }
  }
`;

export const StyledPopoverFooter = styled(PopoverFooter)`
  &&& {
    border-top: none;
    padding: 1rem;
  }
`;

export const StyledDaysLeftText = styled(Text)`
  &&& {
    padding-top: 1rem;
  }
`;
