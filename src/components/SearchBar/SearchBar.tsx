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
import { toggleShowMapOrCard } from "../../store/reducer/boardingPageSlice";
import { useStoreDispatch, useStoreSelector } from "../../store/hook";
import { useFilterPetSitterMutation } from "../../redux/petSitterApi";
import { useLocation } from "react-router-dom";

interface SearchBarProps {
  getResults: React.Dispatch<React.SetStateAction<[]>>;
  getIsResultsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getCenterPoint: React.Dispatch<React.SetStateAction<number[]>>;
  getTotalPages: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  pageSize: number;
}

const SearchBar = ({
  getResults,
  getIsResultsLoading,
  getCenterPoint,
  getTotalPages,
  currentPage,
  pageSize,
}: SearchBarProps) => {
  const searchParams = new URLSearchParams(useLocation().search);
  const landingPagePetService = searchParams.get("petService") || "Dog boarding";
  const landingPageLongitude = Number(searchParams.get("longitude")) || 151.2092955;
  const landingPageLatitude = Number(searchParams.get("latitude")) || -33.8688197;
  const landingPageLocation = searchParams.get("location") || "Sydney NSW, Australia";

  const displayedServiceDetail: { [key: string]: string } = {
    "Dog boarding": "Overnight stay at the sitter's home.",
    "Doggy day care": "Daytime care for your dog at the sitter's home.",
    "Dog walking":
      "An experienced dog walker will pick up your dog from your home for a 30 mins walk.",
    "Home visits": "Drop in visits at your home for your pet.",
    "House sitting": "A sitter stays overnight in your home and cares for your pet.",
  };
  const selectedServiceDetail =
    displayedServiceDetail[landingPagePetService] || "Overnight stay at the sitter's home.";

  const [serviceHeading, setServiceHeading] = useState(landingPagePetService);
  const [serviceDetail, setServiceDetail] = useState(selectedServiceDetail);
  const [location, setLocation] = useState(landingPageLocation);
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

  const [
    filter,
    {
      isSuccess: isFilterSuccess,
      isError: isFilterError,
      isLoading: isFilterLoading,
      data: filterResults,
    },
  ] = useFilterPetSitterMutation();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const formik: FormikProps<SearchFormValues> = useFormik<SearchFormValues>({
    initialValues: {
      location: landingPageLocation,
      latitude: landingPageLatitude,
      longitude: landingPageLongitude,
      petService: landingPagePetService,
      selectedDates: [],
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
      page: 1,
      pageLimit: pageSize,
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
      values.page = currentPage;
      values.pageLimit = pageSize;
      await sleep(500);
      await filter({ body: values });
    },
  });

  useEffect(() => {
    formik.handleSubmit();
  }, [formik.values.selectedDates]);

  useEffect(() => {
    const getResultOnLoad = async () => {
      await filter({ body: formik.values });
    };
    getResultOnLoad();
  }, []);

  useEffect(() => {
    getIsResultsLoading(isFilterLoading);
  }, [isFilterLoading]);

  useEffect(() => {
    if (isFilterSuccess && filterResults) {
      getResults(filterResults.updatedResults);
    }
    if (isFilterError) {
      getResults([]);
    }
  }, [filterResults]);

  useEffect(() => {
    getCenterPoint([formik.values.latitude, formik.values.longitude]);
  }, [formik.values.latitude, formik.values.longitude]);

  useEffect(() => {
    getTotalPages(filterResults?.totalPages);
  }, [filterResults?.totalPages]);

  useEffect(() => {
    formik.handleSubmit();
  }, [currentPage]);

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

  const dispatch = useStoreDispatch();

  const showMapOrCard = useStoreSelector((state) => state.boardingPage.showMapOrCard);

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
            <StyledMobileBtn onClick={() => dispatch(toggleShowMapOrCard())}>
              {showMapOrCard ? `Show List` : `Show Map`}
            </StyledMobileBtn>
          </MobileButtonsContainer>
        ) : null}
      </SearchBox>
    </>
  );
};

export default SearchBar;
