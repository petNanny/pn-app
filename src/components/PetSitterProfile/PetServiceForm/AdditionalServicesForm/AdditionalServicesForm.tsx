import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const AdditionalServicesForm = (props: any) => {
  console.log(props.values);
  const handleUpdate = (value: any) => {
    if (props?.values?.includes(value.target.value)) {
      props.setFieldValue(
        "additionalService",
        props.values.filter((service: any) => service !== value.target.value)
      );
    } else {
      props.setFieldValue("additionalService", [...props.values, value.target.value]);
    }
  };
  return (
    <FormWrapper title="Additional services">
      <CheckboxGroup colorScheme="green" size="lg" defaultValue={props.values}>
        <Stack color="#747474" spacing="4">
          <Checkbox value="PickUp" onChange={handleUpdate}>
            Pick up / drop off
          </Checkbox>
          <Checkbox value="Supervision" onChange={handleUpdate}>
            Constant supervision
          </Checkbox>
          <Checkbox value="EmergeTransport" onChange={handleUpdate}>
            Emergency transport
          </Checkbox>
          <Checkbox value="OralMedication" onChange={handleUpdate}>
            I can administer oral medications
          </Checkbox>
          <Checkbox value="InjectedMedication" onChange={handleUpdate}>
            I can administer injected medications
          </Checkbox>
          <Checkbox value="FirstAid" onChange={handleUpdate}>
            First Aid and CPR for pets
          </Checkbox>
          <Checkbox value="Grooming" onChange={handleUpdate}>
            Grooming
          </Checkbox>
          <Checkbox value="DogTraining" onChange={handleUpdate}>
            Dog training
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </FormWrapper>
  );
};

export default AdditionalServicesForm;
