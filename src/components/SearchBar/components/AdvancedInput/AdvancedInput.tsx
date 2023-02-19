import { Box, Menu, Stack } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  AdvancedCheckItemText,
  MenuBtn,
  MenuBtnInBox,
  MenuBtnIcon,
  StyledMenuList,
  MenuTitle,
  StyledCheckbox,
  ButtonsBox,
  ClearBtn,
  ApplyBtn,
} from "./styledAdvancedInput";

type AdvancedFormValues = {
  "Sitter has no dogs": boolean;
  "Sitter has no children": boolean;
  "Sitter has a fully fenced backyard": boolean;
};

// type AdvancedFormCheckBoxNames =
//   | "Sitter has no dogs"
//   | "Sitter has no children"
//   | "Sitter has a fully fenced backyard";

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
          <MenuBtn>
            <MenuBtnInBox>
              <Box>
                <Box>{activeItemsCount} advanced filter(s)</Box>
              </Box>
              <MenuBtnIcon as={MdArrowDropDown} />
            </MenuBtnInBox>
          </MenuBtn>
          <StyledMenuList>
            <MenuTitle>General</MenuTitle>
            <Box>
              <Stack>
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
                    <StyledCheckbox
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        onChange(e);
                        handleText1();
                      }}
                      ref={ref}
                      isChecked={value}
                    >
                      <AdvancedCheckItemText>Sitter has no dogs</AdvancedCheckItemText>
                    </StyledCheckbox>
                  )}
                />
                <Controller
                  control={control}
                  name="Sitter has no children"
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <StyledCheckbox
                      _hover={{ borderColor: "rgb(0, 195, 138)" }}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        onChange(e);
                        handleText2();
                      }}
                      ref={ref}
                      isChecked={value}
                    >
                      <AdvancedCheckItemText>Sitter has no children</AdvancedCheckItemText>
                    </StyledCheckbox>
                  )}
                />
                <Controller
                  control={control}
                  name="Sitter has a fully fenced backyard"
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <StyledCheckbox
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        onChange(e);
                        handleText3();
                      }}
                      ref={ref}
                      isChecked={value}
                    >
                      <AdvancedCheckItemText>
                        Sitter has a fully fenced backyard
                      </AdvancedCheckItemText>
                    </StyledCheckbox>
                  )}
                />
              </Stack>
            </Box>
            <ButtonsBox>
              <Box>
                <ClearBtn onClick={handleAdvancedFormReset}>Clear</ClearBtn>
              </Box>
              <Box>
                <ApplyBtn onClick={handleAdvanceInputSubmit(onAdvancedSubmit)}>Apply</ApplyBtn>
              </Box>
            </ButtonsBox>
          </StyledMenuList>
        </Menu>
      </Box>
    </>
  );
};

export default AdvancedInput;
