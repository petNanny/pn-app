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
  serviceRateField: string;
  maxPrice: number;
  minPrice: number;
}

interface IExpandCheckBox {
  serviceTitle: string;
  serviceDesc: string;
  serviceRateDetails: IserviceRateDetail[];
  onChange: (updatedValues: any) => void;
  values: any;
}
const ExpandCheckBox = ({
  serviceTitle,
  serviceDesc,
  serviceRateDetails,
  onChange,
  values,
}: IExpandCheckBox) => {
  const [isChecked, setIsChecked] = useState(values?.isActive ?? false);

  const handleUpdate = (field: string, value: boolean | number) => {
    onChange({
      ...values,
      service: serviceTitle,
      [field]: value,
    });
  };

  return (
    <Stack>
      <Checkbox
        size="lg"
        colorScheme="green"
        isChecked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          handleUpdate("isActive", !isChecked);
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
        <Stack spacing="4">
          {serviceRateDetails.map(
            ({
              id,
              serviceRateLabel,
              serviceRateField,
              maxPrice,
              minPrice,
            }: IserviceRateDetail) => (
              <FormControl key={id}>
                <FormLabel fontWeight="md" color="#939393">
                  {serviceRateLabel}
                </FormLabel>
                <NumberInput
                  max={maxPrice}
                  min={minPrice}
                  focusBorderColor="#00C38A"
                  value={values[serviceRateField]}
                  onChange={(valueAsString) => {
                    handleUpdate(serviceRateField, Number(valueAsString));
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {/* {errors.serviceRateField && touched.serviceRateField ? (
                  <Text color="red" fontSize="sm" padding="1">
                    {errors.serviceRateField}
                  </Text>
                ) : null} */}
              </FormControl>
            )
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default ExpandCheckBox;
