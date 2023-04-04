import { FormControl, Input, Stack, Text } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const HeadLineForm = (props: any) => {
  return (
    <FormWrapper title={"Headline"}>
      <Stack>
        <Text color="#4F4F4F" marginBottom="4">
          Write an eye-catching headline. Make it short, descriptive, and genuine.
        </Text>
        <FormControl>
          <Input
            name="introduction"
            value={props.values}
            onChange={props.handleChange}
            marginBottom="4"
            height="50px"
            focusBorderColor="#00C38A"
          />
        </FormControl>
      </Stack>
    </FormWrapper>
  );
};

export default HeadLineForm;
