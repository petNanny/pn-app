import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Text,
  Box,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { createRef } from "react";
import { useUploadMutation, useUserGetOwnImagesQuery } from "../../../../redux/imageApi";
import { StyledModalFooter } from "./StyledPopup";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

interface PopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  croppedImage: string | undefined;
  newImgBlob: File | null;
  setNewImgBlob: React.Dispatch<React.SetStateAction<File | null>>;
}

const Popup = ({ open, setOpen, croppedImage, newImgBlob, setNewImgBlob }: PopupProps) => {
  const [upload] = useUploadMutation();
  const toast = useToast();
  const petOwner = useSelector((state: any) => state.petOwner);
  const { refetch: refetchImages } = useUserGetOwnImagesQuery(petOwner._id);
  const cropperRef = createRef<ReactCropperElement>();
  const fileName = uuid().slice(0, 16);
  const { onClose } = useDisclosure();
  const uploadSuccessId = "uploadSuccess";
  const uploadFailId = "uploadFail";

  const handlePopupClose = () => {
    setOpen(false);
  };

  const handCropperEnd = () => {
    if (cropperRef.current?.cropper) {
      const croppedCanvas = cropperRef.current?.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        croppedCanvas.toBlob((blob) => {
          if (blob !== null) {
            const file = new File([blob], fileName, { type: "image/jpeg" });
            setNewImgBlob(file);
          }
        }, "image/jpeg");
      }
    }
  };

  const handleImageSubmit = async () => {
    setOpen(false);
    if (!newImgBlob) {
      alert("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", newImgBlob);

    await upload({ petOwnerId: petOwner._id, body: formData })
      .unwrap()
      .then(() => {
        if (!toast.isActive(uploadSuccessId)) {
          toast({
            id: uploadSuccessId,
            title: "Image uploaded successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
          });
        }
      })
      .catch((err) => {
        if (!toast.isActive(uploadFailId)) {
          toast({
            id: uploadFailId,
            title: "Image upload failed",
            description: err.data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
            containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
          });
        }
      });
    refetchImages();
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={open} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="space-between">
            <Text>Upload image</Text>
            <CloseButton onClick={handlePopupClose} />
          </ModalHeader>
          <ModalBody>
            <Box>
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
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
                cropend={handCropperEnd}
              />
            </Box>
          </ModalBody>
          <StyledModalFooter>
            <Button onClick={handleImageSubmit}>Complete</Button>
          </StyledModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
