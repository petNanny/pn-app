import { useState, useEffect } from "react";
import { Box, Menu, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
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
} from "./styledPetNumInput";
import { useFormik } from "formik";

const PetNumInput = () => {
  const [totalPetsNum, setTotalPetsNum] = useState(0);
  const [smallDogNum, setSmallDogNum] = useState(0);
  const [mediumDogNum, setMediumDogNum] = useState(0);
  const [largeDogNum, setLargeDogNum] = useState(0);
  const [giantDogNum, setGiantDogNum] = useState(0);
  const [catNum, setCatNum] = useState(0);
  const [smallAnimalNum, setSmallAnimalNum] = useState(0);

  useEffect(() => {
    setTotalPetsNum(
      smallDogNum + mediumDogNum + largeDogNum + giantDogNum + catNum + smallAnimalNum
    );
  }, [smallDogNum, mediumDogNum, largeDogNum, giantDogNum, catNum, smallAnimalNum]);

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

  const formik = useFormik({
    initialValues: {
      smallDog: 0,
      mediumDog: 0,
      largeDog: 0,
      giantDog: 0,
      cat: 0,
      smallAnimal: 0,
      totalPets: 0,
    },
    onSubmit: (values) => {
      values.smallDog = smallDogNum;
      values.mediumDog = mediumDogNum;
      values.largeDog = largeDogNum;
      values.giantDog = giantDogNum;
      values.cat = catNum;
      values.smallAnimal = smallAnimalNum;
      values.totalPets = totalPetsNum;
      console.log(values);
    },
  });

  const list = [
    {
      id: 1,
      petType: "Small Dog",
      petSize: "0-10 kg",
      petItemNum: smallDogNum,
      handleDecreasePet: () => handleDecreasePet(smallDogNum, setSmallDogNum),
      handleIncreasePet: () => handleIncreasePet(smallDogNum, setSmallDogNum),
    },
    {
      id: 2,
      petType: "Medium Dog",
      petSize: "10-20 kg",
      petItemNum: mediumDogNum,
      handleDecreasePet: () => handleDecreasePet(mediumDogNum, setMediumDogNum),
      handleIncreasePet: () => handleIncreasePet(mediumDogNum, setMediumDogNum),
    },
    {
      id: 3,
      petType: "Large Dog",
      petSize: "20-40 kg",
      petItemNum: largeDogNum,
      handleDecreasePet: () => handleDecreasePet(largeDogNum, setLargeDogNum),
      handleIncreasePet: () => handleIncreasePet(largeDogNum, setLargeDogNum),
    },
    {
      id: 4,
      petType: "Giant Dog",
      petSize: "+40 kg",
      petItemNum: giantDogNum,
      handleDecreasePet: () => handleDecreasePet(giantDogNum, setGiantDogNum),
      handleIncreasePet: () => handleIncreasePet(giantDogNum, setGiantDogNum),
    },
    {
      id: 5,
      petType: "Cat",
      petSize: "All",
      petItemNum: catNum,
      handleDecreasePet: () => handleDecreasePet(catNum, setCatNum),
      handleIncreasePet: () => handleIncreasePet(catNum, setCatNum),
    },
    {
      id: 6,
      petType: "Small Animal",
      petSize: "Bird, rabbit, ferret, ...",
      petItemNum: smallAnimalNum,
      handleDecreasePet: () => handleDecreasePet(smallAnimalNum, setSmallAnimalNum),
      handleIncreasePet: () => handleIncreasePet(smallAnimalNum, setSmallAnimalNum),
    },
  ];

  return (
    <>
      <Box>
        <Menu autoSelect={false}>
          <StyledMenuButton>
            <BoxInMenuButton>
              <Box>
                {totalPetsNum > 1 ? (
                  <Text>{totalPetsNum} pets</Text>
                ) : (
                  <Text>{totalPetsNum} pet</Text>
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
                    <DecreaseBtn color={item.petItemNum} onClick={item.handleDecreasePet}>
                      -
                    </DecreaseBtn>
                    <PetSelectItemNum>{item.petItemNum}</PetSelectItemNum>
                    <IncreaseBtn onClick={item.handleIncreasePet}>+</IncreaseBtn>
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
        </Menu>
      </Box>
    </>
  );
};

export default PetNumInput;
