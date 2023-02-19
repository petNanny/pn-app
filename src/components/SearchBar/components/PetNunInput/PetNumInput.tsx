import { useState, useEffect } from "react";
import { Box, Menu, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
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

type PetNumFormValues = {
  smallDog: number;
  mediumDog: number;
  largeDog: number;
  giantDog: number;
  cat: number;
  smallAnimal: number;
  totalPets: number;
};

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
  });

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

  const { handleSubmit: handlePetNumSubmit } = useForm({
    defaultValues: {
      smallDog: smallDogNum,
      mediumDog: mediumDogNum,
      largeDog: largeDogNum,
      giantDog: giantDogNum,
      cat: catNum,
      smallAnimal: smallAnimalNum,
      totalPets: totalPetsNum,
    },
  });

  const submitPetNumMessage = {
    smallDog: smallDogNum,
    mediumDog: mediumDogNum,
    largeDog: largeDogNum,
    giantDog: giantDogNum,
    cat: catNum,
    smallAnimal: smallAnimalNum,
    totalPets: totalPetsNum,
  };

  const onPetNumSubmit: SubmitHandler<PetNumFormValues> = () => {
    console.log(submitPetNumMessage);
  };

  // const list = [
  //   {
  //     id: 1,
  //     petType: "Small Dog",
  //     petSize: "0-10 kg",
  //     petItemNum: smallDogNum,
  //     handleDecreasePet: handleDecreasePet(smallDogNum, setSmallDogNum),
  //     handleIncreasePet: handleIncreasePet(smallDogNum, setSmallDogNum),
  //   },
  //   {
  //     id: 2,
  //     petType: "Medium Dog",
  //     petSize: "10-20 kg",
  //     petItemNum: mediumDogNum,
  //     handleDecreasePet: handleDecreasePet(mediumDogNum, setMediumDogNum),
  //     handleIncreasePet: handleIncreasePet(mediumDogNum, setMediumDogNum),
  //   },
  // ];

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
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Small Dog</PetTypeText>
                <PetSizeText>0-10 kg</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={smallDogNum}
                  onClick={() => handleDecreasePet(smallDogNum, setSmallDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{smallDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(smallDogNum, setSmallDogNum)}>
                  +
                </IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Medium Dog</PetTypeText>
                <PetSizeText>10-20 kg</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={mediumDogNum}
                  onClick={() => handleDecreasePet(mediumDogNum, setMediumDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{mediumDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(mediumDogNum, setMediumDogNum)}>
                  +
                </IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Large Dog</PetTypeText>
                <PetSizeText>20-40 kg</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={largeDogNum}
                  onClick={() => handleDecreasePet(largeDogNum, setLargeDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{largeDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(largeDogNum, setLargeDogNum)}>
                  +
                </IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Giant Dog</PetTypeText>
                <PetSizeText>+40 kg</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={giantDogNum}
                  onClick={() => handleDecreasePet(giantDogNum, setGiantDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{giantDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(giantDogNum, setGiantDogNum)}>
                  +
                </IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Cat</PetTypeText>
                <PetSizeText>All</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={catNum}
                  onClick={() => handleDecreasePet(catNum, setCatNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{catNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(catNum, setCatNum)}>+</IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Small Animal</PetTypeText>
                <PetSizeText>Bird, rabbit, ferret</PetSizeText>
              </PetTypeContainer>
              <PetNumSetBox>
                <DecreaseBtn
                  changeColor={smallAnimalNum}
                  onClick={() => handleDecreasePet(smallAnimalNum, setSmallAnimalNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{smallAnimalNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(smallAnimalNum, setSmallAnimalNum)}>
                  +
                </IncreaseBtn>
              </PetNumSetBox>
            </PetSelectItem>
            {/* {list.map((item) => {
              return (
                <PetSelectItem key={item.id}>
                  <PetTypeContainer>
                    <PetTypeText>{item.petType}</PetTypeText>
                    <PetSizeText>{item.petSize}</PetSizeText>
                  </PetTypeContainer>
                  <PetNumSetBox>
                    <DecreaseBtn
                      onClick={() => {
                        item.handleDecreasePet;
                      }}
                    >
                      -
                    </DecreaseBtn>
                    <PetSelectItemNum>{item.petItemNum}</PetSelectItemNum>
                    <IncreaseBtn
                      onClick={() => {
                        item.handleIncreasePet;
                      }}
                    >
                      +
                    </IncreaseBtn>
                  </PetNumSetBox>
                </PetSelectItem>
              );
            })} */}
            <PetSelectItem>
              <ClearBtn onClick={handlePetsClear}>Clear</ClearBtn>
              <Box>
                <ApplyBtn onClick={handlePetNumSubmit(onPetNumSubmit)}>Apply</ApplyBtn>
              </Box>
            </PetSelectItem>
          </StyledMenuList>
        </Menu>
      </Box>
    </>
  );
};

export default PetNumInput;
