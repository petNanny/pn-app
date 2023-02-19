import { Icon, Input, InputGroup, InputLeftElement, Box, useMergeRefs } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useRef, useState } from "react";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { useFormik } from "formik";

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
        {/* <Box width="250ox">
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
        <InputGroup minWidth="30rem">
          <InputLeftElement height="50px">
            <Icon
              as={MdOutlineSearch}
              fontSize="30px"
              fontWeight="200"
              color="rgb(116, 116, 116)"
              marginLeft="5px"
            />
          </InputLeftElement>
          <Input
            placeholder="Suburb or Address"
            _placeholder={{ color: "rgb(116, 116, 116)" }}
            border="1px solid rgb(206, 206, 206)"
            borderRadius="4px"
            height="50px"
            width="100%"
            padding="10px 10px 10px 48px"
            _focusVisible={{ boxShadow: "none", border: "1px solid rgb(0, 195, 138)" }}
            color="rgb(116, 116, 116)"
            onChange={formik.handleChange}
            value={formik.values.location}
            ref={refs}
            id="location"
            name="location"
          />
        </InputGroup>
      </Box>
    </>
  );
};

export default AddressInput;
