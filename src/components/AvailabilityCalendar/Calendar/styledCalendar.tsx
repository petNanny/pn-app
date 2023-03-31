import styled from "styled-components";
import { Box, Button, Text } from "@chakra-ui/react";

export const CalendarContainer = styled(Box)`
  &&& {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    flex: 2 1 0%;
  }
`;

export const StyledCalendar = {
  cell: {
    border: "1px solid rgb(239, 239, 239)",
  },
  day: {
    padding: "40px",
    borderRadius: 0,
    backgroundColor: "rgb(178, 235, 221)",
  },
};

export const CalendarCaptionLabel = styled(Text)`
  &&& {
    color: rgb(79, 79, 79);
    font-size: 1.5rem;
    font-weight: 400;
    padding-left: 1.5rem;
  }
`;

export const MonthNavBtn = styled(Button)`
  &&& {
    border: 1px solid rgb(74, 144, 226);
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 7px;
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
  }
`;

export const TodayBtn = styled(Button)`
  &&& {
    border: 1px solid rgb(74, 144, 226);
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.5rem;
    background-color: transparent;
    font-size: 0.875rem;
    height: 2rem;
    color: rgb(74, 144, 226);
  }
`;
