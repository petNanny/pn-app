import { Flex, Button } from "@chakra-ui/react";
import ServicesForm from "./ServicesForm/ServicesForm";
import AdditionalServicesForm from "./AdditionalServicesForm/AdditionalServicesForm";
import CancellationPolicyForm from "./CancellationPolicyForm/CancellationPolicyForm";

const PetServiceForm = () => {
  return (
    <Flex flexDirection="column" gap="8" width="100%">
      <ServicesForm />
      <AdditionalServicesForm />
      <CancellationPolicyForm />
      <Button backgroundColor="#00C38A" color="#ffffff" height="50px">
        Save
      </Button>
    </Flex>
  );
};

export default PetServiceForm;
