import PageLayout from "../components/Layout/PageLayout";
import { Stack, Container, Box, Divider, Button } from "@chakra-ui/react";
import AvailabilityCalendar from "../components/AvailabilityCalendar/AvailabilityCalendar";

const CalendarPage = () => {
  return (
    <PageLayout>
      <AvailabilityCalendar />
    </PageLayout>
  );
};

export default CalendarPage;
