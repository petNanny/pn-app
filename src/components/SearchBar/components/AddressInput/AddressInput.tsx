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
interface AddressInputProps {
  changeLocation: (value: string) => void;
  formik: FormikProps<Values>;
}

const AddressInput = (props: AddressInputProps) => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    onPlaceSelected: (place) => {
      props.formik.setFieldValue("location", place.formatted_address);
      props.changeLocation(place.formatted_address);
      setTimeout(props.formik.handleSubmit, 0);
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
              onChange={props.formik.handleChange}
              value={props.formik.values.location}
              ref={refs}
              id="location"
              name="location"
            />
          </StyledInputGroup>
        </FormControl>
      </AddressInputContainer>
    </>
  );
};

export default AddressInput;
