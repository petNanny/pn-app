import { useState } from "react";
import AddressInput from "./components/AddressInput/AddressInput";
import ServiceInput from "./components/ServiceInput/ServiceInput";
import DateInput from "./components/DateInput/DateInput";
import PetNumInput from "./components/PetNunInput/PetNumInput";
import AdvancedInput from "./components/AdvancedInput/AdvancedInput";
import { SearchBox, Heading1, Heading2, InputsContainer } from "./styledSearchBar";

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
      <SearchBox>
        <Heading1 as="h1">
          {serviceH1} {location}
        </Heading1>
        <Heading2 as="h2">{serviceDetail}</Heading2>
        <InputsContainer spacing="1rem">
          <AddressInput changeLocation={changeLocation} />
          <ServiceInput
            // serviceH1={serviceH1}
            changeServiceH1={changeServiceH1}
            changeServiceDetail={changeServiceDetail}
          />
          <DateInput />
          <PetNumInput />
          <AdvancedInput />
        </InputsContainer>
      </SearchBox>
    </>
  );
};

export default SearchBar;
