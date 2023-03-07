import { Stack, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";

const PaymentForm = () => {
  return (
    <FormWrapper title="Payout information">
      <Stack spacing="4">
        <Text>Bank account</Text>
        <Text color="#747474">
          Please enter your bank account information so we can pay you for your bookings.
        </Text>
        <Text color="#747474">
          Please note: the bank account needs to be in the same name as the Pawshake account and the
          bank account needs to be in the same currency as the country of the Pawshake account.
        </Text>
        <FormControl>
          <FormLabel color="##939393" fontWeight="md">
            BSB
          </FormLabel>
          <Input name="bsb" height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel color="#9f8d8d" fontWeight="md">
            Account number
          </FormLabel>
          <Input name="accountName" height="50px" />
        </FormControl>
        <Button bg="#00C38A" color="#ffffff" padding="2.5" height="50px">
          Save
        </Button>
      </Stack>
    </FormWrapper>
  );
};

export default PaymentForm;
