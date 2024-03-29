import styled from "styled-components";
import { Box, Button, Text } from "@chakra-ui/react";
import { devices } from "../../../../styles/breakPoints";

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
    borderRadius: 0,
    backgroundColor: "rgb(224, 241, 216)",
    color: "rgb(0, 195, 138)",
    border: "0",
  },
};

export const CalendarCaptionLabel = styled(Text)`
  &&& {
    color: rgb(79, 79, 79);
    font-size: 1.15rem;
    font-weight: 500;
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

export const StyledAvailabilityCalendar = `
  .availability-calendar {
    margin: 0;
    width: 100%;
    --rdp-cell-size: 45px;
  }
  .availability-calendar .rdp-months {
    justify-content: center;
    width: 100%;
  }
  @media ${devices.mobile} {
    .availability-calendar {
      --rdp-cell-size: 58px;
    }
  @media ${devices.tablet} {
    .availability-calendar {
      --rdp-cell-size: 100px;
    }
  @media ${devices.laptop} {
    .availability-calendar {
      --rdp-cell-size: 95px;
    }
`;

export const StyledModifiersStyles = {
  unavailable: {
    backgroundColor: "rgb(247, 238, 240)",
    textDecoration: "line-through",
    color: "rgb(255, 113, 141)",
  },
  disabled: { backgroundColor: "white", color: "rgb(220, 224, 224)" },
};

export const AvailabilityCalendarLegend = styled(Box)`
  &&& {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const AvailabilityCalendarLegendItem = styled(Box)`
  &&& {
    display: flex;
    margin-right: 1rem;
    align-items: center;
  }
`;

export const AvailabilityCalendarLegendAvailableIcon = styled(Box)`
  &&& {
    background-color: rgb(178, 235, 221);
    width: 1rem;
    height: 1rem;
    border: 1px solid rgb(239, 239, 239);
    vertical-align: middle;
    text-align: center;
    margin-right: 0.5rem;
  }
`;

export const AvailabilityCalendarLegendNotAvailableIcon = styled(Box)`
  &&& {
    background-color: rgb(255, 188, 188);
    width: 1rem;
    height: 1rem;
    border: 1px solid rgb(239, 239, 239);
    vertical-align: middle;
    text-align: center;
    margin-right: 0.5rem;
  }
`;

export const AvailabilityCalendarLegendItemLabel = styled(Text)`
  &&& {
    font-size: 1rem;
    color: rgb(116, 116, 116);
  }
`;
