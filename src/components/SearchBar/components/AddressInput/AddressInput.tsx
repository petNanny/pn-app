import { Icon, Input, InputGroup, InputLeftElement, Box, useMergeRefs } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useRef, useState } from "react";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { useFormik } from "formik";
import {
  StyledInputGroup,
  StyledInputLeftElement,
  StyledIcon,
  StyledInput,
} from "./styledAddressInput";

type LocationInputProps = {
  changeLocation: (value: string) => void;
};

const AddressInput: React.FC<LocationInputProps> = ({ changeLocation }) => {
  // const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = useGoogle({
  //   apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  // });

  const formik = useFormik({
    initialValues: {
      location: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    onPlaceSelected: (place) => {
      formik.setFieldValue("location", place.formatted_address);
      changeLocation(place.formatted_address);
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "au" },
    },
  });

  const refs = useMergeRefs(ref);

  return (
    <>
      <Box>
        {/* <Box width="250px">
          <Input
            style={{ color: "black" }}
            value={value}
            placeholder="Debounce 500 ms"
            onChange={(evt) => {
              getPlacePredictions({ input: evt.target.value });
              setValue(evt.target.value);
            }}
            // loading={isPlacePredictionsLoading}
          />
          <Box
            style={{
              marginTop: "20px",
              width: "200px",
              // height: "200px",
              display: "flex",
              flex: "1",
              flexDirection: "column",
              marginBottom: "100px",
            }}
          >
            {placePredictions.map((item, index) => {
              return <Box key={index}>{item.description}</Box>;
            })}
          </Box>
        </Box> */}
        <StyledInputGroup>
          <StyledInputLeftElement>
            <StyledIcon as={MdOutlineSearch} />
          </StyledInputLeftElement>
          <StyledInput
            placeholder="Suburb or Address"
            onChange={formik.handleChange}
            value={formik.values.location}
            ref={refs}
            id="location"
            name="location"
          />
        </StyledInputGroup>
      </Box>
    </>
  );
};

export default AddressInput;
