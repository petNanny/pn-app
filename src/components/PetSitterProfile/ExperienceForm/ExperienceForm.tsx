import { Flex, Button } from "@chakra-ui/react";
import ExperienceDetailForm from "./ExperienceDetailForm/ExperienceDetailForm";
import LanguageForm from "./LanguageForm/LanguageForm";

const ExperienceForm = () => {
  return (
    <Flex flexDirection="column" width="100%" gap="8">
      <ExperienceDetailForm />
      <LanguageForm />
      <Button backgroundColor="#00C38A" color="#ffffff" height="50px">
        Save
      </Button>
    </Flex>
  );
};

export default ExperienceForm;
