import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const AbnForm = (props: any) => {
  return (
    <FormWrapper title="ABN information">
      <FormControl>
        <FormLabel color="#9f8d8d" fontWeight="md">
          ABN
        </FormLabel>
        <Input
          defaultValue={props.values}
          name="abn"
          height="50px"
          focusBorderColor="#00C38A"
          onChange={props.handleChange}
        />
        {props.errors.abn && props.touched.abn ? (
          <Text color="red" fontSize="sm" padding="1">
            {props.errors.abn}
          </Text>
        ) : null}
      </FormControl>
    </FormWrapper>
  );
};

export default AbnForm;
