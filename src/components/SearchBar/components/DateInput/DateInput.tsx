import { useState, useRef } from "react";
import {
  ClearBtn,
  ApplyBtn,
  ButtonsBox,
  DatePickerContainer,
  StyledFormLabel,
} from "./styledDateInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery, FormControl, Box } from "@chakra-ui/react";
import { FormikProps } from "formik";

interface Values {
  location: string;
  petService: string;
  selectedDate: [unknown, unknown];
  noDogs: boolean;
  noChildren: boolean;
  fencedBackyard: boolean;
  smallDog: number;
  mediumDog: number;
  largeDog: number;
  giantDog: number;
  cat: number;
  smallAnimal: number;
  totalPets: number;
}
interface DateInputProps {
  formik: FormikProps<Values>;
}

const DateInput = (props: DateInputProps) => {
  const [dateRange, setDateRange] = useState<any | null>([null, null]);
  const [startDate, endDate] = dateRange;

  const calRef = useRef<any>();

  const [isMobile] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  return (
    <>
      <Box>
        <FormControl>
          {isMobile ? <StyledFormLabel>Dates</StyledFormLabel> : null}
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
                    props.formik.setFieldValue("selectedDate", dateRange);
                    setTimeout(props.formik.handleSubmit, 0);
                  }}
                >
                  apply
                </ApplyBtn>
              </ButtonsBox>
            </DatePicker>
          </DatePickerContainer>
        </FormControl>
      </Box>
    </>
  );
};

export default DateInput;
