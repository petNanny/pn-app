import { useState, useRef } from "react";
import { Box, Button, chakra } from "@chakra-ui/react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { useForm, SubmitHandler } from "react-hook-form";

type DateValues = {
  dates: Value;
};

const ClearBtn = chakra(Button, {
  baseStyle: {
    fontSize: "1rem",
    color: "rgb(116, 116, 116)",
    backgroundColor: "transparent",
    fontWeight: "light",
    _hover: { bg: "none", textDecoration: "underline rgb(116, 116, 116)" },
  },
});

const ApplyBtn = chakra(Button, {
  baseStyle: {
    fontSize: "1rem",
    color: "rgb(0, 195, 138)",
    backgroundColor: "transparent",
    fontWeight: "light",
    _hover: { bg: "none", textDecoration: "underline rgb(0, 195, 138)" },
  },
});

const DateInput = () => {
  // eslint-disable-next-line prefer-const
  let [dates, setDates] = useState<Value>(null);

  const datePickerRef = useRef<any>();

  const handleDateClear = () => {
    setDates(null);
  };

  const { handleSubmit: handleDateSubmit } = useForm({
    defaultValues: {
      dates: null,
    },
  });

  const onDateSubmit: SubmitHandler<DateValues> = () => {
    datePickerRef.current.closeCalendar();
    if (dates instanceof DateObject) {
      dates = dates.toDate();
    }
    console.log(dates instanceof DateObject);
    console.log(dates);
  };

  return (
    <>
      <Box
        minWidth="12rem"
        height="50px"
        cursor="pointer"
        sx={{
          ".rmdp-week-day": { color: "rgb(139, 152, 152)" },
          ".custom-input": {
            borderRadius: "4px",
            border: "1px solid rgb(206, 206, 206)",
            padding: "10px",
            height: "50px",
            textAlign: "center",
            color: "rgb(116, 116, 116)",
            cursor: "pointer",
            caretColor: "transparent",
          },
          ".custom-input::-webkit-input-placeholder": { color: "rgb(116, 116, 116)" },
          ".custom-input:focus": {
            outline: "none",
            border: "1px solid rgb(0, 195, 138)",
          },
          ".custom-calendar .rmdp-day": { color: "rgb(116, 116, 116)" },
          ".custom-calendar .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover": {
            backgroundColor: "rgb(240, 248, 255)",
            color: "rgb(116, 116, 116)",
          },
          ".custom-calendar .rmdp-range": {
            backgroundColor: "rgb(0, 195, 138)",
            color: "rgb(240, 248, 255)",
          },
          ".custom-calendar .rmdp-range.rmdp-today span": {
            backgroundColor: "rgb(0, 195, 138)",
            color: "rgb(240, 248, 255)",
          },
          ".custom-calendar .rmdp-range.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover":
            {
              backgroundColor: "rgb(0, 195, 138)",
              color: "rgb(240, 248, 255)",
            },
          ".custom-calendar .rmdp-disabled": {
            color: "rgb(220, 224, 224)",
            backgroundColor: "white",
          },
          ".custom-calendar .rmdp-today span": {
            backgroundColor: "white",
            color: "rgb(116, 116, 116)",
            fontWeight: "bold",
          },
        }}
      >
        <DatePicker
          value={dates}
          onChange={setDates}
          format="DD/MM/YYYY"
          range
          minDate={new DateObject().subtract(0, "days")}
          placeholder="Start date   >   End date"
          inputClass="custom-input"
          ref={datePickerRef}
          className="custom-calendar"
        >
          <Box display="flex" justifyContent="space-between">
            <ClearBtn onClick={handleDateClear}>Clear</ClearBtn>
            <ApplyBtn onClick={handleDateSubmit(onDateSubmit)}>Apply</ApplyBtn>
          </Box>
        </DatePicker>
      </Box>
    </>
  );
};

export default DateInput;
