import { Stack, Text, FormControl, FormLabel, Input } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const BankAccountForm = (props: any) => {
  return (
    <FormWrapper title="Payout information">
      <Stack spacing="4">
        <Text>Bank account</Text>
        <Text color="#747474">
          Please enter your bank account information so we can pay you for your bookings.
        </Text>
        <Text color="#747474">
          Please note: the bank account needs to be in the same name as the Pet Nanny account and
          the bank account needs to be in the same currency as the country of the Pet Nanny account.
        </Text>
        <FormControl>
          <FormLabel color="#9f8d8d" fontWeight="md">
            BSB
          </FormLabel>
          <Input
            defaultValue={props.values.bsb}
            name="bsb"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={props.handleChange}
          />
          {props.errors.bsb && props.touched.bsb ? (
            <Text color="red" fontSize="sm" padding="1">
              {props.errors.bsb}
            </Text>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel color="#9f8d8d" fontWeight="md">
            Account number
          </FormLabel>
          <Input
            defaultValue={props.values.accountNumber}
            name="accountNumber"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={props.handleChange}
          />
          {props.errors.accountNumber && props.touched.accountNumber ? (
            <Text color="red" fontSize="sm" padding="1">
              {props.errors.accountNumber}
            </Text>
          ) : null}
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default BankAccountForm;
