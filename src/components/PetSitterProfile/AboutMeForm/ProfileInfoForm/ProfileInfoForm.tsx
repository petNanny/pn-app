import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import {
  useGetOnePetOwnerQuery,
  useUpdateOnePetOwnerMutation,
} from "../../../../redux/petOwnerApi";

const ProfileInfoForm = () => {
  // const [data:getPetOwner, { isSuccess: isDelSuccess, isError: isDelError, error: delerror }] =
  //   useGetOnePetOwnerQuery(0);

  // const [updatePetOwner, { isSuccess: isDelSuccess, isError: isDelError, error: delerror }] =
  //   useUpdateOnePetOwnerMutation();
  return (
    <FormWrapper title={"Your info"}>
      <Stack spacing="4">
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            First name
          </FormLabel>
          <Input name="firstName" height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            Last name
          </FormLabel>
          <Input name="lastName" height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            User name
          </FormLabel>
          <Input name="userName" height="50px" />
        </FormControl>
        <FormControl>
          <FormLabel color="#4F4F4F" fontWeight="md">
            Email
          </FormLabel>
          <Input name="email" height="50px" />
        </FormControl>
        <Button bg="#00C38A" color="#ffffff" fontWeight="md" padding="2.5" height="50px">
          Save
        </Button>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileInfoForm;
