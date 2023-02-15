import { Box, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";

const AddressInput = () => {
  return (
    <>
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
    </>
  );
};

export default AddressInput;
