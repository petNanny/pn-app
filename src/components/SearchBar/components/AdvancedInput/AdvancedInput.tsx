import { Box, Menu, Stack, FormControl, useMediaQuery, Portal } from "@chakra-ui/react";
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

const AdvancedInput = ({ formik }: AdvancedInputProps) => {
  const [isNoDog, setIsNoDog] = useState(false);
  const [isNoChildren, setIsNoChildren] = useState(false);
  const [isFencedBackyard, setIsFencedBackyard] = useState(false);
  const [advancedFilterNum, setAdvancedFilterNum] = useState(0);
  const [noDogCount, setNoDogCount] = useState(0);
  const [noChildrenCount, setNoChildrenCount] = useState(0);
  const [fencedBackyardCount, setFencedBackyardCount] = useState(0);

  useEffect(() => {
    setAdvancedFilterNum(noDogCount + noChildrenCount + fencedBackyardCount);
  });

  const handleText1 = () => {
    setIsNoDog(!isNoDog);
  };
  useEffect(() => {
    if (!isNoDog) {
      setNoDogCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isNoDog) {
      setNoDogCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isNoDog, setNoDogCount]);

  const handleText2 = () => {
    setIsNoChildren(!isNoChildren);
  };
  useEffect(() => {
    if (!isNoChildren) {
      setNoChildrenCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isNoChildren) {
      setNoChildrenCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isNoChildren, setNoChildrenCount]);

  const handleText3 = () => {
    setIsFencedBackyard(!isFencedBackyard);
  };
  useEffect(() => {
    if (!isFencedBackyard) {
      setFencedBackyardCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }
    if (isFencedBackyard) {
      setFencedBackyardCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [isFencedBackyard, setFencedBackyardCount]);

  const handleAdvancedFormReset = () => {
    setNoDogCount(0);
    setNoChildrenCount(0);
    setFencedBackyardCount(0);
    setIsNoDog(false);
    setIsNoChildren(false);
    setIsFencedBackyard(false);
    formik.values.noDogs = false;
    formik.values.noChildren = false;
    formik.values.fencedBackyard = false;
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
                  <Box data-testid="advancedInput">{advancedFilterNum} advanced filter(s)</Box>
                </Box>
                <MenuBtnIcon as={MdArrowDropDown} />
              </MenuBtnInBox>
            </MenuBtn>
            <Portal>
              <StyledMenuList>
                <MenuTitle>General</MenuTitle>
                <Box>
                  <Stack>
                    <StyledCheckbox
                      isChecked={isNoDog}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        formik.handleChange(e);
                        handleText1();
                      }}
                      value={formik.values.noDogs}
                      name="noDogs"
                      data-testid="advancedInputNoDogs"
                    >
                      <AdvancedCheckItemText>Sitter has no dogs</AdvancedCheckItemText>
                    </StyledCheckbox>
                    <StyledCheckbox
                      isChecked={isNoChildren}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        formik.handleChange(e);
                        handleText2();
                      }}
                      value={formik.values.noChildren}
                      name="noChildren"
                      data-testid="advancedInputNoChildren"
                    >
                      <AdvancedCheckItemText>Sitter has no children</AdvancedCheckItemText>
                    </StyledCheckbox>
                    <StyledCheckbox
                      isChecked={isFencedBackyard}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        formik.handleChange(e);
                        handleText3();
                      }}
                      value={formik.values.fencedBackyard}
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
                    <ApplyBtn onClick={formik.handleSubmit}>Apply</ApplyBtn>
                  </Box>
                </ButtonsBox>
              </StyledMenuList>
            </Portal>
          </Menu>
        </FormControl>
      </AdvancedInputContainer>
    </>
  );
};

export default AdvancedInput;
