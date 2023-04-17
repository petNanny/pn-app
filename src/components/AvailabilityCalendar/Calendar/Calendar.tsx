import { isBefore, startOfDay, format } from "date-fns";
import { DayPicker, CaptionProps, useNavigation } from "react-day-picker";
import {
  CalendarContainer,
  StyledCalendar,
  CalendarCaptionLabel,
  MonthNavBtn,
  TodayBtn,
  StyledSetAvailabilityCalendar,
  AvailabilityCalendarLegend,
  AvailabilityCalendarLegendItem,
  AvailabilityCalendarLegendAvailableIcon,
  AvailabilityCalendarLegendNotAvailableIcon,
  AvailabilityCalendarLegendItemLabel,
} from "./styledCalendar";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";
import "react-day-picker/dist/style.module.css";
import { Box, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const customCaption = (props: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <Box display="flex" justifyContent="space-between">
      <CalendarCaptionLabel>{format(props.displayMonth, "MMM yyy")}</CalendarCaptionLabel>
      <Box>
        <TodayBtn onClick={() => goToMonth(new Date())}>Today</TodayBtn>
        <MonthNavBtn
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          <Icon as={ChevronLeftIcon} boxSize={6} color="rgb(74, 144, 226)" />
        </MonthNavBtn>
        <MonthNavBtn disabled={!nextMonth} onClick={() => nextMonth && goToMonth(nextMonth)}>
          <Icon as={ChevronRightIcon} boxSize={6} color="rgb(74, 144, 226)" />
        </MonthNavBtn>
      </Box>
    </Box>
  );
};

const Calendar = () => {
  const { id } = useParams();
  const { data: petOwnerData } = useGetOnePetOwnerQuery(id);
  const petSitter = petOwnerData?.petSitter;
  const notAvailableDates = petSitter?.notAvailableDates;
  const today = new Date();

  let unavailable;
  if (notAvailableDates) {
    unavailable = notAvailableDates.map((dateString: string) => new Date(dateString));
  } else {
    unavailable = [];
  }

  const notAvailableDatesModifier = {
    unavailable: unavailable,
    disabled: (date: Date) => isBefore(date, startOfDay(today)),
  };

  const footer = (
    <AvailabilityCalendarLegend>
      <AvailabilityCalendarLegendItem>
        <AvailabilityCalendarLegendAvailableIcon />
        <AvailabilityCalendarLegendItemLabel>Available</AvailabilityCalendarLegendItemLabel>
      </AvailabilityCalendarLegendItem>
      <AvailabilityCalendarLegendItem>
        <AvailabilityCalendarLegendNotAvailableIcon />
        <AvailabilityCalendarLegendItemLabel>Not available</AvailabilityCalendarLegendItemLabel>
      </AvailabilityCalendarLegendItem>
    </AvailabilityCalendarLegend>
  );

  return (
    <CalendarContainer>
      <style>{StyledSetAvailabilityCalendar}</style>
      <DayPicker
        fromDate={today}
        className="set-availability-calendar"
        modifiers={notAvailableDatesModifier}
        modifiersStyles={{
          unavailable: { backgroundColor: "rgb(255, 188, 188)" },
          disabled: { backgroundColor: "white", color: "rgb(220, 224, 224)" },
        }}
        styles={StyledCalendar}
        components={{ Caption: customCaption }}
        showOutsideDays
        footer={footer}
      />
    </CalendarContainer>
  );
};

export default Calendar;
