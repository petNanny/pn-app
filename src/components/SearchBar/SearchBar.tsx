import { useState, useEffect } from "react";
import AddressInput from "./components/AddressInput/AddressInput";
import ServiceInput from "./components/ServiceInput/ServiceInput";
import PetNumInput from "./components/PetNunInput/PetNumInput";
import AdvancedInput from "./components/AdvancedInput/AdvancedInput";
import {
  SearchBox,
  Heading1,
  Heading2,
  InputsContainer,
  HeadingContainer,
  StyledMobileBtn,
  MobileButtonsContainer,
  MobileSearchBtn,
} from "./styledSearchBar";
import DateInput from "./components/DateInput/DateInput";
import { useFormik, FormikProps } from "formik";
import { useMediaQuery } from "@chakra-ui/react";
import searchFilterSchema from "../../schemas/searchFilterValidator";

import { SearchFormValues } from "../../interfaces/searchForm";

const SearchBar = () => {
  const [serviceHeading, setServiceHeading] = useState("Dog Boarding");
  const [serviceDetail, setServiceDetail] = useState("Overnight stay at the sitter's home.");
  const [location, setLocation] = useState("");
  const [totalPetsNum, setTotalPetsNum] = useState(0);
  const [smallDogNum, setSmallDogNum] = useState(0);
  const [mediumDogNum, setMediumDogNum] = useState(0);
  const [largeDogNum, setLargeDogNum] = useState(0);
  const [giantDogNum, setGiantDogNum] = useState(0);
  const [catNum, setCatNum] = useState(0);
  const [smallAnimalNum, setSmallAnimalNum] = useState(0);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    setTotalPetsNum(
      smallDogNum + mediumDogNum + largeDogNum + giantDogNum + catNum + smallAnimalNum
    );
  }, [smallDogNum, mediumDogNum, largeDogNum, giantDogNum, catNum, smallAnimalNum]);

  const changeServiceHeading = (value: string) => {
    setServiceHeading(value);
  };
  const changeServiceDetail = (value: string) => {
    setServiceDetail(value);
  };

  const changeLocation = (value: string) => {
    setLocation(value);
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const formik: FormikProps<SearchFormValues> = useFormik<SearchFormValues>({
    initialValues: {
      location: "",
      latitude: undefined,
      longitude: undefined,
      petService: "Dog boarding",
      selectedDate: [],
      noDogs: false,
      noChildren: false,
      fencedBackyard: false,
      smallDog: 0,
      mediumDog: 0,
      largeDog: 0,
      giantDog: 0,
      cat: 0,
      smallAnimal: 0,
      totalPets: 0,
    },
    validationSchema: searchFilterSchema,
    onSubmit: async (values) => {
      values.smallDog = smallDogNum;
      values.mediumDog = mediumDogNum;
      values.largeDog = largeDogNum;
      values.giantDog = giantDogNum;
      values.cat = catNum;
      values.smallAnimal = smallAnimalNum;
      values.totalPets = totalPetsNum;
      await sleep(500);
      console.log(values);
    },
  });

  const [isLaptop] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  useEffect(() => {
    isLaptop ? setShowFilter(false) : setShowFilter(true);
  }, [isLaptop]);

  const handleSearchBtn = () => {
    formik.handleSubmit();
    setShowFilter(false);
  };

  const handleFilterBtn = () => {
    setShowFilter(true);
  };

  return (
    <>
      <SearchBox>
        <HeadingContainer>
          <Heading1 as="h1" data-testid="addressServiceShow">
            {serviceHeading} {location}
          </Heading1>
          <Heading2 as="h2">{serviceDetail}</Heading2>
        </HeadingContainer>
        {showFilter && (
          <InputsContainer>
            <AddressInput changeLocation={changeLocation} formik={formik} />
            <ServiceInput
              formik={formik}
              changeServiceHeading={changeServiceHeading}
              changeServiceDetail={changeServiceDetail}
            />
            <DateInput formik={formik} />
            <PetNumInput
              formik={formik}
              smallDogNum={smallDogNum}
              mediumDogNum={mediumDogNum}
              largeDogNum={largeDogNum}
              giantDogNum={giantDogNum}
              catNum={catNum}
              smallAnimalNum={smallAnimalNum}
              setSmallDogNum={setSmallDogNum}
              setMediumDogNum={setMediumDogNum}
              setLargeDogNum={setLargeDogNum}
              setGiantDogNum={setGiantDogNum}
              setCatNum={setCatNum}
              setSmallAnimalNum={setSmallAnimalNum}
              totalPetsNum={totalPetsNum}
              setTotalPetsNum={setTotalPetsNum}
            />
            <AdvancedInput formik={formik} />
            {isLaptop ? (
              <MobileSearchBtn onClick={handleSearchBtn}>Search Now</MobileSearchBtn>
            ) : null}
          </InputsContainer>
        )}
        {isLaptop ? (
          <MobileButtonsContainer>
            <StyledMobileBtn onClick={handleFilterBtn}>Edit Filters</StyledMobileBtn>
            <StyledMobileBtn>Show Map</StyledMobileBtn>
          </MobileButtonsContainer>
        ) : null}
      </SearchBox>
    </>
  );
};

export default SearchBar;
