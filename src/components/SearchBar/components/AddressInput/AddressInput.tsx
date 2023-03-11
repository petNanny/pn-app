import { useMergeRefs, FormControl, useMediaQuery } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { usePlacesWidget } from "react-google-autocomplete";
import {
  AddressInputContainer,
  StyledFormLabel,
  StyledInputGroup,
  StyledInputLeftElement,
  StyledIcon,
  StyledInput,
} from "./styledAddressInput";
import { FormikProps } from "formik";
import { SearchFormValues } from "../../../../interfaces/searchForm";

interface AddressInputProps {
  changeLocation: (value: string) => void;
  formik: FormikProps<SearchFormValues>;
}

const AddressInput = ({ changeLocation, formik }: AddressInputProps) => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    onPlaceSelected: (place) => {
      formik.setFieldValue("location", place.formatted_address);
      if (place.geometry && place.geometry.location) {
        formik.setFieldValue("latitude", place.geometry.location.lat());
        formik.setFieldValue("longitude", place.geometry.location.lng());
      }
      if (place.formatted_address) {
        changeLocation(place.formatted_address);
      }
      setTimeout(formik.handleSubmit, 0);
    },
    options: {
      types: ["(regions)"],
      componentRestrictions: { country: "au" },
    },
  });

  const refs = useMergeRefs(ref);

  const [isMobile] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  return (
    <>
      <AddressInputContainer>
        <FormControl>
          {isMobile ? <StyledFormLabel>Near</StyledFormLabel> : null}
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
              data-testid="addressInput"
            />
          </StyledInputGroup>
        </FormControl>
      </AddressInputContainer>
    </>
  );
};

export default AddressInput;
