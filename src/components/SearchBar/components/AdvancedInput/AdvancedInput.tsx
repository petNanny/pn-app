import { Box, Menu, Stack, FormControl, useMediaQuery } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  AdvancedInputContainer,
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
  StyledFormLabel,
} from "./styledAdvancedInput";
import { FormikProps } from "formik";
import { SearchFormValues } from "../../../../interfaces/searchForm";
interface AdvancedInputProps {
  formik: FormikProps<SearchFormValues>;
}

const AdvancedInput = (props: AdvancedInputProps) => {
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

  const handleAdvancedFormReset = () => {
    props.formik.resetForm;
    setActiveItemsCount1(0);
    setActiveItemsCount2(0);
    setActiveItemsCount3(0);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
  };

  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: true, fallback: false });
  const [isMobile] = useMediaQuery("(max-width: 1024px)", { ssr: true, fallback: false });

  return (
    <>
      <AdvancedInputContainer>
        <FormControl>
          {isMobile ? <StyledFormLabel>Advanced filters</StyledFormLabel> : null}
          <Menu matchWidth={isTablet ? true : false} autoSelect={false}>
            <MenuBtn>
              <MenuBtnInBox>
                <Box>
                  <Box data-testid="advancedInput">{activeItemsCount} advanced filter(s)</Box>
                </Box>
                <MenuBtnIcon as={MdArrowDropDown} />
              </MenuBtnInBox>
            </MenuBtn>
            <StyledMenuList>
              <MenuTitle>General</MenuTitle>
              <Box>
                <Stack>
                  <StyledCheckbox
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      props.formik.handleChange(e);
                      handleText1();
                    }}
                    value={props.formik.values.noDogs}
                    name="noDogs"
                    data-testid="advancedInputNoDogs"
                  >
                    <AdvancedCheckItemText>Sitter has no dogs</AdvancedCheckItemText>
                  </StyledCheckbox>
                  <StyledCheckbox
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      props.formik.handleChange(e);
                      handleText2();
                    }}
                    value={props.formik.values.noChildren}
                    name="noChildren"
                    data-testid="advancedInputNoChildren"
                  >
                    <AdvancedCheckItemText>Sitter has no children</AdvancedCheckItemText>
                  </StyledCheckbox>
                  <StyledCheckbox
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                      props.formik.handleChange(e);
                      handleText3();
                    }}
                    value={props.formik.values.fencedBackyard}
                    name="fencedBackyard"
                  >
                    <AdvancedCheckItemText>
                      Sitter has a fully fenced backyard
                    </AdvancedCheckItemText>
                  </StyledCheckbox>
                </Stack>
              </Box>
              <ButtonsBox>
                <Box>
                  <ClearBtn onClick={handleAdvancedFormReset}>Clear</ClearBtn>
                </Box>
                <Box>
                  <ApplyBtn onClick={props.formik.handleSubmit}>Apply</ApplyBtn>
                </Box>
              </ButtonsBox>
            </StyledMenuList>
          </Menu>
        </FormControl>
      </AdvancedInputContainer>
    </>
  );
};

export default AdvancedInput;
