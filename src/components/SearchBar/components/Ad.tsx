import {
  Box,
  chakra,
  Checkbox,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type AdvancedFormValues = {
  "Sitter has no dogs": boolean;
  "Sitter has no children": boolean;
  "Sitter has a fully fenced backyard": boolean;
};

// type AdvancedFormCheckBoxNames =
//   | "Sitter has no dogs"
//   | "Sitter has no children"
//   | "Sitter has a fully fenced backyard";

const AdvancedCheckItemText = chakra(Text, {
  baseStyle: {
    lineHeight: "30px",
    paddingLeft: "0.2rem",
    color: "rgb(116, 116, 116)",
    fontSize: "16px",
  },
});

// const advancedCheckList = [
//   { id: 1, content: "Sitter has no dogs" },
//   { id: 2, content: "Sitter has no children" },
//   { id: 3, content: "Sitter has a fully fenced backyard" },
// ];

const AdvancedInput = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [activeItemsCount1, setActiveItemsCount1] = useState(0);
  const [activeItemsCount2, setActiveItemsCount2] = useState(0);
  const [activeItemsCount3, setActiveItemsCount3] = useState(0);

  useEffect(() => {
    setActiveItemsCount(activeItemsCount1 + activeItemsCount2 + activeItemsCount3);
  });

  // const handleText = () => {
  //   setIsActive(!isActive);
  // };
  // useEffect(() => {
  //   if (!isActive) {
  //     setActiveItemsCount((prevCount) => {
  //       if (prevCount !== 0) {
  //         return prevCount - 1;
  //       }
  //       return prevCount;
  //     });
  //   }
  //   if (isActive) {
  //     setActiveItemsCount((prevCount) => {
  //       return prevCount + 1;
  //     });
  //   }
  // }, [isActive, setActiveItemsCount]);

  const handleText1 = () => {
    setIsChecked1(!isChecked1);
  };
  useEffect(() => {
    if (!isChecked1) {
      setActiveItemsCount1((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isChecked1) {
      setActiveItemsCount1((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isChecked1, setActiveItemsCount1]);

  const handleText2 = () => {
    setIsChecked2(!isChecked2);
  };
  useEffect(() => {
    if (!isChecked2) {
      setActiveItemsCount2((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isChecked2) {
      setActiveItemsCount2((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isChecked2, setActiveItemsCount2]);

  const handleText3 = () => {
    setIsChecked3(!isChecked3);
  };
  useEffect(() => {
    if (!isChecked3) {
      setActiveItemsCount3((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isChecked3) {
      setActiveItemsCount3((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isChecked3, setActiveItemsCount3]);

  const {
    handleSubmit: handleAdvanceInputSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      "Sitter has no dogs": false,
      "Sitter has no children": false,
      "Sitter has a fully fenced backyard": false,
    },
  });

  const handleAdvancedFormReset = () => {
    reset();
    setActiveItemsCount1(0);
    setActiveItemsCount2(0);
    setActiveItemsCount3(0);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  const onAdvancedSubmit: SubmitHandler<AdvancedFormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
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
              <Box color="rgb(116, 116, 116)">
                <Box>{activeItemsCount} advanced filters</Box>
              </Box>
              <Icon as={MdArrowDropDown} fontSize="24px" color="rgb(116, 116, 116)" />
            </Box>
          </MenuButton>
          <MenuList padding="0" width="400px" borderColor="rgb(206, 206, 206)">
            <Box padding="1rem">
              <Text color="rgb(147, 147, 147)" marginBottom="0.5rem" lineHeight="30px">
                General
              </Text>
              <Box>
                <Stack spacing="1rem">
                  {/* {advancedCheckList.map((item) => {
                    return (
                      <Controller
                        control={control}
                        name={item.content as AdvancedFormCheckBoxNames}
                        key={item.id}
                        defaultValue={false}
                        render={({ field: { onChange, value, ref } }) => (
                          <Checkbox
                            margin="0"
                            size="lg"
                            colorScheme="white"
                            iconColor="rgb(0, 195, 138)"
                            sx={{
                              "> span: first-of-type": {
                                boxShadow: "unset",
                              },
                              "> .[date-checked]": { borderColor: "rgb(0, 195, 138)" },
                            }}
                            _hover={{ borderColor: "rgb(0, 195, 138)" }}
                            onChange={(e) => {
                              onChange(e);
                              // handleText();
                            }}
                            ref={ref}
                            isChecked={value}
                          >
                            <AdvancedCheckItemText>{item.content}</AdvancedCheckItemText>
                          </Checkbox>
                        )}
                      />
                    );
                  })} */}
                  <Controller
                    control={control}
                    name="Sitter has no dogs"
                    defaultValue={false}
                    render={({ field: { onChange, value, ref } }) => (
                      <Checkbox
                        margin="0"
                        size="lg"
                        colorScheme="white"
                        iconColor="rgb(0, 195, 138)"
                        sx={{ "> span: first-of-type": { boxShadow: "unset" } }}
                        _hover={{ borderColor: "rgb(0, 195, 138)" }}
                        onChange={(e) => {
                          onChange(e);
                          handleText1();
                        }}
                        ref={ref}
                        isChecked={value}
                      >
                        <AdvancedCheckItemText>Sitter has no dogs</AdvancedCheckItemText>
                      </Checkbox>
                    )}
                  />
                  <Controller
                    control={control}
                    name="Sitter has no children"
                    defaultValue={false}
                    render={({ field: { onChange, value, ref } }) => (
                      <Checkbox
                        margin="0"
                        size="lg"
                        colorScheme="white"
                        iconColor="rgb(0, 195, 138)"
                        sx={{ "> span: first-of-type": { boxShadow: "unset" } }}
                        _hover={{ borderColor: "rgb(0, 195, 138)" }}
                        onChange={(e) => {
                          onChange(e);
                          handleText2();
                        }}
                        ref={ref}
                        isChecked={value}
                      >
                        <AdvancedCheckItemText>Sitter has no children</AdvancedCheckItemText>
                      </Checkbox>
                    )}
                  />
                  <Controller
                    control={control}
                    name="Sitter has a fully fenced backyard"
                    defaultValue={false}
                    render={({ field: { onChange, value, ref } }) => (
                      <Checkbox
                        margin="0"
                        size="lg"
                        colorScheme="white"
                        iconColor="rgb(0, 195, 138)"
                        sx={{ "> span: first-of-type": { boxShadow: "unset" } }}
                        _hover={{ borderColor: "rgb(0, 195, 138)" }}
                        onChange={(e) => {
                          onChange(e);
                          handleText3();
                        }}
                        ref={ref}
                        isChecked={value}
                      >
                        <AdvancedCheckItemText>
                          Sitter has a fully fenced backyard
                        </AdvancedCheckItemText>
                      </Checkbox>
                    )}
                  />
                </Stack>
              </Box>
              <Box display="flex" justifyContent="space-between" paddingTop="1rem">
                <Box>
                  <Button
                    padding="0"
                    fontSize="1rem"
                    color="rgb(116, 116, 116)"
                    backgroundColor="transparent"
                    fontWeight="light"
                    _hover={{ bg: "none", textDecoration: "underline rgb(116, 116, 116)" }}
                    onClick={handleAdvancedFormReset}
                  >
                    Clear
                  </Button>
                </Box>
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
                    onClick={handleAdvanceInputSubmit(onAdvancedSubmit)}
                  >
                    Apply
                  </MenuItem>
                </Box>
              </Box>
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default AdvancedInput;
