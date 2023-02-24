import { Box, Menu, Text, FormControl, useMediaQuery } from "@chakra-ui/react";
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

const PetNumInput = (props: PetNumInputProps) => {
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
    props.setSmallDogNum(0);
    props.setMediumDogNum(0);
    props.setLargeDogNum(0);
    props.setGiantDogNum(0);
    props.setCatNum(0);
    props.setSmallAnimalNum(0);
    props.setTotalPetsNum(0);
  };

  const list = [
    {
      id: 1,
      petType: "Small Dog",
      petSize: "0-10 kg",
      petItemNum: props.smallDogNum,
      handleDecreasePet: () => handleDecreasePet(props.smallDogNum, props.setSmallDogNum),
      handleIncreasePet: () => handleIncreasePet(props.smallDogNum, props.setSmallDogNum),
      increaseTestID: "smallDogIncrease",
      decreaseTestID: "smallDogDecrease",
    },
    {
      id: 2,
      petType: "Medium Dog",
      petSize: "10-20 kg",
      petItemNum: props.mediumDogNum,
      handleDecreasePet: () => handleDecreasePet(props.mediumDogNum, props.setMediumDogNum),
      handleIncreasePet: () => handleIncreasePet(props.mediumDogNum, props.setMediumDogNum),
      increaseTestID: "mediumDogIncrease",
      decreaseTestID: "mediumDogDecrease",
    },
    {
      id: 3,
      petType: "Large Dog",
      petSize: "20-40 kg",
      petItemNum: props.largeDogNum,
      handleDecreasePet: () => handleDecreasePet(props.largeDogNum, props.setLargeDogNum),
      handleIncreasePet: () => handleIncreasePet(props.largeDogNum, props.setLargeDogNum),
      increaseTestID: "largeDogIncrease",
      decreaseTestID: "largeDogDecrease",
    },
    {
      id: 4,
      petType: "Giant Dog",
      petSize: "+40 kg",
      petItemNum: props.giantDogNum,
      handleDecreasePet: () => handleDecreasePet(props.giantDogNum, props.setGiantDogNum),
      handleIncreasePet: () => handleIncreasePet(props.giantDogNum, props.setGiantDogNum),
      increaseTestID: "giantDogIncrease",
      decreaseTestID: "giantDogDecrease",
    },
    {
      id: 5,
      petType: "Cat",
      petSize: "All",
      petItemNum: props.catNum,
      handleDecreasePet: () => handleDecreasePet(props.catNum, props.setCatNum),
      handleIncreasePet: () => handleIncreasePet(props.catNum, props.setCatNum),
      increaseTestID: "catIncrease",
      decreaseTestID: "catDecrease",
    },
    {
      id: 6,
      petType: "Small Animal",
      petSize: "Bird, rabbit, ferret, ...",
      petItemNum: props.smallAnimalNum,
      handleDecreasePet: () => handleDecreasePet(props.smallAnimalNum, props.setSmallAnimalNum),
      handleIncreasePet: () => handleIncreasePet(props.smallAnimalNum, props.setSmallAnimalNum),
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
                  {props.totalPetsNum > 1 ? (
                    <Text data-testid="petNumInput">{props.totalPetsNum} pets</Text>
                  ) : (
                    <Text>{props.totalPetsNum} pet</Text>
                  )}
                </Box>
                <MenuBtnIcon as={MdArrowDropDown} />
              </BoxInMenuButton>
            </StyledMenuButton>
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
                  <ApplyBtn onClick={props.formik.handleSubmit}>Apply</ApplyBtn>
                </Box>
              </PetSelectItem>
            </StyledMenuList>
          </Menu>
        </FormControl>
      </PetNumInputContainer>
    </>
  );
};

export default PetNumInput;
