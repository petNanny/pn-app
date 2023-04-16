import { Box } from "@chakra-ui/react";
import {
  SetAvailabilityContainer,
  SetHeading,
  TextWrapper,
  NormalText,
  ConfirmTextBtn,
  AwayModeContainer,
  StyledCheckbox,
  CheckItemText,
} from "./styledSetAvailability";
import DateSelect from "../DateSelect/DateSelect";
import { useState, useEffect } from "react";
import { differenceInMinutes, differenceInHours, differenceInDays } from "date-fns";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";
import Chat from "../Chat/Chat";

const SetAvailability = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("morning");
  const { id } = useParams();
  const { data: petOwnerData } = useGetOnePetOwnerQuery(id);
  const nowTime = new Date();
  const petSitter = petOwnerData?.petSitter;
  const lastUpdateCalendarTime = new Date(petSitter?.lastUpdateCalendarTime);

  useEffect(() => {
    const hours = nowTime.getHours();
    if (hours >= 12 && hours < 18) {
      setTimeOfDay("afternoon");
    } else if (hours >= 18 && hours < 24) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("morning");
    }
  }, []);

  const timeDiff = (from: Date, to: Date) => {
    const diffInMins = differenceInMinutes(to, from);
    const diffInHours = differenceInHours(to, from, { roundingMethod: "ceil" });
    const diffInDays = differenceInDays(to, from);
    if (diffInMins < 1) {
      return "just now";
    } else if (diffInMins < 60) {
      return diffInMins + " minute(s) ago";
    } else if (diffInMins < 1440) {
      return diffInHours + " hour(s) ago";
    } else {
      return diffInDays + " day(s) ago";
    }
  };

  return (
    <>
      <SetAvailabilityContainer>
        <SetHeading as="h2">Good {timeOfDay}, Tong</SetHeading>
        <TextWrapper>
          <NormalText>
            Your calendar was last updated {timeDiff(lastUpdateCalendarTime, nowTime)}
          </NormalText>
          <NormalText>Our top sitters update their calendar twice a week.</NormalText>
        </TextWrapper>
        {/* <TextWrapper>
          <ConfirmTextBtn>Click here to confirm that your calendar is up to date.</ConfirmTextBtn>
        </TextWrapper> */}
        <TextWrapper>
          <NormalText>Need help updating your calendar?</NormalText>
          <NormalText>View our Help article.</NormalText>
        </TextWrapper>
        <Box marginBottom="2rem">
          <SetHeading>Quick calendar update</SetHeading>
          <NormalText>
            Select a date range or non consecutive dates, and change unavailability of all days at
            once.
          </NormalText>
          <br />
          <DateSelect />
        </Box>
        {/* <AwayModeContainer>
          <SetHeading as="h2">Away mode</SetHeading>
          <NormalText>
            If your are temporarily not active on PetNanny (e.g. on holiday), make sure to put your
            profile on away mode so pet owners are not able to contact you in the meantime.
          </NormalText>
          <StyledCheckbox>
            <CheckItemText>Away mode</CheckItemText>
          </StyledCheckbox>
        </AwayModeContainer> */}
        <Chat />
      </SetAvailabilityContainer>
    </>
  );
};

export default SetAvailability;
