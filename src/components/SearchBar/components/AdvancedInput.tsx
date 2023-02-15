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
import { useState } from "react";

const AdvancedCheckItemText = chakra(Text, {
  baseStyle: {
    lineHeight: "30px",
    paddingLeft: "0.2rem",
    color: "rgb(116, 116, 116)",
    fontSize: "16px",
  },
});

const advancedCheckList = [
  { id: 1, content: "Sitter has no dogs" },
  { id: 2, content: "Sitter has no children" },
  { id: 3, content: "Sitter has a fully fenced backyard" },
];

const AdvancedInput = () => {
  const [advancedText, setAdvancedText] = useState(<Box>Advanced filters</Box>);

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
              <Box color="rgb(116, 116, 116)">{advancedText}</Box>
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
                  {advancedCheckList.map((item) => {
                    return (
                      <Checkbox
                        margin="0"
                        size="lg"
                        colorScheme="white"
                        iconColor="rgb(0, 195, 138)"
                        sx={{
                          "> span: first-of-type": {
                            boxShadow: "unset",
                          },
                          "[date-checked]": { borderColor: "rgb(0, 195, 138)" },
                        }}
                        key={item.id}
                        _hover={{ borderColor: "rgb(0, 195, 138)" }}
                      >
                        <AdvancedCheckItemText>{item.content}</AdvancedCheckItemText>
                      </Checkbox>
                    );
                  })}
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
