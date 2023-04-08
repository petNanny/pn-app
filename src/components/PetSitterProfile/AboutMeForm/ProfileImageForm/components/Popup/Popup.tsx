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
} from "@chakra-ui/react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { createRef } from "react";
import { StyledModalFooter } from "./styledPopup";
import { v4 as uuid } from "uuid";

interface PopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  croppedImage: string | undefined;
  setNewImgBlob: React.Dispatch<React.SetStateAction<File | null>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const Popup = ({
  open,
  setOpen,
  croppedImage,
  setNewImgBlob,
  setImage,
  handleSubmit,
}: PopupProps) => {
  const cropperRef = createRef<ReactCropperElement>();
  const fileName = uuid().slice(0, 16);
  const { onClose } = useDisclosure();

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

  const handleImageSubmit = () => {
    setOpen(false);
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const img = cropper?.getCroppedCanvas().toDataURL();
    setImage(img as string);
    handleSubmit();
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
