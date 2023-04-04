import SetAvailability from "./SetAvailability/SetAvailability";
import { AvailabilityCalendarContainer } from "./styledAvailabilityCalendar";
import Calendar from "./Calendar/Calendar";

const AvailabilityCalendar = () => {
  return (
    <>
      <AvailabilityCalendarContainer>
        <Calendar />
        <SetAvailability />
      </AvailabilityCalendarContainer>
    </>
  );
};

export default AvailabilityCalendar;
