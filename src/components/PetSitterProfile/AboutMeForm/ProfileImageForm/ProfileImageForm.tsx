import { Stack, Text, Avatar, Flex, Input, FormControl, useToast } from "@chakra-ui/react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import {
  useGetOnePetOwnerQuery,
  useUploadPetOwnerAvatarMutation,
} from "../../../../redux/petOwnerApi";
import { useParams } from "react-router-dom";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import { StyledFormLabel } from "./styledProfileImageForm";
import { useFormik } from "formik";

const ProfileImageFrom = () => {
  const { id } = useParams();
  const { data: petOwnerData, refetch: refetchPetOwner } = useGetOnePetOwnerQuery(id);
  const [uploadAvatar] = useUploadPetOwnerAvatarMutation();
  const toast = useToast();

  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<string>(petOwnerData.avatar);
  const [open, setOpen] = useState(false);
  const [newImgBlob, setNewImgBlob] = useState<File | null>(null);

  console.log("petOwnerData.avatar", petOwnerData.avatar);
  console.log("image", image);

  const { handleSubmit } = useFormik({
    initialValues: {
      avatar: petOwnerData.avatar,
    },
    onSubmit: async () => {
      const formData = new FormData();
      if (newImgBlob) {
        formData.append("avatar", newImgBlob);
      }
      setOpen(false);
      try {
        await uploadAvatar({
          petOwnerId: id,
          body: formData,
        }).unwrap();
        toast({
          title: "upload avatar successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        refetchPetOwner();
        window.scrollTo(0, 0);
      } catch (error) {
        toast({
          title: "Update avatar failed.",
          status: "error",
          duration: 5000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
    },
  });

  const onInputChange = (e: any) => {
    if (e.target.files) {
      setNewImgBlob(e.target.files[0]);
    }
    const selectedImg = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCroppedImage(reader.result as any);
    };
    reader.readAsDataURL(selectedImg);
    setOpen(true);
  };

  const handleInputClick = (e: any) => {
    e.currentTarget.value = null;
  };

  return (
    <FormWrapper title={"Your profile photo"}>
      <Stack>
        <Text color="#4F4F4F" marginY="4">
          Please upload a passport style picture with a smile.
        </Text>
        <form>
          <FormControl>
            <Flex alignItems="center">
              <Avatar size="xl" src={image} />
              <StyledFormLabel>Edit photo</StyledFormLabel>
              <Input
                type="file"
                display="none"
                accept="image/*"
                onChange={onInputChange}
                onClick={handleInputClick}
              />
              <Popup
                open={open}
                setOpen={setOpen}
                croppedImage={croppedImage}
                setNewImgBlob={setNewImgBlob}
                setImage={setImage}
                handleSubmit={handleSubmit}
              />
            </Flex>
          </FormControl>
        </form>
      </Stack>
    </FormWrapper>
  );
};

export default ProfileImageFrom;
