import { useState } from "react";
import {
  Stack,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface IserviceRateDetail {
  id: number;
  serviceRateLabel: string;
  maxPrice: number;
  minPrice: number;
}

interface IExpandCheckBox {
  serviceTitle: string;
  serviceDesc: string;
  serviceRateDetails: IserviceRateDetail[];
}
const ExpandCheckBox = ({ serviceTitle, serviceDesc, serviceRateDetails }: IExpandCheckBox) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        size="lg"
        colorScheme="green"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      >
        <Flex flexDirection="column">
          <Text color="#747474">{serviceTitle}</Text>
          <Text color="#939393" fontSize="sm">
            {serviceDesc}
          </Text>
        </Flex>
      </Checkbox>

      {isChecked && (
        <form action="">
          <Stack spacing="4">
            {serviceRateDetails.map(
              ({ id, serviceRateLabel, maxPrice, minPrice }: IserviceRateDetail) => (
                <FormControl key={id}>
                  <FormLabel fontWeight="md" color="#939393">
                    {serviceRateLabel}
                  </FormLabel>
                  <NumberInput max={maxPrice} min={minPrice} focusBorderColor="#00C38A">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )
            )}
          </Stack>
        </form>
      )}
    </Stack>
  );
};

export default ExpandCheckBox;
