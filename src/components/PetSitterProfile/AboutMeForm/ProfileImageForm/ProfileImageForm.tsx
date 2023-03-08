import { Button, Stack, Text, Avatar, Flex } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";

const ProfileImageFrom = () => {
  return (
    <FormWrapper title={"Your profile photo"}>
      <Stack>
        <Text color="#4F4F4F" marginY="4">
          Please upload a passport style picture with a smile.
        </Text>
        <Flex alignItems="center">
          <Avatar size="xl" name="avatar" src="https://bit.ly/kent-c-dodds" />
          <Button
            bg="#00C38A"
            color="#ffffff"
            fontWeight="md"
            padding="2.5"
            width="50%"
            marginLeft="3rem"
            height="50px"
          >
            Edit photo
          </Button>
        </Flex>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileImageFrom;
