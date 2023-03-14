import { Box, Menu, Text, FormControl, useMediaQuery, Portal } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  PetNumInputContainer,
  PetTypeText,
  PetSizeText,
  PetSelectItem,
  PetTypeContainer,
  PetSelectItemNum,
  ClearBtn,
  IncreaseBtn,
  DecreaseBtn,
  StyledMenuButton,
  BoxInMenuButton,
  MenuBtnIcon,
  StyledMenuList,
  PetNumSetBox,
  ApplyBtn,
  StyledFormLabel,
} from "./styledPetNumInput";
import { FormikProps } from "formik";
import { SearchFormValues } from "../../../../interfaces/searchForm";

interface PetNumInputProps {
  setSmallDogNum: React.Dispatch<React.SetStateAction<number>>;
  setMediumDogNum: React.Dispatch<React.SetStateAction<number>>;
  setLargeDogNum: React.Dispatch<React.SetStateAction<number>>;
  setGiantDogNum: React.Dispatch<React.SetStateAction<number>>;
  setCatNum: React.Dispatch<React.SetStateAction<number>>;
  setSmallAnimalNum: React.Dispatch<React.SetStateAction<number>>;
  setTotalPetsNum: React.Dispatch<React.SetStateAction<number>>;
  smallDogNum: number;
  mediumDogNum: number;
  largeDogNum: number;
  giantDogNum: number;
  catNum: number;
  smallAnimalNum: number;
  totalPetsNum: number;
  formik: FormikProps<SearchFormValues>;
}

const PetNumInput = ({
  setSmallDogNum,
  setMediumDogNum,
  setLargeDogNum,
  setGiantDogNum,
  setCatNum,
  setSmallAnimalNum,
  setTotalPetsNum,
  smallDogNum,
  mediumDogNum,
  largeDogNum,
  giantDogNum,
  catNum,
  smallAnimalNum,
  totalPetsNum,
  formik,
}: PetNumInputProps) => {
  const handleIncreasePet = (
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (value < 10) setValue(value + 1);
  };

  const handleDecreasePet = (
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (value > 0) setValue(value - 1);
  };

  const handlePetsClear = () => {
    setSmallDogNum(0);
    setMediumDogNum(0);
    setLargeDogNum(0);
    setGiantDogNum(0);
    setCatNum(0);
    setSmallAnimalNum(0);
    setTotalPetsNum(0);
  };

  const list = [
    {
      id: 1,
      petType: "Small Dog",
      petSize: "0-10 kg",
      petItemNum: smallDogNum,
      handleDecreasePet: () => handleDecreasePet(smallDogNum, setSmallDogNum),
      handleIncreasePet: () => handleIncreasePet(smallDogNum, setSmallDogNum),
      increaseTestID: "smallDogIncrease",
      decreaseTestID: "smallDogDecrease",
    },
    {
      id: 2,
      petType: "Medium Dog",
      petSize: "10-20 kg",
      petItemNum: mediumDogNum,
      handleDecreasePet: () => handleDecreasePet(mediumDogNum, setMediumDogNum),
      handleIncreasePet: () => handleIncreasePet(mediumDogNum, setMediumDogNum),
      increaseTestID: "mediumDogIncrease",
      decreaseTestID: "mediumDogDecrease",
    },
    {
      id: 3,
      petType: "Large Dog",
      petSize: "20-40 kg",
      petItemNum: largeDogNum,
      handleDecreasePet: () => handleDecreasePet(largeDogNum, setLargeDogNum),
      handleIncreasePet: () => handleIncreasePet(largeDogNum, setLargeDogNum),
      increaseTestID: "largeDogIncrease",
      decreaseTestID: "largeDogDecrease",
    },
    {
      id: 4,
      petType: "Giant Dog",
      petSize: "+40 kg",
      petItemNum: giantDogNum,
      handleDecreasePet: () => handleDecreasePet(giantDogNum, setGiantDogNum),
      handleIncreasePet: () => handleIncreasePet(giantDogNum, setGiantDogNum),
      increaseTestID: "giantDogIncrease",
      decreaseTestID: "giantDogDecrease",
    },
    {
      id: 5,
      petType: "Cat",
      petSize: "All",
      petItemNum: catNum,
      handleDecreasePet: () => handleDecreasePet(catNum, setCatNum),
      handleIncreasePet: () => handleIncreasePet(catNum, setCatNum),
      increaseTestID: "catIncrease",
      decreaseTestID: "catDecrease",
    },
    {
      id: 6,
      petType: "Small Animal",
      petSize: "Bird, rabbit, ferret, ...",
      petItemNum: smallAnimalNum,
      handleDecreasePet: () => handleDecreasePet(smallAnimalNum, setSmallAnimalNum),
      handleIncreasePet: () => handleIncreasePet(smallAnimalNum, setSmallAnimalNum),
      increaseTestID: "smallAnimalIncrease",
      decreaseTestID: "smallAnimalDecrease",
    },
  ];

  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: true, fallback: false });
  const [isMobile] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  return (
    <>
      <PetNumInputContainer>
        <FormControl width="100%">
          {isMobile ? <StyledFormLabel>Pets</StyledFormLabel> : null}
          <Menu matchWidth={isTablet ? true : false} autoSelect={false}>
            <StyledMenuButton>
              <BoxInMenuButton>
                <Box>
                  {totalPetsNum > 1 ? (
                    <Text data-testid="petNumInput">{totalPetsNum} pets</Text>
                  ) : (
                    <Text>{totalPetsNum} pet</Text>
                  )}
                </Box>
                <MenuBtnIcon as={MdArrowDropDown} />
              </BoxInMenuButton>
            </StyledMenuButton>
            <Portal>
              <StyledMenuList>
                {list.map((item) => {
                  return (
                    <PetSelectItem key={item.id}>
                      <PetTypeContainer>
                        <PetTypeText>{item.petType}</PetTypeText>
                        <PetSizeText>{item.petSize}</PetSizeText>
                      </PetTypeContainer>
                      <PetNumSetBox>
                        <DecreaseBtn
                          color={item.petItemNum}
                          onClick={item.handleDecreasePet}
                          data-testid={item.decreaseTestID}
                        >
                          -
                        </DecreaseBtn>
                        <PetSelectItemNum>{item.petItemNum}</PetSelectItemNum>
                        <IncreaseBtn
                          onClick={item.handleIncreasePet}
                          data-testid={item.increaseTestID}
                        >
                          +
                        </IncreaseBtn>
                      </PetNumSetBox>
                    </PetSelectItem>
                  );
                })}
                <PetSelectItem>
                  <ClearBtn onClick={handlePetsClear}>Clear</ClearBtn>
                  <Box>
                    <ApplyBtn onClick={formik.handleSubmit}>Apply</ApplyBtn>
                  </Box>
                </PetSelectItem>
              </StyledMenuList>
            </Portal>
          </Menu>
        </FormControl>
      </PetNumInputContainer>
    </>
  );
};

export default PetNumInput;
