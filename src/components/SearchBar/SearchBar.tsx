import { useState } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import AddressInput from "./components/AddressInput";
import ServiceInput from "./components/ServiceInput";
import DateInput from "./components/DateInput";
import PetNumInput from "./components/PetNumInput";
import AdvancedInput from "./components/AdvancedInput";

const SearchBar = () => {
  const [serviceH1, setServiceH1] = useState("");
  const [serviceDetail, setServiceDetail] = useState("");
  const [location, setLocation] = useState("");

  const changeServiceH1 = (value: string) => {
    setServiceH1(value);
  };
  const changeServiceDetail = (value: string) => {
    setServiceDetail(value);
  };

  const changeLocation = (value: string) => {
    setLocation(value);
  };

  return (
    <>
      <Box
        borderBottom="1px solid rgb(206, 206, 206)"
        position="fixed"
        backgroundColor="#fff"
        top="66px"
        width="100%"
        padding="1rem"
        zIndex="8"
      >
        <Heading
          as="h1"
          color="rgb(79, 79, 79)"
          fontWeight="normal"
          display="inline-block"
          marginBottom="1rem"
          variant="1"
        >
          {serviceH1} {location}
        </Heading>
        <Heading
          as="h2"
          color="rgb(116, 116, 116)"
          fontWeight="normal"
          display="inline"
          marginLeft="1rem"
          variant="2"
        >
          {serviceDetail}
        </Heading>
        <HStack spacing="1rem" marginBottom="1rem">
          <AddressInput changeLocation={changeLocation} />
          <ServiceInput
            // serviceH1={serviceH1}
            changeServiceH1={changeServiceH1}
            changeServiceDetail={changeServiceDetail}
          />
          <DateInput />
          <PetNumInput />
          <AdvancedInput />
        </HStack>
      </Box>
    </>
  );
};

export default SearchBar;
