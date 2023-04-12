import { CheckboxGroup, Checkbox, Stack, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const WalkingArea = (props: any) => {
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.values.includes(event.target.value)) {
      props.setFieldValue(
        "WalkingAreas",
        props.values.filter((area: string) => area !== event.target.value)
      );
    } else {
      props.setFieldValue("WalkingAreas", [...props.values, event.target.value]);
    }
  };
  return (
    <FormWrapper title="Walking areas">
      <CheckboxGroup colorScheme="green" size="lg" defaultValue={props.values}>
        <Stack>
          <Checkbox value="Nearby Off-Leash Area" color="#747474" onChange={handleUpdate}>
            Nearby off-leash area
          </Checkbox>
          <Text color="#939393" fontSize="sm">
            Walking area types
          </Text>
          <Checkbox value="Urban" color="#747474" onChange={handleUpdate}>
            Urban
          </Checkbox>
          <Checkbox value="Beach" color="#747474" onChange={handleUpdate}>
            Beach
          </Checkbox>
          <Checkbox value="City park" color="#747474" onChange={handleUpdate}>
            City park
          </Checkbox>
          <Checkbox value="Country side" color="#747474" onChange={handleUpdate}>
            Country side
          </Checkbox>
          <Checkbox value="Forest" color="#747474" onChange={handleUpdate}>
            Forest
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </FormWrapper>
  );
};

export default WalkingArea;
