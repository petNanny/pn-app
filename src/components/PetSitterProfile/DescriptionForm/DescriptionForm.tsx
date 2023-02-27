import { Flex, Button } from "@chakra-ui/react";
import HeadLineForm from "./HeadLineForm/HeadLineForm";
import LongDescriptionForm from "./LongDescriptionForm/LongDescriptionForm";

const DescriptionForm = () => {
  return (
    <Flex flexDirection="column" gap="8" width="100%">
      <HeadLineForm />
      <LongDescriptionForm />
      <Button backgroundColor="#00C38A" color="#ffffff" height="50px">
        Save
      </Button>
    </Flex>
  );
};

export default DescriptionForm;
