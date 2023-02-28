import { Checkbox, Stack, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const WalkingArea = () => {
  return (
    <FormWrapper title="Walking areas">
      <Stack>
        <Checkbox size="lg" color="#747474">
          Nearby off-leash area
        </Checkbox>
        <Text color="#939393" fontSize="sm">
          Walking area types
        </Text>
        <Checkbox size="lg" color="#747474">
          Urban
        </Checkbox>
        <Checkbox size="lg" color="#747474">
          Beach
        </Checkbox>
        <Checkbox size="lg" color="#747474">
          City park
        </Checkbox>
        <Checkbox size="lg" color="#747474">
          Country side
        </Checkbox>
        <Checkbox size="lg" color="#747474">
          Forest
        </Checkbox>
      </Stack>
    </FormWrapper>
  );
};

export default WalkingArea;
