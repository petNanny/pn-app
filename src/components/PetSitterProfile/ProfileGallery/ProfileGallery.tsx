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
import { useRef, useState, useEffect } from "react";
import Popup from "./Popup/Popup";
import { UploadImageValues } from "../../../interfaces/uploadImage";
import {
  useUploadMutation,
  useDeleteMutation,
  useGetPetSitterImagesQuery,
} from "../../../redux/api/attachmentApi";
import { StyledModalFooter } from "./Popup/StyledPopup";
import ProfileImages from "./ProfileImages/ProfileImages";
import { useSelector } from "react-redux";

interface Image {
  _id: string;
  url: string;
  fileName: string;
  petSitterId: string;
}

const ProfileGallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [upload, { isLoading: isUploading, isSuccess: isUploadSuccess, isError: isUploadError }] =
    useUploadMutation();
  const [remove, { isSuccess: isRemoveSuccess, isError: isRemoveError }] = useDeleteMutation();
  const [getImages, setGetImages] = useState<Image[]>([]);
  const toast = useToast();

  const petOwner = useSelector((state: any) => state.petOwner);
  const {
    data,
    isLoading: isProfileImageLoading,
    refetch: refetchImages,
  } = useGetPetSitterImagesQuery(petOwner.petSitter._id);

  useEffect(() => {
    if (data !== undefined && data.images !== undefined) {
      setGetImages(data.images);
    } else {
      setGetImages([]);
    }
  }, [data, setGetImages]);

  console.log(getImages);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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

  const handleRemoveImg = async (e: any, fileName: string) => {
    e.preventDefault();
    const bodyData = {
      fileName: fileName,
    };
    await remove({ petOwnerId: petOwner._id, body: bodyData });
    refetchImages();
  };

  const { onClose } = useDisclosure();

  if (isProfileImageLoading) {
    return <Box>is loading</Box>;
  }

  const uploadSuccessId = "uploadSuccess";
  const uploadFailId = "uploadFail";
  const removeSuccessId = "removeSuccess";
  const removeFailId = "removeFail";

  isUploadSuccess &&
    !toast.isActive(uploadSuccessId) &&
    toast({
      id: uploadSuccessId,
      title: "Image uploaded successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });
  isUploadError &&
    !toast.isActive(uploadFailId) &&
    toast({
      id: uploadFailId,
      title: "Image upload failed",
      status: "error",
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });
  isRemoveSuccess &&
    !toast.isActive(removeSuccessId) &&
    toast({
      id: removeSuccessId,
      title: "Image removed successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });
  isRemoveError &&
    !toast.isActive(removeFailId) &&
    toast({
      id: removeFailId,
      title: "Image remove failed",
      status: "error",
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
    });

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
              <Button onClick={handlePopupClose}>Rotate</Button>
              <Button onClick={handleSubmit}>Complete</Button>
            </StyledModalFooter>
          </ModalContent>
        </Modal>
      </StyledFormControl>
      <Box marginTop="2rem" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem">
        {getImages.map((uploadedImg: { _id: string; url: string; fileName: string }) => (
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            border="1px solid rgb(206, 206, 206)"
            borderRadius="4px"
            backgroundColor="white"
            key={uploadedImg._id}
          >
            <Box
              padding="0.5rem"
              borderBottom="1px solid rgb(206, 206, 206)"
              borderRadius="4px 4px 0 0"
              backgroundColor="rgb(249, 249, 249)"
              width="100%"
              cursor="-web-grab"
            >
              move
            </Box>
            <Box padding="1rem">
              <Image
                src={uploadedImg.url}
                alt={uploadedImg.fileName}
                width="100%"
                height="300px"
                borderRadius="4px"
                objectFit="contain"
              />
              <Button
                marginLeft="auto"
                marginRight="auto"
                marginTop="1rem"
                width="100%"
                onClick={(e) => handleRemoveImg(e, uploadedImg.fileName)}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </FormWrapper>
  );
};

export default ProfileGallery;
