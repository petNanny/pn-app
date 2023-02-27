import { Stack, Button } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const ProfileDeleteForm = () => {
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
