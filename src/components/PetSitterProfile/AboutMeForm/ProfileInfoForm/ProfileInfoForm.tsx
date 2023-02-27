import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const ProfileInfoForm = () => {
  return (
    <FormWrapper title={"Your info"}>
      <Stack spacing="4">
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            First name
          </FormLabel>
          <Input name="firstName" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            Last name
          </FormLabel>
          <Input name="lastName" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            User name
          </FormLabel>
          <Input name="userName" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            Email
          </FormLabel>
          <Input name="email" />
        </FormControl>
        <Button bg="#00C38A" color="#ffffff" fontWeight="md" padding="2.5">
          Save
        </Button>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileInfoForm;
