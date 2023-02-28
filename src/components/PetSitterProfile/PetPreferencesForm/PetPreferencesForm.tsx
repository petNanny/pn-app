import { Stack, Checkbox, Text } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";

const PetPreferencesForm = () => {
  return (
    <FormWrapper title="Pet preferences">
      <Stack spacing="4">
        <Stack spacing="4">
          <Text color="#939393">Accepted dog ages</Text>
          <Checkbox color="#747474" size="lg">{`Puppies(< 1 year)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Young (1-3 years)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Adult (3-8 years)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Senior (8+ years)`}</Checkbox>
        </Stack>
        <Stack spacing="4">
          <Text color="#939393">Accepted dog sizes</Text>
          <Checkbox color="#747474" size="lg">{`Small(0-7kg)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Medium(8-18kg)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Large(18-45kg)`}</Checkbox>
          <Checkbox color="#747474" size="lg">{`Giant(45+ kg)`}</Checkbox>
        </Stack>
        <Stack spacing="4">
          <Text color="#939393">Other pet types</Text>
          <Checkbox color="#747474" size="lg">
            Cats
          </Checkbox>
          <Checkbox color="#747474" size="lg">
            Ferret
          </Checkbox>
          <Checkbox color="#747474" size="lg">
            Small animals (rodents, rabbits, birds)
          </Checkbox>
        </Stack>
      </Stack>
    </FormWrapper>
  );
};

export default PetPreferencesForm;
