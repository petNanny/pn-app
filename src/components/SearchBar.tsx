import { useState, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Text,
  Img,
  Button,
  chakra,
} from "@chakra-ui/react";
import { MdOutlineSearch, MdArrowDropDown } from "react-icons/md";
import homeDogBoarding from "../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../assets/Icons/doggyDayCare.svg";
import dogWalking from "../assets/Icons/dogWalking.svg";
import homeVisits from "../assets/Icons/homeVisits.svg";
import houseSitting from "../assets/Icons/houseSitting.svg";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";

const Test = chakra(DatePicker);

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

const ApplyBtn = chakra(Button, {
  baseStyle: {
    fontSize: "1rem",
    color: "rgb(0, 195, 138)",
    backgroundColor: "transparent",
    fontWeight: "light",
    _hover: { bg: "none", textDecoration: "underline rgb(0, 195, 138)" },
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

const SearchBar = () => {
  const [serviceText, setServiceText] = useState(<Box>Looking for</Box>);
  const [serviceH1, setServiceH1] = useState("");
  const [serviceDetail, setServiceDetail] = useState("");
  const [dates, setDates] = useState<Value>(null);
  const [petsNum, setPetsNum] = useState<number | string>("pets");
  const [smallDogNum, setSmallDogNum] = useState(0);
  const [mediumDogNum, setMediumDogNum] = useState(0);
  const [largeDogNum, setLargeDogNum] = useState(0);
  const [giantDogNum, setGiantDogNum] = useState(0);
  const [catNum, setCatNum] = useState(0);
  const [smallAnimalNum, setSmallAnimalNum] = useState(0);

  useEffect(() => {
    setPetsNum(smallDogNum + mediumDogNum + largeDogNum + giantDogNum + catNum + smallAnimalNum);
  });

  const changeServiceText = (img: string, text: string) => {
    setServiceText(
      <Box height="50px" display="flex" alignItems="center">
        <Img src={img} height="24px" width="24px" opacity="0.63" margin="0 1rem 0 0.5rem" />
        <Text lineHeight="50px" marginRight="5px">
          {text}
        </Text>
      </Box>
    );
  };

  const changeServiceH1 = (value: string) => {
    setServiceH1(value);
  };

  const changeServiceDetail = (value: string) => {
    setServiceDetail(value);
  };

  const datePickerRef = useRef<any>();

  const handleDateClear = () => {
    setDates(null);
  };

  const handleDateApply = () => {
    datePickerRef.current.closeCalendar();
  };

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
    setPetsNum(0);
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
          {serviceH1} Adelaide SA, Australia
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
          <Box>
            <InputGroup minWidth="30rem">
              <InputLeftElement height="50px">
                <Icon
                  as={MdOutlineSearch}
                  fontSize="30px"
                  fontWeight="200"
                  color="rgb(116, 116, 116)"
                  marginLeft="5px"
                />
              </InputLeftElement>
              <Input
                placeholder="Suburb or Address"
                _placeholder={{ color: "rgb(116, 116, 116)" }}
                border="1px solid rgb(206, 206, 206)"
                borderRadius="4px"
                height="50px"
                width="100%"
                padding="10px 10px 10px 48px"
                _focusVisible={{ boxShadow: "none", border: "1px solid rgb(0, 195, 138)" }}
                color="rgb(116, 116, 116)"
              />
            </InputGroup>
          </Box>
          <Box>
            <Menu autoSelect={false}>
              <MenuButton
                border="1px solid rgb(206, 206, 206)"
                borderRadius="4px"
                height="50px"
                minWidth="12rem"
                padding="10px"
                _expanded={{ borderColor: "rgb(0, 195, 138)" }}
              >
                <Box display="flex" alignItems="center" justifyContent="space-around">
                  <Box color="rgb(116, 116, 116)">{serviceText}</Box>
                  <Icon as={MdArrowDropDown} fontSize="24px" color="rgb(116, 116, 116)" />
                </Box>
              </MenuButton>
              <MenuList padding="0" width="400px" borderColor="rgb(206, 206, 206)">
                <MenuOptionGroup type="radio">
                  <Box padding="1rem">
                    <Text color="rgb(147, 147, 147)">At the sitter&apos;s home</Text>
                  </Box>
                  <MenuDivider margin="0" borderColor="rgb(206, 206, 206)" />
                  <MenuItemOption
                    value="Dog boarding"
                    flexDirection="row-reverse"
                    padding="1rem"
                    onClick={() => {
                      changeServiceText(homeDogBoarding, "Dog boarding");
                      changeServiceH1("Dog Boarding");
                      changeServiceDetail("Overnight stay at the sitter's home.");
                    }}
                  >
                    <Box display="flex">
                      <Box height="24px" width="24px" margin="0 16px 0 8px">
                        <Img src={homeDogBoarding} marginTop="5px" opacity="0.63" />
                      </Box>
                      <Box>
                        <Text fontSize="1rem" color="rgb(116, 116, 116)">
                          Dog boarding
                        </Text>
                        <Text fontSize="0.9rem" color="rgb(147, 147, 147)">
                          24h stay, at the sitter&apos;s home
                        </Text>
                      </Box>
                    </Box>
                  </MenuItemOption>
                  <MenuItemOption
                    value="Doggy day care"
                    flexDirection="row-reverse"
                    padding="1rem"
                    onClick={() => {
                      changeServiceText(doggyDayCare, "Doggy day care");
                      changeServiceH1("Doggy Day Care");
                      changeServiceDetail("Daytime care for your dog at the sitter's home.");
                    }}
                  >
                    <Box display="flex">
                      <Box height="24px" width="24px" margin="0 16px 0 8px">
                        <Img src={doggyDayCare} marginTop="5px" opacity="0.63" />
                      </Box>
                      <Box>
                        <Text fontSize="1rem" color="rgb(116, 116, 116)">
                          Doggy day care
                        </Text>
                        <Text fontSize="0.9rem" color="rgb(147, 147, 147)">
                          Daytime care, at the sitter&apos;s home
                        </Text>
                      </Box>
                    </Box>
                  </MenuItemOption>
                  <Box padding="1rem">
                    <Text color="rgb(147, 147, 147)">At your home </Text>
                  </Box>
                  <MenuDivider margin="0" borderColor="rgb(206, 206, 206)" />
                  <MenuItemOption
                    value="Dog walking"
                    flexDirection="row-reverse"
                    padding="1rem"
                    onClick={() => {
                      changeServiceText(dogWalking, "Dog walking");
                      changeServiceH1("Dog Walking");
                      changeServiceDetail(
                        "An experienced dog walker will pick up your dog from your home for a 30 mins walk."
                      );
                    }}
                  >
                    <Box display="flex">
                      <Box height="24px" width="24px" margin="0 16px 0 8px">
                        <Img src={dogWalking} marginTop="5px" opacity="0.63" />
                      </Box>
                      <Box>
                        <Text fontSize="1rem" color="rgb(116, 116, 116)">
                          Dog walking
                        </Text>
                        <Text fontSize="0.9rem" color="rgb(147, 147, 147)">
                          Min. 30-minute walks
                        </Text>
                      </Box>
                    </Box>
                  </MenuItemOption>
                  <MenuItemOption
                    value="Home visits"
                    flexDirection="row-reverse"
                    padding="1rem"
                    onClick={() => {
                      changeServiceText(homeVisits, "Home visits");
                      changeServiceH1("Home Visits");
                      changeServiceDetail("Drop in visits at your home for your pet.");
                    }}
                  >
                    <Box display="flex">
                      <Box height="24px" width="24px" margin="0 16px 0 8px">
                        <Img src={homeVisits} marginTop="5px" opacity="0.63" />
                      </Box>
                      <Box>
                        <Text fontSize="1rem" color="rgb(116, 116, 116)">
                          Home visits
                        </Text>
                        <Text fontSize="0.9rem" color="rgb(147, 147, 147)">
                          Min. 30-minute visits in your home
                        </Text>
                      </Box>
                    </Box>
                  </MenuItemOption>
                  <MenuItemOption
                    value="House sitting"
                    flexDirection="row-reverse"
                    padding="1rem"
                    onClick={() => {
                      changeServiceText(houseSitting, "House sitting");
                      changeServiceH1("House Sitting");
                      changeServiceDetail(
                        "A sitter stays overnight in your home and cares for your pet."
                      );
                    }}
                  >
                    <Box display="flex">
                      <Box height="24px" width="24px" margin="0 16px 0 8px">
                        <Img src={houseSitting} marginTop="5px" opacity="0.63" />
                      </Box>
                      <Box>
                        <Text fontSize="1rem" color="rgb(116, 116, 116)">
                          House sitting
                        </Text>
                        <Text fontSize="0.9rem" color="rgb(147, 147, 147)">
                          24h stay, in your home
                        </Text>
                      </Box>
                    </Box>
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
          <Box
            minWidth="12rem"
            height="50px"
            cursor="pointer"
            sx={{
              ".rmdp-week-day": { color: "rgb(139, 152, 152)" },
              ".custom-input": {
                borderRadius: "4px",
                border: "1px solid rgb(206, 206, 206)",
                padding: "10px",
                height: "50px",
                textAlign: "center",
                color: "rgb(116, 116, 116)",
                cursor: "pointer",
                caretColor: "transparent",
              },
              ".custom-input::-webkit-input-placeholder": { color: "rgb(116, 116, 116)" },
              ".custom-input:focus": {
                outline: "none",
                border: "1px solid rgb(0, 195, 138)",
              },
              ".custom-calendar .rmdp-day": { color: "rgb(116, 116, 116)" },
              ".custom-calendar .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover": {
                backgroundColor: "rgb(240, 248, 255)",
                color: "rgb(116, 116, 116)",
              },
              ".custom-calendar .rmdp-range": {
                backgroundColor: "rgb(0, 195, 138)",
                color: "rgb(240, 248, 255)",
              },
              ".custom-calendar .rmdp-range.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover":
                {
                  backgroundColor: "rgb(0, 195, 138)",
                  color: "rgb(240, 248, 255)",
                },
              ".custom-calendar .rmdp-disabled": {
                color: "rgb(220, 224, 224)",
                backgroundColor: "white",
              },
              ".custom-calendar .rmdp-today span": {
                backgroundColor: "white",
                color: "rgb(116, 116, 116)",
                fontWeight: "bold",
              },
            }}
          >
            <Test
              value={dates}
              onChange={setDates}
              range
              minDate={new DateObject().subtract(0, "days")}
              placeholder="Start date   >   End date"
              inputClass="custom-input"
              ref={datePickerRef}
              className="custom-calendar"
            >
              <Box display="flex" justifyContent="space-between">
                <ClearBtn onClick={handleDateClear}>Clear</ClearBtn>
                <ApplyBtn onClick={handleDateApply}>Apply</ApplyBtn>
              </Box>
            </Test>
          </Box>
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
                  <Box color="rgb(116, 116, 116)" placeholder="petsNum">
                    {petsNum > 1 ? <Text>{petsNum} pets</Text> : <Text>{petsNum} pet</Text>}
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
                    <IncreaseBtn onClick={() => handleIncreasePet(catNum, setCatNum)}>
                      +
                    </IncreaseBtn>
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
                    <IncreaseBtn
                      onClick={() => handleIncreasePet(smallAnimalNum, setSmallAnimalNum)}
                    >
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
                  <ClearBtn onClick={handlePetsClear}>Clear</ClearBtn>
                  <ApplyBtn>Apply</ApplyBtn>
                </PetSelectItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default SearchBar;
