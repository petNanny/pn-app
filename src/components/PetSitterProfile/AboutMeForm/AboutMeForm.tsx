import { Flex } from "@chakra-ui/react";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileImageFrom from "./ProfileImageForm/ProfileImageForm";
import ProfileDeleteForm from "./ProfileDeleteForm/ProfileDeleteForm";

const AboutMeForm = () => {
  return (
    <Flex flexDirection="column" gap="8" width="100%">
      <ProfileInfoForm />
      <ProfileImageFrom />
      <ProfileDeleteForm />
    </Flex>
  );
};

export default AboutMeForm;
