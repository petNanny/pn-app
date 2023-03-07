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
} from "@chakra-ui/react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { StyledText, StyledFormControl, StyledFormLabel } from "./StyledProfileGallery";
import Cropper, { ReactCropperProps } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useState } from "react";
import Popup from "./Popup/Popup";
import { useFormik, FormikProps } from "formik";
import { UploadImageValues } from "../../../interfaces/uploadImage";
import { useUploadMutation } from "../../../redux/api/attachmentApi";
import { StyledModalFooter } from "./Popup/StyledPopup";

const ProfileGallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(undefined);
  const [upload, { isLoading }] = useUploadMutation();
  // const [file, setFile] = useState<File | null>(null);
  // const [cropper, setCropper] = useState<any>();

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
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);

    await upload({ petSitterId: "63fff61fecf3348feb78eaf3", body: formData });
  };

  const { onClose } = useDisclosure();

  return (
    <FormWrapper title="Profile gallery">
      <StyledText>
        Please include at least 5 pictures of yourself interacting with different domestic pets. If
        you offer services in your home, please add photos of where pets will stay.
      </StyledText>
      <form>
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
      </form>
    </FormWrapper>
  );
};

export default ProfileGallery;
