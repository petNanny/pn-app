import { useState, useRef, useEffect } from "react";
import {
  ClearBtn,
  ApplyBtn,
  ButtonsBox,
  StyledFormLabel,
  TriggerBtn,
  StyledDayPicker,
  DateInputContainer,
  StyledPopoverBody,
  DatesSelectModeBtn,
  DatesSelectModeBox,
  StyledPopoverFooter,
  StyledDaysLeftText,
} from "./styledDateInput";
import { FormControl, Box, Portal } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { format, eachDayOfInterval, max, min, add } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import "react-day-picker/dist/style.css";
import { SearchFormValues } from "../../../../interfaces/searchForm";
import { useLocation } from "react-router-dom";

interface DateInputProps {
  formik: FormikProps<SearchFormValues>;
}

const DateInput = ({ formik }: DateInputProps) => {
  const today = new Date();
  const initRef = useRef<any>();
  const searchParams = new URLSearchParams(useLocation().search);
  const landingPageStartDate = searchParams.get("startDate");
  const landingPageEndDate = searchParams.get("endDate");

  const landingPageSelectedDates: DateRange = {
    from: new Date(landingPageStartDate || today),
    to: new Date(landingPageEndDate || today),
  };

  const [rangeDays, setRangeDays] = useState<DateRange | undefined>(landingPageSelectedDates);
  const [multiDays, setMultiDays] = useState<Date[]>();
  const [isMultiMode, setIsMultiMode] = useState(false);

  useEffect(() => {
    if (!rangeDays) {
      setRangeDays({
        from: new Date(landingPageStartDate || today),
        to: new Date(landingPageEndDate || today),
      });
    }
    formik.setFieldValue("selectedDates", getDatesInRange());
    formik.handleSubmit();
  }, [rangeDays]);

  let rangeModeInputText = <p>start date &gt; end date</p>;
  if (rangeDays?.from) {
    if (!rangeDays.to) {
      rangeModeInputText = <p>{format(rangeDays.from, "dd/MM/yyyy")} &gt; end date?</p>;
      const noEndDate: DateRange = {
        from: rangeDays.from,
        to: rangeDays.from,
      };
      setRangeDays(noEndDate);
    } else if (rangeDays.to) {
      rangeModeInputText = (
        <p>
          {format(rangeDays.from, "dd/MM/yyyy")} &gt; {format(rangeDays.to, "dd/MM/yyyy")}
        </p>
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
          "selectedDates",
          multiDays?.map((date) => format(date, "yyyy-MM-dd"))
        )
      : formik.setFieldValue("selectedDates", getDatesInRange());
    setTimeout(formik.handleSubmit, 0);
  };

  const handleApplyBtn = () => {
    isMultiMode
      ? formik.setFieldValue(
          "selectedDates",
          multiDays?.map((date) => format(date, "yyyy-MM-dd"))
        )
      : formik.setFieldValue("selectedDates", getDatesInRange());
    setTimeout(formik.handleSubmit, 0);
  };

  return (
    <>
      <DateInputContainer>
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
                      <Box>{rangeModeInputText}</Box>
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
                          toDate={add(today, { months: 3 })}
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
        </FormControl>
      </DateInputContainer>
    </>
  );
};

export default DateInput;
