import { useState, useRef } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import { useForm, SubmitHandler } from "react-hook-form";
import { ClearBtn, ApplyBtn, ButtonsBox, DatePickBtn } from "./styledDateInput";

type DateValues = {
  dates: Value;
};

const DateInput = () => {
  // let [dates, setDates] = useState<Value>(null);
  const [dates, setDates] = useState<Value>(null);

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
    // if (dates instanceof DateObject) {
    //   dates = dates.toDate();
    // }
    // console.log(dates instanceof DateObject);
    console.log(dates);
  };

  return (
    <>
      <DatePickBtn>
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
          <ButtonsBox>
            <ClearBtn onClick={handleDateClear}>Clear</ClearBtn>
            <ApplyBtn onClick={handleDateSubmit(onDateSubmit)}>Apply</ApplyBtn>
          </ButtonsBox>
        </DatePicker>
      </DatePickBtn>
    </>
  );
};

export default DateInput;
