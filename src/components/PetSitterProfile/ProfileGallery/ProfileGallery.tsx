import { Input, useToast } from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { StyledText, StyledFormControl, StyledFormLabel } from "./StyledProfileGallery";
import { useState, useEffect } from "react";
import { useUploadMutation } from "../../../redux/imageApi";
import ProfileImages from "./ProfileImages/ProfileImages";
import Popup from "./Popup/Popup";

const ProfileGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [newImgBlob, setNewImgBlob] = useState<File | null>(null);
  const [upload, { isSuccess: isUploadSuccess, isError: isUploadError }] = useUploadMutation();
  const toast = useToast();
  const uploadSuccessId = "uploadSuccess";
  const uploadFailId = "uploadFail";

  useEffect(() => {
    if (isUploadSuccess) {
      toast({
        id: uploadSuccessId,
        title: "Image uploaded successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
      });
    }
    if (isUploadError) {
      toast({
        id: uploadFailId,
        title: "Image upload failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
      });
    }
  }, [isUploadSuccess, isUploadError]);

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
    <FormWrapper title="Profile gallery">
      <StyledText>
        Please include at least 5 pictures of yourself interacting with different domestic pets. If
        you offer services in your home, please add photos of where pets will stay.
      </StyledText>
      <StyledFormControl>
        <StyledFormLabel>Add photo</StyledFormLabel>
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
          newImgBlob={newImgBlob}
          setNewImgBlob={setNewImgBlob}
        />
      </StyledFormControl>
      <ProfileImages />
    </FormWrapper>
  );
};

export default ProfileGallery;
