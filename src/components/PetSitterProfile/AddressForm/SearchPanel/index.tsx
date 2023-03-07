import { useState, useEffect, useCallback } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Spinner } from "@chakra-ui/react";
import {
  Box,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { updatePetSitterInfo } from "../../../../store/reducer/petSitterSlice";

function SearchPanel({ handleGetAddress }: any) {
  const [value, setValue] = useState("");
  const [placeOptions, setPlaceOptions] = useState<any>([]);
  const [selectdAddress, setSelectedAddress] = useState<any>(null);
  const dispatch = useDispatch();

  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
      debounce: 500,
      options: {
        types: ["address"],
        componentRestrictions: { country: "au" },
      },
    });

  useEffect(() => {
    if (placePredictions.length) {
      setPlaceOptions(placePredictions);
    }
  }, [placePredictions]);

  const handleSelect = useCallback((placeOption: any) => {
    console.log(placeOption, placesService, "placesServiceplacesServiceplacesService");
    placesService?.getDetails(
      {
        placeId: placeOption.place_id,
      },
      (placeDetails: any) => {
        setSelectedAddress(placeDetails);
        console.log(placeDetails, "placeDetailsplaceDetails");
        if (placeDetails?.types?.includes("premise")) {
          const address = {
            streetNumber: placeDetails.address_components[0]?.long_name,
            street: placeDetails.address_components[1]?.long_name,
            city: placeDetails.address_components[2]?.long_name,
            council: placeDetails.address_components[3]?.long_name,
            state: placeDetails.address_components[4]?.short_name,
            country: placeDetails.address_components[5]?.long_name,
            postcode: placeDetails.address_components[6]?.long_name,
            latitude: placeDetails.geometry.location.lat(),
            longitude: placeDetails.geometry.location.lng(),
          };
          console.log(address, "address11");

          handleGetAddress(address);
          // const streetNumber = placeDetails.address_components[0]?.long_name;
          // const street = placeDetails.address_components[1]?.long_name;
          // const city = placeDetails.address_components[2]?.long_name;
          // const council = placeDetails.address_components[3]?.long_name;
          // const state = placeDetails.address_components[4]?.short_name;
          // const country = placeDetails.address_components[5]?.long_name;
          // const postcode = placeDetails.address_components[6]?.long_name;
          // const latitude = placeDetails.geometry.location.lat();
          // const longitude = placeDetails.geometry.location.lng();
          // console.log(streetNumber);
          // console.log(street);
          // console.log(city);
          // console.log(council);
          // console.log(postcode);
          // console.log(state);
          // console.log(country);
          // console.log(latitude);
          // console.log(longitude);
        }
        if (placeDetails?.types?.includes("route")) {
          const address = {
            streetNumber: "",
            street: placeDetails.address_components[1]?.long_name,
            city: placeDetails.address_components[2]?.long_name,
            council: placeDetails.address_components[3]?.long_name,
            state: placeDetails.address_components[4]?.short_name,
            country: placeDetails.address_components[5]?.long_name,
            postcode: placeDetails.address_components[6]?.long_name,
            latitude: placeDetails.geometry.location.lat(),
            longitude: placeDetails.geometry.location.lng(),
          };
          handleGetAddress(address);
          // const streetNumber = "";
          // const street = placeDetails.address_components[1]?.long_name;
          // const city = placeDetails.address_components[2]?.long_name;
          // const state = placeDetails.address_components[3]?.short_name;
          // const country = placeDetails.address_components[4]?.long_name;
          // const postcode = placeDetails.address_components[5]?.long_name;
          // const latitude = placeDetails.geometry.location.lat();
          // const longitude = placeDetails.geometry.location.lng();
          // console.log(streetNumber);
          // console.log(street);
          // console.log(city);
          // console.log(postcode);
          // console.log(state);
          // console.log(country);
          // console.log(latitude);
          // console.log(longitude);
        }

        setValue(placeOption.description);
        setPlaceOptions([]);
      }
    );
  }, []);

  const handleClear = useCallback(() => {
    setValue("");
    setPlaceOptions([]);
  }, []);

  return (
    <Box>
      <InputGroup width="100%">
        <InputLeftElement pointerEvents="none" height="100%">
          <SearchIcon color="gray.300" fontSize="xl" />
        </InputLeftElement>

        <Input
          fontSize="lg"
          size="lg"
          autoComplete="off"
          value={value}
          _focus={{ borderColor: "#00C38A" }}
          placeholder="Number and street name"
          onChange={(evt) => {
            setValue(evt.target.value);
            getPlacePredictions({ input: evt.target.value });
          }}
        />
        <InputRightElement height="100%">
          {isPlacePredictionsLoading && <Spinner fontSize="lg" />}
        </InputRightElement>
        <InputRightElement height="100%" onClick={handleClear} cursor="pointer">
          {value.length > 0 && !isPlacePredictionsLoading && <SmallCloseIcon fontSize="lg" />}
        </InputRightElement>
      </InputGroup>

      <Box mt="4px">
        {placeOptions.map((placeOption: any) => (
          <Box
            key={placeOption.place_id}
            _hover={{ backgroundColor: "#00C38A", color: "#FFF" }}
            cursor="pointer"
            border="1px"
            borderColor="#cecece"
            marginTop="1"
            padding="4"
            borderRadius="md"
            onClick={() => handleSelect(placeOption)}
          >
            <Text>{`${placeOption.description.split(",")[0]}`}</Text>
            <Text fontSize="sm" color="#747474">{`${placeOption.description.split(",")[1]}, ${
              placeOption.description.split(",")[2]
            }`}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SearchPanel;
