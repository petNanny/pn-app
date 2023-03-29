import { FormControl, FormLabel, Select, Stack, Text, Divider } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const CancellationPolicyForm = (props: any) => {
  return (
    <FormWrapper title="Cancellation policy">
      <FormControl>
        <FormLabel fontWeight="md" color="#747474">
          Cancellation policy
        </FormLabel>
        <Select
          color="#747474"
          height="50px"
          name="policy"
          focusBorderColor="#00C38A"
          value={props.values}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        >
          <option value="Flexible">Flexible</option>
          <option value="Moderate">Moderate</option>
        </Select>
      </FormControl>

      <Stack spacing="4" marginTop="4">
        <Text color="#747474">
          Full refund if canceled before 12:00 p.m. one day before the booking, 50% refund
          afterward.
        </Text>
        <Text color="#747474">
          No refund is payable if the booking is canceled on or after the start date.
        </Text>
        <Divider />
        <Text fontSize="sm" color="#939393">
          Note: All times are based on the sitter’s time zone
        </Text>
      </Stack>
    </FormWrapper>
  );
};

export default CancellationPolicyForm;
