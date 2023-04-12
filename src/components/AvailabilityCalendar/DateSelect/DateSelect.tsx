import { useState, useRef, useEffect } from "react";
import { FormControl, Box, Portal, useToast } from "@chakra-ui/react";
import { FormikProps, useFormik } from "formik";
import { format, eachDayOfInterval, max, min, add } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import "react-day-picker/dist/style.css";
import {
  ClearBtn,
  ApplyBtn,
  ButtonsBox,
  StyledFormLabel,
  TriggerBtn,
  StyledDayPicker,
  StyledPopoverBody,
  DatesSelectModeBtn,
  DatesSelectModeBox,
  StyledPopoverFooter,
  StyledDaysLeftText,
  SetAndUpdateBtn,
  RangeModeTextBox,
} from "./styledDateSelect";
import { useUpdateOnePetSitterMutation } from "../../../redux/petSitterApi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { updatePetSitterInfo } from "../../../store/reducer/petSitterSlice";
import { useGetOnePetOwnerQuery } from "../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";

interface DateSelectVales {
  notAvailableDates: string[];
  lastUpdateCalendarTime: Date;
}

const DateSelect = () => {
  const { id } = useParams();
  const today = new Date();
  const initRef = useRef<any>();
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const toast = useToast();
  const dispatch = useDispatch();

  const [rangeDays, setRangeDays] = useState<DateRange | undefined>();
  const [multiDays, setMultiDays] = useState<Date[]>();
  const [isMultiMode, setIsMultiMode] = useState(false);

  const petOwner = useSelector((state: RootState) => state.petOwner);
  const petSitter = petOwner.petSitter;
  const [updateAvailabilityCalendar] = useUpdateOnePetSitterMutation();
  const { refetch: refetchPetOwner } = useGetOnePetOwnerQuery(id);

  const formik: FormikProps<DateSelectVales> = useFormik<DateSelectVales>({
    initialValues: {
      notAvailableDates: [],
      lastUpdateCalendarTime: new Date(),
    },
    onSubmit: async (values) => {
      values.lastUpdateCalendarTime = new Date();
      await sleep(500);
      await updateAvailabilityCalendar({
        ...petSitter,
        notAvailableDates: values.notAvailableDates,
        lastUpdateCalendarTime: values.lastUpdateCalendarTime,
      })
        .unwrap()
        .then(() => {
          toast({
            title: "Availability calendar update successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
          });
          dispatch(
            updatePetSitterInfo({
              ...petSitter,
              notAvailableDates: values.notAvailableDates,
              lastUpdateCalendarTime: values.lastUpdateCalendarTime,
            })
          );
          refetchPetOwner();
        })
        .catch((err) => {
          toast({
            title: "Availability calendar update failed",
            description: err.data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
            containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
          });
        });
    },
  });

  let rangeModeInputText = (
    <>
      <Box>start date</Box> <Box>&gt;</Box> <Box>end date</Box>
    </>
  );
  if (rangeDays?.from) {
    if (!rangeDays.to) {
      rangeModeInputText = (
        <>
          <Box>{format(rangeDays.from, "dd/MM/yyyy")}</Box> <Box>&gt;</Box> <Box>end date?</Box>
        </>
      );
      const noEndDate: DateRange = {
        from: rangeDays.from,
        to: rangeDays.from,
      };
      setRangeDays(noEndDate);
    } else if (rangeDays.to) {
      rangeModeInputText = (
        <>
          <Box>{format(rangeDays.from, "dd/MM/yyyy")}</Box> <Box>&gt;</Box>
          <Box>{format(rangeDays.to, "dd/MM/yyyy")}</Box>
        </>
      );
    }
  }

  let multiModeInputText = <p>Please select your dates</p>;
  let daysLeft = 15;
  if (multiDays) {
    const datesNum = multiDays.length;
    daysLeft = 15 - datesNum;
    multiModeInputText = (
      <p>
        {datesNum} day(s) between {format(min(multiDays), "dd/MM/yyyy")} &gt;{" "}
        {format(max(multiDays), "dd/MM/yyyy")}
      </p>
    );
  }

  const getDatesInRange = () => {
    if (rangeDays?.from && rangeDays.to) {
      return eachDayOfInterval({
        start: rangeDays.from,
        end: rangeDays.to,
      }).map((date) => format(date, "yyyy-MM-dd"));
    }
  };

  useEffect(() => {
    setMultiDays(undefined);
    setRangeDays(undefined);
  }, [isMultiMode]);

  const handleBlur = () => {
    isMultiMode
      ? formik.setFieldValue(
          "notAvailableDates",
          multiDays?.map((date) => format(date, "yyyy-MM-dd"))
        )
      : formik.setFieldValue("notAvailableDates", getDatesInRange());
  };

  const handleApplyBtn = () => {
    isMultiMode
      ? formik.setFieldValue(
          "notAvailableDates",
          multiDays?.map((date) => format(date, "yyyy-MM-dd"))
        )
      : formik.setFieldValue("notAvailableDates", getDatesInRange());
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <Popover placement="bottom-start" initialFocusRef={initRef} onClose={handleBlur}>
          {({ onClose }) => (
            <>
              <StyledFormLabel>Dates</StyledFormLabel>
              <PopoverTrigger>
                <TriggerBtn>
                  {isMultiMode ? (
                    <Box>{multiModeInputText}</Box>
                  ) : (
                    <RangeModeTextBox>{rangeModeInputText}</RangeModeTextBox>
                  )}
                </TriggerBtn>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <StyledPopoverBody>
                    <style>{StyledDayPicker}</style>
                    {isMultiMode ? (
                      <DayPicker
                        mode="multiple"
                        min={1}
                        max={15}
                        selected={multiDays}
                        onSelect={setMultiDays}
                        fromDate={today}
                        toDate={
                          multiDays === undefined ? undefined : add(multiDays[0], { days: 30 })
                        }
                      />
                    ) : (
                      <DayPicker
                        defaultMonth={today}
                        mode={"range"}
                        selected={rangeDays}
                        onSelect={setRangeDays}
                        pagedNavigation
                        numberOfMonths={1}
                        fromDate={today}
                        toDate={add(today, { months: 6 })}
                      />
                    )}
                    <DatesSelectModeBox>
                      <DatesSelectModeBtn
                        isChecked={isMultiMode}
                        onChange={() => setIsMultiMode(!isMultiMode)}
                      >
                        Non-consecutive days
                      </DatesSelectModeBtn>
                      {isMultiMode ? (
                        <StyledDaysLeftText>
                          Select up to 15 days within a 30-day timespan. {daysLeft} days left.
                        </StyledDaysLeftText>
                      ) : null}
                    </DatesSelectModeBox>
                  </StyledPopoverBody>
                  <StyledPopoverFooter>
                    <ButtonsBox>
                      <ClearBtn
                        onClick={() => {
                          setRangeDays(undefined);
                          setMultiDays(undefined);
                        }}
                      >
                        Clear
                      </ClearBtn>
                      {isMultiMode ? (
                        <ApplyBtn
                          ref={initRef}
                          onClick={() => {
                            handleApplyBtn;
                            onClose();
                          }}
                        >
                          Apply
                        </ApplyBtn>
                      ) : (
                        <ApplyBtn
                          ref={initRef}
                          onClick={() => {
                            handleApplyBtn;
                            onClose();
                          }}
                        >
                          Apply
                        </ApplyBtn>
                      )}
                    </ButtonsBox>
                  </StyledPopoverFooter>
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover>
        <SetAndUpdateBtn type="submit">Set selected dates as unavailable</SetAndUpdateBtn>
      </FormControl>
    </form>
  );
};

export default DateSelect;
