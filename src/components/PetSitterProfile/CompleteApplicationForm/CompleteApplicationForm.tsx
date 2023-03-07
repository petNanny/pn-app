import { Text, Flex } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { FcHighPriority } from "react-icons/fc";

const CompleteApplicationForm = () => {
  return (
    <FormWrapper title="Sitter application">
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">
          Please add a detailed description of your experience and what you offer
        </Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">
          Please add at least 5 pictures of yourself with pets to your gallery
        </Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">Please add your pay out information</Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">Please add a profile picture</Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">Please provide your address</Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">Please select at least one service</Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
      <Flex>
        <FcHighPriority size="28px" />
        <Text color="#747474">Write an eye catching headline</Text>
        <Text color="#00afed" cursor="pointer">
          Add
        </Text>
      </Flex>
    </FormWrapper>
  );
};

export default CompleteApplicationForm;
