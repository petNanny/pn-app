import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const AdditionalServicesForm = () => {
  return (
    <FormWrapper title="Additional services">
      <CheckboxGroup colorScheme="green" size="lg">
        <Stack color="#747474" spacing="4">
          <Checkbox value="pickup">Pick up / drop off</Checkbox>
          <Checkbox value="supervision">Constant supervision</Checkbox>
          <Checkbox value="EmergeTransport">Emergency transport</Checkbox>
          <Checkbox value="oralMedication">I can administer oral medications</Checkbox>
          <Checkbox value="injectedMedication">I can administer injected medications</Checkbox>
          <Checkbox value="firstAid">First Aid and CPR for pets</Checkbox>
          <Checkbox value="Grooming">Grooming</Checkbox>
          <Checkbox value="dogTraining">Dog training</Checkbox>
        </Stack>
      </CheckboxGroup>
    </FormWrapper>
  );
};

export default AdditionalServicesForm;
