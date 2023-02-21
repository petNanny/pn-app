import { Box, useMergeRefs } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { usePlacesWidget } from "react-google-autocomplete";
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
      setTimeout(formik.handleSubmit, 0);
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
