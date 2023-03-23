import { useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import ServicesForm from "./ServicesForm/ServicesForm";
import AdditionalServicesForm from "./AdditionalServicesForm/AdditionalServicesForm";
import CancellationPolicyForm from "./CancellationPolicyForm/CancellationPolicyForm";

const PetServiceForm = () => {
  const [service, setService] = useState();
  const [additonalService, setAdditonalService] = useState();
  const [policy, setPolicy] = useState("Flexible");

  const handleGetService = (service: any) => {
    setService(service);
  };

  const handleGetAdditionalService = (additonalService: any) => {
    setAdditonalService(additonalService);
  };

  const handleGetPolicy = (policy: any) => {
    setPolicy(policy);
    console.log("policy", policy);
  };

  return (
    <Flex flexDirection="column" gap="8" width="100%">
      <ServicesForm />
      <AdditionalServicesForm />
      <CancellationPolicyForm handleGetPolicy={handleGetPolicy} />
      <Button
        backgroundColor="#00C38A"
        color="#ffffff"
        height="50px"
        onClick={() => {
          handleGetPolicy(policy);
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default PetServiceForm;
