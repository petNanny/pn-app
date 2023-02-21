import { useState, useRef } from "react";
import { ClearBtn, ApplyBtn, ButtonsBox, DatePickerContainer } from "./styledDateInput";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = () => {
  const [dateRange, setDateRange] = useState<any | null>([null, null]);
  const [startDate, endDate] = dateRange;

  const formik = useFormik({
    initialValues: {
      selectedDate: [null, null],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const calRef = useRef<any>();

  return (
    <>
      <DatePickerContainer>
        <DatePicker
          dateFormat="dd/MM/yyy"
          ref={calRef}
          selectsRange={true}
          placeholderText="Start date   >   End date"
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            setDateRange(date);
          }}
          showPopperArrow={false}
          shouldCloseOnSelect={false}
          minDate={new Date()}
        >
          <ButtonsBox>
            <ClearBtn
              onClick={() => {
                setDateRange([null, null]);
                calRef.current.setOpen(false);
              }}
            >
              clear
            </ClearBtn>
            <ApplyBtn
              onClick={() => {
                calRef.current.setOpen(false);
                formik.setFieldValue("selectedDate", dateRange);
                setTimeout(formik.handleSubmit, 0);
              }}
            >
              apply
            </ApplyBtn>
          </ButtonsBox>
        </DatePicker>
      </DatePickerContainer>
    </>
  );
};

export default DateInput;
