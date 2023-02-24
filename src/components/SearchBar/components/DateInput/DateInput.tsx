import { useState, useRef, useEffect } from "react";
import {
  ClearBtn,
  ApplyBtn,
  ButtonsBox,
  StyledFormLabel,
  TriggerBtn,
  StyledDayPicker,
  DateInputContainer,
} from "./styledDateInput";
import { FormControl, Box } from "@chakra-ui/react";
import { FormikProps } from "formik";
import { format, eachDayOfInterval, max, min } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  Checkbox,
} from "@chakra-ui/react";
import "react-day-picker/dist/style.css";
import { SearchFormValues } from "../../../../interfaces/searchForm";

interface DateInputProps {
  formik: FormikProps<SearchFormValues>;
}

const DateInput = (props: DateInputProps) => {
  const initRef = useRef<any>();
  const today = new Date();
  const [rangeDays, setRangeDays] = useState<DateRange | undefined>();
  const [multiDays, setMultiDays] = useState<Date[]>();
  const [isMultiMode, setIsMultiMode] = useState(false);

  let rangeModeInputText = <p>start date &gt; end date</p>;
  if (rangeDays?.from) {
    if (!rangeDays.to) {
      rangeModeInputText = (
        <p>
          {format(rangeDays.from, "dd/MM/yyyy")} &gt; {format(rangeDays.from, "dd/MM/yyyy")}
        </p>
      );
    } else if (rangeDays.to) {
      rangeModeInputText = (
        <p>
          {format(rangeDays.from, "dd/MM/yyyy")} &gt; {format(rangeDays.to, "dd/MM/yyyy")}
        </p>
      );
    }
  }

  let multiModeInputText = <p>Please select your dates</p>;
  if (multiDays) {
    const datesNum = multiDays.length;
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
      });
    }
  };

  useEffect(() => {
    setMultiDays(undefined);
    setRangeDays(undefined);
  }, [isMultiMode]);

  const handleBlur = () => {
    isMultiMode
      ? props.formik.setFieldValue("selectedDate", multiDays)
      : props.formik.setFieldValue("selectedDate", getDatesInRange());
    setTimeout(props.formik.handleSubmit, 0);
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
                <PopoverContent>
                  <PopoverBody>
                    <style>{StyledDayPicker}</style>
                    {isMultiMode ? (
                      <DayPicker
                        mode="multiple"
                        min={1}
                        max={15}
                        selected={multiDays}
                        onSelect={setMultiDays}
                        fromDate={today}
                      />
                    ) : (
                      <DayPicker
                        mode={"range"}
                        selected={rangeDays}
                        onSelect={setRangeDays}
                        pagedNavigation
                        numberOfMonths={1}
                        fromDate={today}
                      />
                    )}
                    <Box>
                      <Checkbox
                        isChecked={isMultiMode}
                        onChange={() => setIsMultiMode(!isMultiMode)}
                      >
                        Non-consecutive days
                      </Checkbox>
                    </Box>
                  </PopoverBody>
                  <PopoverFooter>
                    <ButtonsBox>
                      <ClearBtn
                        onClick={() => {
                          setRangeDays(undefined);
                          setMultiDays(undefined);
                        }}
                      >
                        clear
                      </ClearBtn>
                      {isMultiMode ? (
                        <ApplyBtn
                          ref={initRef}
                          onClick={() => {
                            props.formik.setFieldValue("selectedDate", multiDays);
                            setTimeout(props.formik.handleSubmit, 0);
                            onClose();
                          }}
                        >
                          Apply
                        </ApplyBtn>
                      ) : (
                        <ApplyBtn
                          ref={initRef}
                          onClick={() => {
                            props.formik.setFieldValue("selectedDate", getDatesInRange());
                            setTimeout(props.formik.handleSubmit, 0);
                            onClose();
                          }}
                        >
                          Apply
                        </ApplyBtn>
                      )}
                    </ButtonsBox>
                  </PopoverFooter>
                </PopoverContent>
              </>
            )}
          </Popover>
        </FormControl>
      </DateInputContainer>
    </>
  );
};

export default DateInput;
