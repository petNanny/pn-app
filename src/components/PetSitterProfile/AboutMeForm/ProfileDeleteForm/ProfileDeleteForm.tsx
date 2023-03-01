import { Stack, Button } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { useDeleteOnePetOwnerMutation } from "../../../../redux/petOwnerApi";
const ProfileDeleteForm = () => {
  const [deleteUser, { isSuccess: isDelSuccess, isError: isDelError, error: delerror }] =
    useDeleteOnePetOwnerMutation();

  console.log(deleteUser);
  return (
    <FormWrapper title={"Remove account"}>
      <Stack>
        <Button bg="#EB4C52" color="#ffffff" fontWeight="md" padding="2.5">
          Delete my profile
        </Button>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileDeleteForm;
