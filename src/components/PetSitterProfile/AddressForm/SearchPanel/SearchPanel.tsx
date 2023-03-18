import { ChangeEvent } from "react";
import { Box, Input } from "@chakra-ui/react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  GeocodeResult,
} from "use-places-autocomplete";

const PlacesAutocomplete = ({ handleGetAddress }: any) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // Define search scope here
      // Require to restart program when modify option
      types: ["address"],
      componentRestrictions: { country: ["au"] },
    },
    debounce: 300,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const selectedAddress: GeocodeResult = results[0];
        const { lat, lng } = getLatLng(selectedAddress);
        console.log("📍 Coordinates: ", { lat, lng });
        const address = selectedAddress.address_components.reduce((acc: any, address_component) => {
          const newAcc = { ...acc };
          [
            ["street_number", "street_number", "long_name"],
            ["route", "street", "long_name"],
            ["locality", "city", "long_name"],
            ["administrative_area_level_2", "council", "long_name"],
            ["administrative_area_level_1", "state", "short_name"],
            ["country", "country", "long_name"],
            ["postal_code", "postcode", "long_name"],
          ].forEach((item: string[]) => {
            if (address_component.types.includes(item[0])) {
              newAcc[item[1]] =
                item[2] === "long_name"
                  ? address_component.long_name
                  : address_component.short_name;
            }
          });
          return newAcc;
        }, {});

        const fullAddressWithLagLng = { ...address, latitude: lat, longitude: lng };
        //passing fullAddressWithLagLng to AddressModel component.
        handleGetAddress(fullAddressWithLagLng);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Box
          key={place_id}
          _hover={{ backgroundColor: "#00C38A", color: "#FFF" }}
          cursor="pointer"
          border="1px"
          borderColor="#cecece"
          marginTop="2"
          padding="4"
          borderRadius="md"
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Box>
      );
    });

  return (
    <Box>
      <Input
        value={value}
        onChange={handleInput}
        placeholder="Number and street name"
        disabled={!ready}
        focusBorderColor="#00C38A"
        height="50px"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </Box>
  );
};

export default PlacesAutocomplete;
