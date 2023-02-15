import { useState, useEffect } from "react";
import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Button,
  chakra,
  MenuItem,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";

type PetNumFormValues = {
  smallDog: number;
  mediumDog: number;
  largeDog: number;
  giantDog: number;
  cat: number;
  smallAnimal: number;
  totalPets: number;
};

const PetTypeText = chakra(Text, {
  baseStyle: {
    color: "rgb(92, 92, 92)",
    marginBottom: "0.5rem",
    lineHeight: "30px",
  },
});

const PetSizeText = chakra(Text, {
  baseStyle: {
    color: "rgb(147, 147, 147)",
    fontSize: "0.9rem",
  },
});

const PetSelectItem = chakra(Box, {
  baseStyle: {
    display: "flex",
    padding: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const PetTypeContainer = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
  },
});

const PetSelectItemNum = chakra(Text, {
  baseStyle: {
    lineHeight: "40px",
    width: "2rem",
    height: "2rem",
    fontSize: "1.2rem",
    color: "rgb(116, 116, 116)",
    textAlign: "center",
  },
});

const ClearBtn = chakra(Button, {
  baseStyle: {
    fontSize: "1rem",
    color: "rgb(116, 116, 116)",
    backgroundColor: "transparent",
    fontWeight: "light",
    _hover: { bg: "none", textDecoration: "underline rgb(116, 116, 116)" },
  },
});

const IncreaseBtn = chakra(Button, {
  baseStyle: {
    border: "1px solid rgb(0, 195, 138)",
    color: "rgb(0, 195, 138)",
    background: "rgb(255, 255, 255)",
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    padding: "0",
    _hover: { background: "rgb(255, 255, 255)" },
  },
});

const DecreaseBtn = chakra(Button, {
  baseStyle: {
    border: "1px solid",
    color: "rgb(206, 206, 206)",
    background: "rgb(255, 255, 255)",
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    padding: "0",
    _hover: { background: "rgb(255, 255, 255)" },
  },
});

const colorChange = (value: number) => {
  let color;
  if (value > 0) {
    color = "rgb(0, 195, 138)";
  } else {
    color = "rgb(206, 206, 206)";
  }
  return color;
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
    pets: totalPetsNum,
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
          <MenuButton
            border="1px solid rgb(206, 206, 206)"
            borderRadius="4px"
            height="50px"
            minWidth="7rem"
            padding="10px"
            _expanded={{ borderColor: "rgb(0, 195, 138)" }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-around">
              <Box color="rgb(116, 116, 116)">
                {totalPetsNum > 1 ? (
                  <Text>{totalPetsNum} pets</Text>
                ) : (
                  <Text>{totalPetsNum} pet</Text>
                )}
              </Box>
              <Icon as={MdArrowDropDown} fontSize="24px" color="rgb(116, 116, 116)" />
            </Box>
          </MenuButton>
          <MenuList padding="0" width="400px" borderColor="rgb(206, 206, 206)">
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Small Dog</PetTypeText>
                <PetSizeText>0-10 kg</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(smallDogNum)}
                  color={colorChange(smallDogNum)}
                  onClick={() => handleDecreasePet(smallDogNum, setSmallDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{smallDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(smallDogNum, setSmallDogNum)}>
                  +
                </IncreaseBtn>
              </Box>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Medium Dog</PetTypeText>
                <PetSizeText>10-20 kg</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(mediumDogNum)}
                  color={colorChange(mediumDogNum)}
                  onClick={() => handleDecreasePet(mediumDogNum, setMediumDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{mediumDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(mediumDogNum, setMediumDogNum)}>
                  +
                </IncreaseBtn>
              </Box>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Large Dog</PetTypeText>
                <PetSizeText>20-40 kg</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(largeDogNum)}
                  color={colorChange(largeDogNum)}
                  onClick={() => handleDecreasePet(largeDogNum, setLargeDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{largeDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(largeDogNum, setLargeDogNum)}>
                  +
                </IncreaseBtn>
              </Box>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Giant Dog</PetTypeText>
                <PetSizeText>+40 kg</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(giantDogNum)}
                  color={colorChange(giantDogNum)}
                  onClick={() => handleDecreasePet(giantDogNum, setGiantDogNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{giantDogNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(giantDogNum, setGiantDogNum)}>
                  +
                </IncreaseBtn>
              </Box>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Cat</PetTypeText>
                <PetSizeText>All</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(catNum)}
                  color={colorChange(catNum)}
                  onClick={() => handleDecreasePet(catNum, setCatNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{catNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(catNum, setCatNum)}>+</IncreaseBtn>
              </Box>
            </PetSelectItem>
            <PetSelectItem>
              <PetTypeContainer>
                <PetTypeText>Small Animal</PetTypeText>
                <PetSizeText>Bird, rabbit, ferret</PetSizeText>
              </PetTypeContainer>
              <Box display="flex" flexDirection="row">
                <DecreaseBtn
                  borderColor={colorChange(smallAnimalNum)}
                  color={colorChange(smallAnimalNum)}
                  onClick={() => handleDecreasePet(smallAnimalNum, setSmallAnimalNum)}
                >
                  -
                </DecreaseBtn>
                <PetSelectItemNum>{smallAnimalNum}</PetSelectItemNum>
                <IncreaseBtn onClick={() => handleIncreasePet(smallAnimalNum, setSmallAnimalNum)}>
                  +
                </IncreaseBtn>
              </Box>
            </PetSelectItem>
            {/* {list.map((item) => {
              return (
                <PetSelectItem key={item.id}>
                  <PetTypeContainer>
                    <PetTypeText>{item.petType}</PetTypeText>
                    <PetSizeText>{item.petSize}</PetSizeText>
                  </PetTypeContainer>
                  <Box display="flex" flexDirection="row">
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
                  </Box>
                </PetSelectItem>
              );
            })} */}
            <PetSelectItem>
              <ClearBtn padding="0" onClick={handlePetsClear}>
                Clear
              </ClearBtn>
              <Box>
                <MenuItem
                  fontSize="1rem"
                  color="rgb(0, 195, 138)"
                  backgroundColor="transparent"
                  fontWeight="light"
                  padding="0"
                  marginRight="auto"
                  _hover={{
                    background: "none",
                    textDecoration: "underline rgb(0, 195, 138)",
                  }}
                  onClick={handlePetNumSubmit(onPetNumSubmit)}
                >
                  Apply
                </MenuItem>
              </Box>
            </PetSelectItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default PetNumInput;
