import { useState } from "react";
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
} from "@chakra-ui/react";
import { MdOutlineSearch, MdArrowDropDown } from "react-icons/md";
import homeDogBoarding from "../assets/Icons/homeDogBoarding.svg";
import doggyDayCare from "../assets/Icons/doggyDayCare.svg";
import dogWalking from "../assets/Icons/dogWalking.svg";
import homeVisits from "../assets/Icons/homeVisits.svg";
import houseSitting from "../assets/Icons/houseSitting.svg";

const SearchBar = () => {
  const [serviceText, setServiceText] = useState(<Box>Looking for</Box>);
  const [serviceH1, setServiceH1] = useState("");
  const [serviceDetail, setServiceDetail] = useState("");

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
          fontSize="2rem"
          color="rgb(79, 79, 79)"
          fontWeight="normal"
          display="inline-block"
          lineHeight="40px"
          marginBottom="1rem"
        >
          {serviceH1} Adelaide SA, Australia
        </Heading>
        <Heading
          as="h2"
          fontSize="1.5rem"
          color="rgb(116, 116, 116)"
          fontWeight="normal"
          display="inline"
          marginLeft="1rem"
          lineHeight="40px"
        >
          {serviceDetail}
        </Heading>
        <HStack spacing="1rem" marginBottom="1rem">
          <Box minWidth="30rem">
            <InputGroup>
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
          <Box minWidth="12rem">
            <Menu autoSelect={false}>
              <MenuButton
                border="1px solid rgb(206, 206, 206)"
                borderRadius="4px"
                height="50px"
                padding="10px"
                _expanded={{ borderColor: "rgb(0, 195, 138)" }}
              >
                <Box display="flex" alignItems="center">
                  <Box color="rgb(116, 116, 116)">{serviceText}</Box>
                  <Icon
                    as={MdArrowDropDown}
                    fontSize="24px"
                    color="rgb(116, 116, 116)"
                    marginLeft="5px"
                  />
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
        </HStack>
      </Box>
    </>
  );
};

export default SearchBar;
