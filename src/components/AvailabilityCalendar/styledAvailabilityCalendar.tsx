import styled from "styled-components";
import { Stack, Container, Box, Divider, Button } from "@chakra-ui/react";

export const AvailabilityCalendarContainer = styled(Box)`
  &&& {
    display: flex;
    min-height: 60vh;
    max-width: 1170px;
    margin: 1rem auto;
    padding: 1rem;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
