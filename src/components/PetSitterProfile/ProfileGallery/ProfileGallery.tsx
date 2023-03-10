import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Stack,
  CloseButton,
  Image,
  useToast,
} from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { StyledText, StyledFormControl, StyledFormLabel } from "./StyledProfileGallery";
import Cropper, { ReactCropperProps } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef, useState, useEffect, useCallback } from "react";
import Popup from "./Popup/Popup";
import { UploadImageValues } from "../../../interfaces/uploadImage";
import { useUploadMutation, useUserGetOwnImagesQuery } from "../../../redux/imageApi";
import { StyledModalFooter } from "./Popup/StyledPopup";
import ProfileImages from "./ProfileImages/ProfileImages";
import { useSelector } from "react-redux";
import { ProfileGalleryImageValues } from "../../../interfaces/profileGalleryImage";

const ProfileGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [upload, { isLoading: isUploading, isSuccess: isUploadSuccess, isError: isUploadError }] =
    useUploadMutation();
  const toast = useToast();

  const petOwner = useSelector((state: any) => state.petOwner);
  const { isLoading: isProfileImageLoading, refetch: refetchImages } = useUserGetOwnImagesQuery(
    petOwner._id
  );

  const handlePopupClose = () => {
    setOpen(false);
  };

  const onInputChange = (e: any) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
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

  const handleImageSubmit = async () => {
    setOpen(false);
    if (!image) {
      alert("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);

    await upload({ petOwnerId: petOwner._id, body: formData });
    refetchImages();
  };

  const { onClose } = useDisclosure();

  if (isProfileImageLoading) {
    return <Box>is loading</Box>;
  }

  // const uploadSuccessId = "uploadSuccess";
  // const uploadFailId = "uploadFail";

  // useEffect(() => {
  //   if (isUploadSuccess) {
  //     toast({
  //       id: uploadSuccessId,
  //       title: "Image uploaded successfully",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //       containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
  //     });
  //   }
  // }, [isUploadSuccess, toast]);

  // isUploadSuccess &&
  //   !toast.isActive(uploadSuccessId) &&
  //   toast({
  //     id: uploadSuccessId,
  //     title: "Image uploaded successfully",
  //     status: "success",
  //     duration: 3000,
  //     isClosable: true,
  //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
  //   });
  // isUploadError &&
  //   !toast.isActive(uploadFailId) &&
  //   toast({
  //     id: uploadFailId,
  //     title: "Image upload failed",
  //     status: "error",
  //     duration: 3000,
  //     isClosable: true,
  //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
  //   });

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
        {/* <Popup open={open} handlePopupClose={handlePopupClose} croppedImage={croppedImage} /> */}
        <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={open} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader display="flex" justifyContent="space-between">
              <Text>Upload image</Text>
              <CloseButton onClick={handlePopupClose} />
            </ModalHeader>
            <ModalBody>
              <Box maxW="400px">
                <Cropper
                  style={{ width: "100%" }}
                  preview=".img-preview"
                  src={croppedImage}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false}
                  guides={true}
                  rotatable
                />
              </Box>
            </ModalBody>
            <StyledModalFooter>
              {/* <Button onClick={handlePopupClose}>Rotate</Button> */}
              <Button onClick={handleImageSubmit}>Complete</Button>
            </StyledModalFooter>
          </ModalContent>
        </Modal>
      </StyledFormControl>
      <ProfileImages />
    </FormWrapper>
  );
};

export default ProfileGallery;
